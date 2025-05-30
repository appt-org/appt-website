import os
import re

## Naive script to update SEO descriptions for WCAG pages, mostly generated by ChatGPT.

# Path to the wcag folder
script_dir = os.path.dirname(os.path.realpath(__file__))
folders = [
    script_dir + "/guidelines/wcag",
    script_dir + "/i18n/nl/docusaurus-plugin-content-docs-guidelines/current/wcag"
]

def extract_hero_attributes(content):
    """Extract prefix, title, and suffix attributes from the Hero component."""
    prefix_match = re.search(r'prefix="([^"]+)"', content)
    title_match = re.search(r'title="([^"]+)"', content)
    suffix_match = re.search(r'suffix="([^"]+)"', content)

    prefix = prefix_match.group(1) if prefix_match else ""
    title = title_match.group(1) if title_match else ""
    suffix = suffix_match.group(1) if suffix_match else ""

    return prefix, title, suffix

def extract_first_paragraph(content):
    """Extract the first meaningful paragraph after the Hero component."""
    # Find the end of the Hero component
    hero_end = re.search(r'<Hero[^>]*\s*/>', content, re.DOTALL)
    if hero_end:
        text_after_hero = content[hero_end.end():].strip()

        # Split the text into lines
        lines = text_after_hero.split('\n')
        paragraph = next((line.strip() for line in lines if line.strip()), None)

        if paragraph:
            # Trim the paragraph if it ends with a colon (Frontmatter exception)
            if paragraph.endswith(':'):
                paragraph = paragraph[:-1].strip()
                paragraph += '.'

            return paragraph
        else:
            raise ValueError("No meaningful paragraph found after Hero component.")

    return None

def update_frontmatter_with_regex(content):
    """Update the Frontmatter directly using regex."""
    frontmatter_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not frontmatter_match:
        print("No Frontmatter found.")
        return content

    frontmatter = frontmatter_match.group(1)
    body = content[frontmatter_match.end():]

    # Extract Hero attributes
    prefix, hero_title, suffix = extract_hero_attributes(content)
    new_title = f"{prefix} - {hero_title} - {suffix}".strip(' - ')

    # Extract description
    new_description = extract_first_paragraph(content)

    # Update Frontmatter
    if new_title and new_description:
        updated_frontmatter = re.sub(
            r'(?m)^(title:\s*).*$',  # Match only the `title` line
            f"title: {new_title}",
            frontmatter
        )

        updated_frontmatter = re.sub(
            r'(?m)^(description:\s*).*$',  # Match only the `description` line
            f"description: {new_description}",
            updated_frontmatter
        )

        updated_frontmatter = re.sub(
            r'(?m)^last_update:\s*\n\s*date:\s*\d{4}-\d{2}-\d{2}$',  # Match last_update date
            "last_update:\n  date: 2024-12-18",
            updated_frontmatter
        )

        return f"---\n{updated_frontmatter}\n---\n{body}"

    return None

def process_file(file_path):
    """Process and update a single index.mdx file."""
    with open(file_path, 'r') as file:
        content = file.read()

    updated_content = update_frontmatter_with_regex(content)
    if updated_content:
      with open(file_path, 'w') as file:
          file.write(updated_content)

    print(f"Updated {file_path}")

def main():
    """Update all index.mdx files in the wcag folder."""
    for folder in folders:
      for root, _, files in os.walk(folder):
          for file in files:
              if file == 'index.mdx':
                  file_path = os.path.join(root, file)
                  process_file(file_path)

if __name__ == "__main__":
    main()

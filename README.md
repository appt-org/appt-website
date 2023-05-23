# Appt + Docusaurus

This is a sample project to test [Docusaurus](https://docusaurus.io/docs)

Run project from root: `npx docusaurus start`

## Code sample pages

I created a `samples` folder with all code samples from the [Appt code samples repo](https://github.com/appt-org/accessibility-code-examples). Docusaurus automatically [generates pages](http://localhost:3000/docs/category/samples), similar to an appt.org code sample page.

Comparison: [Appt.org accessibility label](https://appt.org/en/docs/android/samples/accessibility-label) vs [Docusaurus accessibility label](http://localhost:3000/docs/samples/accessibility-label)

## Multi-platform code blocks

What surprised me is that Docusaurus has built-in support for multi-platform code samples with React  components: `Tabs` + `TabItem`.

See example [accessibility-label-multiplatform.mdx](./docs/samples/accessibility-label-multiplatform.mdx)

## Contribute

All files are hosted on Github, therefore visitors can easily contribute through a Pull Request.

## Search

Docusaurus has built-in support for Algolia DocSearch.

## Re-using content

With a CMS it's easier to re-use content, e.g. code samples. It is possible to re-use content when using Markdown/Docusaurus. For example, you can use JSON or parse Markdown.

### Code samples 

For code samples, we could use a folder named `code-samples` and use the file names as index.

We could then create a `CodeSample` component, that has an `id` parameter. 

To insert `accessibility-label` for all platforms:

```jsx
<CodeSample id="accessibility-label"/>
```

To insert `accessibility-label` for a single platform:

```jsx
<CodeSample id="accessibility-label" platform="android"/>
```

### Stats

For stats, I think we could use a `.json` file containing all stats. This `.json` file could be pushed from the Q42 back-end, instead of pushing data into Contentful.

Simplified example:

```json
{
  "dark-mode": {
    "percentage": 50,
  },
  "font-size: {
    "percentage": 50,
  }
}
```

## Managing content

Markdown definitely has major downsides compared to a CMS when it comes to managing content.

Markdown is more technical. Perhaps some visitors do not know how it works and will not contribute knowledge.

But... Contentful is also a new system to learn. And it might be more complex compard to having a single `.md` file to write a blog post.

With the amount of content on appt.org, it will be challenging to manage all of this using plain files.

However, in my opinion Contentful has downsides too. You have to filter through many types of content, and sometimes have to click through many layers to get to the actual resource.

## Conclusion

Well.. there is no clear winner. Looking forward to discuss the future stack of appt.org.
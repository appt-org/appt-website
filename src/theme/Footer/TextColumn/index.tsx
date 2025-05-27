import Translate, { translate } from '@docusaurus/Translate';
import { CustomLink, Typography } from '@site/src/components';

export default function TextColumn() {
  const numberOfListItems = 2;
  return (
    <>
      <Typography tag="p" className="my-4">
        <Translate
          id="footer.text.intro"
          values={{
            aboutLink: (
              <CustomLink
                className="underline text-accent hover:no-underline inline-flex items-center font-normal"
                url={translate({ id: 'footer.text.intro.linkUrl' })}
                label={translate({ id: 'footer.text.intro.linkLabel' })}
              />
            ),
          }}
        />
      </Typography>
      <ul className="list-disc ml-7">
        {Array.from(Array(numberOfListItems), (e, i) => {
          return (
            <li key={i}>
              <Typography tag="p" className="my-4">
                <Translate
                  id={`footer.text.listItem${i}`}
                  values={{
                    link: (
                      <CustomLink
                        className="underline text-accent hover:no-underline inline-flex items-center font-normal"
                        url={translate({ id: `footer.text.listItem${i}.linkUrl` })}
                        label={translate({ id: `footer.text.listItem${i}.linkLabel` })}
                      />
                    ),
                  }}
                />
              </Typography>
            </li>
          );
        })}
      </ul>
    </>
  );
}

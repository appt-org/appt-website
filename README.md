# Appt.org

*Source code of appt.org*

![Build Status](https://github.com/appt-org/appt-website/actions/workflows/firebase-hosting-push-acc.yml/badge.svg)
![Build Status](https://github.com/appt-org/appt-website/actions/workflows/firebase-hosting-push-prod.yml/badge.svg)

**What is Appt?**

The Appt® platform is an initiative of the Appt Foundation, a non-profit organization. Our mission is to make apps accessible for everyone. We try to achieve this by sharing free knowledge and open-source code. Appt.org is a website that empowers developers and organizations to build accessible apps for everyone.

<details>
<summary>Table of contents</summary>

- [Stack](#stack)
- [Local development](#local-development)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
- [Environments](#environments)
  - [Acceptance](#acceptance)
  - [Production](#production)
- [Commit conventions](#commit-conventions)
- [Generated stats](#generated-stats)
- [Multi-platform code samples](#multi-platform-code-samples)
- [Accessibility](#accessibility)
  - [Font scaling and using REM](#font-scaling-and-using-rem)
    - [Don't](#dont)
    - [Do](#do)
- [License](#license)
</details>

## Stack

- [Docusaurus](https://docusaurus.io/)
- Typescript
- Tailwind CSS
- Firebase

## Local development

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
$ nvm use && npm i
```

### Development

Appt.org is available in two languages right now, you can start developing by running one of the two locales.

```bash
$ npm run start
```

This command starts a local development server using the default locale (English) and opens up a browser window. Most changes are reflected live without having to restart the server.
For Dutch content, run the following command:

```bash
$ npm run start:nl
```

### Build

For each environment we have a build command that builds both languages. To build the environment you need to add an `.env` file for that environment, see `.env.example`. For dev add `.env`, for acc add `.env.acceptance` and for prod add `.env.production`.

```bash
$ npm run build:dev
```
```
$ npm run build:acc
```
```
$ npm run build:prod
```

This command generates static content into the `build` directory and can be served the following command:

```bash
$ npm run serve
```

## Environments

A new version will be automatically deployed to Firebase with commits on specific branches, outlined below.

### Acceptance

- **URL**: https://appt-org-acc.web.app
- **Branch**: develop

### Production

- **URL**: https://appt.org
- **Branch**: main

## Commit conventions

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) to write clear and readable commit
messages.

## Generated stats

To show our stat blocks we use data from the [Accessibility Data Pipeline](https://github.com/Q42/accessibility-data-pipeline). Every night a Github workflow will check if there is any new data and if there is push it to main in the `/src/data/generated/data-features` folder. We can show this data in the website by using a `PercentageBlock` in `.mdx` files. The numbers will automatically update when they have changed.

```jsx
<PercentageBlock metrics={[{ title: '[Title of your metrix]', key: '[Key of the metric, for example: android-preference_daytime-night]', isPercentage: true/false }]}>
    [Text to be shown in the block]
</PercentageBlock>
```

## Multi-platform code samples

Our code samples are located in the `src/data/code-samples/` folder.

Each code sample has it's own folder, e.g. `accessibility-label`. The folder should include a `README.md` briefly explaining it's purpose.

It should also include at least one of the following files:

- `android.md`: Android code sample
- `flutter.md`: Flutter code sample
- `ios.md`: iOS code sample
- `net-maui.md`: .NET MAUI code sample
- `react-native.md`: React Native code sample
- `xamarin.md`: Xamarin code sample

You can embed a code sample in `.mdx` files as follows:

```jsx
<CodeSample id="accessibility-label">
```

Optionally, the `platform` parameter can be used to only display a code sample for a specific platform, such as `android.

```jsx
<CodeSample id="accessibility-label" platform="android">
```

## Accessibility

### Font scaling and using REM

To make sure users that change their default font-size in the browser are still able to use Appt we make sure we support
font scaling.

#### Don't

- Don't use fixed widths or heights on components, so the containers can grow with the font size.
- Don't use a fixed width and height on svg's.
- Don't use REM for line heights, this will result in mega line heights on Safari.

#### Do

- Use the viewBox on svg's with a width and height class in REM's.
- Use REM's for font sizes, paddings, margins, media queries and images that should grow when the text grows, for
  example logo's.

*Note: We decided to not use `font: -apple-system-body;` for scaling text on mobile iOS devices. You can already set a
default zoom level in the Safari preferences. We assume that people have this turned on. If we also turn on font scaling
on iOS, users suddenly get an extra large font.*

## License

The source code is available under the MIT license. See the [LICENSE file](./LICENSE) for more information.

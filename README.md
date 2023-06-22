## Integrating PandaCSS with Meteor

[PandaCSS](https://panda-css.com/) is a CSS-in-JS with build time generated styles, RSC compatible,
multi-variant support, and best-in-class developer experience.


### Installation

Have PandaCSS be running in your project by running the following command in your terminal:

```bash
npm run prepare
```

or just:  

```bash
npx panda --watch
```

Make sure to have Meteor CLI [installed](https://docs.meteor.com/install.html).
Then, run the following command in your terminal:

```bash
meteor npm start
```

this runs the following command:

```bash

meteor run --exclude-archs web.browser.legacy,web.cordova

```

Code is in `imports/ui/App.tsx`.
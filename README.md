# material-ui-background

> A background react element based on material-ui.

[![Build Status](https://travis-ci.org/appsemble/material-ui-background.svg?branch=master)](https://travis-ci.org/appsemble/material-ui-background)


## Installation

Install `material-ui-background`.

```sh
npm install material-ui-background
```

Then install its peer dependencies, if you haven't already:

```sh
npm install react material-ui
```


## Usage

Provide a background color through the `MuiThemeProvider`. Then use the `Background` component as a generic background for your app.

```jsx
import { getMuiTheme, lightBaseTheme, MuiThemeProvider } from 'material-ui/styles';
import Background, { appendMuiBackground, dark, light } from 'material-ui-background';
import React from 'react';
import { render } from 'react-dom';


const color = light; // or dark


render(
  <MuiThemeProvider theme={appendMuiBackground(getMuiTheme(lightBaseTheme), color)}>
    <Background />
  </MuiThemeProvider>,
  document.getElementById('root'),
)
```


## License

MIT

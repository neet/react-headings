<img src="https://github.com/alexnault/react-headings/raw/master/assets/react-headings.png" width="100%" alt="React Headings" />

# React Headings ![npm](https://img.shields.io/npm/v/react-headings?style=flat-square) ![size](https://img.shields.io/bundlephobia/minzip/react-headings?style=flat-square)

> Never worry about using the wrong heading level (`h1`, `h2`, etc.) in complex React apps!

React-headings maintains the current heading level and prevents skipping levels no matter your component structure, [as required by WCAG](https://www.w3.org/WAI/tutorials/page-structure/headings/).

## Basic usage

```jsx
import React from "react";
import { H, Level } from "react-headings";

function ParentComponent() {
  return (
    <div>
      <H>My heading (hx)</H>
      <Level>
        <H>My subheading (hx+1)</H>
        <p>...</p>
        <H>My subheading (hx+1)</H>
        <Level>
          <H>My subsubheading (hx+2)</H>
          <p>...</p>
          <ChildComponent />
        </Level>
      </Level>
    </div>
  );
}

function ChildComponent() {
  return (
    <div>
      <H>My heading (hy)</H>
      <Level>
        <H>My subheading (hy+1)</H>
        <p>...</p>
      </Level>
    </div>
  )
}
```

## Highlights

- Flexible (no component lock-in)
- Focused on developer experience
- Typed with TypeScript
- Works with component libraries (Material UI, etc.)
- Fully tested
- Zero dependencies
- Tiny (<1 kB minified + gzipped)
- Follows [semantic versioning](https://semver.org/)

## Installation

```bash
npm install react-headings
# or
yarn add react-headings
```

## Examples

### Custom component

You can render custom headings anywhere by using either the `H` component or the `useHeadings` hook.

- With the `H` component:

```jsx
import React from "react";
import { H, Level } from "react-headings";

function App() {
  return (
    <H
      render={({ Component, level }) => (
        <Component>This is a h{level}</Component>
      )}
    />
  );
}
```

*Note: `render` as precedence over `children`.*

- With the `useHeadings` hook:

```jsx
import React from "react";
import { useHeadings } from "react-headings";

function App() {
  const { Component, level } = useHeadings();

  return <Typography component={Component}>This is a h{level}</Typography>;
}
```

### Using component librairies

Here's an example with [Material UI](https://material-ui.com/api/typography/):

```jsx
import React from "react";
import { useHeadings } from "react-headings";
import { Typography } from "@material-ui/core";

function MyHeading(props) {
  const { Component } = useHeadings();

  return <Typography component={Component} {...props} />;
}
```

Leveraging `Component` and `level` from the context should make implementing other librairies pretty straightforward.

## Changelog

For a list of changes and releases, see the [changelog](https://github.com/alexnault/react-headings/releases).

## Contributing

Found a bug, have a question or looking to improve react-headings? Open an [issue](https://github.com/alexnault/react-headings/issues/new) or a [PR](https://github.com/alexnault/react-headings/fork)!

## License

This project is under the [MIT license](/LICENSE).

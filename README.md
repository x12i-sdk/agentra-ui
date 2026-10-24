# @x12i/agentra-ui usage example

Prototype React contracts for Agentra dashboards, widgets and query builders. In the reviewed 0.1.0 release, those exported components return null and require implementation before they provide usable screens.

This consuming application demonstrates **detect the published widget placeholder and render a host fallback** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Build a host integration against the declared widget and dashboard properties while tracking the missing rendering implementation.
- Detect the placeholder output and show an explicit host fallback until a working component release is available.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/agentra-ui)
- [Implementation monorepo](https://github.com/x12i/agentra)
- [Reviewed package source](https://github.com/x12i/agentra/tree/772e50e64925e6359e42172d4dcf11d4aa795763/packages/ui)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.

## Published placeholder

WidgetRenderer in 0.1.0 returns null. This example verifies that limitation and supplies an explicit host-owned fallback. A passing check does not mean the package renders a working analytics widget. DashboardRenderer and QueryBuilder are also declared as returning null in the pinned release. Implementing these components is tracked in the catalog backlog.

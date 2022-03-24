# Demo for failing schema generation using @graphql-codegen/cli with Yarn 3 workspaces

This is a minimal example for the Discussion which was first stated [here](https://github.com/dotansimha/graphql-code-generator/discussions/7685).

> When using Yarn 3 workspaces and `@graphql-codegen/cli`, the plugin `schema-ast` can't be found.

For reproducing the error run:

```
yarn run:script tools/scripts/src/test.ts
```

in the terminal.

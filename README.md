# Reproduction of knip issue marking graphql files as unused

When a project provides a graphql compiler to knip, it should detect unused
graphql files. However if the project has an associated `.graphql.d.ts` file
for each `.graphql` file, then the `.graphql` files will be reported unused.

This repo sets up an example, it has 4 relevant files:

```
src/ExampleQuery.graphql
src/ExampleQuery.graphql.d.ts
src/UnusedQuery.graphql
src/UnusedQuery.graphql.d.ts
```

The `ExampleQuery.graphql` file is imported, and the `UnusedQuery.graphql` file
is not. We should expect then that only the `UnusedQuery.graphql` file is
reported, but both are.

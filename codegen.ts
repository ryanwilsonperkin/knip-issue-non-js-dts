
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.gql",
  documents: "src/**/*.graphql",
  generates: {
    "src/types.ts": {
      plugins: ['typescript'],
    },
    "src/": {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.graphql.d.ts',
        baseTypesPath: 'types.ts',
      },
      plugins: ['typescript-operations'],
    }
  }
};

export default config;

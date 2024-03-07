import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./libs/graphql-lib/src/lib/schema.graphql",
  generates: {
    "./libs/graphql-lib/src/lib/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./libs/resolvers/src/lib/context#DataSourceContext",
      },
    },
  },
};

export default config;

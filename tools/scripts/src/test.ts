import { generate } from "@graphql-codegen/cli";

generate(
  {
    overwrite: true,
    generates: {
      ["./__generated__/schema.graphql"]: {
        schema: `https://nameless-brook-330181.eu-central-1.aws.cloud.dgraph.io/graphql`,
        plugins: ["schema-ast"],
      },
    },
  },
  true
);

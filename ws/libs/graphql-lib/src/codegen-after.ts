import { readFileSync, writeFileSync } from "fs";

const filename = "./libs/graphql-lib/src/lib/types.ts";
const encoding = "utf8";

const existingContent = readFileSync(filename, encoding);
const newContent = existingContent.replace("./libs/resolvers/src/lib/context", "@ws/resolvers");

const contentToAdd =
  "/* eslint-disable @typescript-eslint/no-explicit-any */\n/* eslint-disable @typescript-eslint/ban-types */\n";

writeFileSync(filename, contentToAdd + newContent, encoding);

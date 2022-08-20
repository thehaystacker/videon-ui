import resolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        sourceMap: true,
        format: "cjs",
      },
      {
        file: packageJson.module,
        sourceMap: true,
        format: "esm",
      },
    ],
    plugins: [
      resolve(),
      commonJs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "./dist/esm/index.d.ts",
    output: [{ file: "./dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

import typescript from "rollup-plugin-typescript2";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/Color.ts",
  output: [
    {
      file: "dist/es/index.js",
      format: "es"
    },
    {
      file: "dist/lib/index.js",
      format: "umd",
      name: "EvergisColor",
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ]
};

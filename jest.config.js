/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  rootDir: "src", // "tests" if you test in tests folder
  testRegex: "((\\.|/)(test|spec))\\.tsx?$",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

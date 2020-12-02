module.exports = {
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
    "^monaco-editor$": "monaco-editor/esm/vs/editor/editor.api",
  },
  transformIgnorePatterns: ["/node_modules/(?!monaco-editor)/"],
};

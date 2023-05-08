module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json", ".svg", ".jpg"],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@hooks": "./src/hooks",
          "@styles": "./src/styles",
          "@config": "./src/config",
        },
      },
    ],
  ],
};

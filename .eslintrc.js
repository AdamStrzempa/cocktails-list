module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: "babel-eslint",
  plugins: [
    "babel",
    "react",
    "promise"
  ],
  env: {
    "browser" : true
  },
  globals: {
    "__DEV__"      : false,
    "__TEST__"     : false,
    "__PROD__"     : false,
    "__COVERAGE__" : false
  },
  rules: {
    "key-spacing"          : 0,
    "prefer-const"         : 1,
    "max-len"              : 0,
    "no-var"               : 1,
    "semi"                 : [2, "never"],
    "object-shorthand"     : [1, "always"],
    "jsx-quotes"           : [2, "prefer-single"],
    "object-curly-spacing" : [2, "always"],
    "curly"                : [1, "multi-line", "consistent"],
    "no-multi-spaces"      : [1, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true } }]
  }
};

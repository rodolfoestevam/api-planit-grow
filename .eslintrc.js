module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "airbnb-base",
      "prettier/@typescript-eslint",
      "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint/recommended",
        "prettier",
    ],
    "rules": {
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never"
        }
      ],
      "prettier/prettier": "error"
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
};

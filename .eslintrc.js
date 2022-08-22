// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "simple-import-sort",
        "import",
        "react-hooks"
    ],
    "rules": {
        "max-len": [
            "error",
            {
                "code": 200,
                "comments": 180,
                "ignoreComments": false,
                "ignoreStrings": true
            }
        ],
        "no-undef": "off",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "@typescript-eslint/no-empty-interface": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "import/first": "error",
        "import/newline-after-import": ["error"],
        "import/no-duplicates": [
            "error",
            {
                "considerQueryString": true
            }
        ],
        "@typescript-eslint/no-empty-function": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};

module.exports = {
  extends: ["stylelint-config-standard-scss"],
  customSyntax: "postcss-scss",
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-invalid-position-at-import-rule": null,
    "import-notation": null,
    "property-no-vendor-prefix": null,
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested"],
        "ignore": ["after-comment", "blockless-after-same-name-blockless"],
        "ignoreAtRules": ["import", "use", "forward"]
      }
    ],
    "declaration-empty-line-before": [
      "never",
      {
        "ignore": ["after-declaration", "inside-single-line-block"]
      }
    ],
    "color-function-notation": "modern",
    "alpha-value-notation": "percentage",
    "hue-degree-notation": "angle",
    "value-keyword-case": null,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "no-descending-specificity": null,
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"
  },
  ignoreFiles: ["dist/**/*.css"]
};

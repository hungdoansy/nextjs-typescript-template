module.exports = {
    // this line is required for pnpm
    plugins: ["@trivago/prettier-plugin-sort-imports"],
    semi: false,
    tabWidth: 4,
    printWidth: 100,
    singleQuote: false,
    trailingComma: "es5",
    bracketSameLine: false,
    endOfLine: "auto",
    overrides: [
        {
            files: "*.yml",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: "*.yaml",
            options: {
                tabWidth: 2,
            },
        },
    ],
    importOrder: [
        "<THIRD_PARTY_MODULES>",
        "^@/(app|assets|components|constants|hooks|lib|packages|requests|store|types)(/.+)?$",
        "\\.(c|le|sc)ss$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
}

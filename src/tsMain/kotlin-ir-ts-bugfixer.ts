
const fs = require("fs");
const path = require("path");

const dtsFilepath = path.resolve(__dirname, "./src/query-pro-fe.d.ts");
let dts = fs.readFileSync(dtsFilepath, "utf-8");
// console.log(dts);

dts = dts.replace(
    /(\sQueryField<[^{]+{[\s\S]+?\sor\(factor)(:.*)/,
    "$1?$2"
);

dts = dts.replaceAll(
    /(\s(QueryKeywords|QueryWithNotKeywords|QueryIgnoreCaseKeywords)<[^{]+{[^}]+?\s)(\/\* ErrorDeclaration: Name is a reserved word \*\/)/g,
    "$1in(...values: any[]): F;"
);

fs.writeFileSync(dtsFilepath, dts);

import {cloudself} from "./query-pro-fe";
import QueryProImpl = cloudself.cn.query.QueryProImpl;
import QueryField = cloudself.cn.query.QueryField;
import FinalQueryField = cloudself.cn.query.FinalQueryField;

function namerFixer(proto: Record<string, any>) {
    console.log(proto);
    for (const key of Object.keys(proto)) {
        const [rel] = key.split("_");
        if (!proto[rel]) {
            proto[rel] = proto[key];
        }
    }
}

export function fixAll() {
    namerFixer(QueryProImpl.prototype);
    namerFixer(FinalQueryField.prototype);
    namerFixer(QueryField.prototype);
    console.log("all fixed");
}

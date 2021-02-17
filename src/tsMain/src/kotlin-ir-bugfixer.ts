import {cloudself} from "./query-pro-fe";
import QueryProImpl = cloudself.cn.query.QueryProImpl;

function namerFixer(proto: Record<string, any>) {
    for (const key of Object.keys(proto)) {
        const [rel] = key.split("_");
        if (!proto[rel]) {
            proto[rel] = proto[key];
        }
    }
}

export function fixAll() {
    namerFixer(QueryProImpl.prototype);
}

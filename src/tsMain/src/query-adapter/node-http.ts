import { cloudself } from "../query-pro-fe";
import QueryStructure = cloudself.cn.query.QueryStructure;
import { QueryAdapter } from "../query-pro";
import fetch from "node-fetch"
import {stringifyKtDataObj} from "../kotlin-ir-bugfixer";

export const createNodeHttpQueryAdapter = (
    url: string,
): QueryAdapter => {
    return (queryStructure: QueryStructure) => {
        const qsJson = stringifyKtDataObj(queryStructure);
        console.log(qsJson);
        return fetch(url, {
            method: "POST",
            body: qsJson,
        }).then(r => r.json());
    }
}

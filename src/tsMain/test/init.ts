import { setQueryAdapter } from "../src/query-pro";
import {createNodeHttpQueryAdapter} from "../src/query-adapter/node-http";

export function init() {
    setQueryAdapter(createNodeHttpQueryAdapter("http://localhost:8888/query-pro"));
}

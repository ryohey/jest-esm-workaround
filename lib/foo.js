import { groupBy } from "lodash-es";
export const foo = arr => groupBy(arr, x => x % 2 === 0 ? "even" : "odd");
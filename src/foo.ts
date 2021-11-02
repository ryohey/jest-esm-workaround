import { groupBy } from "lodash"

export const foo = (arr: number[]) => groupBy(arr, x => x % 2 === 0 ? "even" : "odd")

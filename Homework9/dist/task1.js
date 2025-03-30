"use strict";
const superSort = (arr, direction) => {
    const sorted = [...arr].sort();
    return direction === "asc" ? sorted : sorted.reverse();
};
const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));
const func = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);

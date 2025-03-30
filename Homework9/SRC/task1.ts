type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

const superSort: SortFunction = (arr, direction) => {
  const sorted = [...arr].sort();
  return direction === "asc" ? sorted : sorted.reverse();
};

const names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");

console.log(result);

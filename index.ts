var list = [3, 4, 6, 45, 6, 6, 7, 9];
// list all the occurences of an element in array with index
let occurences = [];
function brute_force(list, query) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == query) {
      occurences.push({ index: i, value: list[i] });
    }
  }
  return occurences;
}
let res = brute_force(list, 6);
console.log(res);

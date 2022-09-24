var list = [3, 4, 6, 45, 6, 6, 7, 9];
// list all the occurences of an element in array with index
function brute_force1(list, query) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == query) {
      return [i, list[i]];
    }
  }
}
let result = brute_force1(list, 6);
console.log(result);

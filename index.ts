let list = [3, 4, 45, 6, 6, 7, 9];
// searching for an element is present in the array or not
function brute_force(list, query) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == query) {
      return [i, list[i]];
    }
  }
}

let res = brute_force(list, 6);
console.log(res);

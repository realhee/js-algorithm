// 2-5 등수구하기
// 이중 for문, Array.from
// TODO : 배열을 2개 만들어서 하나는 sorting 후에 for문안에  indexOf를 써서 등수를 구하는 방법
function solution(arr) {
  let newArr = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) newArr[i]++;
    }
  }
  return newArr;
}
// (TODO) 중복 등수 무시하는법
// function solution2(arr) {
//     let newArr = Array.from({length: arr.length}, () => 1);

//     return newArr;
// }

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // result : 4 3 2 1 5

arr = [87, 89, 92, 100, 76, 100];
console.log(solution(arr)); // result : 5, 4, 3, 1, 6, 1
// console.log(solution2(arr)); // result : 4, 3, 2, 1, 5, 1

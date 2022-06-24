//1-5 최솟값 구하기
function solution(arr) {
  let min = Number.MAX_SAFE_INTEGER; // Check!
  return Math.min(...arr);
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));

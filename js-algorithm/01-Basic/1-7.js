//1-7 10부제
function solution(day, arr) {
  let count = 0;
  arr.forEach((num) => {
    if (num % 10 === day) count++;
  });
  return count;
}
arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));

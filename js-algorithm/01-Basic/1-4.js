// 1-4 1부터 N까지의 합
function solution(n) {
  let answer = 0;
  let num = 1;
  while (n >= num) {
    answer += num;
    num++;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));

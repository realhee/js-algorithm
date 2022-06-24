// 1-3 연필개수
function solution(n) {
  const pencil = 12;
  let answer = Math.ceil(n / pencil);
  return answer;
}

console.log(solution(25)); // result : 3
console.log(solution(178)); // result : 15

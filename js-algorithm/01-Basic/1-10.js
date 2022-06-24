// 1-10 문자 찾기
function solution(s, t) {
  let answer = 0;
  answer = [...s].filter((v) => v == t).length;
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

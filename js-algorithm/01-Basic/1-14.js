// 1-14 가장 긴 문자열
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].length >= s[i + 1].length) answer = s[i];
    else answer = s[i + 1];
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

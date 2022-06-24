// 1-12 대문자로 통일
function solution(s) {
  let answer = "";
  answer = [...s].map((v) => v.toUpperCase()).join("");
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// 1-13  대소문자 변환
function solution(s) {
  let answer = "";
  answer = [...s]
    .map((v) => {
      if (v === v.toUpperCase()) return v.toLowerCase();
      else return v.toUpperCase();
    })
    .join("");

  return answer;
}

console.log(solution("StuDY"));

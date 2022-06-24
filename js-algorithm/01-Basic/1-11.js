// 1-11 대문자 찾기
function solution(s) {
  let answer = 0;
  answer = [...s].filter((v) => v === v.toUpperCase()).length;
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

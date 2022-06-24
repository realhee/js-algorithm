// 1-9 A를 #으로
function solution(s) {
  let answer = [...s];
  answer = answer
    .map((a) => {
      if (a == "A") return "#";
      else return a;
    })
    .join("");
  return answer;
}

let str = "BANANA";
console.log(solution(str));

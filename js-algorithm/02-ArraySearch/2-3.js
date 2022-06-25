// 2-3 가위바위보
function solution(a, b) {
  // 1:가위, 2:바위, 3:보
  // 비겼을 경우는 D
  let answer = [];
  answer = a.map((a, i) => {
    if ((a == 3 && b[i] == 1) || b[i] > a) return "B";
    if (a > b[i]) return "A";
    if (a == b[i]) return "D";
  });
  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // result : A B A B D

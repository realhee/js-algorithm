// 3-3 숫자만 추출
function solution(str) {
  let num = "";
  for (let x of str) {
    // Number 타입 체크 시에는 isNaN 활용
    if (!isNaN(x)) num += x;
  }
  num = parseInt(num);
  return num;
}

function solution2(str) {
  // 정규식 활용
  let num = str.replace(/[^0-9]/g, "");
  num = parseInt(num);
  return num;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
console.log(solution2(str));

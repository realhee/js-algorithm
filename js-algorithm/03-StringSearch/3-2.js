// 3-2 유효한 팰린드롬
function solution(str) {
  let newStr = str.toUpperCase().replaceAll(" ", "");
  console.log(newStr);
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) return "NO";
    return "YES";
  }
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str)); // result :

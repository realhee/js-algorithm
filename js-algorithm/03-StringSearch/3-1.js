// 3-1 회문문자열
function solution(str) {
  const newStr = str.toUpperCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[newStr.length - i - 1] != newStr[i]) return "NO";
  }
  return "YES";
}

let str = "gooG";
console.log(solution(str)); // result : "YES"

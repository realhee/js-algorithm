// 1-2 삼각형 판별하기
function solution(a, b, c) {
  const max = Math.max(a, b, c);
  if (a + b + c - max > max) return "YES";
  return "NO";
}

console.log(solution(3, 4, 7));

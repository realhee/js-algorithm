// 백준 | 달팽이는 올라가고싶다.

// 달팽이 우물 올라가기
// 하루에 올라가는 길이 a
// 미끄러지는 길이 b
// 총 길이 c
// 마지막날에는 미끄러지지 않음
function solution(a, b, c) {
  let day = 1;
  let day_up = a - b;
  if (day_up <= 0) return "이 달팽이는 올라갈  수 없습니다..";
  while (c >= day_up) {
    if (day_up >= c) day_up - b;
    day++;
    day_up += day_up;
  }

  return day;
}

console.log(solution(2, 1, 5)); // 4
console.log(solution(4, 1, 6)); // 2

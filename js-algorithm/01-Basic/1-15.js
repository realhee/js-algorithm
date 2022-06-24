// 1-15 가운데 문자 출력
function solution(s) {
  let mid_index = 0;
  if (s.length % 2 == 0) {
    // 짝수
    mid_index = Math.floor(s.length / 2);
    answer = s[mid_index - 1] + s[mid_index];
  } else {
    // 홀수
    mid_index = Math.floor(s.length / 2);
    answer = s[mid_index];
  }
  return answer;
}
console.log(solution("study"));
console.log(solution("good"));

//TODO : substring, substr(*)

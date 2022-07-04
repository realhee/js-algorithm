// 4-2 뒤집은 소수
// 문자열 배열 만들기 - toString().split("")
// 문자열 반대로 정렬하기 - reverse()
// 소수 구하기 - isPrime() 함수 정의
function isPrime(num) {
  // 소수 : 1과 자기 자신만으로 나누어 떨어지는 수
  // (조건 1) i < num
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  // (조건 2) 소수는 1보다 큰 정수
  return num > 1;
}
function solution(arr) {
  let answer = [];
  arr.forEach((v) => {
    let reverseNum = Number(v.toString().split("").reverse().join(""));
    if (isPrime(reverseNum)) answer.push(reverseNum);
  });
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // result : 23 2 73 2 3

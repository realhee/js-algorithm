// 4-2 뒤집은 소수
// 문자열 배열 만들기 - toString().split("")
// 문자열 반대로 정렬하기 - reverse()
// 소수 구하기 - isPrime() 함수 정의
function isPrime(num) {
  // (조건 1) 소수는 1보다 큰 정수
  if (num === 1) return false;
  // 소수 : 1과 자기 자신만으로 나누어 떨어지는 수
  // (조건 2) i < num / 2
  // 어차피 2x8, 8x2는 같으므로 시간복잡도를 위해 절반만 구해도 된다!
  // 제곱근도 가능 - Math.sqrt()
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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

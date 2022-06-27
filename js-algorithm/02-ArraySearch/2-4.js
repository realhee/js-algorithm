// 2-4 점수계산
function solution(arr) {
  let count = 0;
  let answer = 0;
  // 단순 배열의 value 값을 접근한다면 심플한 for-of 구문을 떠올려보자
  for(let i=0; i < arr.length; i++) {
    if(arr[i] == 1) {
      count++;
      answer += count;
    } else {
      count = 0;  
    }
  }
  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr)); // result : 10

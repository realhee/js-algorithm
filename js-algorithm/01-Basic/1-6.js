//1-6 홀수
function solution(arr) {
  let answer = [];
  let new_arr = [];
  let sum = 0;
  let index = 0;
  arr.forEach((num) => {
    if (num % 2 == 1) new_arr.push(num);
  });
  while (new_arr.length > index) {
    sum += new_arr[index];
    index++;
  }
  answer.push(sum);
  answer.push(Math.min(...new_arr));
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

// TODO : reduce 사용

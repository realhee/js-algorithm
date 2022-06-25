// 2-2 보이는 학생
function solution(arr) {
  let count = 1;
  let max = arr[0]; // first student
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      count++;
    }
  }

  return count;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153])); // result : 5

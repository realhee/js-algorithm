// 2-5 등수 구하기
function solution(arr) {
  let len = arr.length;
  let newArray = Array.from({ length: len }, () => 1);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[i]) newArray[i]++;
    }
  }

  return newArray;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr)); // result : 4 3 2 1 5

// TODO : 배열을 2개 만들어서 하나는 sorting 후에 for문안에  indexOf를 써서 등수를 구하는 방법

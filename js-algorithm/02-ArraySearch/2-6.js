// 2-6 격자판 최대합
// 이중 for문
function solution(arr) {
    // 최대값을 구할 땐 최소값으로 초기화
    let answer = Number.MIN_SAFE_INTEGER;
    // 행의 합은 sum1
    // 열의 합은 sum2
    // 각 대각선의 합은 sum3, sum4
    let sum1 = sum2 = sum3 = sum4 = 0;
    for(let i=0; i < arr.length; i++) {
        // for문이 끝날 때마다 초기화
        sum1 = sum2 = 0;
        for(let j=0; j < arr.length; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        sum3 += arr[i][i];
        // [length - i - 1] : [i] 와 대칭되는 index
        sum4 += arr[arr.length-i-1][i]; 
    }
    answer = Math.max(sum1, sum2, sum3, sum4);

    return answer;
}


let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];
console.log(solution(arr)); // result : 155
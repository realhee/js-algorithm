// 4-1 자릿수의 합
// 문자열 + 누산기 활용
function solution(n, arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let answer;
    for(x of arr) {
        // 자연수의 각 자리수를 문자열과 배열로 만든다 - toString(), split()
        let sum = x.toString().split("");
        // 내부 요소값을 숫자로 변경한다 - Number() 또는 parseInt()
        sum = sum.reduce((a,b) => {return a+Number(b)}, 0);
        // console.log(sum);
        if(sum > max) {
            max = sum;
            answer = x;
        } else if(sum == max) {
            answer = Math.max(x, answer);
            // console.log(x,answer);
            
        }
    }
    return answer;
}


// (TODO)
// n의 각 자리수를 10으로 나눈 나머지를 sum 변수에 더해주는 방식
// while문이 반복될 때마다 10자리씩 줄여가며 반복


let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr)); // result : 137
// 3-4 가장 짧은 문자거리
function solution(str, t) {
    // str 최대 길이 100
    let p = 100;
    let answer = [];
    for(let i=0; i < str.length; i++) {
        if(str[i] === t) {
            p = 0;
            answer.push(p);
        } else {
            p++;
            answer.push(p);
        }
    }
    for(let i=str.length-1; i >= 0; i--) {
        if(str[i] === t) {
            p = 0;
            answer[i] = p;
        }else {
            p++;
            answer[i] = Math.min(answer[i], p);
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e')); // result : 10121012210
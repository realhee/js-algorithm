// 해커랭크 | Easy | Time Conversion
function solution(s) {
  // Write your code here
  const dateArr = s.slice(0, s.length - 2).split(":");

  let time = s.slice(s.length - 2);
  if (time == "AM") {
    dateArr[0] == "12" && (dateArr[0] = "00");
  } else {
    dateArr[0] !== "12" && (dateArr[0] = Number(dateArr[0]) + 12);
  }

  return dateArr.join(":");
}

console.log(solution("07:05:45PM")); // result : "19:05:45"
console.log(solution("12:01:00AM")); // result : "00:01:00"
console.log(solution("12:01:00PM")); // result : "12:01:00"

# **js-algorithm**

인프런 자바스크립트 알고리즘 문제풀이

<br />

## 🎯 Index

1. [**기본문제 풀이**](#1)
2. [**1, 2차원 배열 탐색**](#2)
3. [**문자열 탐색**](#3)
4. [**완전탐색(블루투포스)**](#4)
5. [**효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)**](#5)
6. [**자료구조(스택 & 큐)**](#6)
7. [**정렬과 그리디, 결정알고리즘**](#7)
8. [**재귀함수와 완전탐색(DFS:깊이우선탐색)**](#8)
9. [**그래프와 탐색(DFS, BFS:넓이 우선탐색)**](#9)
10. [**Dynamic programming(동적계획법)**](#10)

<br />

<div id="1"></div>

## 기본 문제 풀이

| 번호 |       문제       |                                      JS 풀이 코드                                       | 1차 풀이 | 2차 풀이 |
| :--: | :--------------: | :-------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 세 수 중 최소값  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-1.js)  | 22.06.24 |    -     |
|  2   | 삼각형 판별하기  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-2.js)  | 22.06.24 |    -     |
|  3   |    연필 개수     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-3.js)  | 22.06.24 |    -     |
|  4   | 1부터 N까지의 합 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-4.js)  | 22.06.24 |    -     |
|  5   |  최소값 구하기   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-5.js)  | 22.06.24 |    -     |
|  6   |       홀수       | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-6.js)  | 22.06.24 |    -     |
|  7   |      10부제      | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-7.js)  | 22.06.24 |    -     |
|  8   |    일곱난쟁이    | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-8.js)  | 22.06.24 |    -     |
|  9   |    A를 #으로     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-9.js)  | 22.06.24 |    -     |
|  10  |    문자 찾기     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-10.js) | 22.06.24 |    -     |
|  11  |   대문자 찾기    | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-11.js) | 22.06.24 |    -     |
|  12  |   대문자 통일    | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-12.js) | 22.06.24 |    -     |
|  13  |  대소문자 변환   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-13.js) | 22.06.24 |    -     |
|  14  |  가장 긴 문자열  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-14.js) | 22.06.24 |    -     |
|  15  | 가운데 문자 출력 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-15.js) | 22.06.24 |    -     |
|  16  |  중복 문자 제거  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-16.js) | 22.06.24 |    -     |
|  17  |  중복 단어 제거  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/01-Basic/1-17.js) | 22.06.24 |    -     |

<br />

<div id="2"></div>

## 1, 2차원 배열 탐색

| 번호 |      문제      |                                         JS 풀이 코드                                         | 1차 풀이 | 2차 풀이 |
| :--: | :------------: | :------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 큰 수 출력하기 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-1.js) | 22.06.25 |    -     |
|  2   |  보이는 학생   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-2.js) | 22.06.25 |    -     |
|  3   |   가위바위보   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-3.js) | 22.06.25 |    -     |
|  4   |   점수 계산    | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-4.js) | 22.06.27 |    -     |
|  5   |  등수 구하기   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-5.js) | 22.06.27 |    -     |
|  6   | 격자판 최대합  | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-6.js) | 22.06.27 |    -     |
|  7   |     봉우리     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/02-ArraySearch/2-7.js) | 22.06.27 |    -     |

<br />

<div id="3"></div>

## 문자열 탐색

| 번호 |        문제        |                                         JS 풀이 코드                                          | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :-------------------------------------------------------------------------------------------: | :------: | :------: |
|  1   |     회문문자열     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/03-StringSearch/3-1.js) | 22.06.29 |    -     |
|  2   |  유효한 팰린드롬   | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/03-StringSearch/3-2.js) | 22.06.30 |    -     |
|  3   |    숫자만 추출     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/03-StringSearch/3-3.js) | 22.06.30 |    -     |
|  4   | 가장 짧은 문자거리 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/03-StringSearch/3-4.js) | 22.06.30 |    -     |
|  5   |    문자열 압축     | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/03-StringSearch/3-5.js) | 22.06.30 |    -     |

<br />

<div id="4"></div>

## 완전탐색(블루투포스)

| 번호 |    문제     |                                        JS 풀이 코드                                         | 1차 풀이 | 2차 풀이 |
| :--: | :---------: | :-----------------------------------------------------------------------------------------: | :------: | :------: |
|  1   | 자리수의 합 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/04-BruteForce/4-1.js) | 22.07.04 |    -     |
|  2   | 뒤집은 소수 | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/04-BruteForce/4-2.js) | 22.07.04 |    -     |
|  3   |   멘토링    | [JS](https://github.com/realhee/js-algorithm/blob/master/js-algorithm/04-BruteForce/4-3.js) | 22.07.05 |    -     |
|  4   |  졸업선물   |                                           [JS]()                                            |    -     |    -     |
|  5   | K번째 큰 수 |                                           [JS]()                                            |    -     |    -     |

<br />

<div id="5"></div>

## 효율성(투포인터 알고리즘, 슬라이딩윈도우, 해쉬)

| 번호 |        문제        | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------: | :------: | :------: |
|  1   |   두 배열 합치기   |    [JS]()    |    -     |    -     |
|  2   |  공통원소 구하기   |    [JS]()    |    -     |    -     |
|  3   |   연속 부분수열1   |    [JS]()    |    -     |    -     |
|  4   |   연속 부분수열2   |    [JS]()    |    -     |    -     |
|  5   |     최대 매출      |    [JS]()    |    -     |    -     |
|  6   |     학급 회장      |    [JS]()    |    -     |    -     |
|  7   |      아나그램      |    [JS]()    |    -     |    -     |
|  8   | 모든 아나그램 찾기 |    [JS]()    |    -     |    -     |

<br />

<div id="6"></div>

## 자료구조(스택, 큐)

| 번호 |        문제         | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :-----------------: | :----------: | :------: | :------: |
|  1   |     올바른 괄호     |    [JS]()    |    -     |    -     |
|  2   |   괄호 문자 제거    |    [JS]()    |    -     |    -     |
|  3   |   크레인 인형뽑기   |    [JS]()    |    -     |    -     |
|  4   | 후위식(postfix)연산 |    [JS]()    |    -     |    -     |
|  5   |      쇠막대기       |    [JS]()    |    -     |    -     |
|  6   |     공주 구하기     |    [JS]()    |    -     |    -     |
|  7   |    교육과정 설계    |    [JS]()    |    -     |    -     |

<div id="7"></div>

## 정렬과 그리디, 결정알고리즘

| 번호 |            문제             | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :-------------------------: | :----------: | :------: | :------: |
|  1   |          선택 정렬          |    [JS]()    |    -     |    -     |
|  2   |          버블 정렬          |    [JS]()    |    -     |    -     |
|  3   | Special Sort(버블 정렬응용) |    [JS]()    |    -     |    -     |
|  4   |          삽입 정렬          |    [JS]()    |    -     |    -     |
|  5   |       LRU(캐시 변형)        |    [JS]()    |    -     |    -     |
|  6   |       장난꾸러기 현수       |    [JS]()    |    -     |    -     |
|  7   |          좌표 정렬          |    [JS]()    |    -     |    -     |
|  8   |         회의실 배정         |    [JS]()    |    -     |    -     |
|  9   |           결혼식            |    [JS]()    |    -     |    -     |
|  10  |          이분 검색          |    [JS]()    |    -     |    -     |
|  11  |         뮤직비디오          |    [JS]()    |    -     |    -     |
|  12  |        마구간 정하기        |    [JS]()    |    -     |    -     |

<br />

<div id="8"></div>

## 재귀함수와 완전탐색(DFS:깊이우선탐색)

| 번호 |         문제         | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :------------------: | :----------: | :------: | :------: |
|  1   |       재귀함수       |    [JS]()    |    -     |    -     |
|  2   |     이진수 출력      |    [JS]()    |    -     |    -     |
|  3   |    이진 트리 순회    |    [JS]()    |    -     |    -     |
|  4   |   부분집합 구하기    |    [JS]()    |    -     |    -     |
|  5   |  합이 같은 부분집합  |    [JS]()    |    -     |    -     |
|  6   |     바둑이 승차      |    [JS]()    |    -     |    -     |
|  7   |   최대 점수 구하기   |    [JS]()    |    -     |    -     |
|  8   |   중복순열 구하기    |    [JS]()    |    -     |    -     |
|  9   |       동전교환       |    [JS]()    |    -     |    -     |
|  10  |     순열 구하기      |    [JS]()    |    -     |    -     |
|  11  |       팩토리얼       |    [JS]()    |    -     |    -     |
|  12  | 조합수(메모이제이션) |    [JS]()    |    -     |    -     |
|  13  |    순열 추측하기     |    [JS]()    |    -     |    -     |
|  14  |     조합 구하기      |    [JS]()    |    -     |    -     |
|  15  |     수들의 조합      |    [JS]()    |    -     |    -     |

<br />

<div id="9"></div>

## 그래프와 탐색(DFS, BFS:넓이 우선탐색)

| 번호 |           문제           | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :----------------------: | :----------: | :------: | :------: |
|  1   |  경로탐색(DFS-인접행렬)  |    [JS]()    |    -     |    -     |
|  2   | 경로탐색(DFS-인접리스트) |    [JS]()    |    -     |    -     |
|  3   |         미로탐색         |    [JS]()    |    -     |    -     |
|  4   | 이진트리 넓이 우선 탐색  |    [JS]()    |    -     |    -     |
|  4   |       송아지 찾기        |    [JS]()    |    -     |    -     |
|  5   |   섬나라 아일랜드(DFS)   |    [JS]()    |    -     |    -     |
|  6   |   섬나라 아일랜드(BFS)   |    [JS]()    |    -     |    -     |

<div id="10"></div>

## Dynamic programming(동적계획법)

| 번호 |        문제        | JS 풀이 코드 | 1차 풀이 | 2차 풀이 |
| :--: | :----------------: | :----------: | :------: | :------: |
|  1   |    계단 오르기     |    [JS]()    |    -     |    -     |
|  2   |   돌다리 건너기    |    [JS]()    |    -     |    -     |
|  3   | 최대 부분 증가수열 |    [JS]()    |    -     |    -     |
|  4   |      동전교환      |    [JS]()    |    -     |    -     |
|  5   |  최대점수 구하기   |    [JS]()    |    -     |    -     |


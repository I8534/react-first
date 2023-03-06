// ES6 문법은 아니라지만, 리액트에서 많이 사용하는 삼항 연산자.
// 리엑트 쓸 때는 맵 삼항연산자 많이 쓰니 반드시 익숙해져야 한다.

let person = {
  name : 'yejin',
  age : 20
}

// 조건문
// person이라는 게 존재한다면 person.name, 없다면 '없다'라고 나오게
// 기존방법
if(person) {
  console.log(person.name);
} else {
  console.log('없다');
}
// 콘솔로그
console.log(person ? person.name : '없다');


if(person.age >= 18) {
  console.log('성인입니다.');
} else {
  console.log('미성년자입니다.');
}

console.log(person.age >= 18 ? '성인입니다.' : '미성년입니다.');

// 2
// 아무 배열이나 만들고, 그 배열의 길이가 5이상일 경우 '길다' 아니라면 짧다.
let arr = [1,2,3,4,5];

if(arr.length >= 5) {
  console.log('길다.');
} else {
  console.log('짧다.');
}

console.log(arr.length >= 5 ? '길다.' : '짧다.');

// 3
// age가 65세 이상일 경우 '노인입니다.' 뜨고 18세 이상인 경우 '성인입니다.' 그 이하일 경우 '미성년자입니다.'

if(person.age >= 18) {
  if(person.age >= 65) {
    console.log('노인입니다.');
  } else
  console.log('성인입니다.');
} else {
  console.log('미성년자입니다.');
}

console.log(person.age >= 18 ? (person.age >= 65 ? '노인입니다.' : '성인입니다.') : '미성년자입니다.');

// 4
// 삼항 연산자 논리 계산(true, false)
// person.name 출력하고 없다면 '이름이 없다' 출력

console.log(person.name && true ? person.name : '이름이 없습니다.');
console.log(person.name == '' ? person.name : '이름이 없습니다.');

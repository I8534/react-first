// Destructuring
// 구조를 분해한다 정도로 생각하면 된다.
// 객체를 분해해서 자기가 원하는 값을 가져올 수 있는 것을 말한다.

let person = {
  name : 'jung',
  age : 20
}

//이건 옛날 문법
let j = person.name;
let a = person.age;
let j1 = person['name'];
let a1 = person['age'];
console.log(j,a);


// 단축 표기법
// 변수 선언 후 먼저 객체를 써놓고 그 안에 내가 가져오고 싶은 키값을 입력하는 것이다.
// 이 코드는 person이라는 객체에서 name과 age라는 key값을 분해한 값을 let으로 선언한 변수로 만들어 둔 것
let {name,age} = person
// 근데 
// let {name,age} = person
// 어떤 객체 안에서 가져오고 싶은 키 값을 맨션하면 그 키값을 이름으로 변수를 생성한다.
// 그 변수 안에 key값이 할당된다.
// 이 문법은 array[배열]에서도 동일하게 적용된다.

//arry 즉 이건 state에서 사용하는 문법이다.
let arr = [1,2,3,4,5];
// a2와 b라는 변수가 생성되고, a2랑 b에는 배열의 순서대로 배열의 0번째 값, 1번째 값이 각각 배열되는 것이다.
let[a2,b] = arr;

// 배열안에서 나머지 값 가져오기
// ...rest
// 배열 안에서 원하는 값을 뽑아낸 후 나머지 값을 저장하고 싶을 때 사용
// rest 대신에 다른 이름 이용해도 상관없다. 대신 변수 앞에 ... 써야하고 변수가 가장 마지막에 위치해야 한다.
// let [a3,b3,...lala] = arr 라고 해도 괜찮다.
let [a3,b3,...rest] = arr
console.log(rest);
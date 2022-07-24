// 인터페이스는 네가 원하는 메소드와 property를 클래스가 가지도록 강제할 수 있게 해준다.
// 추상 클래스와 비슷한 보호를 제공하지만, 인터페이스는 자바스크립트 파일에서 보이지 않는다.
// 추상 클래스를 쓰면 자바스크립트에서는 일반적인 클래스로 바뀐다.
// 파일 크기가 좀 더 커지고, 추가 클래스가 만들어진다는 뜻.
// 만약 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓰인다면
// 같은 역할을 하는 인터페이스를 하는 게 좋다.

//타입을 쓰고 싶다면 type 키워드를 쓰면 된다.

//type의 세가지 옵션
//1. 오브젝트의 모양 설명
type Ian = {
    name: string
}
//2. 타입 alias를 만드는 것
type Ian = number;
//3. 타입을 특정된 값으로 만드는 것 
type Ian = 1 | 2;

//타입과 인터페이스의 차이점
//string으로된 name을 가지는 Player 타입
type PlayerA ={
    name: string
}

// const playerA: PlayerA ={
//     name: 'nico'
// }
//
interface PlayerB{
    name:string
}

const playerB: PlayerB ={
    name: 'nico'
}
// 위의 타입과 인터페이스는 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 게 그 목적이다.
// 목표는 동일하고 수행했지만 둘은 허락하는게(할 수 있는게) 다르다.
// 타입을 상속하려면 Player A타입과 lastName을 가지는 오브젝트를 합친거라고 알려주어여한다.
type PlayerAA = PlayerA & {
    lastName:string
}

const playerA: PlayerAA ={
    name: 'nico',
    lastName:'xxx'
}

//인터페이스는 상속한다는 것을 알려주면괸다.
interface PlayerBB extends PlayerB{
    lastName: string
}

const playerbb: PlayerBB ={
    name:'nico',
    lastName:'ian'
}
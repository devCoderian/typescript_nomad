/*
다형성
타입스크립트가 어떻게 다형성을 주는가? 제네릭
*/

//배열을 받고 그 요소들을 출력하자
const printItem = (arr: any[]):void => {
    arr.map(item => console.log(item))
}

printItem(['안', '녕', '하', '세', '요', 1]);

// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void //타입에 따라 이렇게 늘어나는건 좋지않다 => 이럴땐 제네릭 타입을 받자
    //모든 가능성을 조합해서 만들어두어야한다.
// }
//제네릭을 활용해보자!
//제네릭이란 타입의 placeholder같은 것이다.
//제네릭을 사용하는 방법! 타입스크립트에 generic을 사용하고 싶다고 알려주어야한다.
//꺾쇠를 사용해서
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): void;
    //타입스크립트가 유추한 값을 call signiture를 통해 보여준다.
 
}


const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}
superPrint([1, 2, 3, 4,]);
superPrint(["a", "b", "c"]);
superPrint(["a", 1, "c"]); 
//제네릭을 사용하면  //타입스크립트가 유추한 값을 call signiture를 통해 보여준다.
//const superPrint: <string | number>(arr: (string | number)[]) => void


type SuperPrintType = {
    <T>(arr: T[]): T;
    //return type도 제네릭으로 바꿀수 있다.
    //그럼 할당한 변수에 리턴타입이 정해진다.
    //const test: number
}

const printTest:SuperPrintType = (arr) => arr[0];

const test = printTest([2, 3, 4]); // //const test: number
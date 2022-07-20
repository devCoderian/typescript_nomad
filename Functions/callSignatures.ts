function add(a:number, b:number){
    return a + b
}

const addArrow = (a: number, b:number) => a + b; 
//만약 add 함수만의 타입을 가지고 싶다면? 함수만의 타입을 지정해주어여 한다.
//call signatures => 함수 위에 마우스를 올렸을 때 보게 되는 것, 인자의 타입이랑 함수의 반환 타입을 알려준다.
//call signatures 만드는 법
//우선 type이라 적고, 네이밍 후 인자 차입 반환 타입을 명시한다.
//ex
type Add = (a:number, b:number) => number;

const AddType: Add = (a, b) => a+b;
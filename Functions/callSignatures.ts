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


// 호출 시그니쳐(call signatures)Permalink
// call signatures란 함수 이름 위에 커서를 올렸을 때 뜨는 파라미터 타입 정보와 리턴 타입 정보를 말한다.
// 함수를 어떻게 호출해야 하는지와 반환이 어떻게 되는지 알려주는 정보

// 나만의 call signature를 선언하는 방법Permalink
// call signature로 개발자가 직접 타입을 만들 수 있고, 함수가 어떻게 동작하는지 서술해둘 수 있다
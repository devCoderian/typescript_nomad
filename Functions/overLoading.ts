// https://nomadcoders.co/typescript-for-beginners/lectures/3674
// overloading
/*
오버로딩은 함수가 여러개의 signatureCallSign을 받았을 때 발생시킨다.
*/

// type Add = (a:number, b:number) => number;
type AddOverloading = {
    (a: number, b: number): number
    (a: number, b: string): number
};

// const addOver: ADD_OVER = (a:number, b:number|string) =>{
//     if(typeof b === 'string') return a
//     return a + b
// }



//any 타입 추론 이유
const addOver: AddOverloading = (a: number, b: number | string) => {
    if (typeof b === 'string') return a
    return a + b
}

/*
https://joshua1988.github.io/ts/guide/type-alias.html#%ED%83%80%EC%9E%85-%EB%B3%84%EC%B9%AD-type-aliases
타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다. 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다. 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.
소프트웨어의 이상적인 특징은 확장에 개방되어 있기 때문에, 가능하면 항상 타입 별칭보다 인터페이스를 사용해야 한다고 합니다
반면에, 만약 인터페이스로 어떤 형태를 표현할 수 없고 유니언이나 튜플 타입을 사용해야 한다면, 일반적으로 타입 별칭을 사용한다고 합니다.
*/


//Next.js 사용법
//오버로딩의 예시 스트링으로도 보낼수 있고 객체로도 보낼 수 있다.
Router.push("/home");

Router.push({
    path: "/home",
    state: 1
});

type Config = {
    path: string,
    state: Object
}

type Push = {
    (path: string): void
    (config: Config): void
}

//타입추론
const push:Push = (config:any) => {
    if (typeof config === 'string') { console.log(config) }
    else {
        console.log(config.path)
    }
}
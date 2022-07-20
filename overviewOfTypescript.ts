//타입스크립트 Object
type Age = number;
type Name = string;
type Player = {
    readonly name: Name
    age?: Age
}


function playerMaker02(name:string):Player{
   return {name}
}
const playerMaker = (name:string): Player => ({name}); //return type추론
const nico = playerMaker("nico");
nico.age = 12; //return type처리를 안하면 에러 발생

//readonly 속성
//readonly를 사용한 name 프로퍼티를 수정할 수 없다.
nico.name = "ian"; //error 발생
nico.age = 12;

//readonly 속성, 불변성 처리 가능 
const names: readonly string[] = ["1", "2"];
names.push(); //readonly 속성 때문에 push 불가능 map, filter 가능 => 배열 값의 변동이 없기 때문에 => 불변성

//Tuple => array를 생성하게 하는데 최소한의 길이가 필요하고 특정위치에 특정 타입이 있어야 한다. 

const tuplePlayer:[string, number, boolean] = ["nico", 1, true];
tuplePlayer[0] = 1;//typescript가 첫번째 index는 항상 string이어야 한다는 것을 알기 때문에
tuplePlayer[0] = "ian"; 

const tupleReadonlyPlayer:readonly[string, number, boolean] = ["nico", 1, true];
tupleReadonlyPlayer[0] = "ian"; //readonly로 수정 불가능

//타입스크립트에서 제공하는 타입 null, undefined
let a : undefined = undefined;
let b : null = null;

//any type => 기본적으로 비어있는 값은 타입스크립트는 any 타입으로 추론한다.
//any는 ts의 모든 보호장치를 비활성화시킨다.
 

const any01 : any[] = [1, 2, 3, 4];
const any02: any = true;

any01 + any02 //any를 사용하면 에러가 나지 않는다.


// ts의 유니크한 타입들 => unknown, void, never
// 어떤 타입인지 모르는 변수는 typescript에 알려주는 방식, unknown
// 만약 api로부터 응답 받을 때 그 타입을 모른다면?

let unknown01:unknown;  //타입을 unknown처리를 하면 일종의 보호를 받게 된다. => 어떤 작업을 하면 이  변수의 타입을 먼 확인해야하는 방식으로 변경
let unknown02 = unknown01 + 1;//에러가 난다. Object is of type 'unknown'.ts(2571) unknown01의 타입은 unknown이기 때문에 더할 수 없다.
if(typeof unknown01 === 'number'){
    let unknown02 = unknown01 + 1; //이 범위안에서 unknown01는 확실히 number이기 때문에
}

let unknown02 = unknown01.toUpperCase(); 

//string 타입으로 허용해준다면 사용 가능
if(typeof unknown01 === 'string'){
    let unknown02 = unknown01.toUpperCase(); 
}

//void는 아무것도 리턴하지 않는 함수를 대상으로 한다.
//ts는 void를 명시하지 않아도 이 함수가 아무것도 return 하지 않는다는 것을 자동으로 인식한다.
function hello(){ 
    console.log('x'); 
}

const aVoid = hello();
aVoid.toUpperCase(); //void타입에는 에러가 없기 때문 Property 'toUpperCase' does not exist on type 'void'.ts(2339)

//never는 함수가 절대 리턴하지 않을 때 사용한다.
//예를 들어 함수에서 exception(예외)이 발생할 때 사용한다.

function helloNever():never{ //리턴하지 않고 오류를 발생시키는 함수이다.
    throw new Error("xxx");
}

//또한 never는 타입이 두가지가 있을 때 발생한다.
function helloNever02(name:string | number){
    if(typeof name === "string"){
        name //(parameter) name: string  
    }else if(typeof name === "number"){
        name //(parameter) name: number
    }else{
        name //(parameter) name: never
    }
  
}
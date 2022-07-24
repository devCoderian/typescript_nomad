// 다형성은 다른 모양의 코드를 가질 수 있게 해준다.
// 다형성을 이룰 수 있는 방법은, 제네릭을 사용하는 것이다. 
// 제네릭은 placeholder 타입을 쓸 수 있도록 해준다.
// 때가 되면 타입스크립트가 placeholder타입을 concrete타입으로 바꾸어준다.
// 같은 코드를 다른타입에 쓸수있도록 해준다.

//로컬스토리지 같은 API 만들기

interface Storage{
    /*This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.
    이미 정의되어 있기째문에 추가하려면 사용가능 오바라이드할려면 여기 추가
    */
}

interface SStorage<T>{
    [key:string] : T
    //키가 제한되지 않은 오브젝트를 정의하게 해준다.
}

//타입스크립트에게 T라고 불리는 제네릭을 받을 계획이라고 알려준다.
class LocalStorage<T>{
    private storage : SStorage<T> = {}
    set(key:string, value: T){
        this.storage[key] = value;
    }
    remove(key: string){
        delete this.storage[key]
    }
    get(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}


const stringsStorage = new LocalStorage<string>() //제네릭에 쓸 타입 알려주기
stringsStorage.get("string");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set('ian', true);
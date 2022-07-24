//typescript는 코드를 안정적으로 만들어준다.
//typescript에서 class를 만들어보자.
//많은 양의 코드를 반복적으로 쓰지 않게끔 보여준다.

class Manager{
    
    constructor(
        private firstName: string,
        private lastName: string, 
        public nickname: string
    ){} 
    //private public property를 만들수 있다. 
    //대부분의 객체 지향 프로그래밍이 가지고 있는 기능
}

const Jian = new Manager("nico", "las", "니꼬");
Jian.firstName  = "ian"; //js에는 컴파일이 되지 않음.

//TypeScript와 객체지향 프로그램이 가지고 있는 엄펑 훌륭한 것은
//추상클래스(Abstract Class)야.

abstract class User{
    constructor(
        private firstName: string,
        private lastName: string, 
        public nickname: string,
        protected name: string,
    ){} 
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    abstract getNickName():void

    private PgetFullName(){
        return `${this.firstName} ${this.lastName}`
    }
    protected pProtected(){
        return `${this.firstName} ${this.lastName}`
    }
}

//추상클래스란?
//다른 클래스가 상속받을 수 있는 클래스이다.
//추상 클래스는 인스턴스화 할 수 없다!

class PlayerUser extends User{
    //비추상 클래스 'PlayerUser'은(는) 'User' 클래스에서 상속된 
    //추상 멤버 'getNickName'을(를) 구현하지 않습니다.ts(2515)
    getNickName(){
        console.log(this.lastName); //클래스를 상속했을 지라도 private이기 때문에 lastName이 접근 불가능
        console.log(this.nickname); //접근 가능
        //protected를 사용하면 접근가능!
        console.log(this.name); //접근 가능
        
    }

    
}
//다른 클래스가 상속만!!! 받을 수 있기 때문에 생성되지 않는다.
const nicouser = new User("nico", "las", "니꼬");
const nicouser02 = new PlayerUser("nico", "las", "니꼬");

nicouser02.getFullName();
nicouser02.PgetFullName();

//추상 메소드 만들기!
//추상메소드를 만들려면, 메소드를 클래스안에서 구현하지 않으면 된다.
//메소드는 클래스 안에 존재하는 함수를 의미한다.
//추상 메소드는 추상 클래스를 상속받는 모든것들이 구현을 해야하는 메소드를 의미한다. 


//만약 필드가 외부로부터는 보호되지만
//다른 자식 클래스에서 사용되기를 원한다면 protected를 사용. 
//protected는 클래스밖에서는 접근할 수 없다.
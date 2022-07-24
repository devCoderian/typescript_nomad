//해싱 알고리즘을 쓰는 해시맵 => 단어 사전을 만들기
type Words ={
    [key:string]: string
}
//위의 타입 예시
// let dict: Words = {
//     "potato": "food"
// }

class Dict {
    //constructor에서 직접 초기화되지 않는 property
    private words: Words

    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def;
        }
    }
    def(term:string){
        return this.words[term]
    }
    edit(term:string, def:string){
        if(this.words[term] === undefined) return;
        this.words[term] ===  def;
    }
}
// {
//     "potato": "Food",
//     "rice": "Also food"
// }

class Word {
    constructor(
        public term:string,
        public def: string,
    ){}
}
const kimchi = new Word("kimchi", "한국의 음식");
const dict = new Dict();

dict.add(kimchi); 
dict.def("kimchi"); 
type PlayerGeneric<E> = {
    name: string
    extraInfo: E
}

type NicoExtra ={
    favFood: string
}

type NicoPlayer = PlayerGeneric<NicoExtra>

const nicol: NicoPlayer ={
    name: "nico",
    extraInfo: {
        favFood: "kimchi"
    }
}

const ian: PlayerGeneric<null> ={
    name: "nico",
    extraInfo: null
}


type A = Array<number>

let ga:A = [1, 2, 3, 4];

// function printAllNumbers(arr: number[]){
    
// }

//동일하게 제네릭 사용가능
function printAllNumbers(arr: Array<number>){

}


// useState<number>();

//타입 안정성 => 런타임 에러가 줄고 생산성이 늘어난다.
//[1, 2, 3, 4, ] + false; => '1, 2, 3, 4,false';
function divide(a, b){
    return a/b
}

divide(2, 3);// 0.66666
divide("xxxxx");
//NAN 에러를 반환하지 않고 실행시키는 문제점
//js는 필수 입력값인지 아닌지 받지 않는다.


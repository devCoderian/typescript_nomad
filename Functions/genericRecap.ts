// type SuperPrintRecap = <T>(a: T[]) => T
// type SuperPrintRecap = (a: any) => any
//여러가지 제네릭 타입 사용하기
type SuperPrintRecap = <T, M>(a: T[], b:M) => T

const superPrintRecap: SuperPrintRecap = (a) => a[0];

// const aSuperPrintRecap = superPrintRecap([1, 2, 3, 4], "x");
const aSuperPrintRecap = superPrintRecap([1, 2, 3, 4]);
// aSuperPrintRecap.toUpperCase();
//제네릭을 사용하지 않고 any타입이면 에러가 나지 않는다.
//제네릭은 네가 요구한대로 signature를 생성해줄 수 있는 도구이다.


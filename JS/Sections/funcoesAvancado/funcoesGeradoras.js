//ele me entrega uma parte da function em ordem, cada vez que chamo ele (na primeira vez ele chama a primeira yield, na segunda vez será a segunda yield, e assim por diante).
function* geradora1() {
  //Qualquer código...
  yield 'Valor 1';
  //Qualquer código...
  yield 'Valor 2';
  //Qualquer código...
  yield 'Valor 3';
}

function* geradora2() {
  let i = 0;
  while(true) {
    yield i;
    i++;
  }
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3(); //continua uma function geradora dentro de outra nova
  yield 3;
  yield 4;
  yield 5;
}

function geradora5() {
  yield function(){
    console.log('vim do y1');
  };
  yield function(){
    console.log('vim do y2');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
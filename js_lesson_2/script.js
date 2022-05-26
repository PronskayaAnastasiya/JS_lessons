/*Описание Директива let позволяет объявить локальную переменную с областью
 видимости, ограниченной текущим блоком кода . В отличие от ключевого слова var ,
которое объявляет переменную глобально или локально во всей функции, независимо
от области блока.*/
var number_1=10;
var number_2;
number_2=14;
var string='Hello';
alert(string);
var user='Martin', age=19, message ='Hi!';

let number_3=15;
let user_2='Tom';

alert( "не число" / 2 ); // NaN, такое деление является ошибкой. NaN означает вычислительную ошибку. 

// символ "n" в конце означает, что это BigInt, возможность работать с целыми числами произвольной длины.
const bigInt = 1234567890123456789012345678901234567890n;
let n=327846923742819543982342503952460696n;

let user_3='Ivan';
alert(`Hi, ${user_3}`);
alert(`Hi,${user}`)
alert(`Result number_1+number_2 = ${number_1+number_2}`);
alert(`number_1=${number_1}`);
alert(`number_2 = ${number_2}`);

var isGreater=4>1;
alert(`isGreater = ${isGreater}`);
 
let age;
alert(age); // выведет "undefined". undefined означает, что «значение не было присвоено».

//Оператор typeof возвращает тип аргумента
typeof 0;
alert(typeof user);
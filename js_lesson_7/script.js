//Массивы
let arr=[];
let arr_2=["Хлеб","Чай","Сахар","Конфеты"];
alert(arr_2[0]);
for(let i= 0;i<arr_2.length;i++){
    alert(arr_2[i]);
}
arr_2[2]="Груша";
arr_2[4]="Лимон";

alert(arr_2.length);
alert(arr_2);

let arr_3=[1,'чай',{name:'John'},true];

//pop удаляет последнийё элемент из массива и возвращает его 
let a=arr_2.pop();
alert(arr_2);
alert(a);

arr_2.push("Молоко");
alert(arr_2);

//shift удаляет из массива первый элемент и возвращет его
arr_2.shift();
alert(arr_2);
 
//unshift добавляет элементы в начло массива
arr_2.unshift("Яблоки");
alert(arr_2);

function eat(arr){ //массив это объект. в функцию он прередается по ссылке
    arr.pop();
}
eat(arr_2);
eat(arr_2);
alert(arr_2);
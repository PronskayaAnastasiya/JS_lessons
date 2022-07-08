//Массивы:методы
//split разбиение строки на массив
var names="Миша, Катя, Саша, Петя";
var arr = names.split(', ');
for(var i=0;i<arr.length;i++){
    alert("Вам сообщение "+arr[i]);
}

var name='Катя';
alert(name.split(''));

//join склеивание массива в строку
var arr=['Миша',"Катя","Саша"];
var str=arr.join("; ");
alert(str);

alert(new Array(4).join("xa"));

var arr_2=["Я","иду","домой"];
delete arr_2[2];

alert(arr_2[2])//undef

//splice
var arr_2=["Я","иду","домой"];
//arr_2.splice(1,1);
arr_2.splice(0,2,"Мы","идем");
arr_2.splice(2,0,"Мы","идем");

var arr_3=[1,2,3];
arr_3.reverse();//321

var arr_4=arr_2.concat(3,4);
alert(arr_4);

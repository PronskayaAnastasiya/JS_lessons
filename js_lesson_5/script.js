//Условные операторы if,if else, ?
var year = prompt('Какой сейёчас год?','');
if(year==2022){
    alert('Правильно!')
}
else{
    alert('Не правильно. У вас есть машина времени?')
}

var a=prompt('Введите а:',0);
var b=prompt('Введите b:',0);
var result_1=(+a + +b<4)?'Мало':'Много';
alert(result_1);

var login=prompt('Введите login:','');
var message=(login=='Сотрудник')?'Привет':(login=='Директор')? 'Здравствуйте':(login=='')?'Нет логина':'';
alert(message);
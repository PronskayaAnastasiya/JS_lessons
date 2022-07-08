//функции
var username="Alex";//глобальная переменная
function showMessage(){
    
    username="John";
    let message="Пока "+username;//локальная переменная 
    alert(message);

}
showMessage();
showMessage();

function calcD(a,b,c){
    return b*b-4*a-c;
}
var test=calcD(-4,2,1);
alert(test);
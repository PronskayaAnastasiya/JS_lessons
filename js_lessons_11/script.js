//Перебор свойств объекта


var menu={
    width:400,
    height:200,
    title:"menu"
};
for(var key in menu){
    //alert("Ключ: "+key+" Значение: "+menu[key]);
}
var caunter=0;
for(var key in menu){
    caunter++;
}
//alert("Количество свойств в menu: "+caunter);

var codes={
    "5":"Poland",
    "3":"USA",
    "73":"Ukraine"
};
for(var code in codes){
    //alert(code);
}
var person={
    name:"Roma",
    surname:"Petrow"
};
person.age=25;
for(var prop in person){
    //alert(prop);
}
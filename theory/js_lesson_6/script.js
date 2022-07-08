//циклы while for

var i=0;
while(i<3){
    alert(i);
    i++;
}
 while(i){
     alert(i);
     i--;
 }
 for(var i=0;i<3;i++){
     alert(i);
 }

 var sum=0;
 for(;;){
     var value=+prompt("Введите число:");
     if(!value) break;
     sum+=value;
 }
 alert('Сумма '+sum);

 for(var i=0;i<10;i++){
    if(i%2==0)continue;
    alert(i);
}

outer:for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        var input=prompt(`Значение на координатах (${i},${j})`, '');
        if(!input)break outer;
    
    }
}
alert('Готово!')

for(var i=0;i<=10;i++){
    if(i%2!=0)continue;
    alert(i);
}

var k=0;
while(k<3){
    alert( `number ${k}!` );
    k++;
}

do{
    var num_1=-+prompt('Введите число:','');
}while(num_1<100||num_1==''||num_1==null);
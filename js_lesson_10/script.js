//Объекты
var myFriend={
    "name":"Alex",
    "legs": 2,
    "friends": 50,
    "the drink":"whater"
};
//alert(myFriend.name);
myFriend.name="Denis";
//alert(myFriend.name);
 var nameOfFriend=myFriend["the drink"];
 //alert(nameOfFriend);
 myFriend["game"]="football";
 delete myFriend.game;

 var testObj={
     12:"Kirill",
     15:"David",
     25:"Alex"
 }
;

var playerNumber=15;
var player=testObj[playerNumber];
//alert(player);

var myStorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"Jack"
        }
    }
};
alert(myStorage.car.outside.trunk);

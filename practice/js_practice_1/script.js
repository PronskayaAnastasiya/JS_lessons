//работаем с input
const chbox = document.getElementById('chbox');
console.log(chbox);


//chbox.addEventListener('onchange',getText);
const getText = () => {
    if(chbox.checked){
        alert('Выбран');
    } else{
        alert('Не выбран');
    }
};
let count = 0;//счётчик
let btn = document.getElementById('btn')//душка кнопки
function btnClick(){//при нажатии
    count +=1;//счётчик увеличивается
    btn.innerHTML = count//в кнопку записывается значение счетчика

}
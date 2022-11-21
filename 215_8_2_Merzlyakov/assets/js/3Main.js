
let btn = document.getElementById('btn');//находим кнопку
btn.addEventListener('click', function (event) {//привязываем обработчик события click
    event.preventDefault(); //теперь при каждом нажатии кнопки наша страница не будет обноляться
    let form = document.getElementsByTagName('input');//записываем все inputы в список
    let count = 0;//счётчик
   for (let i = 0; i < form.length; i++ ){
        count += Number(form[i].value)//цикл for добавляет каждое значение inputа к count
    }
    alert(count)//выводим значение счётчика

});
//Считываем 'души' наших объектоув
let table = document.querySelector("table");
let names = document.querySelector(".name");
let surname = document.querySelector(".surname");
let btn = document.querySelector("button");
// функция редактирования ячеек
table.onclick = function(event){
    let target = event.target;//записываем яцейку на которую нажали
        if(target.tagName != 'TD') return;//если нажали не по ячейке игноируем 
        if(target.tagName == 'TD') {
            target.innerText = prompt("Изменить",target.innerText);//вставляем туда текст который ввёл пользователь
        }
    }
//функция добавления строк
btn.onclick = function() {
    let tr = document.createElement("tr");//создаём строку
    if(names.value != "" && surname.value != "") {//проверяем не пустые ли они
        tr.innerHTML = `<td>${names.value}</td><td>${surname.value}</td>`;//добавляем текст в строку
        table.appendChild(tr);//добавляем строку в таблицу
    }
}

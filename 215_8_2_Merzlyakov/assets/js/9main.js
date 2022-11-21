let ul = document.getElementById("ul");
let btn = document.getElementById('btn');
//собираем души
ul.addEventListener("click", function exclamation(event) {//добавляем обработсик событий на ul 
	let li = event.target.closest("li");
	if (li) {//добавляем только если кликнуои на li
		li.innerHTML +="!"; //добавляем !
 	}
});
btn.addEventListener("click", function() {
	let elem = document.createElement("li");//создаем li
	elem.innerHTML = "пункт";//вставляем текст
	ul.appendChild(elem);//добавляем в крнце списка
});

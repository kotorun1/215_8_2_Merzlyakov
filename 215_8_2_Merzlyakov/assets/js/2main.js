
let btn = document.getElementById('btn');
btn.addEventListener("click",ramber);//вешаем обработчик кликов
function ramber() {
if ((window.innerWidth - document.documentElement.clientWidth) > 0) {//если вся высота документа больше выстоы окна
			alert("Имеется");
		} else {
			alert('Отсутствует');
		}//отчитываемся
}
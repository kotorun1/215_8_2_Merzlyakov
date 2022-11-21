let elems = document.getElementsByTagName('a');//список ссылок
for (let i = 0; i < elems.length; i++) {//проходим по списку
	elems[i].addEventListener('mouseover', viting);//вешаем обработчик когда мышь уйдет
}
function viting() {
	this.innerHTML = this.innerHTML + ' (' + this.href + ')';//добавляем 'элементу на который навелись его сслыку
}
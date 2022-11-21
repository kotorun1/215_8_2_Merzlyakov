function btnClick(){
    let parent = document.querySelector('#parent');//находим родителя
    let li = document.createElement('li');//создаём li
	li.innerHTML = 'пункт';//записываем туда текст
	parent.appendChild(li);}//добавляем li к родителю
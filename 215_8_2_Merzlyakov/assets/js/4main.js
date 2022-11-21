let countries = document.querySelector('#countries');//собираем души
let ruCities = document.querySelector('#rus'); 
let byCities = document.querySelector('#chi'); 
let uaCities = document.querySelector('#bri'); 
countries.addEventListener('change', function() { //привязываем обработчик
    document.querySelector('.active.cities').classList.remove('active'); //удвляем всю активность
//усли элемент выбран ему добавляется класс актив, display none удаляется
    if(this.value == 'ru') { 
        ruCities.classList.add('active'); 
    } 
    if(this.value == 'us') { 
        byCities.classList.add('active'); 
    } 
    if(this.value == 'jp') { 
        uaCities.classList.add('active'); 
    } 
}); 
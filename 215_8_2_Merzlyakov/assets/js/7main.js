document.querySelectorAll('p').forEach(p => {
  p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2));
})

//cчитываются все параграфы
//прик лики на параграф его текст на его текст в квадрате


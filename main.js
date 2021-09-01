let numbers = document.querySelectorAll('.num');
let target = document.getElementById('target');
let reset = document.getElementById('reset');
let del = document.getElementById('delete');
let equal = document.getElementById('equal');
let state = false;
numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        let n = document.createTextNode(btn.value);
        if (target.textContent.length < 10) {
            target.appendChild(n);
        };
    });
}
);
del.addEventListener('click', () => {
    target.textContent = '';
})
reset.addEventListener('click', () => {
    target.textContent = '';
})
equal.addEventListener('click', () => {
    let expression = target.textContent;
    s = expression.match(/[0-9\(\)\+\-\*\./\"]/gi) || [];
    let n = s.toString().replaceAll(',', '');
    console.log(n);
    target.textContent = (new Function('return ' + n))();
    state = true;
});
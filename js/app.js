const stringS = prompt('Enter the string:');
let stringN = stringS.split(',');
console.log('stringS', stringS);
console.log('stringN', stringN);
// let stringNum = stringN.filter(el=>Number(el));
let stringNum = [];
for (key in stringN) {
    if (Number(stringN[key])) {
        stringNum.push(Number(stringN[key]));
    }
}

let max = 0, min = 0, total = 0, avg = 0;
min = Math.min(...stringNum);
max = Math.max(...stringNum);
total = stringNum.reduce((acc, cur) => { return acc + cur });
avg = total / stringNum.length;
console.log('max', max, 'min', min, 'total', total, 'avg', avg);

// let foo = (teg, info, num) => {
//     let elem = document.createElement(teg);
//     elem.innerHTML = `${info}: ${num}`;
//     return elem;
// }
// let li1 = foo('li', 'min', min);
// let li2 = foo('li', 'max', max);
// let li3 = foo('li', 'total', total);
// let li4 = foo('li', 'avg', avg);
// // let li = document.createElement('li');
// // li.innerHTML = `min: ${min}`;
// // let li2 = document.createElement('li');
// // li2.innerHTML = `max: ${max}`;
// // let li3 = document.createElement('li');
// // li3.innerHTML = `total: ${total}`;
// // let li4 = document.createElement('li');
// // li4.innerHTML = `avg: ${avg}`;
// let ul = document.createElement('ul');
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// document.getElementById('app').appendChild(ul);

// let input = document.createElement('input');
// input.setAttribute('type', 'text');
// input.setAttribute('onchange', 'alert(stringS)');
// let button = document.createElement('input');
// button.setAttribute('type', 'button');
// button.setAttribute('value', 'button');
// document.getElementById('app').appendChild(input);
// document.getElementById('app').appendChild(button);


{/* <input type="text" onchange="alert(this.value)">alert(this.value)
<input type="button" value="Кнопка"></input> */}
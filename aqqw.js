const arr = [10, 12, 15, 21];
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
setTimeout(function () {
    for (var i = 0; i < arr.length; i++) {
        text.innerHTML += 'Index: ' + i + ', element: ' + arr[i] + '<br/>';
    }
}, 3000);

let fun = 0; 
setTimeout(function nn() {
    text2.innerHTML += 'Index: ' + fun + ', element: ' + arr[fun] + '<br/>';
    if (fun < arr.length - 1) {
        fun++;
        nn();
    };
}, 1000);


const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000 * i);
}
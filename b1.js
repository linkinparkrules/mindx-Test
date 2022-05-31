let reveal = document.getElementById("revealNum");
let a = prompt("please enter the first number");
let b = prompt("please enter the second number");
// loại hết các trường hợp số thập phân, chữ cái
if (a != parseInt(a) || b != parseInt(b)) {
    reveal.innerText = "please enter an integer number";
} else if (a < b) {
    reveal.innerText = "the prime numbers are: "
    for (j = a; j <= b; j++) {
        // count đếm những số j chia hết
        let count = 0;
        // đếm từ 1 đến căn bậc 2 của j (j là các số từ a đến b)
        for (i = 1; i <= Math.sqrt(j); i++) {
            // nếu j chia hết cho i thì +1 count. count mà bằng 1 thì đây là số nguyên tố, vì ta ko đếm đến số "chính nó" nữa
            if (j % i == 0) {
                count++;
            }
        }
        // số nguyên tố sẽ chỉ chia hết cho 1 và chính nó. ở đây ta chỉ lấy những số ko phải là 1 và số chỉ chia hết cho 1 
        if (count == 1 && j != 1) {
            reveal.innerText += " " + j;
        }
    }
} 
else if (a > b) {
    reveal.innerText = "the prime numbers are: "
    for (j = b; j <= a; j++) {
        let count = 0;
        for (i = 1; i <= Math.sqrt(j); i++) {
            if (j % i == 0) {
                count++;
            }
        }
        if (count == 1 && j != 1) {
            reveal.innerText += " " + j;
        }
    }
} else {
    reveal.innerText = "the prime numbers are: "
    let count = 0;
        for (i = 1; i <= Math.sqrt(a); i++) {
            if (a % i == 0) {
                count++;
            }
        }
        if (count == 1 && a != 1) {
            reveal.innerText += " " + a;
        }
}

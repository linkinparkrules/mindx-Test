// let triangle = document.getElementById("triangle");

let intNum = prompt("please enter an integer number from 1 to 10");
function numberOneTriangle(intNumber) {
    // this.intNumber = intNum;
    // triangle.innerText = "";
    if (intNumber != parseInt(intNumber) || intNumber < 1 || intNumber > 10) {
        // triangle.innerText = "please enter right!";
        console.log("please enter right!");
    } else {
        // let xuongDong = document.createElement("br");
        // let countStar = 0;
        let star = "";
        for (i = 1; i <= intNumber; i++) {
            // triangle.innerText += "*" ;
            
            // countStar++;
            // if (countStar < i) {
            //     continue;
            // } else {
            //     triangle.appendChild(xuongDong);
            //     countStar = 0;
            // }
            star += "*";
            console.log(star);
        }
    }

    return intNumber;
}

numberOneTriangle(intNum);

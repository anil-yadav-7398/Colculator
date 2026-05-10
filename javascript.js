
let display = document.getElementById("ip");
let btn = document.querySelectorAll("button");
let first = "";
let second = "";
let operator = "";
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener("click", function () {
        let value = btn[index].innerText;
        if (!isNaN(value)) {
            if (operator == "") {
                first += value;
                display.value = first
            }
            else {
                second += value;
                display.value = first + operator + second;
            }
        }
        else if (value == "+" || value == "-" || value == "/" || value == "*" || value == "%") {
            operator = value;
            display.value = first + operator;
        }
        else if (value == "=") {
            let result;
            switch (operator) {
                case "+":
                    result = Number(first) + Number(second);
                    break;
                case "-":
                    result = Number(first) - Number(second);
                    break;
                case "*":
                    result = Number(first) * Number(second);
                    break;
                case "/":
                    result = Number(first) / Number(second);
                    break;
                case "%":
                    result = Number(first) % Number(second);
                    break;
                default:
                    display.value = "default";
            }


            display.value = result;
            first = result.toString();
            second = "";
            operator = "";

        }
        else if (value == "C") {
            first = "";
            second = "";
            operator = "";
            display.value = "0";
        }

        else if (value == "X") {
            display.value = display.value.slice(0, -1);
            first = "";
        } else {
            display.value += value;

        }
    });

}

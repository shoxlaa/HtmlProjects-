import $ from "jquery";

$(function f() {

    let routes: Map<string, () => void> = new Map<string, () => void>();
    routes.set("/HtmlProjects-/LastPractice/pages/index.html", () => {
        let button = $(".box");
        let text = $("#input-value");

        let a: string = "";
        let b: string = "";
        let operator: string = "";
        let isNum = new RegExp(/[0-9]/);


        button.on("click", function () {
            let buttonValue = getButtonValue($(this));

            if (buttonValue === ".") {
                if(text.val().toString().charAt(text.val().toString().length-1)===".")
                {
                    return;
                }
            }
            if ((isNum.test(buttonValue)||buttonValue===".") && operator === "") {
                a += buttonValue;
                console.log("a added" + a);

            }
            if ((isNum.test(buttonValue)||buttonValue===".") && operator !== "") {
                b += buttonValue;
                console.log("b added" + b);

            }

            if (buttonValue === "+" || buttonValue === "-" || buttonValue === "/" || buttonValue === "X" || buttonValue === "%"|| buttonValue === "^") {

                if (operator !== "" || text.val()==="") {
                    return;
                }
                operator = buttonValue;
                console.log("operator added" + operator);

            }
            if (buttonValue === "C") {
                a = "";
                b = "";
                operator = ""
                text.val("");
                return;
            }
            if (buttonValue === "=") {
                console.log(a);
                console.log(b);
                let calculator = new Calculator(parseFloat(a), operator.toString(), parseFloat(b));
                let res = calculator.calculate();
                text.val(res.toString());
                a = res.toString();
                operator = "";
                b = "";
                return;
            }

            text.val(text.val() + buttonValue);

        });
    });
    let result = routes.get(window.location.pathname);
    if (result !== undefined) {
        result();
    }
});

function getButtonValue(item: JQuery<HTMLElement>) {
    return item.text();
}


export class Calculator {
    a: number;
    operator: string;
    b: number;

    constructor(_a: number, _operator: string, _b: number) {
        this.a = _a;
        this.b = _b;
        this.operator = _operator;
    }

    calculate() {

        if (isNaN(this.a) || isNaN(this.b)) {
            return "error";

        }
        switch (this.operator) {
            case"+": {
                return this.a + this.b;
            }
            case"-": {
                return this.a - this.b;
            }
            case"/": {
                if (this.b === 0) {
                    return "error";
                } else {
                    return this.a / this.b;
                }
            }
            case "X": {

                return this.a * this.b;
            }
            case "%": {

                return this.a * (this.b / 100);
            }
            case"^":
            {
                let l=1;
                for (let i = 0; i < this.b; i++) {

                    l*=this.a

                }
                return l;
            }
        }
    }
}
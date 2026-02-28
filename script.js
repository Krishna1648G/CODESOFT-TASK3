let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let value = button.textContent;

        // Clear
        if (value === "C") {
            input = "";
            display.value = "";
        }

        // Backspace
        else if (value === "⌫") {
            input = input.slice(0, -1);
            display.value = input;
        }

        // Percentage
        else if (value === "%") {
            if (input !== "") {
                input = (parseFloat(input) / 100).toString();
                display.value = input;
            }
        }

        // Equal
        else if (value === "=") {
            try {
                input = eval(input);
                display.value = input;
            } 
            catch {
                display.value = "Error";
                input = "";
            }
        }

        // Other buttons (numbers & operators)
        else {
            input += value;
            display.value = input;
        }

    });

});
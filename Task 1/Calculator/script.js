let input = document.getElementById('inputBox');

let buttons = document.querySelectorAll('button');



let expression = "";

let arr = Array.from(buttons);



arr.forEach(button => {

    button.addEventListener('click', (e) => {

        const buttonText = e.target.innerHTML;



        if (buttonText === '=') {

            try {

                // Evaluate the expression and update the input box

                expression = eval(expression);

                input.value = expression;

            } catch (error) {

                // Handle errors (e.g., invalid expressions)

                input.value = "Error";

                expression = "";

            }

        } else if (buttonText === 'C') {

            // Clear the input

            expression = "";

            input.value = expression;

        } else if (buttonText === 'DEL') {

            // Delete the last character

            expression = expression.substring(0, expression.length - 1);

            input.value = expression;

        } else if (buttonText === '%') {

            // Handle percentage calculation

            if (expression) {

                // Convert the expression to a percentage

                expression += '/100';

                input.value = expression;

            }

        } else {

            // Append the clicked button's text to the expression

            expression += buttonText;

            input.value = expression;

        }

    });

});

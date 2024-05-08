let string = "";
let memory = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string; 
            } catch (error) {
                console.error('Invalid expression:', error);
            }
        }
        else if (e.target.innerHTML === 'C') {
            try {
                string = "";
                document.querySelector('input').value = string; 
            } catch (error) {
                console.error('Invalid expression:', error);
            }
        }
        else if (e.target.innerHTML === 'M+') {
            memory += parseFloat(string) || 0; // Add the current value to memory
            string = ""; // Reset string after adding to memory
            document.querySelector('input').value = memory;
        } else if (e.target.innerHTML === 'M-') {
            memory -= parseFloat(string) || 0; // Subtract the current value from memory
            string = ""; // Reset string after subtracting from memory
            document.querySelector('input').value = memory;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

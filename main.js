function obatainedsearch() {

    const obtainedMarks = document.getElementById('obtained_marks').value;
    const gradeLabels = document.querySelectorAll('.circle_marks label');

    if (obtainedMarks < 0 || obtainedMarks > 100 || isNaN(obtainedMarks)) {
        window.location.assign("Poppup.html");

        return;
    }

    gradeLabels.forEach(label => {
        label.style.backgroundColor = '';
        label.style.color = '';
    });

    let color;
    if (obtainedMarks >= 90) {
        color = 'green';
        gradeLabels[0].style.backgroundColor = color;
        gradeLabels[0].style.color = 'white';
    } else if (obtainedMarks >= 80) {
        color = 'blue';
        gradeLabels[1].style.backgroundColor = color;
        gradeLabels[1].style.color = 'white';
    } else if (obtainedMarks >= 70) {
        color = 'orange';
        gradeLabels[2].style.backgroundColor = color;
        gradeLabels[2].style.color = 'white';
    } else if (obtainedMarks >= 60) {
        color = 'yellow';
        gradeLabels[3].style.backgroundColor = color;
        gradeLabels[3].style.color = 'black';
    } else if (obtainedMarks >= 50) {
        color = 'purple';
        gradeLabels[4].style.backgroundColor = color;
        gradeLabels[4].style.color = 'white';
    } else {
        color = 'red';
        gradeLabels[5].style.backgroundColor = color;
        gradeLabels[5].style.color = 'white';
    }
}


function loginbtn(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

        if(user == "naqi@gmail.com" && pass == "7089"){
            window.location.assign("index.html");
        }
        else{
            alert("Something went wrong");
        }

}

function logout(){
    window.location.assign("loginpage.html");
}


const inputBox = document.querySelector('input[name="cal"]');

let currentInput = "";
let previousInput = "";
let operator = "";

function updateDisplay(value) {
    inputBox.value = value;
}

function numberClick(value) {
    if (value === '.' && currentInput.includes('.')) return;
    currentInput += value;
    updateDisplay(currentInput);
}


function operatorClick(op) {
    if (currentInput === "") return; 
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case 'X':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}

function clearCurrent() {
    currentInput = "";
    updateDisplay("0");
}

function clearAll() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('operator')) {
            if (value === 'AC') {
                clearAll();
            } else if (value === 'C') {
                clearCurrent();
            } else if (value === '=') {
                calculate();
            } else {
                operatorClick(value);
            }
        } else {
            numberClick(value);
        }
    });
});


function calculator(){
    document.getElementById("container").style.transition = "0.5s";
    document.getElementById("calculator_box").style.display = "flex";
    document.getElementById("container").style.filter = "blur(20px)";
  
}

function closewin(){
    document.getElementById("calculator_box").style.display = "none";
    document.getElementById("container").style.filter = "blur(0)";
    document.getElementById("container").style.transition = "0.5s";
}


document.getElementById("eye").addEventListener("click", function() {
    let pass = document.getElementById("password");
    let eye = document.getElementById("eye");

    if(pass.type === "password"){
        pass.type = "text";
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
    }
    else{
        pass.type = "password";
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    }
})
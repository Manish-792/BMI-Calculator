

function bmi()
{
    const h = document.getElementById("height");
    const num1 = Number(h.value);

    const w = document.getElementById("weight");
    const num2 = Number(w.value);

    if (!num1 || !num2) {
        alert("Please enter valid height and weight values.");
        return;
    }
    // BMI Calculation
    const heightInMeters = num1/100;

    const result = num2 / (heightInMeters*heightInMeters);

    const ans = document.getElementById("result");
    ans.innerHTML = `Result : ${result.toFixed(2)}`;

    const popup = document.getElementById("popup");

    if(result < 18.5)
    {
        popup.innerHTML = "UnderWeight";
        popup.style.backgroundColor = "red";
        popup.style.border = "3px solid rgba(128,128,128,0.5);"
    }
    else if(result >= 18.5 && result <= 24.9)
    {
        popup.innerHTML = "Optimum Weight";
        popup.style.backgroundColor = "green";
        popup.style.border = "3px solid rgba(128,128,128,0.5);"
    }
    else
    {
        popup.innerHTML = "OverWeight";
        popup.style.backgroundColor = "red";
        popup.style.border = "3px solid rgba(128,128,128,0.5);"
    }

}

const button = document.querySelector("button");

button.addEventListener('click',bmi);

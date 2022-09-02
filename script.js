const udRate = document.getElementById("rate");
function compute()
{
    // Select principal amount and element
    const principal = document.getElementById("principal").value;
    const principalElement = document.getElementById("principal");

    // Since principal cannot be 0 or negative, check for it.
    if (principal <= 0)
    {
        alert("Please enter a non-zero positive number");
        principalElement.focus();
        return;
    }

    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const finalResult = document.getElementById("result");

    // Formula to calculate interest
    const interest = (principal * years * rate) / 100;
    const year = new Date().getFullYear() + parseInt(years);

    // Change the innerHTML to show final result
    finalResult.innerHTML = `${interest}<br>If you deposit ${principal},<br>
                        at an interest rate of ${rate}%.<br>
                        You will receive an amount of ${parseInt(principal) + interest},<br>
                        in the year ${year}`
}

// Function to update values as slider changes
function updateRate()
{
    const rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = rateval + "%";
}
udRate.addEventListener('click', (e) => {
    updateRate();
});

function calculateLoan() {
    let amount = parseFloat(document.getElementById("amount").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let duration = parseFloat(document.getElementById("duration").value);
    let type = document.getElementById("durationType").value;
    
    if (!amount || !interest || !duration) {
        document.getElementById("result").innerText = "Please fill all fields.";
        return;
    }

    let months;

    if (type === "years") {
        months = duration * 12;
    } else {
        months = duration;
    }

    let monthlyInterest = interest / 100 / 12;

    let monthlyPayment =
        (amount * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -months));

    document.getElementById("result").innerText =
        "Monthly Payment: " + monthlyPayment.toFixed(2) + " €";
}
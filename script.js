function toggleCalculatorVisibility(show) {
    let calculator = document.getElementById("calculator");
    calculator.style.display = show ? "block" : "none";
}

function handleInfoBubble(show, infoId) {
    document.getElementById(infoId).style.display = show ? "block" : "none";
}

document.getElementById("num1").addEventListener("mouseover", function() {
    handleInfoBubble(true, "num1-info");
});

document.getElementById("num1").addEventListener("mouseout", function() {
    handleInfoBubble(false, "num1-info");
});

document.getElementById("num2").addEventListener("mouseover", function() {
    handleInfoBubble(true, "num2-info");
});

document.getElementById("num2").addEventListener("mouseout", function() {
    handleInfoBubble(false, "num2-info");
});

document.getElementById("operation").addEventListener("mouseover", function() {
    handleInfoBubble(true, "operation-info");
});

document.getElementById("operation").addEventListener("mouseout", function() {
    handleInfoBubble(false, "operation-info");
});

document.getElementById("calculator").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    // Récupérer les valeurs du formulaire
    let operation = document.getElementById("operation").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Effectuer le calcul
    let result;
    switch (operation) {
        case "addition":
            result = num1 + num2;
            break;
        case "soustraction":
            result = num1 - num2;
            break;
        case "multiplication":
            result = num1 * num2;
            break;
        case "division":
            result = num1 / num2;
            break;
        default:
            result = "ERROR";
    }
    // Afficher le résultat dans une alerte
    alert(num1 + " " + operation + " " + num2 + " = " + result);

    // Appeler la fonction pour basculer la visibilité
    toggleCalculatorVisibility(true);
});
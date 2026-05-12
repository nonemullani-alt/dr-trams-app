function checkSymptom() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let result = document.getElementById("result");

    if (input.includes("fever")) {
        result.innerText = "Aapko bukhar ho sakta hai. Paani zyada piyo.";
    } 
    else if (input.includes("headache")) {
        result.innerText = "Headache ho sakta hai. Rest lo.";
    } 
    else {
        result.innerText = "Symptom samajh nahi aaya.";
    }
}
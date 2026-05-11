let ruleCount = 0;

// Page load hone pe saved rules load karo
window.onload = function () {
    let savedRules = JSON.parse(localStorage.getItem("rules")) || [];
    savedRules.forEach(rule => {
        addRuleToList(rule);
    });
    ruleCount = savedRules.length;
};

// Rule add function
function addRule() {
    let input = document.getElementById("ruleInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Rule likho pehle!");
        return;
    }

    ruleCount++;
    let ruleText = "Rule " + ruleCount + ": " + value;

    addRuleToList(ruleText);
    saveRule(ruleText);

    input.value = "";
}

// List me add karna
function addRuleToList(text) {
    let list = document.getElementById("ruleList");

    let li = document.createElement("li");
    li.innerText = text;

    // Delete button
    let btn = document.createElement("button");
    btn.innerText = "❌";
    btn.style.float = "right";

    btn.onclick = function () {
        li.remove();
        deleteRule(text);
    };

    li.appendChild(btn);
    list.appendChild(li);
}

// Save to localStorage
function saveRule(rule) {
    let rules = JSON.parse(localStorage.getItem("rules")) || [];
    rules.push(rule);
    localStorage.setItem("rules", JSON.stringify(rules));
}

// Delete from localStorage
function deleteRule(rule) {
    let rules = JSON.parse(localStorage.getItem("rules")) || [];
    rules = rules.filter(r => r !== rule);
    localStorage.setItem("rules", JSON.stringify(rules));
}

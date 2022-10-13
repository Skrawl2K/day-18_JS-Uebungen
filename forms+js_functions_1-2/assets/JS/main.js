function calcAge() {
    const calc = document.getElementById("birthyear").value;
    const subtract = 2022 - calc
    console.log(subtract);
    document.getElementById("output").innerHTML = subtract;
}
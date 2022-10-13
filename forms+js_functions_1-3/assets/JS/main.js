function calcdiff() {
    const calc1 = document.getElementById("age1").value;
    const calc2 = document.getElementById("age2").value;
    const modulu = calc1 % calc2
    console.log(modulu);
    document.getElementById("output").innerHTML = modulu;
}
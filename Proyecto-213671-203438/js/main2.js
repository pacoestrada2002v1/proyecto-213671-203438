const tarjeta = document.querySelector("#tarjeta"),
      btnAbrirFormulario = document.querySelector("#btn-abrir-formulario"),
      formulario = document.querySelector("#formulario-tarjeta"),
      numeroTarjeta = document.querySelector("#tarjeta .numero"),
      nombreTarjeta = document.querySelector("#tarjeta .nombre"),
      logoMarca = document.querySelector("#logo-marca"),
      firma = document.querySelector("#tarjeta .firma p"),
      mesExpiracion = document.querySelector("#tarjeta .mes"),
      yearExpiracion = document.querySelector("#tarjeta .year"),
      ccv = document.querySelector("#tarjeta .ccv");
      
const mostrarFrente = () => {
    if (tarjeta.classList.contains("active")) {
        tarjeta.classList.remove("active");
    }
}

tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("active");
});
btnAbrirFormulario.addEventListener("click", () => {
    btnAbrirFormulario.classList.toggle("active");
    formulario.classList.toggle("active");
});
// seleccion de mes
for(let i = 1; i <= 12; i++){
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);

}
// seleccion de año
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}
// input numero de tarjeta
formulario.inputNumero.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
    .replace(/\s/g, "")
    .replace(/\D/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
    numeroTarjeta.textContent = valorInput;
    //localStorage.getItem("nombre", numeroTarjeta);

    if (valorInput = "") {
        numeroTarjeta.textContent = "#### #### #### ####";

        logoMarca.innerHTML = "";
    }

    if (valorInput[0] == 4){
        logoMarca.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = "img/logos/visa.png";
        logoMarca.appendChild(imagen);
    }else if (valorInput[0] == 5){
        logoMarca.innerHTML = "";
        const imagen = document.createElement("img");
        imagen.src = "img/logos/mastercard.png";
        logoMarca.appendChild(imagen);
    }

    mostrarFrente();
    //localStorage.setItem("nombre", numeroTarjeta);
    //console.log(localStorage.getItem(inputNumero));

});
formulario.inputNombre.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, "");
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == "") {
        nombreTarjeta.textContent = "Emmanuel Es";
    }

    mostrarFrente();
    //localStorage.setItem("nombre", firma);
})

formulario.selectMes.addEventListener("change", (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
   // localStorage.setItem("nombre", mesExpiracion);
});
formulario.selectYear.addEventListener("change", (e) => {
    yearExpiracion.textContent = e.target.value;
    mostrarFrente();
    //localStorage.setItem("nombre", yearExpiracion);
});

formulario.inputCCV.addEventListener("keyup", () => {
    if (!tarjeta.classList.contains("active")) {
        tarjeta.classList.toggle("active");
    }

    formulario.inputCCV.value = formulario.inputCCV.value
    .replace(/\s/g, "")
    .replace(/\D/g, "");

    ccv.textContent = formulario.inputCCV.value;
    //localStorage.setItem("nombre", ccv);
});
//const tgr = [numeroTarjeta, nombreTarjeta];


//localStorage.setItem("nombre", numeroTarjeta, firma);

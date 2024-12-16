const c = document.getElementById("c");
const ce = document.getElementById("ce");
const backspace = document.getElementById("backspace");
const div = document.getElementById("div");
const mult = document.getElementById("mult");
const resta = document.getElementById("resta");
const suma = document.getElementById("suma");
const igual = document.getElementById("igual"); 
const coma = document.getElementById("coma");

// Obtener referencia al input de resultado
const resultado = document.getElementById("resultado");
const oper = document.getElementById("operacion");

// Variables para almacenar los números y operación
let primerNumero = "";
let operacion = "";
let nuevoNumero = false;

// Función para agregar dígito
function agregarDigito(digito) {
    if(nuevoNumero) {
        resultado.value = digito;
        nuevoNumero = false;
    } else {
        if(resultado.value === "0" && digito !== ".") {
            resultado.value = digito;
        } else {
            resultado.value += digito;
        }
    }
}

// Agregar listeners para números
for(let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", () => agregarDigito(i.toString()));
}

// Función para operaciones
function operador(op) {
    primerNumero = resultado.value;
    operacion = op;
    oper.textContent = op;
    nuevoNumero = true;
}

// Agregar listeners para operadores
suma.addEventListener("click", () => operador("+"));
resta.addEventListener("click", () => operador("-")); 
mult.addEventListener("click", () => operador("x"));
div.addEventListener("click", () => operador("÷"));



// Función calcular resultado
igual.addEventListener("click", () => {
    if(operacion !== "") {
        const segundoNumero = resultado.value;
        let total = 0;
        
        switch(operacion) {
            case "+":
                oper.textContent = "+";
                total = parseFloat(primerNumero) + parseFloat(segundoNumero);
                break;
            case "-":
                oper.textContent = "-";
                total = parseFloat(primerNumero) - parseFloat(segundoNumero);
                break;
            case "x":
                oper.textContent = "x";
                total = parseFloat(primerNumero) * parseFloat(segundoNumero);
                break;
            case "÷":
                oper.textContent = "÷";
                total = parseFloat(primerNumero) / parseFloat(segundoNumero);
                break;
        }
        
        resultado.value = total;
        operacion = "";
        nuevoNumero = true;
    }
});

// Función limpiar
c.addEventListener("click", () => {
    resultado.value = "0";
    primerNumero = "";
    operacion = "";
    oper.textContent = "";
    nuevoNumero = false;
});

// Función CE (Clear Entry)
ce.addEventListener("click", () => {
    resultado.value = "0";
    oper.textContent = "";
});

// Función retroceso
backspace.addEventListener("click", () => {
    if(resultado.value.length > 1) {
        resultado.value = resultado.value.slice(0, -1);
    } else {
        resultado.value = "0";
        oper.textContent = "";
    }
});

// Función para la coma decimal
coma.addEventListener("click", () => {
    if(!resultado.value.includes(".")) {
        if(nuevoNumero) {
            resultado.value = "0.";
            nuevoNumero = false;
        } else {
            resultado.value += ".";
        }
    }
});



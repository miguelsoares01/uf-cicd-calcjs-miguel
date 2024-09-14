**função adição**:
```
// Função de adição
function add(a, b) {
return a + b;
}
// Exportar as funções
module.exports = {
add,
subtract
};

// Função de multiplicação
function multiply(a, b) {
return a * b;
}
// Exportar as funções
module.exports = {
add,
subtract,
multiply
};

// Função de divisão
function divide(a, b) {
if (b === 0) {
throw new Error("Divisão por zero não é permitida.");
}
return a / b;
}
// Exportar as funções
module.exports = {
add,
subtract,
divide,
};





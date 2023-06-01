function contemTodosCaracteres(string1, string2) {
    const str1 = new Set(string1.toLowerCase());
    const str2 = new Set(string2.toLowerCase());

    for (let letra of str1) {
        if (!str2.has(letra)) {
            return false;
        }
    }
    return true;
}

const palavra1 = "Olá mundo";
const palavra2 = "Olá mundo";

const resultado = contemTodosCaracteres(palavra1, palavra2);
console.log(resultado);
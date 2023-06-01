function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere == caractereBuscado).length
}

console.log(contarCaractere("s","a sorte favorece os audazes"))
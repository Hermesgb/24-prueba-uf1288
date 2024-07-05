function comprobador(array) {
    for (i = 0; i < array.length; i++) {
        let suma = array[i][0] + array[i][1] + array[i][2] + array[i][3] + array[i][4] + array[i][5] + array[i][6] + array[i][7];
        let bitCorrector = array[i][8];
        if ((suma % 2 == 0) && (bitCorrector == 0)) {
            console.log(array[i] + " CORRECTO")
        } else if ((suma % 2 == 0) && (bitCorrector == 1)) {
            console.log(array[i] + " INCORRECTO")
        } else if ((suma % 2 !== 0) && (bitCorrector == 0)) {
            console.log(array[i] + " INCORRECTO")
        } else if ((suma % 2 !== 0) && (bitCorrector == 1)) {
            console.log(array[i] + " CORRECTO")
        }

    }
}

let matriz = [
    [1, 0, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 1, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1],
]

comprobador(matriz)

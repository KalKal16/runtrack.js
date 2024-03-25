function NombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (NombrePremier(nombre1) && NombrePremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}


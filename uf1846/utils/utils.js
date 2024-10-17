const fs = require('fs');

/**
 * Logs a request to a file named in the format "YYYY-MM-DD.txt".
 * The log message will include the queried social security number (SSN).
 * If the file doesn't exist, it will be created. If it exists, the log will be appended.
 *
 * @param {string} ssn - The social security number being queried.
 */


function logRequest(ssn) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const fileName = `${year}-${month}-${day}.txt`;
    const logMessage = `Se consulta el número de la seguridad social ${ssn}\n`;

    // Escribir en el archivo (agregando al final del archivo, o creándolo si no existe)
    fs.appendFile(fileName, logMessage, (err) => {
        if (err) {
            console.error('Error al registrar la consulta', err);
        } else {
            console.log(`Registro escrito en el archivo ${fileName}`);
        }
    });
}

module.exports = {
    logRequest
}
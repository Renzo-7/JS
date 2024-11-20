const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const usuario = os.userInfo().username;

let rutaDocumentos;

if (os.platform() === "win32") {
  rutaDocumentos = path.join("C:", "Users", usuario, "Documents");
}

const contenido = "Hola Alumnos";

const archivoPath = path.join(rutaDocumentos, "miArchivoCoder.txt");

fs.writeFile(archivoPath, contenido, (err) => {
  if (err) {
    console.log("Error al crear el archivo");
  } else {
    console.log("Archivo guardado existosamente en Documentos: ", archivoPath);
  }
});

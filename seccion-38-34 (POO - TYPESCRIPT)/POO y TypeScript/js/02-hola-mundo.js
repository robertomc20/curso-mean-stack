console.log("Hola Mundo con TypeScript cambiando");
alert("Hola Mundo con TS");
//para traspilarlo a JS, desde el cmd, en el directorio en donde esta este archivo, se le pone tsc "archivo.tc"
//eso crea el mismo archivo pero en js de forma compatible para todos los navegadores, y ese es el que se ocupa
//en el html. (SE USA EL ARCHIVO TRASPILADO, EL JS)
//CADA VEZ QUE SE HACE UN CAMBIO EN EL TS, HAY QUE HACER TSC "archivo.tc" para que se actualice
//A MENOS QUE EN LA CONSOLA BASH (NO CMD) SE HAGA EL SGTE COMANDO DESDE EL DIRECTORIO EN QUE ESTAN LOS TSC:
//tsc -w *.ts
//significa, typescript, -w = watch/mirar los cambios	*.ts= en todos los archivos .ts

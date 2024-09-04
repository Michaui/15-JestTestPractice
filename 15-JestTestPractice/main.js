import './style.css'

/*
export function toUpperCase(string){
  let arrayString = []; 
  arrayString = string.split(''); //Mache ein Array aus allen Zeichen
  let b = arrayString.splice(0,1).toString().toUpperCase(); //Nehme die erste Position, wandle es zum String und setzte es zum Uppaercase. 
  return b + arrayString.join(''); //Füge UpperCase Buchstabe hinzu und mache das Array zum String. 
};
*/

export function capitalize(string) {
  if (typeof string !== 'string') return ''; //Sicherheitsüberprüfung, um Edge Case einzugerenzen. 
  return string.charAt(0).toUpperCase() + string.slice(1); //(1.) Nimmt das erste Char und wandelt es um -> (2.) fügt es dem zweiten String hinzu, wo das erste Char entfernt wurde. 
}

// console.log(toUpperCase('hallo')); 
console.log(capitalize('hallo')); 
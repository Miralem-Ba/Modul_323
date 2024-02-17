// Ausgabe eines Strings
var myString = "Hallo, Welt!";
console.log(myString);

// Definition und Ausgabe weiterer Datentypen
var myNumber = 42;
var myBoolean = true;
var myUndefined;
console.log(myNumber); // 42
console.log(myBoolean); // true
console.log(myUndefined); // undefined

// Variable mit 'var' neu zuweisen
var myVar = "Ich bin ein String";
console.log(myVar); // Ich bin ein String
myVar = false;
console.log(myVar); // false

// Variable mit 'var' zweimal deklarieren
var myVar = "Erste Deklaration";
var myVar = "Zweite Deklaration";
console.log(myVar); // Zweite Deklaration

// Versuch, 'let' zweimal zu deklarieren
let myLet = "Erstes Let";
// let myLet = "Zweites Let"; // Dies würde einen Fehler verursachen

// Bevorzugung von 'let' über 'var'
/*
Ich bevorzuge 'let' für Block-Scoping, um versehentliche Überschreibungen oder Zugriffe auf Variablen außerhalb des erwarteten Scopes zu vermeiden.
*/

// Konstante mit 'const' deklarieren und versuchen zu ändern
const myConst = "Konstante";
// myConst = "Versuch zu ändern"; // Dies würde einen Fehler verursachen

// 'undefined' und 'null' vergleichen
const myUndefinedConst = undefined;
const myNullConst = null;
console.log(myUndefinedConst == myNullConst); // true
console.log(myUndefinedConst === myNullConst); // false

/*
Erklärung: '==' vergleicht Werte ohne Typüberprüfung (beide gelten als "nicht vorhanden"), während '===' auch den Typ überprüft, und 'undefined' und 'null' sind unterschiedliche Typen.
*/

// Namenskonvention
/*
CamelCase ist die beliebteste Konvention in JavaScript. Sie beginnt mit einem Kleinbuchstaben und großschreibt jedes folgende Wort, z.B. 'meineVariable'.
*/

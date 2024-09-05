// functions.js

export function capitalize(string) {
    if (typeof string !== 'string') return ''; // Checks if input is a string. If not return an empty string. 
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitalizes the first character and appends the rest of the string
}

export function reverseString(string){
    if(typeof string !== 'string') return ''; 
    return string.split('').reverse().join(''); 
}

/*----------------------------------------------
Object mit Methoden
Wenn du mehrere Funktionen hast, die zusammengehören oder ähnliche Aufgaben erfüllen, 
kannst du sie in einem Objekt gruppieren. Dies verbessert die Übersichtlichkeit und die Organisation des Codes.
Bsp.: Ein calculator-Objekt, das verschiedene mathematische Operationen kapselt.

Durch das Kapseln von Funktionen in einem Objekt vermeidest du globale Variablen und vermeidest Namenskonflikte. 
Dies hilft, den Code modular und wartbar zu halten.
*/

export const calculator = {
    add: (a,b) => a + b, 
    subtract: (a,b) => a - b, 
    multiply: (a,b) => a * b, 
    divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
};

/* ----------------------------------------------
SZENARIO 1 
class User {
  constructor(name) {
    this.name = name;
  }

  // Beispielmethode add innerhalb der User-Klasse
  add(a, b) {
    return a + b;
  }
}

// Beispielverwendung
const userA = new User('Alice');
const result = userA.add(5, 3); // 8
console.log(result);
*/

/* SZENARIO 2
// Calculator-Klasse
class Calculator {
  add(a, b) {return a + b;}
  subtract(a, b) {return a - b;}
  multiply(a, b) {return a * b;}
  divide(a, b) {return b !== 0 ? a / b : 'Error: Division by zero';}
}

// User-Klasse, die auf Calculator zugreift
class User {
  constructor(name) {
    this.name = name;
    this.calculator = new Calculator(); // Calculator als Eigenschaft
  }

  // Methode, die den Calculator verwendet
  performAddition(a, b) {
    return this.calculator.add(a, b);
  }
}

// Beispielverwendung
const userA = new User('Alice');
const result = userA.performAddition(5, 3); // 8
console.log(result);
*/

/* ----------------------------------------------
WEITERES SZENARIO 2 BEISPIEL: Trennung von Verantwortlichkeiten

class Calculator {
  calculateDamage(baseDamage, bonus) {
    return baseDamage + bonus;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.calculator = new Calculator(); // Calculator wird verwendet
  }

  performAttack(baseDamage, bonus) {
    const damage = this.calculator.calculateDamage(baseDamage, bonus);
    console.log(`${this.name} attacks for ${damage} damage.`);
  }
}

const player = new Player('Hero');
player.performAttack(50, 10); // Hero attacks for 60 damage.
*/

/* ----------------------------------------------
WEITERES SZENARIO BEISPIEL: Wiederverwendbarkeit von Logik

Du entwickelst eine Anwendung, in der verschiedene Benutzerrollen (wie User, Admin, Magician) mathematische Berechnungen 
durchführen müssen. Anstatt die Berechnungslogik in jeder Benutzerrolle zu wiederholen, kannst du eine Calculator-Klasse erstellen, 
die von allen Benutzerrollen verwendet wird.

class Calculator {
  add(a, b) {return a + b;}
}

class User {
  constructor(name) {
    this.name = name;
    this.calculator = new Calculator(); // Calculator wird verwendet
  }

  performAddition(a, b) {
    return this.calculator.add(a, b);
  }
}

class Magician extends User {
  constructor(name) {
    super(name);
  }

  castSpell(a, b) {
    return this.performAddition(a, b) * 2; // Magician verwendet die Calculator-Methode
  }
}

const magician = new Magician('Gandalf');
console.log(magician.castSpell(5, 3)); // 16 (Magician adds 5 + 3 and multiplies by 2)
*/

/* ----------------------------------------------
WEITERES SZENARIO: Erweiterbarkeit und Wartbarkeit

Beispiel: Angenommen, du hast eine User-Klasse und möchtest später zusätzliche Berechnungen 
oder Funktionen hinzufügen, ohne die bestehende Benutzerlogik zu beeinflussen. 
Wenn die Berechnungen in einer separaten Calculator-Klasse stattfinden, kannst du die Calculator-Klasse 
unabhängig erweitern.

class Calculator {
  add(a, b) {return a + b;}

  multiply(a, b) {return a * b;}
}

class User {
  constructor(name) {
    this.name = name;
    this.calculator = new Calculator(); // Calculator wird verwendet
  }

  performAddition(a, b) {
    return this.calculator.add(a, b);
  }
}

// Später kannst du die Calculator-Klasse erweitern
class AdvancedCalculator extends Calculator {
  square(a) {
    return a * a;
  }
}

class UserWithAdvancedCalculator extends User {
  constructor(name) {
    super(name);
    this.calculator = new AdvancedCalculator(); // Verwende AdvancedCalculator
  }
}

const advancedUser = new UserWithAdvancedCalculator('AdvancedUser');
console.log(advancedUser.calculator.square(4)); // 16
*/
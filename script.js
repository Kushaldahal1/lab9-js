// Question 1
console.log("Question1")
function Player(name){
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function(num){
  this.points += num;
  if(this.points >= 10){
    this.lvl++;
    this.points -= 10;
  }
}

Player.prototype.describe = function(){
  return `${this.name} is lvl ${this.lvl} with ${this.points} experience points`;
}

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points

console.log("\nQuestion 2 and 3");

// Question 2

class user{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  viewData(){
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class admin extends user{
  constructor(name, email){
    super(name, email);
  }
  editData(name, email){
    this.name = name;
    this.email = email;
  }
}

let prabesh = new admin('prabesh', 'aryalpravesh111@gmail.com');
console.log(prabesh.viewData());
prabesh.editData("kushal", "kushaldahal777@gmail.com");
console.log("The values after using the editData method in admin class is: ")
console.log(prabesh.viewData());

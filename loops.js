for (let i=1; i < 11; i++){
    console.log(i);
}

for (let i=10; i >0; i--) {
    console.log(i); 
}

let text= "";
let i=1;
while (i <= 10) {
    i++;
    console.log(i);
}

while (i >= 1) {
    i--;
    console.log(i);
}

do {
  text += i + "<br>";
  i++;
  console.log(i);
}
while (i < 10);

do {
    text += i + "<br>";
    i--;
    console.log(i);
  }
while (i >1);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let number of numbers){
  console.log(number);
}

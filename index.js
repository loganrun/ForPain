
//Part 1 Refactoring Old Code
let string =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
  
let table = string.split("\n");
let rows = table.map((row) => row.split(","));

const makeTable = (rows) => {
  let string = "";
  rows.map((cells) => {
    cells.map((cell) => {
      string += `${cell}        ` ;
    });
    string += "\n";
  });
  console.log(string);
};
//makeTable(rows);

//PArt 2
let newString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26`;
let staged = string.split("\n");
console.log(staged)  
let persons = staged.map((person) => person.split(","));
console.log(persons)

//Part 3

// const persons = [
//   ["ID", "Name", "Occupation", "Age"],
//   ["42", "Bruce", "Knight", "41"],
//   ["57", "Bob", "Fry Cook", "19"],
//   ["63", "Blaine", "Quiz Master", "58"],
//   ["98", "Bill", "Doctor's Assistant", "26"]
// ];

const keys = persons[0];
//console.log(keys)
const people = [];
//console.log(persons.slice(1))

for (const row of persons.slice(1)) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = row[i];
  }
  people.push(obj);
  
}

console.log(people)


//Part 4
//4.1
people.sort().pop()
console.log(people)

//4.2

let newPerson = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
people.splice(1,0,newPerson)
console.log(people)
//4.3
let addPerson = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
people.push(addPerson)
console.log(people)

//4.4 Add the Ages

let sum = 0
for (x of people) {

sum += parseInt(x.Age || x.age) / people.length 
}
console.log(sum)

//5 Full Circle

//let newCsv = people.map(csvData);

// const getData(rows)=>{
//   return rows.id

// }
let intCsv = people.map(person =>
  Object.values(person)
) 
//console.log(newCsv)
let csvHeader = Object.keys(people[0])
//console.log(csvHeader)
intCsv.unshift(csvHeader)
//console.log(intCsv)

let closeCsv = intCsv.map(subarray => subarray.concat("\n"))
console.log(closeCsv)

let almostCSV = closeCsv.join(',').toString()
console.log(almostCSV)


// for (x of people){
//   let id= x.id
//   // let key= []
  
//   //console.log(keys)
//   console.log(id)
// }


// function getData()


// for (i=0; i<2; i++) {
//   people.map(person) =>{}

//   key.push(Object.keys(i[i]))

//   id = Object.values(x)
//   //console.log(id)
//   console.log(key[0])
//   i++
// }



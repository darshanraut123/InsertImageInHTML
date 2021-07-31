
let names = [{name: "Arti", gender: "female"},{name: "Shubham", gender: "male"},{name: "Akshaya", gender: "female"},{name: "Aman", gender: "male"},{name: "Pooja", gender: "female"},{name: "Akshay", gender: "male"}];
//All Female names:
names.filter(n=>n.name.toLowerCase().startsWith("a")).forEach((val => console.log(val.name)));
//All names starting with A : 
names.filter(n=>n.name.toLowerCase().startsWith("a")).forEach((val)=>console.log(val.name));
//No of Males:
console.log((names.filter(n=>n.gender=="male")).length);

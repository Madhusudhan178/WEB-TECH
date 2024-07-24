//Create
data = {
    id: 1,
    name: 'rama',
    place: 'bengaluru',
    skills: ['Html', 'css', 'js'],
    project: function f1() {
        console.log("ProjectK")
    }

}
console.log(data);
//read
//using dot operator
console.log(data.id);
console.log(data.name);
console.log(data.place);
console.log(data.skills);
console.log(data.project);
//update
data.id = 12;
console.log(data.id);
data.skills[2] = 'java';
console.log(data.skills);
data.skills[7] = 'Python'//empty x4 for empty array
console.log(data.skills);
console.log(data);
//delete
delete data.id
console.log(data);
//object.keys()

console.log(Object.keys(data))//['name', 'place', 'skills', 'project']
//object.values()
console.log(Object.values(data))//['rama', 'bengaluru', Array(8), ƒ]
// object.entries()
let ans=Object.entries(data);//[Array(2), Array(2), Array(2), Array(2)]
console.log(ans);
console.log(Array.isArray(ans));
console.log(ans.flat(2));
// Object.fromEntries()

console.log(Object.fromEntries(ans))//converts array into object
// Object.assign(object1,object2,.....)
let x={
    rollno:21
}
let y={
    section:'development',
    salary:560404
}
console.log(Object.assign(x,y));
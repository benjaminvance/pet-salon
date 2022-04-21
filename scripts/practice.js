// let students = [
// {
//     firstName: "Astrid",
//     lastName: "Batres-Guerrero",
//     age: 25,
//     isActive: true
// },
// {
//     firstName: "Anthony",
//     lastName: "Lane",
//     age: 22,
//     isActive: true
// },
// {
//     firstName: "Ben",
//     lastName: "Vance",
//     age: 22,
//     isActive: false,
//     hobby: ["Listen to music", "Read", "Play Zelda"],
//     address:{
//         street: "Palm Street",
//         zip: "63369",
//         number: "262-k"
//     }
// }];

//object constructor(function)

function Students(fname,lname,age,isActive){
    this.firstName=fname;
    this.lastName=lname;
    this.age=age;
    this.isActive=isActive;
}

let student1= new Students("Astrid","Batres-Guerrero",25,true);
let student2= new Students("Alexis","Alredete",25,true);

console.log(student1,student2);

function Dogs(name,age,breed){
    this.name=name;
    this.age=age;
    this.breed=breed;
}

let dog1= new Dogs("Buddy",5,"Bulldog");
let dog2= new Dogs("Marley",3,"Golden Retriever");

console.log(dog1,dog2);








console.log(students[0]);

function displayStudent(){
    let tmp="";
    let div=document.getElementById("students");
    for(let i=0;i<students.length;i++){
    tmp+=`<li>${students[i].firstName}</li>`;
    }
    div.innerHTML=tmp;
}

// displayStudent();
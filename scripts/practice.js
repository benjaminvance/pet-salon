let students = [
{
    firstName: "Astrid",
    lastName: "Batres-Guerrero",
    age: 25,
    isActive: true
},
{
    firstName: "Anthony",
    lastName: "Lane",
    age: 22,
    isActive: true
},
{
    firstName: "Ben",
    lastName: "Vance",
    age: 22,
    isActive: false,
    hobby: ["Listen to music", "Read", "Play Zelda"],
    address:{
        street: "Palm Street",
        zip: "63369",
        number: "262-k"
    }
}];

console.log(students[0]);

function displayStudent(){
    let tmp="";
    let div=document.getElementById("students");
    for(let i=0;i<students.length;i++){
    tmp+=`<li>${students[i].firstName}</li>`;
    }
    div.innerHTML=tmp;
}

displayStudent();
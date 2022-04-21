let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"787",
        zip:"23456"
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[]
    }

function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
}

//get the info from the inputs and store the info
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");


function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    console.log(thePet);
    //push the pet info into array
    petSalon.pets.push(thePet);

    
}

let Shaggy= new Pet("Shaggy",3,"Male","Labrador","Grooming","Ben","6365281245");
let Marley= new Pet("Marley",5,"Female","Golden Retriever","Nails Cutting","Dave","3144625099");
let Buddy= new Pet("Buddy",4,"Female","Pitbull","Teeth cleaning","Zach","6606806060");
petSalon.pets.push(Shaggy,Marley,Buddy);

console.log(Shaggy,Marley,Buddy);

console.log(petSalon);

function displaySalonInfo(){

}

function displayPetsNames(){
    
}
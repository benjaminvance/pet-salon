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

function isValid(aPet){
    //return false value when the pet is not valid
    //return true if the pet is valid
    let valid=true;
    if(aPet.name.length==0){
        //if we get here it means that the name is not valid
        valid=false;
        console.log("Invalid name");
    }
    
    return valid;
}

function register(){
    //create the pet
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    if(isValid(thePet)==true){
    //push the pet info into array
    petSalon.pets.push(thePet);
    displayCards();
    clearInputs();
    }
    
}

function clearInputs(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputGender.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
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
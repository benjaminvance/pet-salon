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

let c=0;

function Pet(name,age,gender,breed,service,ownerName,contactPhone,comments){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
    this.comments=comments;
    this.id=c++; //increase the var 1 evertime that it is used
}

//get the info from the inputs and store the info
let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputBreed=document.getElementById("txtBreed");
let inputService=document.getElementById("selService");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");
let inputComments=document.getElementById("txtComments");

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
    let thePet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value,inputComments.value);
    if(isValid(thePet)){
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
    // inputService.value="";
    inputOwner.value="";
    inputPhone.value="";
    inputComments.value="";
}

function deletePet(petId){
    console.log("deleting..." + petId);
    let deleteIndex;
    //previous actions---
        //we need an id in the pet constr
        //we need a delete button in the html
    //in this function---
        //travel the array (for loop)
        for(let i=0;i<petSalon.pets.length;i++){
            let pet = petSalon.pets[i];
            if(petId==pet.id){
                //find the id (if)
                //get the position in the array (store in var)
                deleteIndex=i;
                console.log("Found in position: " + i);
            }
        }
        //remove from the array (splice)
        petSalon.pets.splice(deleteIndex,1);
        //remove from the html (remove)
        document.getElementById(petId).remove();
        //display a message to the user
}

function searchPet(){
    console.log("Searching");

    let searchString = document.getElementById("txtSearch").value;
    console.log("Searching " + searchString);

    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];

        if(searchString === pet.name.toLowerCase()){
            alert("I found it");
            document.getElementById(pet.id).classList.add("highlight");
        }else{
            document.getElementById(pet.id).classList.remove("highlight");
        }

        if(searchString === pet.name){
            alert("I found it");
            document.getElementById(pet.id).classList.add("highlight");
        }else{
            document.getElementById(pet.id).classList.remove("highlight");
        }
    }
}

let Shaggy= new Pet("Shaggy",3,"Male","Labrador","Grooming","Ben","6365281245","none");
let Marley= new Pet("Marley",5,"Female","Golden Retriever","Nails Cutting","Dave","3144625099","none");
let Buddy= new Pet("Buddy",4,"Female","Pitbull","Teeth cleaning","Zach","6606806060","none");
petSalon.pets.push(Shaggy,Marley,Buddy);
console.log(Shaggy,Marley,Buddy);
console.log(petSalon);


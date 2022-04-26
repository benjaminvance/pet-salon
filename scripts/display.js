//display the pets in list items
function displayPet(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp=`<li>${pet.name} --- ${pet.age}</li>`;
        console.log(tmp);
    }
    document.getElementById("pets").innerHTML=tmp;
    // innerHTML=tmp;
}
// display the pets in cards
function displayCards(){
    let tmp="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tmp+=`
        <div id="${pet.id}" class="pet">
            <div class="pet-header">
                <h4>${pet.name}</h4>
                <button onclick="deletePet(${pet.id});">🗑️</button>
            </div>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <p>${pet.ownerName}</p>
            <p>${pet.contactPhone}</p>
            <p>${pet.comments}</p>
            </div>
        `;
    }
    document.getElementById("pets").innerHTML=tmp;
}


//display the pets in table
// function displayCards(){
//     let tmp="";
//     for(let i=0;i<petSalon.pets.length;i++){
//         let pet = petSalon.pets[i];
//         tmp=`
//         <div class="pet">
//             <h3>${pet.name}</h3>
//             <p>${pet.age}</p>
//             <p>${pet.gender}</p>
//             <p>${pet.breed}</p>
//             <p>${pet.service}</p>
//             <p>${pet.ownerName}</p>
//             <p>${pet.contactPhone}</p>
//         `;
//     }
//     document.getElementById("pets").innerHTML=tmp;
// }
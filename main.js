// Write your JavaScript code here!
var planets = { 
    
    'Neptune': 1.148, 
    'Pluto': 0.06,
    'Uranus': 0.917, 
    'Saturn': 1.139, 
    'Jupiter': 2.640, 
    'Mars': 0.3895, 
    'Moon': 0.1655, 
    'Earth': 1, 
    'Venus': 0.9032, 
    'Mercury': 0.377, 
    'Sun': 27.9 
};
  
window.onload = function(){
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values.
    //1. Populate the dropdown element with the data found in the planets array. 
    //for every element in the PlanetNameArray add it as an option to the select id planets
        let planetNameArray= Object.keys(planets);
        planetNameArray.forEach(element =>{
        const options = document.createElement("option");
        options.innerHTML = element;
        document.getElementById("planets").appendChild(options);
    })
}
function handleAddPlanetClick(e) {
    //bonus: Allow user to add a planet to the planet list
    // one text box for new planet name and a input box for multiplier
    //use regex to make sure only letters are in the new Planet text box
         let addPlanet = document.getElementById("addPlanetName").value
         var letters = /^[A-Za-z]+$/ 
        if (addPlanet=="" || !addPlanet.match(letters)){
             return document.getElementById("confirmation").innerHTML = "Planet Name is required. Use letters only."
 }
         else{
             let addPlanetMultiplier= document.getElementById("addMultiplier").value;
            if (checkifNum(addPlanetMultiplier)=== true){
                const opts = document.createElement("option");
                opts.innerHTML = addPlanet;
                planets[addPlanet] = parseInt(addPlanetMultiplier);
                document.getElementById("planets").appendChild(opts);
                document.getElementById("confirmation").innerHTML= "Successfully added Planet "+ addPlanet + " to the list!";
 }
 }
}
 function handleDeletePlutoCheckbox(e) {
    //if pluto check box is checked remove pluto from dropdown list and vise versa
     if (document.getElementsByTagName("option")[1].hidden === false) {
        document.getElementsByTagName("option")[1].hidden = true;
        document.getElementById("confirmation").innerHTML = "Success! Pluto removed from planet list."    
        } 
        else {
            document.getElementsByTagName("option")[1].hidden = false;
           document.getElementById("confirmation").innerHTML = "Success! Pluto added to planet list."
      }
    }
function checkifNum(weight){ //check if number box value are all numbers and no empty string
    if (isNaN(weight) || weight=="") {
       document.getElementById("confirmation").innerHTML = "Required field! Use numbers only."
       return false;
    }
    else{  
        return true;
    }
}

function calculateWeight(weight, planetN) { 
   // 2. Write the code to return the correct weight
        let Testing = planets[planetN]
        let newWeight= planets[planetN] * weight
        return newWeight; 
}
function handleClickEvent(e) {
     // 3. Create a variable called userWeight and assign the value of the user's weight. 
        let userWeight = document.getElementById("user-weight").value

     // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 
        let planetName = document.getElementById("planets").value
  
    // 5. Create a variable called result and assign the value of the new calculated weight. 
        if (checkifNum(userWeight)== true ){
            let result = calculateWeight(parseInt(userWeight),planetName)

    // 6. Write code to display the message shown in the screenshot. 
        document.getElementById("output").innerHTML= "If you were on "+ planetName + ", you would weigh " + result + "lbs!";
    }
} 


  const madeinUSA = [
    "Tyler Tools Hand Swagers",
    "Stainless Cleaners",
    "Haas Stainless Cleaner",
    "Passivation & Rust Remover",
    "Heavy Duty Standard Bar Swivel Hoist Rings",
    "Heavy Duty Long Bar Swivel Hoist Rings",
    "Heavy Duty Metric Standard Bar Swivel Hoist Rings",
    "Heavy Duty Metric Long Bar Swivel Hoist Rings",
    "Safety Engineered Swivel Hoist Rings",
    "Safety Engineered Long Bar Swivel Hoist Rings",
    "Safety Engineered Metric Swivel Hoist Rings",
    "Safety Engineered Metric Long Bar Swivel Hoist Rings",
    "Stainless Safety Engineered Swivel Hoist Rings",
    "Stainless Safety Engineered Metric Swivel Hoist Rings",
    "Shackle Hoist Rings",
    "Swage Tools For Sleeves & Buttons",
    "Swage Tools For Cable Rail Fittings",
    "Go-No-Go Gauges",
    "Stainless Hoist Rings",
    "Stainless Swivel Hoist Rings",
    "Stainless Metric Swivel Hoist Rings",
    "Stainless Cleaner",
    "Tensioning Fittings",
    "End Stop Fittings",
    "Wood Post Protectors",
    "HAAS Stainless Revo Replacement Components",
    "Henry Block Zinc Plated Sheaves with Bushings, Made in the USA",
    "Henry Block Stainless Steel Sheaves with Bushings, Made in the USA",
    "Old Style Angled Wood Post Protectors",
    "Thor-Tex USA Polyester Web Slings",
    "1 Ply Web Slings Flat & Tapered Eyes",
    "2 Ply Web Slings Flat & Tapered Eyes",
    "2 Ply Web Slings Lined Bearing Points",
    "Chicago Hardware Zinc Plated Screw Eye Bolts",
    "Chicago Hardware Zinc Plated Turned Eye Bolts",
    "Chicago Hardware Zinc Plated Welded Eye Bolts",
    "Chicago Hardware Self Colored Machinery Eye Bolts",
    "Chicago Hardware Self Colored Metric Machinery Eye Bolts",
    "Chicago Hardware Hot Dip Galvanized Screw Pin Anchor Shackles",
    "Chicago Hardware Hot Dip Galvanized Bolt Type Anchor Shackles",
    "Chicago Hardware Hot Dip Galvanized Drop Forged Clips",
    "Chicago Hardware Hot Dip Galvanized Double Saddle Clips",
    "Chicago Hardware Hot Dip Galvanized Eye x Eye Turnbuckles",
    "Chicago Hardware Aluminum Round Bend U-Bolts",
    "Chicago Hardware Hot Dip Galvanized Square Bend U-Bolts",
    "Chicago Hardware Zinc Plated Square Bend U-Bolts",
    "Chicago Hardware Hot Dip Galvanized Long Tangent U-Bolts",
    "Chicago Hardware Zinc Plated Long Tangent U-Bolts",
    "Chicago Hardware Hot Dip Galvanized Round Bend U-Bolts with Plate",
    "Chicago Hardware Hot Dip Galvanized Round Bend U-Bolts",
    "Chicago Hardware Zinc Plated Round Bend U-Bolts with Plate",
    "Chicago Hardware Zinc Plated Round Bend U-Bolts",
    "Chicago Hardware Hot Dip Galvanized Bevel Washers",
    "Chicago Hardware Drop Forged Pad Eyes",
    "Chicago Hardware Hot Dip Galvanized Safety Snap Hooks",
    "Chicago Hardware Hot Dip Galvanized Safety Swivel Hooks",
    "Chicago Hardware Hot Dip Galvanized Safety Hooks",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Eye x Eye Swivels",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Jaw x Eye Swivels",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Heavy Duty Eye Nuts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Heavy Duty Metric Eye Nuts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Lifting Eyes",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Eye Nuts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Metric Eye Nuts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Lag Eye Bolts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Lag Ring Eye Bolts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Regular Ring Eye Bolts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Shoulder Eye Bolts",
    "Chicago Hardware Drop Forged Hot Dip Galvanized Regular Eye Bolts",
    "Chicago Hardware Hot Dip Galvanized Hook x Eye Turnbuckles",
    "Chicago Hardware Hot Dip Galvanized Hook x Hook Turnbuckles",
    "Chicago Hardware Hot Dip Galvanized Jaw x Eye Turnbuckles",
    "Chicago Hardware Hot Dip Galvanized Jaw x Jaw Turnbuckles",
    "Chicago Hardware Aluminum Eye x Eye Turnbuckles",
    "Chicago Hardware Aluminum Hook x Eye Turnbuckles",
    "Chicago Hardware Aluminum Hook x Hook Turnbuckles"
    ]
//console.log('madeinUSA', madeinUSA);


const myArray = [];
let newlen;

if ($(".columns-6 li")[0]){
   newlen= $('.columns-6 li').length;   //how many products are there in cat page
}
else if ($(".columns-4 li")[0]){
   newlen= $('.columns-4 li').length;   //how many products are there in cat page
}
else if ($(".columns-3 li")[0]){
  newlen= $('.columns-3 li').length;   //how many products are there in cat page
}
else if ($(".columns-2 li")[0]){
  newlen= $('.columns-2 li').length;   //how many products are there in cat page
}
else if ($(".columns-5 li")[0]){
  newlen= $('.columns-5 li').length;   //how many products are there in cat page
}

for (let i = 0; i < newlen; i++) {	//make an array
let productname = document.getElementsByClassName('name')[i].textContent;
	myArray.push(productname);
}

//console.log('myArray', myArray);

let filteredArray = madeinUSA.filter(function(n) {	 //make an array with common products
    return myArray.indexOf(n) !== -1;
});
//console.log('filteredArray', filteredArray);


findMatch(myArray,filteredArray); 

function findMatch(myArray, filteredArray) {

for(i = 0;i < myArray.length; i++)
{
  for(let z = 0; z < filteredArray.length; z++)
  {
    if(myArray[i] == filteredArray[z])
    {
		console.log('matches', myArray[i]);
//		  let text = document.createElement("img"); 
//		  let br = document.createElement("br"); // Create with DOM
//		  text.src = "assets/images/madeinusa.jpg";	
//		  text.style.cssText = 'height:18px;width:auto; margin-top:10px';
//
//		$('.columns-6 li .name')[i].append(br,text);  //populate the made in usa image
    } 
  }
}
return null;
}
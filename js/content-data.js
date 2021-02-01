//var badgeButtonElement = document.getElementsByClassName("badge-button"); 
/* 
for(var q = 0; q < badgeButtonElement.length; q++) {
	         var delayBadge =  badgeButtonElement[q];
	          console.log(delayBadge); 
	         $(delayBadge).hide(); 	
			 $(delayBadge).show().delay( 1800 ); 
	           
}
*/ 
/*
$('.badge-button').each(function(index, item) {
    $(item).hide(); 
	$(item).delay(2000).show(); 
});
*/ 

function ready() { 

var badgeContent = [
   {
      "idSearch": "usa-1",
      "Headline": "Made in USA",
      "p1": "For a product to be called Made in USA, or claimed to be of domestic origin without qualifications or limits on the claim, the product must be 'all or virtually all' made in the U.S.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='usa'></button>"
   },
   {
      "idSearch": "nola-2",
      "Headline": "Manufactured in NOLA",
      "p1": "Products that are designed and manufactured at Sea-Land Distributors facility in New Orleans, Louisiana.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='nola'></button>"
   },
   {
      "idSearch": "imported-3",
      "Headline": "Imported",
      "p1": "We travel across the world visiting countries and factories to qualify and inspect facilities to ensure the products we offer are high quality and suitable for their intended applications.",
      "p2": "Regarding our imported products, the cable we stock comes from Thailand, China and India.  Forgings come from China.  Stainless parts come from China and Thailand.  Chain products come from China.",
      "p3": "It is worth stating that for many products such as stainless steel hardware, galvanized wire rope and cable, and many rigging fittings such as quick links, snap links, etc., there just arent any producers of these products in the U.S.A. anymore  sad but true.",
      "p4": "Over the last couple of years, we have invested nearly 2 million dollars in machining and processing equipment to develop and produce whatever products we can afford to make and sell and import as little as we can.",
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='imported '></button>"
   },
   {
      "idSearch": "alloy-steel-12",
      "Headline": "Alloy Steel",
      "p1": "Technically, every steel is an alloy, but not all of them have the alloy steel designation. To be called alloy steel, other elements must be intentionally added to the iron and carbon composition. A small percentage of alloying elements  typically, no more than 5%  is added to the mix, and these metals can improve corrosion resistance, machinability, and many other properties.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='alloy-steel'></button>"
   },
   {
      "idSearch": "allu-steel-11",
      "Headline": "Aluminum Alloy",
      "p1": "To enhance the properties of pure aluminum, elements such as iron, silicon, copper, manganese and zinc can be added to increase strength and the resulting combination is referred to as aluminum alloy.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='allu-steel'></button>"
   },
   {
      "idSearch": "304-13",
      "Headline": "Type 304 Stainless Steel",
      "p1": "Type 304/304L is the modern version of 18-8 stainless steel containing approximately 18% chromium and 8% nickel and is the most commonly specified stainless steel used throughout the world. Type 304/304L is a versatile, general purpose stainless steel with good resistance to atmospheric corrosion, and to many chemicals and food and beverages. These grades can be specified in the annealed condition where they have very good formability. Higher nickel versions can be specified to enhance multi-stage deep drawing characteristics. Higher strength, cold-worked conditions can also be specified for Type 304/304L for spring type applications. Type 304/304L is non-magnetic in the annealed condition but may become slightly magnetic as a result of cold working.",
      "p2": "Type 304L can be dual certified as 304 when the composition meets the lower carbon limit of 304L and the slightly higher strength levels of 304. Type 304L should be specified for welded applications as the low carbon version eliminates chromium carbide precipitation and enhances the corrosion resistance in the as-welded condition.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='304'></button>"
   },
   {
      "idSearch": "316-14",
      "Headline": "Type 316 Stainless Steel",
      "p1": "Type 316/316L is a chromium nickel austenitic stainless steel containing molybdenum. The molybdenum addition enhances the corrosion resistance over that of 304/304L. Type 316L can be dual certified as 316 when the composition meets the lower carbon limit of 316L and the slightly higher strength levels of 316. Type 316L should be specified for welded applications as the low carbon version eliminates chromium carbide precipitation and enhances the corrosion resistance in the as-welded condition.",
      "p2": "Type 316/316L resists atmospheric corrosion as well as in moderately oxidizing environments. It also resists corrosion in marine atmospheres and has excellent resistance to intergranular corrosion in the as-welded condition. Type 316/316L has excellent strength and toughness at cryogenic temperatures. Type 316/316L is non-magnetic in the annealed condition but may become slightly magnetic as a result of severe cold working.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='316'></button>"
   },
   {
      "idSearch": "Duplex-15",
      "Headline": "Duplex 2205 Stainless Steel",
      "p1": "Duplex 2205 Stainless Steel is a 22% chromium, 3% molybdenum, 5-6% nickel, nitrogen alloyed duplex stainless steel with high general, localized, and stress corrosion resistance properties in addition to high strength and excellent impact toughness.",
      "p2": "Alloy 2205 duplex stainless steel provides pitting and crevice corrosion resistance superior to 316L or 317L austenitic stainless steels in almost all corrosive media. It also has high corrosion and erosion fatigue properties as well as lower thermal expansion and higher thermal conductivity than austenitic.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='Duplex'></button>"
   },
   {
      "idSearch": "copper-16",
      "Headline": "Copper",
      "p1": "Copper is a good metal choice for swage sleeves and buttons because of its high ductility and corrosion resistant properties.  For swaging applications, the metal should be tempered and annealed.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='copper '></button>"
   },
   {
      "idSearch": "oil-bronze-17",
      "Headline": "Oil Impregnated Bronze",
      "p1": "Bronze is an alloy made of primarily of copper and tin and because of its low coefficient of friction properties, is often chosen for bearing applications.  To further enhance the properties of bronze, oil impregnated bronze is made through a sintering process that traps tiny oil droplets throughout the metal.  As the metal heats up, the oil is released onto the two surfaces rubbing against one another to enhance lubricity and reduce friction.  When the heat is reduced, the oil trapped in the bearing metal cools and remains in the metal.  It is why oil impregnated bronze bushings are referred to as self-lubricating.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='oil-bronze'></button>"
   },
   {
      "idSearch": "abaca-20",
      "Headline": "Abaca Fibers",
      "p1": "Also known as manila hemp, these fibers are commonly used for making manila rope and was once the preferred choice in ropes before synthetic fibers were developed. Manila ropes still maintain some advantages to synthetic fibers. It is not affected by heat and has an excellent resistance to the sun's UV (Ultraviolet) rays. Manila rope has low stretch and good abrasion resistance, but poor chemical resistance, subject to rot.  It is important to note that to ensure the longest life possible for manila rope, it is treated at the factory with oil and is not recommended for pet toys.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='abaca'></button>"
   },
   {
      "idSearch": "poly-pro-21",
      "Headline": "Polypropylene",
      "p1": "Polypropylene rope will float, has excellent resistance to most common chemicals. It is also resistant to rot, mildew and deterioration. It has good abrasion resistance, good strength, and moderate stretch. It is a perfect economical choice as a general purpose rope.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='poly'></button>"
   },
   {
      "idSearch": "nylon-22",
      "Headline": "Nylon Fibers",
      "p1": "Rope made from nylon fibers is known for its elasticity and tremendous shock absorbing qualities. It has good abrasion resistance, is rot proof, resists oil, gasoline, and most chemicals. It has good resistance to UV rays. Nylon will last 4-5 times longer than natural fibers.  Nylon does absorb water and does not float.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='nylon'></button>"
   },
   {
      "idSearch": "ny-poly-blend-23",
      "Headline": "Nylon/Polyester Blend",
      "p1": "Nylon and polyester fibers have similar strength and feel and today, are commonly blended together for making ropes because of the lower cost of polyester fibers compared to nylon.  Nylon/polyester blended fibers are typically combined with a much greater percentage of polyester fibers.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='ny-poly-blend'></button>"
   },
   {
      "idSearch": "poly-24",
      "Headline": "Polyester Fibers",
      "p1": "Rope made from polyester fibers have high strength, low stretch, are torque free, have excellent wet/dry abrasion resistant properties and good wet/dry strength. It also has good resistance to ultraviolet rays and common chemicals. It also has the best weathering characteristics of all popular fibers. Polyester stretches less than nylon, so it does not have the elasticity of shock absorbing qualities that nylon does. It is very popular as a marine or industrial rope where more stretch is not desired.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='poly-2'></button>"
   },
   {
      "idSearch": "uhm-25",
      "Headline": "UHMWPE Fibers",
      "p1": "When used to make rope, Ultra High Molecular Weight Polyethylene (UHMWPE) fibers have very low stretch and superior wear resistance, has very low torque, excellent UV protection, and is acid/alkali resistant. UHMWPE rope is comparable in strength to steel wire rope but weighs less and is flexible and easy to store.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='uhm'></button>"
   },
   {
      "idSearch": "dyn-26",
      "Headline": "Dyneema Fibers",
      "p1": "A common name for Dyneema fiber is Ultra-High Molecular Weight Polyethylene or UHMwPE. Dyneema is the strongest fiber in the world and is more than 10 times stronger than steel per unit of weight. This means that ropes made with Dyneema have a slightly higher strength than steel wire at the same dimension while being 7 to 10 times lighter in weight.",
      "p2": "Dyneema webbing is some of the strongest webbing woven. Stronger, lighter, and thinner than webbing made from traditional fibers, UHMWPE webbings are popular for applications requiring high strength and low stretch",
      "p3": "With excellent resistance to mildew, UV damage, abrasion, and acids, alkalis, oil and gases, and heat-safe up to 300F, UHMWPE webbing is excellent for a variety of rugged, outdoor applications.",
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='dyn'></button>"
   },
   {
      "idSearch": "abs-27",
      "Headline": "ABS Plastic",
      "p1": "ABS stands for Acrylonitrile butadiene styrene and it is a thermoplastic polymer commonly used to make injected molded parts.  It has the following features and benefits:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<ul> <li>Low cost</li> <li>Good machinability</li><li>Impact resistant</li><li>High structural strength and stiffness</li><li>Good chemical resistance</li><li>Performs in high and low temperatures</li><li>Excellent electrical insulation properties</li><li>Easy to glue and paint</li></ul> ",
      "button": " <button type='button' id='abs'></button>"
   },
   {
      "idSearch": "forged-30",
      "Headline": "Forged",
      "p1": "By mechanically deforming the heated metal under tightly controlled conditions, forging produces predictable and uniform grain size and flow characteristics. Forging stock is also typically pre-worked to refine the dendritic structure of the ingot and remove porosity. These qualities translate into superior metallurgical and mechanical qualities and deliver increased directional toughness in the final part.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='forged'></button>"
   },
   {
      "idSearch": "extruded-31.5",
      "Headline": "Extrusion",
      "p1": "When something is extruded, it means that a material has been pushed through a die and typically under great force.  Though some materials can be extruded while cold, they often require being heated first.  The extrusion process typically produces excellent surface finishes.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='Extrusion'></button>"
   },
   {
      "idSearch": "cast-31",
      "Headline": "Precision Cast",
      "p1": "Also referred to as the lost wax process or investment casting, the investment casting process begins with the production of a wax model or pattern which is created in the shape of the desired part. Wax Patterns are typically made by injecting wax into a metal tool or dye. These patterns are attached to a wax tree, also called a sprue, which is used for the mold making process.",
      "p2": "The wax patterns are then dipped or invested into a liquid ceramic slurry after which fine sand or Stucco is applied to the wet surface. The mold is allowed to dry and the process is repeated a number of times resulting in a layered ceramic mold.",
      "p3": "Before pouring metal into the mold. The wax is removed using a flash fire oven which melts and burns out the wax. The mold is then preheated to a specific temperature to prevent the liquid metal from solidifying before the entire mold is filled.",
      "p4": "Alloy is melted in a ceramic crucible using a process known as induction and electric resistance melting. When the alloy reaches its specified temperature, it is poured into the mold and the mold is allowed to cool. Once cool, the shell materials are removed from the metal, this is done using a hammer or high-pressure water blast. The parts are removed from the sprue and the gates are removed from the part. The surface can then be finished using belt grinding or polishing.",
      "p5": "The investment casting process produces complex high precision components with an excellent as-cast surface finish, often reducing or even eliminating the need for machining. It is often the only way a part can be manufactured economically.",
      "button": " <button type='button' id='cast'></button>"
   },
   {
      "idSearch": "welded-32",
      "Headline": "Formed and Welded",
      "p1": "A number of rigging products are bent and formed into shape from a piece of steel wire, rod or round bar.  Examples of this are S-hooks.",
      "p2": "Products such as the eyes on certain eye bolts are formed to make the eyes and then welded for greater strength.  The same process applies to other products such as ground anchors, D-rings, certain pad eyes and more.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='welded'></button>"
   },
   {
      "idSearch": "machining-33",
      "Headline": "Machining",
      "p1": "Machining is a process in which material is removed from a workpiece to shape or finish it into a desired form. Drilling, hole-making, milling, turning, and threading tools are attached to compatible machinery such as a lathes, drill presses, or CNC machines to perform machining operations on the workpiece. The workpiece is typically a piece of raw material, sheets or rolls of stock, or an existing part, and the machine setup is typically guided by the type of material being worked on and the amount of material to be removed from the workpiece. Machine tool accessories, metalworking fluids, toolholders, precision measuring tools, and other supplies support the machining operation for optimal results.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='machining'></button>"
   },
   {
      "idSearch": "qt-34",
      "Headline": "Quenched and Tempered",
      "p1": "Quenching and tempering are processes that strengthen and harden materials like steel and other iron-based alloys. The process of quenching or quench hardening involves heating the material and then rapidly cooling it to set the components into place as quickly as possible. The process is tightly controlled, with the heating temperature, cooling method, cooling substance and cooling speed all dependent upon the type of material being quenched and the desired hardness. A typical heating range is between 1,500 and 1,650 degrees fahrenheit, with extra care being taken to keeping the temperature as stable as possible. Variances in the degree of heat being applied during the process can result in distortion in the resultant metal.",
      "p2": "After the material has been quenched to its hardest state, the process of tempering is used to achieve greater toughness and ductility by decreasing hardness. Tempering is achieved by heating the quenched material to below the critical point for a set period of time, then allowing it to cool in still air. Both the temperature and heating time depend on the composition of the material and will determine the amount of hardness removed.",
      "p3": "By tempering quenched steel, it becomes less brittle and more ductile without sacrificing too much hardness. It is the combination of these two processes that produces a harder, tougher steel thats more weldable and ductile than ordinary carbon steel.",
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='qt'></button>"
   },
   {
      "idSearch": "ch-35",
      "Headline": "Case Hardened",
      "p1": "To case harden a piece of steel, it needs to be heated to a high temperature and then diffuse carbon and/or nitrogen onto the metals surface.  The carbon concentrates on the surface to give it a very hard, glass-like hardness while the core of the metal retains ductility.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='ch'></button>"
   },
   {
      "idSearch": "pt-36",
      "Headline": "Proof Testing",
      "p1": "Proof testing is performed using a hydraulically powered testing machine by fixing each end of the specimen to the machine clevises.  An amount of force is then applied and the machines load cell sends the amount of load to a computer or indicator.",
      "p2": "The amount of force to be applied is typically specified as a multiple of the specimens rated capacity.  For example, this can be expressed as proof test to 2 times the working load limit.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='pt'></button>"
   },
   {
      "idSearch": "NDT-37",
      "Headline": "Individually NDT Tested",
      "p1": "NDT stands for non-destructive testing.  Forgings and castings can have defects resulting from the processes from which they were made.  There are numerous methods of non-destructive testing such as magnetic particle inspection, eddy current testing, acoustic resonance testing, x-ray and ultrasonic testing to name a few.  These testing methods detect imperfections such as cracks and porosity. ",
      "p2": "If items are to undergo stress testing such as proof load testing, NDT testing should always be performed after the stress testing.",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='NDT'></button>"
   },
   {
      "idSearch": "formed-38",
      "Headline": "Formed",
      "p1": "Depending upon its hardness, metal can be bent, formed or shaped into in a cold or hot state.  This is typically done with hydraulic or mechanical presses, rollers or bending jigs.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='formed'></button>"
   },
   {
      "idSearch": "HDG-40",
      "Headline": "Hot Dip Galvanized",
      "p1": "Hot dip galvanized coating is produced by immersing steel into molten zinc.  The zinc alloys with the surface of the steel to create a protective barrier between the atmosphere and the steel.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='HDG'></button>"
   },
   {
      "idSearch": "zinc-plate-41",
      "Headline": "Zinc Plated",
      "p1": "The zinc plating process electrically deposits a thin layer of zinc on the steel substrate and creates a physical barrier to guard the steel against rust and corrosion.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='zinc-plate'></button>"
   },
   {
      "idSearch": "yellow-zinc-42",
      "Headline": "Yellow Zinc Chromate",
      "p1": "The yellow zinc chromate plating process electrically bonds a thin layer of zinc onto the steel surface and in this same process, yellow chromate is added as an additional element to guard against rust and corrosion.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='yellow-zinc'></button>"
   },
   {
      "idSearch": "anodized-43",
      "Headline": "Anodized",
      "p1": "To give the surface a more durable and corrosion resistant finish, aluminum is anodized through an electrochemical process.  The immersion of aluminum into an electrolyte acid bath and passing an electric current through the medium is what creates the anodic oxide finish.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='anodized'></button>"
   },
   {
      "idSearch": "powder-coated-44",
      "Headline": "Powder Coated",
      "p1": "Powder coating is applied with an electrostatic gun as a dry powder before being heat cured in an oven environment.  Advantages to powder coating are:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<ul> <li> Harder and more durable than paint</li> <li> Thicker coating may be achieved</li><li> No solvents</li><li> Very little VOCs (volatile organic chemicals) </li>   \t</ul> ",
      "button": " <button type='button' id='powder-coated'></button>"
   },
   {
      "idSearch": "painted-45",
      "Headline": "Painted",
      "p1": "Painted products have been properly surface prepped, applied with a layer of primer and then painted with industrial grade enamel.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='painted'></button>"
   },
   {
      "idSearch": "electro-polished-46",
      "Headline": "Electro Polished",
      "p1": "Using electricity in a tank of chemicals, the outer layer of the surface of the part is peeled away to expose the chromium molecules and that results in a shiny, corrosion resistant finish.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='electro-polished'></button>"
   },
   {
      "idSearch": "mirror-polished-47",
      "Headline": "Mirror Polished",
      "p1": "To achieve a mirror finish, multiple layers of fine grinding and waxing is required.  The enhances the corrosion resistance of the surface and makes the surface less vulnerable to the formation of tea stains.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='mirror-polished'></button>"
   },
   {
      "idSearch": "black-oxide-48",
      "Headline": "Black Oxide",
      "p1": "Black oxide finish is produced by chemically converting the iron on the surface of the part with the salts in the oxide solution which turns the surface black.  The black oxide surface layer of the part provides both a matte cosmetic finish with a modest degree of corrosion protection. To enhance the corrosion resistant abilities of this finish, oil or wax should be applied.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='black-oxide'></button>"
   },
   {
      "idSearch": "B30-9-50",
      "Headline": "ASME B30.9",
      "p1": "The ASME B30.9-5 and B30.9-6 standard applies to web slings and polyester roundslings.  The following are key elements as they apply to items covered in this standard:", 
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li>Webbing to meet the requirements of WSTDA WB-1.</li> <li>Thread to meet the requirements of WSTDA TH-1. .</li><li>Core yarns for roundslings to meet the requirements of WSTDA RS-1. </li></ul> <h3>Design Factor</h3> <ul> <li>Design factor for web and polyester roundslings shall be 5.</h3> </ul> <h3>Identification</h3> <ul> <li>Name or trademark</li> <li>Manufacturer code or stock number</li><li>Rated load for at least 1 hitch type and angle on which it was based</li><li>Type of web material</li><li>Core material for roundslings</li></ul> ",
      "button": " <button type='button' id='B30.9'></button>"
   },
   {
      "idSearch": "B30-10-51",
      "Headline": "ASME B30.10",
      "p1": "The ASME B30.10 standard applies to hooks.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "",
      "liBadge": "<h3>Materials</h3>             <ul>  <li>All fittings or devices in this standard must have material ductile enough to deform permanently while being able to support the load within the operating temperatures established by the manufacturer.</li> </ul> <h3>Construction</h3>\t<ul>  <li>When a latch is part of the hook design, it must be configured to retain the sling or chain when there is no tension and in a slack condition.  Latches should never be intended to support the load.</li> </ul> <h3>Markings</h3> <ul> <li>The manufacturers trademark or brand must be forged, cast or die stamped in a non-wear, low stress area of the hook.</li> \t</ul> ",
      "button": " <button type='button' id='B30.10'></button>"
   },
   {
      "idSearch": "B30-16-52",
      "Headline": "ASME B30.16",
      "p1": "Key Elements of the ASME B30.16 Standard Pertaining to Chain Hoists",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Mechanical Design</h3><ul>  <li>Hoist and appurtenances are to be designed withstand all imposed stresses that occur under typical operating conditions within the rated load.</li> <li>Chain hoist and all load suspension parts shall have a design factor of 4.</li><li>Load sprockets and drums to be guarded and sprockets to have pockets or teeth to allow to engagement of the load chain.</li><li>Chain hoist to be designed to prevent the load chain from jamming within the hoist mechanism.</li> <li>Load chain to be welded and calibrated to work across sprockets without binding and links that pass over the sprocket on edge should be installed with the welds positioned away from the sprocket center.  Hoist should also be designed to prevent chain from running completely out of the hoist.</li> <li>Hoist is to have a mechanism that controls the load. </li><li>Hoist hooks are to have latches and be able to swivel and rotate freely. </li><li>Access for lubrication should be provided if it is required. </li></ul> <h3>Proof Testing</h3> <ul> <li>Manufacturer is required to proof test the hoist at 1.5 times the rated safe working load divided by the number of chain parts supporting the load. </li> </ul> <h3>Identification</h3> <ul> <li>The plate or label of the hoist is to be marked to indicate the manufacturers name, model or serial number and rated load.  The control knob shall be marked to indicate the direction of the resultant motion. </li> </ul> ",
      "button": " <button type='button' id='B30.16'></button>"
   },
   {
      "idSearch": "B30-21-54",
      "Headline": "ASME B30.21",
      "p1": "Key Elements of the ASME B30.21 Standard Pertaining to Lever Hoists",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Mechanical Design</h3> <ul> <li>Hoist and appurtenances are to be designed withstand all imposed stresses that occur under typical operating conditions within the rated load.</li> <li>Lever hoist and all load suspension parts shall have a design factor of 4. </li><li>Load sprockets and drums to be guarded and sprockets to have pockets or teeth to allow to engagement of the load chain. </li><li>Lever hoist to be designed to prevent the load chain from jamming within the hoist mechanism. </li><li>Load chain to be welded and calibrated to work across sprockets without binding and links that pass over the sprocket on edge should be installed with the welds positioned away from the sprocket center.  Hoist should also be designed to prevent chain from running completely out of the hoist. </li><li>Hoist is to have a mechanism that controls the load. </li><li>Hoist hooks are to have latches and be able to swivel and rotate freely. </li><li>Access for lubrication should be provided if it is required. </li></ul> <h3>Proof Testing</h3> <ul><li>  Manufacturer is required to proof test the hoist at 1.5 times the rated safe working load divided by the number of chain parts supporting the load.</li> </ul> <h3>Identification</h3> <ul> <li> The plate or label of the hoist is to be marked to indicate the manufacturers name, model or serial number and rated load.  The control knob shall be marked to indicate the direction of the resultant motion.</li> </ul> ",
      "button": " <button type='button' id='B30.21'></button>"
   },
   {
      "idSearch": "B30-26-55",
      "Headline": "ASME B30.26",
      "p1": "The ASME B30.26 Standard applies to several rigging fittings that include shackles, turnbuckles, wire rope clips, eye bolts, swivels, blocks, hooks, links and swivel hoist rings.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='B30.26'></button>"
   },
   {
      "idSearch": "A1023-60",
      "Headline": "ASTM A1023 ",
      "p1": "The ASTM A1023 standard applies to wire rope and cable.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<li>Material must comply with ASTM specifications and meet chemical and tensile requirements.</li>  <li>Rope and cable diameters must meet requirements stated for acceptable tolerances for each size and rope/cable type.</li> <li>Strands shall be tight and uniform around the core and the layers of wire in each strand are to be in the same direction of lay.  All lay lengths for corresponding wire layers are to be uniform.</li> <li>Preformed strands are required unless otherwise specified.</li> <li>Sizes and grades of wire rope and cable are to be strength tested by the manufacturer and test certs provided.</li> <li>Reels and spools are to be marked with wire rope and cable suppliers name, address, length, product description and traceable to production lot.</li> ",
      "button": " <button type='button' id='A1023'></button>"
   },
   {
      "idSearch": "A413-61",
      "Headline": "ASTM A413",
      "p1": "The ASTM A413 standard applies to grade 70, 43 and 30 welded chain.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Material</h3> <ul> <li>Steel to be at manufacturers choice as long as carbon does not exceed .37%, phosphorous does not exceed .048% and sulfur does not exceed .058%.  Chain can be welded by forged welding process, electric welding or gas welding process.  Grade 43 and 30 chains do not require heat treatment.  Grade 70 chain does require heat treatment consisting of heating, quenching and tempering.</li> </ul> <h3>Dimensions</h3> <ul> <li>Dimensions, tolerances and weights to be in accordance with Table 1 of the specification.</li> </ul> <h3>Markings</h3> <ul> <li>All chain to have manufacturers mark.  Also, for grade 30 chain, chain to be embossed with 3, 30 or 300.  For grade 43 chain, chain to be embossed with 4, 43 or 430.  For grade 70 chain, chain to be embossed with 7, 70 or 700.</li> </ul> ",
      "button": " <button type='button' id='A413'></button>"
   },
   {
      "idSearch": "A1023-60",
      "Headline": "ASTM A1023",
      "p1": "The ASTM A1023 standard applies to wire rope and cable.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<ul> <li>Material must comply with ASTM specifications and meet chemical and tensile requirements.</li> <li>Rope and cable diameters must meet requirements stated for acceptable tolerances for each size and rope/cable type.</li> <li>Strands shall be tight and uniform around the core and the layers of wire in each strand are to be in the same direction of lay.  All lay lengths for corresponding wire layers are to be uniform.</li> <li>Preformed strands are required unless otherwise specified.</li> <li>Sizes and grades of wire rope and cable are to be strength tested by the manufacturer and test certs provided.</li> <li>Reels and spools are to be marked with wire rope and cable suppliers name, address, length, product description and traceable to production lot.</li> </ul> ",
      "button": " <button type='button' id='A1023'></button>"
   },

   {
      "idSearch": "A574-62",
      "Headline": "ASTM A574",
      "p1": "The ASTM A574 standard applies to alloy socket head cap screws.  The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li> To be fine grain alloy steel made from open hearth, basic oxygen or electric arc furnaces.  For threaded sizes up to 1.5, heads are to be forged.  For threaded sizes larger than 1.5, heads to be forged or machined.  Bolts are to be heat treated, oil quenched and tempered to hardness of 39-45 HRC for sizes up to 1.5 and 37-45 HRC for larger sizes.</li> </ul> <h3>Threads</h3> <ul> <li> For sizes up to 1, Class 3A UNRC and UNRF.  For sizes over 1 up to 1.5, Class 2A UNRC and UNRF.  For sizes over 1.5, Class 2A UNRC.</li> </ul> <h3>Finish</h3> <ul> <li> Bolt finish can be bright uncoated, thermal black oxide or chemical black oxide.</li> </ul> ",
      "button": " <button type='button' id='A574'></button>"
   },
   {
      "idSearch": "F1145-63",
      "Headline": "ASTM F1145",
      "p1": "ASTM A1145 specification applies to turnbuckles.  The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li> Steel shall be sufficient to meet or exceed breaking loads specified.  Turnbuckle bodies and end fittings to be forged.  Threads to be UNC or UNF type with fits no looser than 1A/AB standard.  Galvanized threads may be undercut.</li> </ul> <h3>Construction</h3> <ul> <li> Jaw end fittings 5/8 and smaller to have a hex head bolt and nut.  For sizes  and larger, jaw end fittings to have round head pin with cotter pin.</li> </ul> <h3>Design Factor</h3> <Li>Turnbuckles to have design factor of 5 and end fittings to be strong enough to support one half of the breaking strength of the assembly without deforming.</li> <h3>Coating</h3> <li>Hot dip galvanized to ASTM-A153 or equivalent.</li> ",
      "button": " <button type='button' id='F1145'></button>"
   },
   {
      "idSearch": "DIN-580-70",
      "Headline": "DIN 580",
      "p1": "DIN stands for Deutches Instititutfuer Normung and it is a German standards organization and this standard covers lifting eye bolts. The following are key elements as they apply to items covered in this standard",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "",
	  "liBadge": "", 
      "button": " <button type='button' id='DIN-580'></button>"
   },
   {
      "idSearch": "DIN-582-71",
      "Headline": "DIN 582",
      "p1": "DIN stands for Deutches Instititutfuer Normung and it is a German standards organization and this standard covers lifting eye bolts. The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li> Lifting eye nuts are to be drop forged from refined grain carbon steel or stainless steel.  Carbon steels to be grade C15E with an allowable content of aluminum between .025% and .05%.  Stainless steels to be A2, A3, A4 or A5 grades.</li> </ul> <h3>Dimensions</h3> <ul> <li>Must conform with the dimensions stated in Table 1 of this specification.</li> </ul> <h3>Threads</h3> <ul> <li>Threads to be 6g engagement group N according to DIN ISO 965-1, 965-2 or 965-4. </li> </ul> <h3>Surface Finish</h3> <ul> <li>Carbon steel lifting eye nuts can be zinc plated to EN 4042 or hot dip galvanized to EN 10684.  Stainless steel eye bolts are to be passivated to EN 16048.</li> </ul> <h3>Identification</h3> <ul> <li>Manufacturers trademark</li> <li>Material grade</li> <li>Rated capacity</li> <li>Arrow indicating axial direction</li> </ul> ",
      "button": " <button type='button' id='DIN-582'></button>"
   },
   {
      "idSearch": "DIN-766-72",
      "Headline": "DIN 766",
      "p1": "DIN stands for Deutches Instititutfuer Normung and it is a German standards organization and this standard covers grade 3 calibrated round link welded chains. The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li>Steel to be in accordance with DIN 17115 and type to be at manufacturers discretion and to minimum quality rating of USt 35-2.  Steel must be heat treated and shall meet the requirements of DIN 685.</li> </ul> <h3>Dimensions</h3> <ul><li>  Must conform with the dimensions stated in Table 1 of this specification.</li> </ul> <h3>Individually Proof Load Tested</h3> <ul> <li>This means that each product has been proof load tested on a certified and calibrated test machine by a qualified person.</li> </ul> ",
      "button": " <button type='button' id='DIN-766'></button>"
   },
   {
      "idSearch": "NACM-75",
      "Headline": "NACM",
      "p1": "NACM stands for National Association of Chain Manufacturers and this standard applies to Grades 100, 80, 70, 43 and 30 welded chains. The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Material</h3> <ul> <li> If carbon steel is to be used, chemistry is to have a maximum of .35% carbon, .04% phosphorous and .05% sulfur.  If alloy steel is required, chemistry to have maximum of .35% carbon, .035% phosphorous, .04% sulfur, a minimum of .4% nickel, and a minimum of either .4% chromium or .15% molybdenum.</li> </ul> <h3>Construction</h3> <ul>          <li>Chain links to be constructed by electric welding or gas welding process.</li> </ul> <h3>Testing</h3> <ul> <li>Tensile and elongation testing shall be performed on a length of chain after hardening and tempering.  Test fixtures must securely support the shoulder of the link.</li> <li>Elongation is not to be less than 20% for grade 100 and 80 chains.  For grade 70, 43 and 30, elongation to be no less than 15%.</li> </ul> <h3>Dimensions</h3> <ul> <li>Based on the dimensions shown in the tables of this standard, grade 100 and 80 chains shall not be more than -3% and -7% for grade 70, 43 and 30 chains.  Oversized material diameter can be used on all of the grades.</li></ul> ",
      "button": " <button type='button' id='NACM'></button>"
   },
   {
      "idSearch": "WSTDA-76",
      "Headline": "WSTDA RS-1",
      "p1": "WSTDA stands for Web Sling Tie Down Association and their standards for polyester roundslings are compiled in the standard RS-1. The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "<h3>Material</h3><ul><li>Polyester roundslings are made from a core of polyester yarns that are uniformly wound, a woven fabric cover and threads to close the cover around the core yarns.  Though it is not required that the cover be of the same fiber as the core yarns, the thread and core yarns must be of the same material.</li></ul><h3>Stitching</h3><ul><li>Stitching must be lock-stitch type.</li></ul><h3>Design Factor</h3><ul><li>Slings to have a design factor of 5.</li><h3>Identification</h3><ul><li>Polyester roundslings should be color coded to match the rated capacities according to the tables in this standard.</li></ul><p>Each sling must have a tag that shows:</p><ul><li>Rated capacity for Vertical, Choker and Vertical Choker per WSTDA tables</li><li>Length</li><li>Core fiber type</li><li>Manufacturer’s name or trademark</li></ul><h3></h3><ul><li></li></ul>",
      "button": " <button type='button' id='WSTDA '></button>"
   },
   {
      "idSearch": "WS-1-77",
      "Headline": "WSTDA WS-1",
      "p1": "WSTDA stands for Web Sling Tie Down Association and their standards for synthetic web slings are compiled in the standard WS-1. The following are key elements as they apply to items covered in this standard:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "<h3>Materials</h3><ul><li>Material must be made to WSTDA standards and be certified for strength, thickness and width.  Ends to be heat sealed to prevent unraveling. Thread must be the same yarn type as the webbing.</li></ul><h3>Stitching</h3><ul><li>Stitch method and pattern must be strong enough to meet or exceed a design factor of 5.</li></ul><h3>Loop Eyes</h3><ul><li>For 1 and 2 ply slings, 1” wide slings to have 9” eyes, 2” and 3” wide slings to have 12” eyes and 4” wide slings to have 14” eyes.</li></ul><h3>Design Factor</h3><ul><li>Slings to have a design factor of 5.</li></ul><h3>Identification</h3><p>Each sling must have a tag that shows:</p><ul><li>Rated capacity for Vertical, Choker and Vertical Choker per WSTDA tables</li><li>Length, width & number of plies</li><li></li><li>Type of fiber</li><li>Manufacturer’s name or trademark</li><li>	Manufacturer’s code or stock number</li></ul><h3></h3><ul><li>•	New web slings are not required to be proof tested.</li></ul>",
      "button": " <button type='button' id='WS-1 '></button>"
   },
   {
      "idSearch": "Cord-78",
      "Headline": "Cordage Institute",
      "p1": "The Cordage Institute is an international organization made up of rope and related manufacturers and affiliated industries.  Since 1920, the organization has served to create standards and guidelines for the manufacture and safe operating practices of cordage.",
      "p2": "A series of standards have been created that cover:",
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<ul> <li>Fiber types, strengths and properties</li> <li>Rope construction</li><li>Rope strengths</li><li>Tolerances</li><li>Identification</li><li>Performance requirements</li><li>Packaging and labeling</li><li>Quality assurance</li></ul> ",
      "button": " <button type='button' id='Cord'></button>"
   },
   {
      "idSearch": "ISOG43-79",
      "Headline": "ISO Grade 43",
      "p1": "This is not an actual standard. This is a chain made to the dimensions of ISO short link chain and with strength to grade 43 high test.  This chain is the most widely used chain for anchor windlasses and the short links make it more flexible and articulating to prevent kinks or binding.  Chain is calibrated to make sure it works properly with chain gypsies and has a heavy hot dip galvanized finish for greater corrosion resistance.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='Grade-43'></button>"
   },
   {
      "idSearch": "FF-C-450-80",
      "Headline": "FF-C-450",
      "p1": "The FF-C-450 specification applies to drop forged wire rope clips, fist grip wire rope clips and malleable wire rope clips.  The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li>For Type I Class 1 common wire rope clips and Type II Class 1 fist grip style wire rope clips, the saddles for sizes up to 2 inches are to be forged from carbon steel, and the bolts and nuts are to be carbon steel as well.</li> <li>For Type 1 Class 2 malleable wire rope clips, the saddles are to be malleable iron and in accordance with ASTM A47/47M or equivalent.  The bolts and nuts are to be carbon steel.</li> <li>Nuts for all wire rope clips are to be the same class as the bolts.  Nuts for the Type I Class 1 common wire rope clips and the Type II Class 1 fist grip style wire rope clips are to be heavy hex type in accordance with ASME B18.2.  Type I Class 2 malleable clips to have flat type nuts in accordance with ASME B18.2.</li> <li>Bolts for all classes to be UNC Class 2A in accordance with FED-STD-H28.  Threads may be rolled or cut at the manufacturers discretion.</li> <h3>Identification</h3> <li>Wire rope clips are to be permanently marked with the manufacturers name or logo and size.</li> <h3>Coatings</h3> <li>Wire rope clips are to be either zinc plated or hot dip galvanized.</li> ",
      "button": " <button type='button' id='FF-C-450'></button>"
   },
   {
      "idSearch": "FF-T-276-81",
      "Headline": "FF-T-276",
      "p1": "Type II thimbles are light duty intended for fiber rope and wire rope.  Type III are heavy duty for wire rope applications.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <ul> <li>Cold or hot rolled steel.</li> </ul> <h3>Coating</h3> <ul> <li>Hot dip galvanized to ASTM-A153 or zinc plated to ASTM-B633.</li></ul> <h3>Design</h3> <ul> <li> Must conform to dimensions and weights specified in this standard.</li> </ul> ",
      "button": " <button type='button' id='FF-T-276'></button>"
   },
   {
      "idSearch": "FF-T-791-82",
      "Headline": "FF-T-791",
      "p1": "The FF-T-791 specification applies to turnbuckles.  The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Types</h3> <ul> <li>Type I, Class 4:\t\tEye x Eye Turnbuckles</li> <li>Type I, Class 5:\t\tHook x Hook Turnbuckles</li> <li>Type I, Class 6:\t\tHook x Eye Turnbuckles</li> <li>Type I, Class 7:\t\tJaw x Jaw Turnbuckles</li> <li>Type I, Class 8:\t\tJaw x Eye Turnbuckles</li> </ul> <h3>Materials</h3> <ul> <li> Steel shall be sufficient to meet or exceed breaking loads specified.  Turnbuckle bodies and end fittings to be forged.  Threads to be UNC or UNF type with fits no looser than 1A/AB standard.  Galvanized threads may be undercut.</li> </ul> <h3>Design Factor</h3> <ul> <li>Turnbuckles to have design factor of 5 and end fittings to be strong enough to support one half of the breaking strength of the assembly without deforming.</li> </ul> <h3>Coating</h3> <ul> <li>Hot dip galvanized to ASTM-A153 or equivalent.</li> </ul> ",
      "button": " <button type='button' id='FF-T-791'></button>"
   },
   {
      "idSearch": "RR-C-271-83",
      "Headline": "RR-C-271",
      "p1": "The RR-C-271 specification applies to welded chain, connecting links, lap links, chain hooks, shackles and swivels.  The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
      "liBadge": "<h3>Materials</h3> <p>For alloy chain and mechanical coupling links, steel to be alloy type in accordance with ASTM A322, ASTM A304, ASTM A752 or equivalent.  Heat treatment is required to specified physical properties.</p> <ul> <li>For high test and grade 70 chain, connecting links, lap links and swivels, steel to be carbon type in accordance with ASTM A576, ASTM A510 or equivalent.  Heat treatment is required to specified physical properties.</li> <li>For type IVA carbon steel shackles, steel to be in accordance with ASTM A576 or equivalent.  Heat treatment is required to specified physical properties.</li> <li>Shackles, mechanical coupling links, connecting links and swivels to be forged.</li> </ul> <h3>Coatings</h3> <ul><li>Hot dip galvanizing to be in accordance with ASTM A153/A153M, class B or equivalent.</li> <li>Zinc plating to be in accordance with ASTM B633, type II, class Fe/Zn 12.</li> <li>When zinc coating alloy steel, procedures to guard against embrittlement according to ASTM A143/A143M or equivalent is required.</li></ul> <h3>Design Factor</h3> <ul> <li>For welded chains, mechanical coupling links, connecting links and lap links, design factor is 4.</li> <li>For shackles and swivels, design factor is 5.  Shackles and swivels must be able to be proof tested without deforming or defect.  Shackles must permanently deform before breaking.</li> </ul> <h3>Identification</h3> <ul> <li>Shackles markings to include manufacturer name or trademark, size and working load limit. Shackle pin to have mark or symbol.</li> </u>  ",
      "button": " <button type='button' id='RR-C-271'></button>"
   },
	
	{
	"idSearch": "carbon-steel-10", 
	"Headline": "Carbon Steel", 
	 "p1": "Carbon steel is a type of steel where the main alloying element is carbon, and the properties depend on the percentage of carbon present. Carbon steel is comprised of iron and carbon, and is the most common category of steel, making up approximately 85% of all steel production in the US. The carbon content of the product is in the 0–2% range and gives the metal carbon-like properties due to the influence of the carbon on the microstructure. Carbon steel can also contain small amounts of manganese, silicon, and copper. Mild steel is a commercial term for low carbon steel, where the carbon content is in the 0.04–0.3% range. It is a general classification that is not covered by a standard specification.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "" 	
	}, 
	
   {
      "idSearch": "RR-W-410-84",
      "Headline": "RR-W-410",
      "p1": "The RR-W-410 specification applies to wire rope and cable.  The following are key elements as they apply to items covered in this specification:",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "<ul><li>Wire rope and cable to be made from carbon steel or corrosion resistant steel that is defect free and originating from a basic oxygen furnace, open hearth furnace or electric arc furnace.  Type 316 stainless steel and Duplex 2205 stainless steel is excluded from this specification.</li><li>The strand core shall have a number of wires that’s less than the number of wires in the outer strands.</li><li>Tensile strength of wire rope and cable shall meet or exceed what is specified in ASTM A1023.</li><li>For zinc coatings, the amount of zinc is to conform to that stated in ASTM A1023.</li></ul>", 
      "button": " <button type='button' id='RR-W-410'></button>"
   },
   {
      "idSearch": "E-Design-90",
      "Headline": "E Design",
      "p1": "We've identified product groups that we can design, improve and bring to market at competitive prices. Our in-house engineering team is hard at work listening to customer requests to incorporate those features into new products. Years of experience in the rigging industry has given us knowledge of what works and doesn't work in many applications. We use that knowledge to make products easier to use, last longer, stronger, fit with other parts.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='E-Design'></button>"
   },
   {
      "idSearch": "Fatigue-91",
      "Headline": "Fatigue Tested",
      "p1": "Using a servo controlled hydraulic testing machine, item is dynamic tested 20,000 cycles at 1.5 times the rated capacity.",
	  "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "", 
      "button": " <button type='button' id='Fatigue'></button>"
   },
   {
      "idSearch": "XQ-95",
      "Headline": "XQ Certified",
      "p1": "XQ Assurance is an organization with established programs for the systematic monitoring and evaluation of the various aspects of products or facilities to ensure that the standards of quality are being met.  The organization is primarily focused on rigging, lifting, load bearing and safety related products.",
      "p2": "Guided by the standards established, XQ Assurance will VERIFY that procedures are followed and testing equipment is in compliance and calibrated.  Once verification is complete, products are tested to ensure they QUALIFY according to the standards established.  After products are qualified, XQ Assurance can then CERTIFY that they are worthy of the XQ Certified tag.",
      "p3": "Products that are XQ Certified and carry the XQ tag mean those products have been designed, tested and proven to perform well in their intended use and are engineered with specifications for quality that meet or exceed what is common.",
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
      "button": " <button type='button' id='XQ'></button>"
	   
   }, 
	
	{
	  "idSearch": "G43", 
	  "Headline": "ISO Grade 43", 
	  "p1": "This is not an actual standard. This is a chain made to the dimensions of ISO short link chain and with strength to grade 43 high test.  This chain is the most widely used chain for anchor windlasses and the short links make it more flexible and articulating to prevent kinks or binding.  Chain is calibrated to make sure it works properly with chain gypsies and has a heavy hot dip galvanized finish for greater corrosion resistance.", 
      "p2": "", 
	  "p3": "", 
	  "p4": "", 
	  "p5": "", 
	  "liBadge": "",
	  "button": ""
		
	}

]



/*badge priority script */ 

 var badgeDiv = document.getElementById("badges-div"); 
	
$(badgeDiv).hide(); 	
$( badgeDiv ).show().delay( 1800 ); 

  var badgesLength = document.getElementsByClassName("badge-button");	
  var badgeClassArray = []
  var arrayOfFullId = [];
  var badgeIdArray = []; 
    
	
	for(var w = 0; w < badgesLength.length; w++) {
			var getId = badgesLength[w].id; 
			getId = getId.toString(); 
			arrayOfFullId.push(getId); 
			getId = getId.substring(getId.lastIndexOf("-"))
			getId = getId.replace("-", "");
	
	/* add class to badge-button div looping on */ 

			document.getElementsByClassName("badge-button")[w].classList.add(getId); 
	
			var pushToArray = parseInt(getId); 
			pushToArray = getId; 
			badgeIdArray.push(pushToArray); 

			var sortedArray = badgeIdArray.sort(function(a,b){return b - a}); 


}
    



/*hides badge info on pop up if empty*/ 
var badgeInfo = document.getElementsByClassName("b-contet");
function checkDiv() {


var badgeInfo = document.getElementsByClassName("b-contet");

for(var q = 0; q < badgeInfo.length; q++) {
	       var  checkDiv = document.getElementsByClassName("b-contet")[q]; 
		   
		   checkDiv = checkDiv.id;
	        
	       var seeIfEmpty  =  document.getElementById(checkDiv).innerHTML; 
             
	        
if(seeIfEmpty.length < 1) {
      document.getElementById(checkDiv).style.display = "none"; 
	
} 
 
}
}


function showDivsOffClick() {

for(var u = 0; u < badgeInfo.length; u++) {
	var reShowDivs = document.getElementsByClassName("b-contet")[u]; 
	reShowDivs.style.display = "block"; 
	 
	
}
}

        var badgesLength = document.getElementsByClassName("badge-button");	
	
	    /* loops through badges present on page in product options */ 
           for(var x = 0; x < badgesLength.length; x++ ) {
	
		 	
	      var badges = document.getElementsByClassName("badge-button")[x]; 
	      var badgesID = document.getElementsByClassName("badge-button")[x].id;
        
			   
			   badges.onclick = function() {
				   findModalData(this)
				   checkDiv(); 
			   }
			   
			   
			   var modal = document.getElementById("myModalBadge");
			   /*checks if modal open and closes if user clicks on the modal*/ 
			      modal.onclick = function() {
				   checkIfOpen()
				   
			      }
			   
			      var badgeID; 
			   function findModalData(badgeID) {
			
				  
					var x; 
					function sortArray() {
					
						let findBadge = badgeID.id;
						findBadge = findBadge.toString(); 
						var z; 

                    
                    
						badgeContent.forEach(function(item) {
						var checkId = item.idSearch;
                      
                       
						if(checkId === findBadge) {
                     
						   var loopThrough = badgeContent.find(t=>t.idSearch === checkId).Headline;
			 
						   var loopThroughp1 = badgeContent.find(t=>t.idSearch === checkId).p1;
						   var loopThroughp2 = badgeContent.find(t=>t.idSearch === checkId).p2;
						   var loopThroughp3 = badgeContent.find(t=>t.idSearch === checkId).p3;
						   var loopThroughp4 = badgeContent.find(t=>t.idSearch === checkId).p4;
						   var loopThroughp5 = badgeContent.find(t=>t.idSearch === checkId).p5;
						   var loopThroughli = badgeContent.find(t=>t.idSearch === checkId).liBadge;  

						  document.getElementById("h1").innerHTML = loopThrough; 
						  document.getElementById("pOne").innerHTML = loopThroughp1; 
						  document.getElementById("pTwo").innerHTML = loopThroughp2; 
						  document.getElementById("pThree").innerHTML = loopThroughp3; 
						  document.getElementById("pFour").innerHTML = loopThroughp4; 
						  document.getElementById("pFive").innerHTML = loopThroughp5; 
						  document.getElementById("liList").innerHTML = loopThroughli; 
						}
							
							
					      
				  

					  })
                   
					}
				   
				      sortArray(); 
				      displayModal(); 

				   
				   
			   }; 
			   
			   
			   function displayModal() {
				      modal.style.display = "block";
				   
			   }
			   
			   
	  //create id for button that combines badgeID + modal 
			
	   	  var imageName = "/assets/images/badges/" +  badgesID + ".png";
	   	  var badgesHTML = "<img src='" + imageName + "'>"; 
       	   
		//$(badgesHTML).insertAfter(badges);  
		 $(badgesHTML).appendTo(badges); 	
		}; 
				  				  	    




/* modal on click functionality */ 
var span = document.getElementsByClassName("close")[0];

var badgeBtn = document.getElementsByClassName("badge-btn"); 

  

 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none !important";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

              var badgesLength = document.getElementsByClassName("badges");
	
	
	    for(var x = 0; x < badgesLength.length; x++ ) {
		 var badges   = document.getElementsByClassName("badges")[x]; 
	     var badgesID = document.getElementsByClassName("badges")[x].id;
         var badgesModal = badgesID + "-Modal-div"; 
	
	
	  //create id for button that combines badgeID + modal 
			
	   var imageName = "/assets/images/badges/" +  badgesID + ".png";
	   var badgesHTML = "<div class='btn' data-toggle='modal' data-target='#" + badgesID  + "'><img src='" + imageName + "'>"; 
       	  
			
			
		//var modalBadges = badgesID + "-Modal";
		var modalBadgesDiv = document.getElementById(badgesModal); 
	 
		$(badgesHTML).insertAfter(modalBadgesDiv);  
		}
				  
				



var badgeID; 
var x; 
function sortArray(badgeID) {
  let findBadge = badgeID.id;
  findBadge = findBadge.toString(); 
  var z; 
  badgeContent.forEach(function(item) {
    var checkId = item.idSearch;
    
    
    if(checkId === findBadge) {
       var loopThroughH = badgeContent.find(t=>t.idSearch === checkId).Headline;
       var loopThroughp1 = badgeContent.find(t=>t.idSearch === checkId).p1;
       var loopThroughp2 = badgeContent.find(t=>t.idSearch === checkId).p2;
       var loopThroughp3 = badgeContent.find(t=>t.idSearch === checkId).p3;
       var loopThroughp4 = badgeContent.find(t=>t.idSearch === checkId).p4;
       var loopThroughp5 = badgeContent.find(t=>t.idSearch === checkId).p5;
       var loopThroughli = badgeContent.find(t=>t.idSearch === checkId).liBadge;  
            console.log(loopThroughli)
      document.getElementById("h1").innerHTML = loopThroughH; 
      document.getElementById("pOne").innerHTML = loopThroughp1; 
      document.getElementById("pTwo").innerHTML = loopThroughp2; 
      document.getElementById("pThree").innerHTML = loopThroughp3; 
      document.getElementById("pFour").innerHTML = loopThroughp4; 
      document.getElementById("pFive").innerHTML = loopThroughp5; 
      document.getElementById("liList").innerHTML = loopThroughli; 
    }
    
  }); 
  

}


/* modal on click functionality */ 
var span = document.getElementsByClassName("close-badge")[0];
var modal = document.getElementById("myModalBadge");
var badgeBtn = document.getElementsByClassName("badge-btn"); 

   function display() {
      modal.style.display = "block"; 
    }
    

 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  showDivsOffClick(); 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    showDivsOffClick() 
  }
}




function checkIfOpen() {
var checkModalOpen = document.getElementById("myModalBadge"); 
var checkDisplay = checkModalOpen.style.display; 
 
if(checkDisplay === "block") {
	checkModalOpen.style.display = "none"; 
}		

}

}
document.addEventListener("DOMContentLoaded", ready);


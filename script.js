// // Testen van sychonised code vs a-synchronised code
// let a1 = console.log(5);
// let a2 = console.log(2);
// setTimeout(() => console.log(40 - 7), 0); // test de time-out functie
// let a3 = console.log(89);

// // Test 2 
// console.log("He hallo, ik ben eerste")
// setTimeout(function () { console.log("He hallo, ik ben tweede"); }, 2000);
// console.log("He hallo, ik ben derde")


// Daadwerkelijke opdracht Callbacks
function huiswerkMaken(vak, callback) {
	setTimeout(() => {
		console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
		callback();
	}, 1000);
};

function klaarMetHuiswerk() {
	console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);
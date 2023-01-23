// Complete the below function. Print the names of the candidates elibile to vote
// - Use Array methods
// - Do not use loops

// Example of inputArray
/*
	[
		{
			name:"Ravi",
			age:28
		},
		{
			name:"Teja",
			age:28
		}
	]
*/
function findVoteEligibleCandidates(populationList) {
	//_.map(populationList, p => p.name);
	let finalList=populationList.filter(p => p.age >= 18);
	var names=finalList.map(p => p.name);
	console.log(names);
}


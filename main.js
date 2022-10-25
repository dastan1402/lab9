console.log("Exercise 1: Print Hello World three times: ")

function printHelloThreeTimes(){
	console.log("Hello, World!")
	console.log("Hello, World!")
	console.log("Hello, World!")
}

printHelloThreeTimes()


console.log("Exercise 9: Check if negative or positive: ")


function check(num){
	if (num > 0){
		console.log(num + " is positive")
	} else{
		console.log(num + " is negative")
	}
}

check(10)

check(-1)

check(1000)

console.log("Exercise 8: Convert Dollars to Tenge:")

function convertToTenge(dollars){
	console.log(dollars + "$ is " + dollars * 440 + " tenge")
}


convertToTenge(1)
convertToTenge(5.5)
convertToTenge(100)



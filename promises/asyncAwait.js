/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.

//Create a promise.

//Consume the promise using async...await.
const birthParty = new Promise((resolve, reject) =>{
    let isRaining = true 
    if(isRaining){
        resolve("Oh no it's raining!! No party today...")
    } else {
        reject("No rain today! Let's celebrate!")
    }
});

const partyHappening = async () =>{
    let result = await birthParty;
    console.log(result)
}
partyHappening();

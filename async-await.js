// Selecting page elements
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

// AJAX funtions

// get request
const getData = async () => {
    try {
        const response = await fetch("https://reqres.in/api/users?page=2");
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error)
    }
}
// post request
const sendData = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users?page=2', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
           },
           body: JSON.stringify({
     // your expected POST request payload goes here
             title: "My post title",
             body: "My post content."
            })
         });
         const data = await response.json();
      // enter you logic when the fetch is successful
         console.log(data);
       } catch(error) {
     // enter your logic for when there is an error (ex. error toast)

          console.log(error)
         } 
    }

sendData();
// Buttons eventListeners
getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", sendData);

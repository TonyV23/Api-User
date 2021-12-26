//link for api
// https://randomuser.me/api/?results=24
let userData = [];

// function that fectchs user in database
const fetchUser = async () =>{
    await fetch("https://randomuser.me/api/?results=24")
    .then((response) =>response.json())
    .then((data) => userData =data.results);
    
    console.log(userData);    
};


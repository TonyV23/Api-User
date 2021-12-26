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

// function that diplays user from database
const displayUser = async () =>{
    await fetchUser();

    //function that will parse date format
    const dataParser = (date) =>{
        let newDate = new Date(date).toLocaleDateString("en-US",{
            year : "numeric",
            month : "long",
            day : "numeric"
        })
        return newDate;
    };

    document.body.innerHTML = userData.map((user) =>
        `
        <div class ="card">
            <img src =${user.picture.large} alt ="photo of ${user.name.first}">
            <h3>${user.name.first}</h3>
            <p>${user.location.city}, ${dataParser(user.dob.date)}</p>
            <em>Member since ${user.registered.date} days ago</em>
        </div>
        
        `
    ).join("");
};

displayUser();

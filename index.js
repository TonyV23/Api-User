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

    //function which will calculate the difference between the recording date with today's date
    const dayCalculate = date =>{
        let today = new Date();
        let todayTimeStamp = Date.parse(today);
        let timeStamp =Date.parse(date);
        
        return Math.ceil((todayTimeStamp - timeStamp) / 8.64e7);
    };

    document.body.innerHTML = userData.map((user) =>
        `
        <div class ="card">
            <img src =${user.picture.large} alt ="photo of ${user.name.first}">
            <h3>${user.name.first}</h3>
            <p>${user.location.city}, ${dataParser(user.dob.date)}</p>
            <em>Member since ${dayCalculate(user.registered.date)} days ago</em>
        </div>
        
        `
    ).join("");
};

displayUser();

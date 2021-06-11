const axios = require('axios').default;
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// const promise = axios.get('https://api.github.com/users/jarghiskhan')
// .then(function (response){
//   const promiseArray = [];
//   promiseArray.push(response.data);
//   const upperCardDiv = document.querySelector(".cards"); 
//   promiseArray.forEach(element => {
//     const newCard = createCards(element);
//     upperCardDiv.appendChild(newCard);
//   });
// });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const friendsArray = [
  `jarghiskhan`,
  `tetondan`,
  `dustinmyers`,
  `justsml`,
  `luishrd`,
  `bigknell`];
const friends = friendsArray.forEach(element => axios.get(`https://api.github.com/users/${element}`)
.then(function (response){
  const promiseArray = [];
  promiseArray.push(response.data);
  const upperCardDiv = document.querySelector(".cards"); 
  promiseArray.forEach(element => {
    const newCard = createCards(element);
    upperCardDiv.appendChild(newCard);
  });
}));

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card"> cardDiv
      <img src={image url of user} /> imgNode
      <div class="card-info"> cardInfoDiv
        <h3 class="name">{users name}</h3> nameHeading
        <p class="username">{users user name}</p> usernameParagraph
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCards(objectData){

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const imgNode = document.createElement("img");
  imgNode.setAttribute("src",objectData.avatar_url);
  cardDiv.appendChild(imgNode);

  const cardInfoDiv = document.createElement("div");
  cardDiv.classList.add("card-info");
  cardDiv.appendChild(cardInfoDiv);

  const nameHeading = document.createElement("h3");
  nameHeading.classList.add("name");
  nameHeading.textContent = objectData.name;
  cardInfoDiv.appendChild(nameHeading);

  const usernameParagraph = document.createElement("p");
  usernameParagraph.classList.add("username");
  usernameParagraph.textContent = objectData.login
  cardInfoDiv.appendChild(usernameParagraph);

  const locationParagraph = document.createElement("p");
  locationParagraph.textContent = `Location: ${objectData.location}`;
  cardInfoDiv.appendChild(locationParagraph);

  const profileParagraph = document.createElement("p");
  profileParagraph.textContent = `Profile: `;
  cardInfoDiv.appendChild(profileParagraph);

  const profileAnchor = document.createElement("a");
  profileAnchor.setAttribute("href",objectData.url);
  profileAnchor.textContent = objectData.url;
  profileParagraph.appendChild(profileAnchor);

  const followersParagraph = document.createElement("p");
  followersParagraph.textContent = `Followers: ${objectData.followers}`;
  cardInfoDiv.appendChild(followersParagraph);

  const followingParagraph = document.createElement("p");
  followingParagraph.textContent = `Following: ${objectData.following}`;
  cardInfoDiv.appendChild(followingParagraph);

  const bioParagraph = document.createElement("p");
  bioParagraph.textContent = `Bio: ${objectData.bio}`;
  cardInfoDiv.appendChild(bioParagraph);  

  return cardDiv;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

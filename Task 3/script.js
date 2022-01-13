/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
document.querySelector("#btn").addEventListener("click", ()=>{
    //panaikinam žinutę
    document.querySelector("#output").textContent='';
    //paimam duomenis
    fetch(ENDPOINT)
    .then((resp) => resp.json())
    .then ((data)=>{
        let myUl = document.createElement("ul");
        data.forEach((item, index) =>{
            const myLi = document.createElement("li");
            myLi.textContent = `login: ${item.login}, avatar_url: ${item.avatar_url}`;
            //minimalus stilius
            myLi.style.color="grey";
            myLi.style.fontSize="1.5em";
            myLi.style.listStyleType="square";
            myUl.append(myLi);
            })   
        document.querySelector("#output").append(myUl); 
        })
})



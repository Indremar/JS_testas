/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
.then((resp)=>resp.json())
.then((data)=>{
    data.forEach((item, index) =>{
        let myH = document.createElement("h3");
        let myP = document.createElement("p");
        myH.textContent = `Brand: ${item.brand}`;
        myP.textContent = `Models: ${item.models}`;
        //minimalus stilius
        myH.style.marginTop = "30px";
        myH.style.paddingLeft = "10px";
        myP.style.color = "grey";
        myP.style.margin = "10px";  
        document.querySelector("#output").append(myH, myP);
    })
})

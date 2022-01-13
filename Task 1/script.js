/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("#submit-btn").addEventListener("click", convert);
function convert(e){
    e.preventDefault();
    let kg = document.querySelector("#search").value;
    //kaskart naujai skaičiuojant pašalinamas prieš tai buvęs skaičiavimo rezultatas 
    document.querySelector("#output").textContent='';
    //patikrinama ar įvestas skaičius, jei ne išmetamas pranešimas
    if(isNaN(kg)){
        alert("Įveskite skaičių!")
    //konvertavimas    
    } else {
        let lb = kg * 2.2046;
        let g = kg / 0.001;
        let oz = kg * 35.274;
        //sukuriami paragrafai į kuriuose bus atvaizdavimas
        let atvaizdas_sv = document.createElement("p"); 
        let atvaizdas_g = document.createElement("p");
        let atvaizdas_oz = document.createElement("p");
        atvaizdas_sv.textContent = `Jūsų įvestą svorį kilogramais konvertavus svarais bus ${lb}`;
        atvaizdas_g.textContent = `Jūsų įvestą svorį kilogramais konvertavus gramais bus ${g}`;
        atvaizdas_oz.textContent = `Jūsų įvestą svorį kilogramais konvertavus uncijomis bus ${oz}`;
        //minimalus formatavimas
        atvaizdas_sv.style.fontSize = "1.5em";
        atvaizdas_g.style.fontSize = "1.5em";
        atvaizdas_oz.style.fontSize = "1.5em";
        atvaizdas_sv.style.paddingLeft = "100px";
        atvaizdas_g.style.paddingLeft = "100px";
        atvaizdas_oz.style.paddingLeft = "100px";
        atvaizdas_sv.style.margin = "10px";
        atvaizdas_g.style.margin = "10px";
        atvaizdas_oz.style.margin = "10px";
        atvaizdas_sv.style.color = "blue";
        atvaizdas_g.style.color = "green";
        atvaizdas_oz.style.color = "red";
        //pridedame paragrafus į output div'ą
        document.querySelector("#output").append(atvaizdas_sv, atvaizdas_g, atvaizdas_oz);
    }
    

}

/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
function Movie(title, director, budget){
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = ()=> this.budget>100000000? true : false;
}
const firstMovie = new Movie("Harry Potter and the Philosopher's Stone", "Chris Columbus", 125000000);
console.log(`Title: ${firstMovie.title}; Director: ${firstMovie.director}; Budget greater than 100 000 000 USD: ${firstMovie.wasExpensive()}`);
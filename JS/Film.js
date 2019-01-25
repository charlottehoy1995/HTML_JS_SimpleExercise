function getAllFiles(){
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open("Get", "http://localhost:8080/api/film",false);
	xmlHttp.send(null);
	let jsonString = xmlHttp.responseText;
	films = JSON.parse(jsonString);
	
	for (i=0; i<films.length; i++){
	document.write("Film ID: " + films[i].film_id + "; Title: " + films[i].title + "; Description: " + films[i].description 
	+ "; Release Year: " + films[i].release_year + "; Length: " + films[i].length + "; Ratings: " + films[i].rating + "<br>" + "<br>");
	}
		return films;
    }
    
function searchAllFilms(film){
    document.getElementsById("sfilm").innerHTML = "";
    for(i=0; i < list.length; i++){
        if(list[i].title.includes(film.value.uppercase())){
            document.getElementById("sfilm").innerHTML += list[i].title + "<br>";

        }
    }
}

function getByTitle(film){
    document.getElementsById("stitle").innerHTML = "";
    for(i=0; i < list.length; i++){
        if(list[i].title.includes(film.value.uppercase())){
            document.getElementById("stitle").innerHTML += list[i].title + "<br>";
}
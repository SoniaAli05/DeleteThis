


	function loadingJson(){
		
		console.log("test");
		
		let request = new XMLHttpRequest();
		
		request.open('GET', 'http://localhost:8080/api/film');
		
		request.setRequestHeader('Content-Type', 'application/json');     
		request.setRequestHeader('Access-Control-Allow-Origin', '*');
		
		request.responseType = 'json';
		
		request.send();

		request.onload = function(){
			
			films = request.response;
			
		}
	}
	
	function getAllFilms(){
		
		for (i=0; i<films.length; i++){
			document.getElementById('Search').innerHTML +=("Film ID: " + films[i].filmId + "; Title: " + films[i].filmTitle + "; Description: " + films[i].filmDescription 
			+ "; Release Year: " + films[i].releaseYear + "; Length: " + films[i].filmLength + "; Ratings: " + films[i].filmRating + "<br>" + "<br>");			
		}
	}
		function searchFilmTitle(fTitles) {
				document.getElementById('ToInsert').innerHTML = "";
	
	filmsFound = "";
	resultsFound = 0;
	
	searchFTitles = fTitle.toUpperCase();
	
	console.log(films.length);
	for(i = 0; i < films.length; i++){
		if(films[i].title.includes(searchFTitles)){
			//console.log("Hit");
			resultsFound ++;
			//console.log("testing");
			let div = document.createElement('div');
			div.innerHTML = document.getElementById('DisplayFilm').innerHTML;
			document.getElementById('MovieTitle').innerHTML = films[i].title;
			document.getElementById('MovieDescription').innerHTML = films[i].description;
			
			document.getElementById('ToInsert').appendChild(div);
		}
	}
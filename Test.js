let obj = {table: "Films", limit: 30};
let dbParam = JSON.stringify(obj);
let requestURL = "http://localhost:8080/api/film/"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.setRequestHeader('Content-type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.responseType = "json"
request.send();

function Search() {
    let jsonString = request.response;
    let txt = "";
    txt += "<table table border='50px' bordercolor='#2C3E50' table align='center' style='background-color:#FFFFFF'>"
    txt += "<th>Film ID</th>";
    txt += "<th>Title</th>"; 
    txt += "<th>Category</th>";
    txt += "<th>Description</th>";
    txt += "<th>Rating</th>";
    for (x in jsonString){
        txt += "<tr><td>" + jsonString[x].id + "</td>";
        txt += "<td>" + jsonString[x].title + "</td>";
        txt += "<td>" + jsonString[x].category + "</td>";
        txt += "<td>"+  jsonString[x].description + "</td>";
        txt += "<td>"+  jsonString[x].rating + "</td></tr>";
    }
    txt += "</table>"
    let myH1 = document.createElement('h1');
    document.getElementById("table").innerHTML = txt;
}

function Category(value){
    let requestURL = "http://localhost:8080/api/film/category/"+value
    request.open("GET", requestURL);
    request.responseType = "json"
    request.send();
}

function AllMovies(value){
    let requestURL = "http://localhost:8080/api/film/"
    request.open("GET", requestURL);
    request.responseType = "json"
    request.send();
}
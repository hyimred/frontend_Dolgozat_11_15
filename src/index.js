//import './style.css';
window.addEventListener('DOMContentLoaded', async function allQuote() {
    const requestURL = 'quotes.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const quotes = await response.json();
    console.log(quotes)
    

    document.getElementById('osszes').addEventListener('click', feladat01);
    document.getElementById('the').addEventListener('click', feladat02);
    document.getElementById('hossz').addEventListener('click', feladat03);
    document.getElementById('db').addEventListener('click', feladat04);





function feladat01() {
    document.getElementById('output').innerHTML = "";
    for (let i = 0; i < quotes.quotes.length; i++) {
        document.getElementById('output').innerHTML += quotes.quotes[i].quote + " - " + quotes.quotes[i].author + "<br>"
    }
    if (document.getElementById('output').style.display == "none") {
        document.getElementById('output').style.display = "";
    } else {
        document.getElementById('output').style.display = "none";
    }
}

function feladat02() { for (let i = 0; i < quotes.quotes.length; i++) {
    list[i] = quotes.quotes[i].quote;
    author[i] = quotes.quotes[i].author;
} }

function feladat03() {
    let szamok = "";
    let listLen = [];
    for (let i = 0; i < quotes.quotes.length; i++) {
    listLen[i] = quotes.quotes[i].quote.length
    }
    document.getElementById('output').innerHTML = "<p>"+listLen.join(", ")+"</p>";
}
function feladat04() { }

});

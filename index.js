const numPosts = 10;

async function getImages(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const json = await response.json();
    return json.map(img => img.url);
}

async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    return await response.json();
}

function displayImages(imgs){
    imgs.forEach(img => {$("#imgs").append(img)});
}
function displayTitles(titles){
    titles.forEach(title => {$("#titles").append(title)});
}
function displayBodies(bodies){
    bodies.forEach(body => {$("#bodies").append(body)});
}

let imgs = [];
getImages()
    .then(urls => {
        for (let i = 0; i < numPosts; i++) {
            let img = document.createElement("img");
            let index = Math.floor(Math.random()*5000 + 1);
            img.src = urls[index];
            img.className = "lesser";
            imgs.push(img);
        }
        displayImages(imgs);
    });


let titles = [];
let bodies = [];
getPosts()
    .then(json => {
        for (let i=0; i<numPosts; i++){
            let index = Math.floor(Math.random()*100 + 1);
            let title = json[index].title;
            let titleH4 = document.createElement("h4");
            titleH4.innerText = title;
            titleH4.className = "lesser";
            titles.push(titleH4);
            let body = json[index].body;
            let bodyDiv = document.createElement("div");
            bodyDiv.innerText = body;
            bodyDiv.className = "lesser";
            bodies.push(bodyDiv);
        }
        displayTitles(titles);
        displayBodies(bodies);
    });

console.log(imgs);
console.log(titles);
console.log(bodies);

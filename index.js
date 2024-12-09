async function getImages(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const json = await response.json();
    let urls = [];
    for (let i = 0, len = json.length; i < len; i++) {
        urls.push(json[i].url);
    }
    return urls;
}

async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const json = await response.json();
    return json;
}

let imgs = [];
function appendImages(imgs){
    const mainElement = document.getElementById("main");
    console.log(imgs);
    console.log("heiuygweifbaiolwf")
    // imgs.forEach(img => {
    //     console.log(4)
    //     mainElement.appendChild(img);
    // });
    for (let i=0; i<imgs.length; i++){
        mainElement.append(imgs[i]);
    }
}

getImages()
    .then(urls => {
        for (let i = 0; i < 5; i++) {
            let img = document.createElement("img");
            img.src = urls[i];
            imgs.push(img);
            
        }
    });


let titles = [];
let bodies = [];
getPosts()
    .then(json => {
        for (let i=0; i<5; i++){
            let title = json[i].title;
            titles.push(title);
            let body = json[i].body;
            bodies.push(body);
        }
    });

console.log(imgs);
console.log(titles);
console.log(bodies);

appendImages(imgs);

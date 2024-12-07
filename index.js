async function getJSON(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/');
    const json = await response.json();
    let urls = [];
    for (let i = 0, len = json.length; i < len; i++) {
        urls.push(json[i].url);
    }
    return urls;
}

getJSON()
    .then(function (urls){
        for (let i = 0; i < 5; i++) {
            let img = document.createElement("img");
            img.src = urls[i];
            $("#main").append(img);
        }
    })

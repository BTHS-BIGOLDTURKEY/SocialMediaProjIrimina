async function getJSON(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json = await response.json();
    return json;
}

getJSON()
.then(function (json){
    for (let i=0; i<3; i++){
        let data = JSON.stringify(json[i].address);
        addrs = document.createElement("div");
        addrs.innerHTML = data; 
        $("#main").append(addrs);
    }
})

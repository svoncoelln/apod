function recieve() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            console.log(this.response)
        }
    };
    xmlhttp.open("GET", "server.php?q=" + response, true);
    xmlhttp.send();
}

console.log(recieve());
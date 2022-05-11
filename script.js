function recieve() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            format(response);
        }
    };
    xmlhttp.open("GET", "server.php?q=" + guess, true);
    xmlhttp.send();
}

console.log(recieve());
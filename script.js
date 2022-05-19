recieve();

function recieve() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(this.responseText);
            display(response);
    }
    };
    xmlhttp.open("GET", "server.php", true);
    xmlhttp.send();
}

function display(data) {
    let output = "";
    for (let i = 0; i < data.length; i++) {
        output += "<div class='col-md-4'><div class='card'><div class='card-body'><h5 class='card-title'>" + data[i].title + "</h5><p class='card-text'>" + data[i].description + "</p><a href='#' class='btn btn-primary'>Read more</a></div></div></div>";
    }
    document.getElementById("output").innerHTML = output;
}
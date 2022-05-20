recieve();

function recieve() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(JSON.parse(this.responseText));
            console.log(response);
            display(response);
        }
    };
    xmlhttp.open("GET", "server.php", true);
    xmlhttp.send();
}

function display(data) {
    let title = data.title
    let url = data.url;
    let date = data.date;
    let explanation = data.explanation;
    document.getElementById("title").innerHTML = title;
    document.getElementById("show").innerHTML = "<img src="+url+">";
    document.getElementById("date").innerHTML = date;
    document.getElementById("explain").innerHTML = explanation;
}
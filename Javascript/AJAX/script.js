function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        // console.log("Ready state",this.readyState);
        // console.log("Status",this.status);
        if(this.readyState == 4 && this.status == 200){
            var ul = document.getElementById("data");
            // document.getElementById("para").innerHTML = this.responseText;
            json = this.responseText;
            json = JSON.parse(json);
            json.forEach(function(obj){
                var li = document.createElement("li");
                var img = document.createElement("img");
                img.setAttribute('src', obj.image);
                li.innerHTML = obj.name;
                li.appendChild(img);
                ul.appendChild(li);
            })
        }
    }
    xhttp.open('get', 'data.json');
    xhttp.send();
}
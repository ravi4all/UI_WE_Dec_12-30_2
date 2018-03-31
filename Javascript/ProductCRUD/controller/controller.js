window.addEventListener("load", init);

var productName;
var productPrice;
var productDesc;

function init(){
    productName = document.getElementById("box_1");
    productPrice = document.getElementById("box_2");
    productDesc = document.getElementById("box_3");

    document.getElementById("add").addEventListener("click", addItem);
    document.getElementById("delete").addEventListener("click", deleteProduct);
    document.getElementById("save").addEventListener("click",saveData);
    document.getElementById("load").addEventListener("click", loadData);
}

function saveData(){
    if(window.localStorage){
        var json = JSON.stringify(obj.itemList);
        // console.log(json);
        localStorage.setItem('productData', json);
        alert("Data saved...");
    }
    else{
        alert("Localstorage not supported...")
    }
}

function loadData(){
    if(window.localStorage){
        // localStorage.productData;
        var json = localStorage.getItem('productData');
        obj.itemList = JSON.parse(json);
        printProduct();
    }
}

function addItem(){
    var ul = document.getElementById("itemList");
    var li = document.createElement("li");

    obj.addProduct(productName.value, productPrice.value, productDesc.value)

    var img = document.createElement("img");
    img.setAttribute('src', '../images/trash.png');

    li.innerHTML =  obj.id + " " + productName.value + " " + productPrice.value + " " + productDesc.value;

    li.appendChild(img);
    ul.appendChild(li);
    img.addEventListener("click", markProduct);
}

function markProduct(){
    var elem = event.srcElement.parentElement.classList.toggle('selected');
    // console.log(elem);
    var currentId = event.srcElement.parentElement.innerHTML.split(" ")[0];
    obj.toggleProduct(currentId);
}

function deleteProduct(){
    obj.deleteProduct();
    printProduct()
}

function printProduct(){
    var ul = document.getElementById("itemList");
    ul.innerHTML = "";

    obj.itemList.forEach(function(object){
        var li = document.createElement("li");

        var img = document.createElement("img");
        img.setAttribute('src', '../images/trash.png');

        li.innerHTML =  object.id + " " + object.name + " " + object.price + " " + object.desc;

        li.appendChild(img);
        ul.appendChild(li);
        img.addEventListener("click", markProduct);
    })

}

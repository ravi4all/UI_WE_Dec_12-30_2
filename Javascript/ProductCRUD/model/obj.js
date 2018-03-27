var obj = {

    itemList : [],
    id : 0,

    addProduct:  function(name,price,desc){
        this.id++;
        var prod = new Product(this.id,name,price,desc);
        this.itemList.push(prod);
        // console.log(this.itemList);
    },

    toggleProduct : function(id){
        var toogleList = this.itemList.filter(function(obj){
            return obj.id == id;
        });
        toogleList[0].selected = !toogleList[0].selected;
        console.log(toogleList);
    },

    deleteProduct : function(){
        this.itemList = this.itemList.filter(function(obj){
            return obj.selected == false;
        })
    }

}
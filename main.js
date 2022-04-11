let productName =document.getElementById("product-name")
let productPrice =document.getElementById("product-price")
let productCategory =document.getElementById("product-category")
let productdescription =document.getElementById("product_des")
// let getButton = document.getElementById("changebtn")
// document.getElementById("update").style.display="none"
let updateIndex;
let productcontainer =[];

if(localStorage.getItem("products") == null){//first time of entrance on app
    productcontainer = []
}else{                 //second time
    productcontainer = JSON.parse(localStorage.getItem("products"))  //it will bring array of objects of pdts which already exists berfore
    displaypdt(productcontainer)

}

function addProduct(){
    
let product=  {
     productN :productName.value,
 Price :productPrice.value,
Category :productCategory.value,
 description :productdescription.value}
productcontainer.push(product)
localStorage.setItem("products", JSON.stringify(productcontainer))
displaypdt(productcontainer)
clear()

}


//function to display the pdts in a table
function displaypdt(pdtArray){ //length=0
    
    let cartona =``
    for(let i =0;i<pdtArray.length; i+= 1){
 cartona += `<tr>
<td>${i+1}</td>
<td>${pdtArray[i].productN}</td>
<td>${pdtArray[i].Price}</td>
<td>${pdtArray[i].Category}</td>
<td>${pdtArray[i].description}</td>

<td><button onclick="update(${i})" class="btn btn-warning">update</button></td>
<td><button onclick="deleteProduct(${i})" class="btn btn-danger" >delete</button></td>
</tr>`
    }
document.getElementById("display").innerHTML = cartona  /////////////question
//لو حطينا الدوكيومنت جوااللوب كل المنتجات هتتمسح عادي من الاري ولكن اخر منتج هيفضل معموله ديسبلاي لانه اللينث بتاع الاري 
//صفر فمش هيدخل جوا اللوب اصلا وبالتالي مش هيعرض الابديتد اري بعد مسح كل المنتجات فيفضل علي اخر وضع للديسبلاي بداتا اخر منتج كان موجود 

}
//function to delete pdt

function deleteProduct(productIndex){
    

 productcontainer.splice(productIndex,1)
localStorage.setItem("products", JSON.stringify(productcontainer))



    displaypdt(productcontainer)

    
}

//////function to clear the form
//}
function clear(){
    productName.value = ''
    productPrice.value = ''
    productCategory.value =''
    productdescription.value =''
}
// function to search pdt


 function search(term){   //FIXME
    let searchProducts = []
    // console.log(term);
    for(let i= 0;i<productcontainer.length;i += 1){
        if(productcontainer[i].productN.toLowerCase().includes(term.toLowerCase()) == true){
            searchProducts.push(productcontainer[i])
        }
    }
    // console.log(searchProducts);
    displaypdt(searchProducts)
}    


// }
// function to update pdt

function update(pdtindex){
    
updateIndex = pdtindex
    productName.value = productcontainer[pdtindex].productN
    productPrice.value = productcontainer[pdtindex].Price
    productCategory.value = productcontainer[pdtindex].Category
    productdescription.value = productcontainer[pdtindex].description
//    getButton.innerHTML = 'update'
// document.getElementById("update").style.display="inline"

document.getElementById("changebtn").style.display = "none"
}
function updateNewValues(updateIndex){
 
    let product=  {
        productN :productName.value,
    Price :productPrice.value,
   Category :productCategory.value,
    description :productdescription.value}
    productcontainer[updateIndex]=product
document.getElementById("changebtn").style.display = "inline"

localStorage.setItem("products", JSON.stringify(productcontainer))

    displaypdt(productcontainer)
// localStorage.setItem("products", JSON.stringify(productcontainer))
   
    clear()
    
}

///////////////////////////////////////////////////////////////////////////
//local storage
/* 
دلوقتي احنا كل حاجة بنعملها بتتحفظ جوا الرامات واول م نقفل البرنامج بيتمسحو عشان كدة اسمها زاكرة مؤقتة 
local storage is permenant memory in the browser about 5 mega bite saved in the hard itself
The localStorage object allows you to save key/value pairs in the browser.it stores data with no expiration date.
The data is not deleted when the browser is closed, and are available for future sessions.
كل متصفح فيه الوكال ستورج الخاصة بيه يعني لو عايز اجيب داتا بتاعة برنامج معين انا اشتغلت عليه هجيبها من اللوكال ستورج بتاعة المتصفح اللي كنت شغال عليه بس*/
/*
localStorage.setItem("name","ahmed")  //localstorage.setItem(key,value) => accept only strings,over ride
localStorage.setItem("name","rehab")
localStorage.setItem("age","20")
localStorage.getItem("name") //if i wrote a key which is not found it will give null
// alert(localStorage.getItem("name"))
localStorage.length
localStorage.clear()
localStorage.remove("age")*/
/////////////////////////////////////////////////////////////////////////



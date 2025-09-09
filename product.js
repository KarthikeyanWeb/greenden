var sidenav = document.getElementById("sidenav")

var menuicon = document.getElementById("menuicon")

var close = document.getElementById("close")

menuicon.addEventListener("click",function(){

    sidenav.style.right=0
})

close.addEventListener("click",function(){

    sidenav.style.right= "-50%"
})


//product serach functionality

var productContainer = document.getElementById("product-container")

var searchbar = document.getElementById("searchbar")
var productlist = document.querySelectorAll("div")

searchbar.addEventListener("keyup", function(){

   
    var enteredValue = event.target.value.toUpperCase()

    for(count=0;count<productlist.length;count=count+1){

        var productElement = productlist[count]
        var productNameElement = productElement.querySelector("h1")

        if (productNameElement) { // Check if the h1 element was found
        var productName = productNameElement.textContent;
        console.log(productName)

        if(productName.toUpperCase().indexOf(enteredValue)<0){

             productElement.style.display = "none";
        } else {
            productElement.style.display = "block";
        }
        
    } else {

             productElement.style.display = "none";
        }
    }
})
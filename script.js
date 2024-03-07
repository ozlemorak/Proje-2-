// !Filtreleme İşlemi;

const searchInput=document.querySelector("#searchInput");
const searchBtn=document.querySelector("#searchBtn");

searchBtn.addEventListener("click",function(){

    let searchItem=searchInput.value.trim().toLowerCase();
    let cards=document.querySelectorAll(".col-4");

    // console.log(cards);
    for(let i=0 ;i<cards.length; i++){
        let card=cards[i];
        let productName =card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        
        console.log(productName);
        
        if(productName.includes(searchItem)){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
        
    }
    searchInput.value="";

})



// !Sepeti arttırıp azaltmak için 

const row =document.querySelector(".row");
const sepet=document.querySelector("#result");

row.addEventListener("click",function(e){
 if(e.target.className.includes("add-to-cart")){
    sepet.innerHTML++;
 } else if(e.target.className.includes("remove-to-cart")){
    
    if(sepet.innerHTML !=0 ){
        sepet.innerHTML--;
    }
 }

 
})

// !markalara  tıklamaya göre filtreleme yapmak için

const toyota=document.querySelector("#toyota");
const renault=document.querySelector("#renault");
const peugeot=document.querySelector("#peugeot");

toyota.addEventListener("click",function(){
    let cards=document.querySelectorAll(".col-4");

    // console.log(cards);
    for(let i=0 ;i<cards.length; i++){
        let card=cards[i];
        let productName =card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        
        console.log(productName);
        
        if(productName.includes("toyota")){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
        
    }
})
renault.addEventListener("click",function(){
    let cards=document.querySelectorAll(".col-4");

    // console.log(cards);
    for(let i=0 ;i<cards.length; i++){
        let card=cards[i];
        let productName =card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        
        console.log(productName);
        
        if(productName.includes("renault")){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
        
    }
})
peugeot.addEventListener("click",function(){
    let cards=document.querySelectorAll(".col-4");

    // console.log(cards);
    for(let i=0 ;i<cards.length; i++){
        let card=cards[i];
        let productName =card.querySelector(".card-title").innerHTML.trim().toLowerCase();
        
        console.log(productName);
        
        if(productName.includes("peugeot")){
            card.style.display="block";
        }else{
            card.style.display="none";
        }
        
    }
})




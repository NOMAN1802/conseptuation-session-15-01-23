// for first card 
let serial = 0;

document.getElementById("first-card").addEventListener("click",function() {
    serial += 1;
//     // get the data using id from HTML 
// const productName= document.getElementById("first-name").innerText;
// const productPrice = document.getElementById("first-price").innerText;
// const productQuantity = document.getElementById("first-quantity").innerText;

const product = getAllData('first-name','first-price', 'first-quantity');

const priceTotal = parseInt(product.productPrice) * parseInt(product.productQuantity);

// show the data 
displayData(product.productName,product.productPrice,product.productQuantity,priceTotal);

disabledButton('first-card');
});

// for second card 
// using event Object from browser 
document.getElementById('second-card').addEventListener('click', function(e){
serial += 1;
const pd = getAllDatas(e);

const sumTotal = parseInt(pd.pPrice) + parseInt(pd.pQuantity);


displayData(pd.pName, pd.pPrice, pd.pQuantity, sumTotal);
disabledButton('second-card');
})
// third card 
document.getElementById("third-card").addEventListener("click",function() {
    serial += 1;
    // get the data using id from HTML 
const productName= document.getElementById("third-title").innerText;
const productPrice = document.getElementById("third-price").innerText;
const productQuantity = document.getElementById("third-quantity").innerText;
// console.log(productName,productPrice,productQuantity);
const priceTotal = parseInt(productPrice) - parseInt(productQuantity);


// show the data 
displayData(productName,productPrice,productQuantity,priceTotal);
disabledButton('third-card');
});

// fourth card 

document.getElementById('fourth-card').addEventListener('click', function (e){
    
    serial += 1;
    const pd = getAllDatas(e);

    const sumTotal = parseInt(pd.pPrice) ** parseInt(pd.pQuantity);
     displayData(pd.pName, pd.pPrice, pd.pQuantity,sumTotal);
     
    disabledButton('fourth-card'); 

})

// last card 

document.getElementById("last-card").addEventListener("click",function() {
    serial += 1;
    const productName= document.getElementById("last-title").innerText;
    const productPrice = document.getElementById("last-price").value;
    const productQuantity = document.getElementById("last-quantity").value;

    if(productPrice == '' || productQuantity == '' || productPrice <= 0 || productQuantity <= 0){
        alert('please insert a valid number');
    };
    const priceTotal = parseInt(productPrice) / parseInt(productQuantity);
    console.log(priceTotal);

    displayData(productName,productPrice,productQuantity,priceTotal);
    disabledButton('last-card');
})
// common function to display data 

function displayData(nameOfp,priceOfp,quantityOfp,resultOfp) {
   
    const container = document.getElementById("table-container");
const tr = document.createElement("tr");
tr.innerHTML =  `
<td>${serial}</td>
<td>${nameOfp}</td>
<td>${priceOfp}</td>
<td>${quantityOfp}</td>
<th>${resultOfp}</th>

`;
container.appendChild(tr);
}

// common function for disabled button 
function disabledButton(id){
    document.getElementById(id).setAttribute('disabled', true);
};

// common function for event object 
function getAllDatas(e) {
const pName = e.target.parentNode.parentNode.children[0].innerText;
const pPrice =  e.target.parentNode.parentNode.children[2].children[0].innerText;
const pQuantity =  e.target.parentNode.parentNode.children[3].children[0].innerText;

 const pd = {
    pName: pName,
    pPrice: pPrice,
    pQuantity: pQuantity, 
 };
 return pd;
};

// common function to get data using getElementById method

function getAllData(id1, id2, id3){
    const productName = document.getElementById(id1).innerText;
    const productPrice = document.getElementById(id2).innerText;
    const productQuantity = document.getElementById(id3).innerText;

    const product = {
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity
    };
    return product;
}
let title=document.getElementById('title');
let taxes=document.getElementById('taxes');
let price=document.getElementById('price');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let ads=document.getElementById('ads');
let btn=document.getElementById('btn');


function getTotal(){
if(price.value!=''){
    let result=(+price.value+ +taxes.value + +ads.value) - +discount.value;
    total.innerHTML=result;
    total.style.background="green";
}
else{
    total.innerHTML='';
    total.style.background="#643838";
  
}
}
let arr=[];
if(localStorage.product!=null){
    arr=JSON.parse(localStorage.product);
}

else{
    arr=[];
}

btn.onclick=function(){
    let category={
title:title.value,
price:price.value,
discount:discount.value,
ads:ads.value,
taxes:taxes.value,
total:total.innerHTML,

}
arr.push(category);
localStorage.setItem('product',JSON.stringify(arr));
clear();
show();
console.log(arr);

}
function clear(){
title.value='';
price.value='';
discount.value='';
ads.value='';
total.innerHTML='';
taxes.value='';
}




function show(){
    let table='';
for(let i=0;i<arr.length;i++){


     table +=`

        <tr>
            <td>${i}</td>
            <td>${arr[i].title}</td>
            <td>${arr[i].taxes}</td>
            <td>${arr[i].discount}</td>
            <td>${arr[i].ads}</td>
            <td>${arr[i].price}</td>
            <td>${arr[i].total}</td>
        </tr> 
      
`
}
document.getElementById('tbody').innerHTML=table;


}
let btnDelete=document.getElementById('deleteAll')

btnDelete.onclick=function(){
    deleteAll();
}
function deleteAll(){
    localStorage.clear();
    arr.splice(0);
    show();
    
}
    // if(arr.length>0){
    //     btnDelete.innerHTML=`
        
    //     <button onclick="deleteAll()">delete All</button>`
    // }
    // else{
    //     btnDelete.innerHTML='';
    // }
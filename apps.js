
const shop_list = document.querySelector('.shop-list');


fetch(' http://localhost:5050/devs').then(data => data.json()).then(data=>{

 let product ='';
 data.map(data =>{
     product +=`

     <div class="col-md-3 my-3">
     <div class="card shadow p-item">
         <a href="#" onclick="singleProductLoad(${data.id})" data-bs-toggle="modal" data-bs-target="#signal_product"><img src=" ${data.photo}" alt=""></a>
         <div class="card-body">
             <h2>${data.name}</h2>
             <h2> Age ${data.age}</h2>
             <p>Skill: $${data.skill}</p>
             <p>Location: $${data.location}</p>

         </div>

     </div>
 </div>
     
     
     `;



 });

 shop_list.innerHTML = product;

});




function singleProductLoad(id){

const single_p = document.querySelector('.product-single');

single_p.innerHTML = '';

     fetch('http://localhost:5050/devs/' + id).then(data => data.json()).then(data =>{
       
        single_p.innerHTML =`
        
        <div class="row">
        <div class="col-md-6">
            <img src=" ${data.photo}" alt="">
        </div>
        <div class="col-md-6">
            <h1>${data.name}</h1>
            <h2>Age ${data.age}</h2>
            <h2>peice  ${data.skill}</h2>
            <p> ${data.location}!</p>
            <a  class="btn btn-lg btn-info" href="#">Add to cars</a>
        </div>
    </div>
        
        `;


      
     })
}


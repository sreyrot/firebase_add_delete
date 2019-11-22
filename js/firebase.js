$(document).ready(function(){
db.collection('data').get().then(data => {
    $result = "";
    data.forEach(el => {
        $result += `
     
       
        <div class="card mt-5">
        
            <div class="card-header">

            <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${el.id}">
            View
           </button>
            <img src= "${el.data().profile}" style="border-radius: 50%" width="50px" height="50px" >
            ${el.data().name};

           

            </div>
            
            <div class="card-body">
                <img src="${el.data().post}" class="img-fluid">
              
            </div>
            <div class="card-footer">
                ${el.data().discription}
             <botton class="btn btn-outline-danger float-right" onclick="deletes('${el.id}')">Delete</button>
               <!-- The Modal -->
               <div class="modal" id="myModal${el.id}">
                 <div class="modal-dialog">
                   <div class="modal-content">
                   
                     <!-- Modal Header -->
                     <div class="modal-header">
                     <img src= "${el.data().profile}" style="border-radius: 50%" width="50px" height="50px" >
                     ${el.data().name}
                       <button type="button" class="close" data-dismiss="modal">&times;</button>
                     </div>
                     <!-- Modal body -->
                     <div class="modal-body">
                     <img src="${el.data().post}" class="img-fluid">
                     </div>
                     
                     
                     <!-- Modal footer -->
                     <div class="modal-footer">
                     ${el.data().discription}
                     </div>
                     
                   </div>
                 </div>
               </div>
               
             </div>
      
                
            </div>
        </div>
      
      
        `;
    })
    $('#result').append($result);
$('#add').on('click', function(){
    var name = $('#name').val();
    var profile = $('#profile').val();
    var post = $('#post').val();
    db.collection('data').add({
        name:name,
        profile:profile,
        post:post,
    })
})

})
});
function deletes(id){
    db.collection('data').doc(id).delete();
}
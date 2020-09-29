function clearInputFields()
{
    document.getElementById("firstNameContact").value = "";
	document.getElementById("lastNameContact").value = "";
	document.getElementById("emailContact").value = "";
    document.getElementById("phoneContact").value = "";   
}

function loadTable(){
    //$('#myTable').DataTable().ajax.reload();
    table = $('#myTable').DataTable({
        "retrieve": true,
        "bFilter": false,
        "bLengthChange": false,
        "bSort": false,
        "bStateSave": false,
    });
}
// function callEdit(contactId){
//     $(document).ready(function () {
//         $('#mymodal2').on('click', '.editContact',function(){
//         editContact(contactId);
//         });
//         });
// }


$(document).ready(function () {
    console.log("hi u are reaching this");
    $('#mymodal2').on('click', '.editContact',function(){
        //editContact($(this).attr('data-id'));
        editContact(document.getElementById("contactId"));
        console.log($(this).attr('data-id'));
    });
});

$(document).ready(function () {
    console.log("hi u are reaching this pt 2");
    $('#editContactOpen').click(function() {
        console.log("we are in hereeeeeeeeeee e e e e e ");
        const id = $(this).attr('data-id');
        console.log(id);
        $('#editContact').click(function() {
            console.log(id);
        });
        //editContact($(this).attr('data-id'));
        //console.log($(this).attr('data-id'));
    });
});

<button id="1" onClick="reply_click(this.id)">B1</button>
<button id="2" onClick="reply_click(this.id)">B2</button>
<button id="3" onClick="reply_click(this.id)">B3</button>
    
<script type="text/javascript">
  function reply_click(clicked_id)
  {
      alert(clicked_id);
  }
</script>

// works only on first button
// $(document).ready(function () {
//     console.log("hi u are reaching this pt 2");
//     $('#editContactOpen').click(function() {
//         console.log("we are in hereeeeeeeeeee e e e e e ");
//         const id = $(this).attr('data-id');
//         console.log(id);
//         $('#editContact').click(function() {
//             console.log(id);
//         });
//         //editContact($(this).attr('data-id'));
//         //console.log($(this).attr('data-id'));
//     });
// });


// $('#mymodal2').on('show.bs.modal',function(){
//     console.log("we are in hereeeeeeeeeee e e e e e ");
//     $('#editContact').click(function() {
//         const id = (this).attr('id');
//         console.log(id);
//     });
//     //editContact($(this).attr('data-id'));
//     //console.log($(this).attr('data-id'));
// });
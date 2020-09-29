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
    $('#mymodal2').on('show.bs.modal',function(){
        console.log("we are in hereeeeeeeeeee e e e e e ");
        $( '#editContact').click(function() {
            const id = button.attr('id');
            console.log(id);
            console.log(button);
        }
        //editContact($(this).attr('data-id'));
        //console.log($(this).attr('data-id'));
    });
});


$("#editContact").click(function() {
    alert( "Handler for .click() called." );
  });
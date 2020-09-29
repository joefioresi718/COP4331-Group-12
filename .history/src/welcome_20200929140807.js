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
        console.log($(this).attr('data-id'));
    });
});

$(document).ready(function () {
    console.log("hi u are reaching this");
    $('#mymodal2').on('click', '.editContactOpen',function(){
        document.getElementById("firstNameEditContact").value = "name";
        console.log("we are in hereeeeeeeeeee e e e e e ");
        //editContact($(this).attr('data-id'));
        console.log($(this).attr('data-id'));
    });
});

[52,53,60,59]
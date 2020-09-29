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


// $(document).ready(function () {
//     console.log("hi u are reaching this");
//     $('#mymodal2').on('click', '.editContact',function(){
//         //editContact($(this).attr('data-id'));
//         editContact(document.getElementById("contactId"));
//         console.log($(this).attr('data-id'));
//     });
// });
    
function reply_click(contactId)
{
    console.log("we are in the first layer " + contactId);
    e = $('#cancel').click(function handler() {
        e.removeEventListener(e.type, handler);
    });
    e = $('#editContact').click(function handler(e){
        console.log(contactId);
        e.removeEventListener(e.type, handler);
        //editContact(contactId);
        //return;
    });
}

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
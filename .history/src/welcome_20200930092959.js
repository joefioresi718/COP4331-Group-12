function clearInputFields()
{
    document.getElementById("firstNameContact").value = "";
	document.getElementById("lastNameContact").value = "";
	document.getElementById("emailContact").value = "";
    document.getElementById("phoneContact").value = "";   
}

function clearEditInputFields()
{
    document.getElementById("firstNameEditContact").value = "";
	document.getElementById("lastNameEditContact").value = "";
	document.getElementById("emailEditContact").value = "";
    document.getElementById("phoneEditContact").value = "";
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
let latest = -1;

function reply_click_delete(contactId)
{
    console.log("about to delete");
    let button1 = document.getElementById('deleteContact');
    let button2 = document.getElementById('cancelDelete');

}

function reply_click(contactId)
{
    latest=contactId;
    console.log("we are in the first layer " + contactId);
    // $('#cancel').click(function handler() {
    //     e.removeEventListener(e.type, handler);
    // });
    let button1 = document.getElementById('editContact');
    let button2 = document.getElementById('cancelEdit');
    button1.addEventListener('click', function handler(e){
        console.log(contactId);
        console.log("this is latest " + )
        if(contactId == latest)
        {
            editContact(contactId);
        }
        //button1.removeEventListener('click', arguments.callee);
        clearEditInputFields();
    });
    button2.addEventListener('click', function(){
        //button2.removeEventListener('click', arguments.callee);
        clearEditInputFields();
        //button1.removeEventListener('click', e);
    });
    // $('#editContact').click(function handler(){
    //     console.log(contactId);
    //     e.removeEventListener(e.type, handler);
        //editContact(contactId);
        //return;
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
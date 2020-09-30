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

let latest = -1;

function reply_click_delete(contactId)
{
    latest=contactId
    console.log("about to delete");
    let button1 = document.getElementById('deleteContactBtn');
    button1.addEventListener('click', function(){
        if(contactId == latest)
        {
            deleteContact(contactId);
        }
    });
}

function reply_click(contactId)
{
    latest=contactId;
    console.log("we are in the first layer " + contactId);

    let button1 = document.getElementById('editContact');
    let button2 = document.getElementById('cancelEdit');
    button1.addEventListener('click', function handler(e){
        console.log("this is contactId" + contactId);
        console.log("this is latest " + latest)
        if(contactId == latest)
        {
            editContact(contactId);
        }
    });
    button2.addEventListener('click', function(){
        clearEditInputFields();
    });
}
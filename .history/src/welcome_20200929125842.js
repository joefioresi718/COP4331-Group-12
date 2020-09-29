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

$('#mymodal2').on('click', '.save_id', function (event) {
    var myVal = $(event.relatedTarget).data('val');
    $(this).find(".modal-body").text(myVal);
  });

$(document).ready(function () {
    $('#mymodal2').on('click', '.saveid',function(){
    document.getElementById("feed_id").value = $(this).attr('data-id');
    console.log($(this).attr('data-id'));
    });
    });
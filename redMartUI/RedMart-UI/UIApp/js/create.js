var requestData;

function callCreateCustomerReportApi() {

    requestData = {
        customerName: $("#name").val(),
        customerComments: $("#comment").val(),
        assignedTo: $("#assignee").val(),
        createdBy: $("#created").val(),
        area: $("#area").val(),
        status: $("#status").val()
    };

    console.log(requestData);

    $.ajax({
        url: "http://localhost:8080/api/csr1.0-SNAPSHOT/v1/ticketing",
        type: 'post',
        dataType: 'json',
        data: requestData,
        contentType: 'application/json',
        success: function (response) {
            alert('Ticket created and id is' + response.id);
            $("#name").val("");
            $("#comment").val("");
            $("#assignee").val("");
            $("#created").val("");
            $("#area").val("");
            $("#status").val("");
        }
    });
    return false;
}
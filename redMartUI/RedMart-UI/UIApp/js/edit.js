var tr, requestData;

var disableAllElements = function (data) {
    //disabling all form group elements inside form
    $("#formGrp input").prop("disabled", data);
    $("#formGrp select").prop("disabled", data);
    $("#formGrp textarea").prop("disabled", data);
    $("#formGrp button").prop("disabled", data);
};

$(document).ready(function () {

    disableAllElements(true);

    $("#submit").click(function () {

        if ($('#ticketNumber').val() != '') {

            requestData = {id: $('#ticketNumber').val()};

            $.ajax({
                url: "http://localhost:8000/api/getCustomerReportById",
                type: 'post',
                dataType: 'json',
                data: requestData,
                contentType: 'application/json',
                success: function (response) {
                    disableAllElements(false);
                    if (response.status.toLowerCase() == "closed") {
                        disableAllElements(true);
                    }
                    $("#name").val(response.customerName);
                    $("#comment").val(response.customerComments);
                    $("#assignee").val(response.assignedTo);
                    $("#created").val(response.createdBy);
                    $("#area").val(response.area);
                    $("#status").val(response.status);
                }

            });
        }

        else {
            $('#errorModal').modal('show');
        }

    });
});

function callEditCustomerReportApi() {

    requestData = {
        id: $("#customerId").val(),
        customerName: $("#name").val(),
        customerComments: $("#comment").val(),
        assignedTo: $("#assignee").val(),
        createdBy: $("#created").val(),
        area: $("#area").val(),
        status: $("#status").val()
    };

    console.log(requestData);


    $.ajax({
        url: "http://localhost:8080/api/csr1.0-SNAPSHOT/v1/ticketing/ticketnumber/"+ticketNumber,
        type: 'post',
        dataType: 'json',
        data: requestData,
        contentType: 'application/json',
        success: function (response) {
            $('#savedInfoModal').modal('show');
            $("#name").val("");
            $("#comment").val("");
            $("#assignee").val("");
            $("#created").val("");
            $("#area").val("");
            $("#status").val("");
            disableAllElements(true);
        },
        error: function () {
            $('#errorModal').modal('show');
        }
    });
    return false;
}
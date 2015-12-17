$(document).ready(function () {
    var tr, requestData;

    $("#submit").click(function () {

        if ($('#customerName').val() != '') {
            $("table tbody tr td").remove();
            requestData = {customerName: $('#customerName').val()};
            $.ajax({
                url: "http://localhost:8080/api/csr1.0-SNAPSHOT/v1/ticketing?customerName="+customerName,
                type: 'post',
                dataType: 'json',
                data: requestData,
                contentType: 'application/json',
                success: function (response) {
                    tr = $('<tr/>');
                    tr.append("<td>" + response.ticketNumber + "</td>");
                    tr.append("<td>" + response.customerName + "</td>");
                    tr.append("<td>" + response.customerComments + "</td>");
                    tr.append("<td>" + response.status + "</td>");
                    tr.append("<td>" + response.createdBy + "</td>");
                    tr.append("<td>" + response.assignedTo + "</td>");
                    $("table").append(tr);
                },
                error: function () {
                    alert("please enter valid id");
                    $('#errorInfoModal').modal('show');
                }

            });

        }
        else {
            //alert('please enter a value');
            $('#errorInfoModal').modal('show');
        }


    });

});

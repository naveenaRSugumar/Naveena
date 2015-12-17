$(document).ready(function () {
    $.mockjax({
        url: "/api/getCustomerReportById",
        responseText: {
            "_id": "56700ef9926ba9074108a6e3",
            "ticketNumber": "123124",
            "customerName": "Nav",
            "customerComments": "good",
            "status": "Closed",
            "createdBy": "Kumar",
            "assignedTo": "Naveena",
            "area":"Support",
            "__v": 0
        }
    });

 $.mockjax({
        url: "/api/addCustomerReport",
        responseText: {id:"123123123123"}
    });
    $.mockjax({
        url: "/api/editCustomerReportById",
        responseText: {id:"123123123123"}
    });


});
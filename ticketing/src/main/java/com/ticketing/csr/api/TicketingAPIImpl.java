package com.ticketing.csr.api;

import com.ticketing.csr.infra.MongoDBClient;
import org.bson.Document;

import javax.annotation.Resource;

public class TicketingAPIImpl implements TicketingAPI{

    @Resource
    MongoDBClient mongoDBClient;

    @Override
    public void log(Ticket ticket) {
        mongoDBClient.saveTicket(ticket);
    }

    @Override
    public GetTicketResults get(String customerName) {
        GetTicketResults getTicketResults=new GetTicketResults();
        getTicketResults.setResults(mongoDBClient.get(customerName));
        return getTicketResults;
    }

    @Override
    public Document getByNumber(String ticketNumber) {
        return mongoDBClient.getByNumber(ticketNumber).get(0);
    }


}

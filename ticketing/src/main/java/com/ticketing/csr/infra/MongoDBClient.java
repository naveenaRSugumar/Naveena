package com.ticketing.csr.infra;

import com.mongodb.BasicDBObject;
import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.ticketing.csr.api.Ticket;
import org.bson.Document;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class MongoDBClient {

    @Resource
    private MongoClient mongoClient;

    private MongoCollection<Document> dbCollection;

    public void init(){
        MongoDatabase db = mongoClient.getDatabase("tryDb");
        dbCollection = db.getCollection("user2");
    }

    public void saveTicket(Ticket ticket){
        Document document=new Document();
        document.append("ticketNumber", UUID.randomUUID());
        document.append("customerName", ticket.getCustomerName());
        document.append("createdBy", ticket.getCreatedBy());
        document.append("assignedTo", ticket.getAssignedTo());
        document.append("status", ticket.getStatus());
        document.append("ticketArea", ticket.getTicketArea());
        dbCollection.insertOne(document);
    }

    public List<Document> get(String customerName){
        BasicDBObject searchQuery = new BasicDBObject();
        searchQuery.put("customerName", customerName);
        return dbCollection.find(searchQuery).into(new ArrayList<Document>());
    }

    public List<Document> getByNumber(String ticketNumber){
        BasicDBObject searchQuery = new BasicDBObject();
        searchQuery.put("ticketNumber", ticketNumber);
        return dbCollection.find(searchQuery).into(new ArrayList<Document>());
    }
}

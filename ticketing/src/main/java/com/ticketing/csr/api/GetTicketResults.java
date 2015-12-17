package com.ticketing.csr.api;

import org.bson.Document;


import java.util.List;


public class GetTicketResults {

    private List<Document> results;

    public List<Document> getResults() {
        return results;
    }

    public void setResults(List<Document> results) {
        this.results = results;
    }
}

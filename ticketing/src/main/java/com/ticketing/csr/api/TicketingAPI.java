package com.ticketing.csr.api;

import org.bson.Document;

import javax.ws.rs.*;

@Path("/ticketing")
public interface TicketingAPI {

    @POST
    void log(Ticket ticket);

    @GET
    @Produces("application/json")
    GetTicketResults get(@QueryParam("customerName")String customerName);

    @GET
    @Path("/ticketnumber/{ticketNumber}")
    @Produces("application/json")
    Document getByNumber(@PathParam("ticketNumber") String ticketNumber);
}

/**
  1. How are REST APIs stateless?
  Ans: REST APIs do not establish or maintain client sessions. Clients are responsible for providing 
        all necessary information in each request, such as authentication tokens, credentials, or context data. 
        The server does not store client-specific session data.
 
  2. Explain the HTTP codes
  Ans: Informational responses (100 – 199)
        Successful responses (200 – 299)
        Redirection messages (300 – 399)
        Client error responses (400 – 499)
        Server error responses (500 – 599)

  3. What is a URI?    
    Ans: URI stands for Uniform Resource Identifier, which is a system for uniquely identifying resources. URIs can identify a variety of resources, including:
            Web resources
            Mail addresses
            Phone numbers
            Books
            Real-world objects, such as people and places
            Concepts
            URIs are different from URLs (Uniform Resource Locators), which are a type of URI that identify a web resource's location 
            on a computer network and how to access it. The main difference between a URI and a URL is that a URI can identify any type of 
            resource, while a URL only specifies the location of a resource on the internet.
  4. Differences between REST and SOAP?
    Ans: https://www.geeksforgeeks.org/difference-between-rest-api-and-soap-api/ 

  5. Differences between REST and AJAX?
    Ans: Rest is a protocol which extends the functionality of the HTTP methods ,
         where Ajax requests the web server for exchanging data in XML format without reloading the pages.
         Rest is the architectural style of using HTTP methods. which returns Json objects. It is mostly used to create Api's.

  6. What are the core components of an HTTP request?
    Ans: There are five component
        - Method: Operation like GET, POST, PUT, PATCH
        - URL: Identify the resource typicallly using a URL
        - HTTP version: Like http 1.1 or 2.0 
        - Request Header: This contain meta data which can be the message format cahce settings content format
        - Request Body: Content or data that being sent

   7. What are the core components of an HTTP response?
    Ans: There are four component
        - Status Code: Provide information abhiut success and failure
        - HTTP version: Like http 1.1 or 2.0 
        - Response Header: This contain meta data which can be the message format cahce settings content format
        - Response Body: Content or data that being received

   8. What is an idempotent method and why are they important?
    Ans: GET, HEAD, PUT, DELETE, OPTIONS, and TRACE are 
        idempotent methods, meaning they are safe to be 
        retried or executed multiple times without causing 
        unintended side effects. In contrast, POST and PATCH 
        are generally considered non-idempotent, as their 
        outcomes may vary with each request.   
   
   9. What's the difference between idempotent and safe HTTP methods?
    Ans: A "safe" method means it only reads data and doesn't 
         change the server state, while an "idempotent" 
         method means that executing the same request multiple
        times will produce the same result, regardless of 
        whether it modifies data or not
        Safe methods: 
            Only perform read operations. 
            Do not alter the server state. 
            Examples: GET, HEAD, OPTIONS. 
        Idempotent methods: 
            Can be executed multiple times with the same outcome. 
            May modify data, but the result will be the same if repeated. 
            Examples: GET, HEAD, PUT, DELETE, OPTIONS.  
   10. Explain caching in a RESTful architecture?
    Ans: Caching in a RESTful architecture is a technique 
         that stores copies of frequently accessed data 
         in various places to improve performance and reduce 
         load on servers:                   
 */
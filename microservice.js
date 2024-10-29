/**  Monolithic
Single Unit -> Multiple function combined in a single code like(auth, payemnt, lists) use as single code base or repository.
            Advantage
                -   Easy to develop
                -   Easy to Manage
            Disadvantage
                -   Redeplyment
                -   Scaling limitation
                -   Lots of dependence
*/

/** Microservices (Lossly couple)
    We deploy different service independant
    Advantage
        - Independent Deployment
        - Independent Development
        - Separate Code base
        - Flexible Scaling
        - Technology Flexibility
    Disadvantage
        - Complex
        - Management Overhead
        - High Infra Costs

    // Microservice inteact with each other
    Ways
       - Synchronous Communication with API call
       - Asynchronous Communication using message broker(Rabbit MQ, Apache Kafka)
       - Istio (when deploy on kubernates)(Service Mesh)


*/
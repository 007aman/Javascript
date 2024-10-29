/**
1. Syntax to write array objects
*/
let arr = [1,2,5,6,{name: 'aman'}]

arr.forEach(ele => {
    console.log(ele)
    console.log(ele?.name || 0)
})
/**
 * 2. Array map V/s Array foreach
 */
let ar = [2,4,5,6]
let marr = ar.map(ele =>  { 
    return ele*2
})
console.log(marr)
/**
 * 3. HTTP Put V/s Patch
 * PATCH is used to apply partial updates to a resource, meaning that only the fields that need to be changed are sent in the request body. 
 * PUT is used to replace the entire resource with a new representation, meaning that all the fields of the resource are sent in the request body, 
 * even if they are not modified.
 */

/**
 * 4. HTTP Options
 * At a high level, the OPTIONS method determines the communication options available for a specific resource. 
 * This means that we can send an HTTP request using the OPTIONS method to see what other types of request methods 
 * can be used (i.e. GET, POST, PUT, DELETE, etc.) when requesting information from a resource.
 */

/**
 * 5. Typescript Generics 
 * const score: Array<number> = []
 * const name: Array<string> = []
 * funstion identity<Type>(val:<Type>): <Type> {
 *    return val
 * }
 */

/**
 * 6. How to pass parameters using GET ?
 * To pass parameters using GET, you can add them to the URL using a question mark (?), and separate the name and value
 * with an equals sign (=): urltopage?var1=@variable1@&var2=@variable2.
 */

/**
 * 7. What is CloudFormation
 * CloudFormation is an infrastructure service.It lets you create templates that describe the AWS services that you want.
   Then, it handles the config and provisioning of the resources described in the template.
 */

/**
 * 8. What is Pub/Sub Architecture?
      The Pub/Sub (Publisher/Subscriber) model is a messaging pattern used in software architecture 
      to facilitate asynchronous communication between different components or systems. In this model, 
      publishers produce messages that are then consumed by subscribers.
 */

/**
 * 9. AWS Lambda Layers is a feature of AWS Lambda that allows you to separate your code into independent layers 
 *    that can be reused across multiple functions. A layer is a package of libraries, dependencies, 
 *    or other assets that can be bundled together and uploaded to AWS Lambda as a ZIP archive.
 * 
 */
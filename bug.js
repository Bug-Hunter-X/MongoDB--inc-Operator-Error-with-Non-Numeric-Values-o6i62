```javascript
//Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:value}});
//The above code will result in an error if the value for field2 is not a number
```
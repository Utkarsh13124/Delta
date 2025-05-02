const mongoose = require('mongoose');
const {Schema} = mongoose;

main().then(() => console.log("Connnection Successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//! implemetation of 1 to many for thousands off many .
 // Aim is to store reforence of child model into parent model

 // part - 1 defining schema
 const orderSchema = new Schema({
    item : String,
    price : Number,
 });

 //! imp -> defining schema for storing reference i.e , id whose types is Schema.Types.ObjectId
 const customerSchema = new Schema({
    name : String,
    orders  : [
        {
            // yaha pr hume id store krwana hi , jiska type hota hi -> Schema.Types.ObjectId
            type : Schema.Types.ObjectId,
            ref : "Order", // humhe ye batana padega ki jo humari id aa rhi hi , wo kaha se aa rhi hi. 
        },
    ],
 });


 // part - 2 making a model
 const Order = mongoose.model("Order", orderSchema);
 const Customer = mongoose.model("Customer", customerSchema);

 const addCustomer = async () => {
    let cust1 = new Customer({
        name : "Rahul Kumar",
    });
    //! adding orders
        // way - 1push the id , 
        // way - 2 push the child document --> is case me bhi mongoose dikhayega first time ki object push hua , lekin mongo db me sirf id hi push hui hi , we can again in mongodb as well as mongoose
    let order1 = await Order.findOne({item : "Chips"});
    let order2 = await Order.findOne({item : "Cocolate"});

    cust1.orders.push(order1); // only id will be pushed , could cross checked in DB.
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
 }

 addCustomer();
 // * commented after use , else multiple times the data would be inserted.
// const addOrders = async () => {
//     let res = await Order.insertMany([
//         { item : "Samosha" , price : 12 },
//         { item : "Chips" , price : 10 },
//         { item : "Cocolate" , price : 40 },
//     ]);

//     console.log(res);
// };

// addOrders();



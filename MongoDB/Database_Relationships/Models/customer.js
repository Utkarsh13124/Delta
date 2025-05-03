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
            ref : "Order", // humhe ye batana padega ki jo humari id aa rhi hi , wo kon se model se aa rhi hi. 
        },
    ],
 });


//! Writing Pre middleware for mongoose query findOneAndDelete. 
    // customerSchema.pre("findOneAndDelete" , async() => {
    //     console.log("PreMiddleware.");
    // })
    
    customerSchema.post("findOneAndDelete" , async(customer) => { // jo ye data aa rha hi , wo deleted object hi.
        // console.log("postMiddleware : " , customer);
        if(customer.orders.length){
            let res = await Order.deleteMany({ _id : { $in : customer.orders} });
            console.log(res);
        }
    })

 // part - 2 making a model
 const Order = mongoose.model("Order", orderSchema);
 const Customer = mongoose.model("Customer", customerSchema);

//  const addCustomer = async () => {
//     let cust1 = new Customer({
//         name : "utkarsh",
//     });
//     //! adding orders
//         // way - 1push the id , 
//         // way - 2 push the child document --> is case me bhi mongoose dikhayega first time ki object push hua , lekin mongo db me sirf id hi push hui hi , we can again in mongodb as well as mongoose
//     let order1 = await Order.findOne({item : "Chips"});
//     let order2 = await Order.findOne({item : "Cocolate"});

//     cust1.orders.push(order1); // only id will be pushed , could cross checked in DB.
//     cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log(res);
//  }

//  addCustomer();



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


//! populate --> is very useful , when referenceis used . Populate is used for extrect.
/*
    replacing id by the object, 
    replacingg reference by referenced. we say populate ho gya. 
*/

// const findCustomer = async () => {
//     let result = await Customer.find({}).populate("orders"); //  orders is jo humhe populate krwana hi , customer ke ander.
//     console.log(result[0]);
// }

// findCustomer();

const addCust = async () => {
    let newCust = new Customer({
        name : "Karan",
    });

    let newOrder = new Order({
        item : "Pizza" , 
        price : 250, 
    });

    newCust.orders.push(newOrder);

    // await newOrder.save();
    await newCust.save();

    console.log("added new customer.");
}

// addCust();


//! Handling deletion :- on deleting customers , his orders should be deleted automatically.

const delCust = async () => {
    let res = await Customer.findByIdAndDelete('681471e13d679702cee5845d');
    console.log(res);
}

delCust(); // by this only customer is being deleted , nnot his orders

// for deleting orders also we can use 2 middlewares.
/*   
        findOneAndDelete() is a queryMongooseMiddleware.
    findbyIdAndDelte() --> ander hi ander findOneAndDelete middleware ko call krta hi. 
        agar hum findOneAndDelete ke liye ek aur middleware lagayenge, to wo pehle call hoga. 
            jo middleware laga rhe hi , wo pre ya post middleware ho sakta hi.

        currently we are using post middleware to delete the orders, post middleware ke ander jodeletedObject ka poora data hota hi.
*/



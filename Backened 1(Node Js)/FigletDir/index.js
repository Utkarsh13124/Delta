const figlet = require("figlet"); // package me ./ krke nhi likhna hota 

figlet("Utkarsh!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
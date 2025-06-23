const accountID = 144553
let accountEmail = "sachin@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

let accountState

// accountID  = 2

console.log(accountID);

accountEmail = "hca@gmail.com"
accountPassword = "2342534"
accountCity = "Delhi"

console.table([accountEmail,accountID,accountPassword,accountCity,accountState])
/*
prefer not ot use var 
because of issue in block scope and functional scope
accountState holds undefined 
*/
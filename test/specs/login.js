import Login from "../pageobjects/loginpage.js";
import homepage from "../pageobjects/homepage.js";

describe("user login",()=>{


it("Invoke Browser",async()=>{

await homepage.homeurl

await expect (browser).toHaveTitle("Home | Alipo")

})



it("login with invalid email",async()=>{

await homepage.homeurl

await Login.customerlogin("test@123","123456");

await Login.emailmsg();


});

it("Login with Invalid Password",async()=>{
await homepage.homeurl
await Login.customerlogin("shihab@alipo.com","321456");

})

it("Login with Valid Credentials",async()=>{
    await homepage.homeurl
    await Login.customerlogin("shihab@alipo.com","123456");
    
    })



});
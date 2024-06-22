import homepage from "./homepage.js";


class Login{

get clickuser(){

 return $("/html[1]/body[1]/header[1]/nav[1]/div[3]/div[2]/div[1]/button[1]/*[name()='svg'][1]");

}


get signinbutton(){

return $("//button[contains(text(),'Sign In/Register')]");

}


get username(){

return $("#username");

}

get password(){

return $("#password");

}


get loginbutton(){

return $("//button[contains(text(),'Login')]");

}


async customerlogin(name, pass){
   
await (await this.clickuser).click();

await browser.pause(100);

await (await this.signinbutton).click();

await browser.pause(1000);

await (await this.username).setValue(name);

await browser.pause(1000);

await (await this.password).setValue(pass);

await browser.pause(1000);

await (await this.loginbutton).click();

await browser.pause(1000);
}




}

export default new Login();
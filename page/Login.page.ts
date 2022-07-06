import { Page } from "@playwright/test";

export default class LoginPage{

    private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    //eleEmailTextField =async ()=> await this.page.$("input[placeholder='Enter registered email'][name='email']");
    public get eleEmailTextField(){
        return this.page.$("input[name='email']")
    }

    public get elePasswordTextField(){
        return this.page.$("input[name='password']")
    }

    public get eleLoginBtn(){
        return this.page.$("//button[text()='LOGIN']")
    }

    public async enterUserName(name:string){
        const ele=await this.eleEmailTextField;
        if(ele !=null)
            await ele.fill(name);
        else throw new Error("No Element Found");    
    }

    public async enterPassword(pass:string){
        const ele=await this.elePasswordTextField;
        await ele?.fill(pass);
    }

    public async clickLoginBtn(){
        const ele=await this.eleLoginBtn;
        await ele?.click();
    }

    public async login(username:string,pass:string){
        await this.enterUserName(username);
        await this.enterPassword(pass);
        await this.clickLoginBtn();
    }
}
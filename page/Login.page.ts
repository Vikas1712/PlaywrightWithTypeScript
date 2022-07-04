import { Page } from "@playwright/test";

export default class LoginPage{

    private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public get eleEmailTextField(){
        return this.page.$("input[placeholder='Enter registered email'][name='email']")
    }

    public get elePasswordTextField(){
        return this.page.$("input[placeholder='Enter password']")
    }

    public get eleLoginBtn(){
        return this.page.$("//button[text()='LOGIN']")
    }

    public async enterUserName(name:string){
        const ele=await this.eleEmailTextField;
        await ele?.fill(name);
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
import { Page } from "@playwright/test";

export default class HeaderPage{
    
    private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    //Locator
    public get eleLoginBtn(){
        const loginBtn= this.page.$("text=Log in")
        if(loginBtn !=null)
            return loginBtn;
        else throw new Error("No Element");    
    }

    public get eleSignOutBtn(){
        const signoutBtn= this.page.$("text=Sign out")
        if(signoutBtn !=null)
            return signoutBtn;
        else throw new Error("No Element");    
    }

    public async clickLogin() {
        const ele= await this.eleLoginBtn;
        await ele?.click();
    }

    public async clickSignOutLink() {
        const ele= await this.eleSignOutBtn;
        await ele?.click();
    }
}
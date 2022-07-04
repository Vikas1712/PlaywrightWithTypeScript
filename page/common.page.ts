import { Page } from "@playwright/test";

export default class CommonFunctions{

    private page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public get toaster(){
        return this.page.waitForSelector("div[role='alertdialog']")
    }
}
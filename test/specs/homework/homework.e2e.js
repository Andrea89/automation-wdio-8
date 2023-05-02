describe('Homework', async () => {

    it('should open page and create screenshot', async () => {

        await browser.reloadSession();

        await browser.url('/registrace');
        
        await browser.saveScreenshot('screenshot.png');


        //selektor pro jméno
        const nameField = await $('#name');
        console.log(await nameField.getHTML());

        //selektor pro email
        const emailField = await $('#email');
        console.log(await emailField.getHTML());

        //selektor pro heslo
        const passwordField = await $('#password');
        console.log(await passwordField.getHTML());

        //selektor pro heslo
        const passwordConfirmField = await $('#password-confirm');
        console.log(await passwordConfirmField.getHTML());

        //selektor pro tlačítko registrace
        const btnPrimaryField = await $('.btn-primary');
        console.log(await btnPrimaryField.getHTML());
        
    });

});

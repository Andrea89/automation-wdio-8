import LoginPage from './login.page.js'

describe('Homework', async () => {
    beforeEach(async () => {
        await LoginPage.open();
        
    });
    
 
    describe('Funkcnost stranky', async () => {

        it('1. Prejdi na registraci', async () => {

            await expect(await LoginPage.emailName).toBeDisplayed();
            await expect(await LoginPage.emailName).toBeEnabled();
            
            await expect(await LoginPage.emailField).toBeDisplayed();
            await expect(await LoginPage.emailField).toBeEnabled();
            
            await expect(await LoginPage.passwordField).toBeDisplayed();
            await expect(await LoginPage.passwordField).toBeEnabled();

            await expect(await LoginPage.passwordConfirmField).toBeDisplayed();
            await expect(await LoginPage.passwordConfirmField).toBeEnabled();

            await expect(await LoginPage.loginButton.getText()).toEqual('Zaregistrovat');
        });

    });

    describe('Registrace', async () => {

        it('2. validni registrace uzivatele', async () => {
            await LoginPage.login('Adam Lišák89', 'da-apadmin89@czechitas.cz', 'Czechitas89', 'Czechitas89');
            await browser.pause(2000);

            await expect(await LoginPage.getCurrentUser()).toEqual('Adam Lišák89');
        });

        it('3. registrace s jiz existujicim emailem', async () => {

            await LoginPage.login('Adam Lišák', 'da-app.admin@czechitas.cz', 'Czechitas123', 'Czechitas123');
            await expect(await LoginPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
            await expect(await LoginPage.getFieldError()).toEqual('Účet s tímto emailem již existuje');

            await expect(await LoginPage.emailName).toBeDisplayed();
            await expect(await LoginPage.emailField).toBeDisplayed();
            await expect(await LoginPage.passwordField).toBeDisplayed();
            await expect(await LoginPage.passwordConfirmField).toBeDisplayed();
            await expect(await LoginPage.loginButton).toBeDisplayed();
            
        });

        it('4. registrace se spatnym heslem', async () => {
            await LoginPage.login('Adam Lišák', 'da@czechitas.cz', '123', '123');
            
            await expect(await LoginPage.getToastMessage()).toEqual('Některé pole obsahuje špatně zadanou hodnotu');
            await expect(await LoginPage.getFieldError()).toEqual('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');

            await expect(await LoginPage.emailName).toBeDisplayed();
            await expect(await LoginPage.emailField).toBeDisplayed();
            await expect(await LoginPage.passwordField).toBeDisplayed();
            await expect(await LoginPage.passwordConfirmField).toBeDisplayed();
            await expect(await LoginPage.loginButton).toBeDisplayed();
        });
    });


});

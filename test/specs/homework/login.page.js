import AppPage from './app.page.js';

class LoginPage extends AppPage {

    constructor() {
        super();
        this.url = '/registrace';
    }
    

    get emailName() { return $('#name'); }
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get passwordConfirmField() { return $('#password-confirm'); }
    get loginButton() { return $('.btn-primary'); }
    get navbarRight() { return $('.navbar-right'); }
    
    

    async open() {
        await browser.reloadSession();
        await browser.url(this.url);
    };

    async login(name, email, password, passwordConfirm) {
        await this.emailName.setValue(name);
        await this.emailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.passwordConfirmField.setValue(passwordConfirm);
        await this.loginButton.click();
    };

    

    

};

export default new LoginPage();
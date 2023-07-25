class AppPage {

    get fieldError() { return $('.invalid-feedback'); }
    get toast() { return $('.toast-message'); }
    get navbarRight() { return $('.navbar-right'); }
    get userNameDropdown() { return this.navbarRight.$('[data-toggle="dropdown"]'); }
    
    async open() {
        await browser.url('/');
    }

    async getToastMessage() {
        return await this.toast.getText();
    }

    async getFieldError() {
        return await this.fieldError.getText();
    };

    async getCurrentUser() {
        return await this.userNameDropdown.getText();
    };

};

export default AppPage;
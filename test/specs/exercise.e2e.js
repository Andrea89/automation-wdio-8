import {username, password} from './fixtures.js'
// import LoginPage from '../pageobjects/login.page'
// import ApplicationsPage from '../pageobjects/applications.page'

describe('Czechitas Login Page', async () => {

    it('should open login page', async () => {

        await browser.reloadSession();

        await browser.url('/prihlaseni');

        const emailField = await $('#email');
        console.log(await emailField.getHTML());
        

        //1. podle tagu
        const fieldPodleTagu1 = await $('form');
        console.log(await fieldPodleTagu1.getHTML());
        const fieldPodleTagu2 = await $('input');
        console.log(await fieldPodleTagu2.getHTML());
        const fieldPodleTagu3 = await $('button');
        console.log(await fieldPodleTagu3.getHTML());

        //2. podle ID
        const fieldPodleID1 = await $('#email');
        console.log(await fieldPodleID1.getHTML());
        const fieldPodleID2 = await $('#password');
        console.log(await fieldPodleID2.getHTML());

        //3. podle třídy
        const fieldPodleTridy1 = await $('.btn-primary');
        console.log(await fieldPodleTridy1.getHTML());
        const fieldPodleTridy2 = await $('[name="email"]');
        console.log(await fieldPodleTridy2.getHTML());

        //4. podle atributu
        const fieldPodleAtributu1 = await $('[type="password"]');
        console.log(await fieldPodleAtributu1.getHTML());
        const fieldPodleAtributu2 = await $('[type*="ass"]');
        console.log(await fieldPodleAtributu2.getHTML());
        const fieldPodleAtributu3 = await $('[type$="word"]');
        console.log(await fieldPodleAtributu3.getHTML());
        const fieldPodleAtributu4 = await $('[type^="pass"]');
        console.log(await fieldPodleAtributu4.getHTML());

        //5. kombinace
        const fieldPodleKombinace1 = await $('input#email');
        console.log(await fieldPodleKombinace1.getHTML());
        const fieldPodleKombinace2 = await $('input[type="password"]');
        console.log(await fieldPodleKombinace2.getHTML());
        const fieldPodleKombinace3 = await $('button.btn-primary');
        console.log(await fieldPodleKombinace3.getHTML());

        //6. řetězení selektorů
        const fieldPodleRetezeniSelektoru = await $('div').$('form').$('input[type$="word"]');
        console.log(await fieldPodleRetezeniSelektoru.getHTML());

        //7.WDIO selektory
        const fieldPodleWDIO = await $('=Zapomněli jste své heslo?');
        console.log(await fieldPodleWDIO.getHTML());






        await browser.pause(500);

    });

});

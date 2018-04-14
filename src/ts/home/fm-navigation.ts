export default class FMNavigation {
    private menu: HTMLElement;
    private background: HTMLElement;
    private footer: HTMLElement;
    
    constructor() {
        this.menu = document.querySelector('.menu__container');
        this.background = document.querySelector('.container__background');
        this.footer = document.querySelector('.footer__container');
    }

    public menuAppear(): void {
        this.menu.classList.remove('hide');
        this.menu.classList.add('show');
        this.background.classList.add('brighter');
        this.background.classList.remove('darken');
        this.footer.classList.add('fadein');
        this.footer.classList.remove('fadeout');
    }

    public menuDisappear(): void {
        this.menu.classList.remove('show');
        this.menu.classList.add('hide');
        this.background.classList.remove('brighter');
        this.background.classList.add('darken');
        this.footer.classList.add('fadeout');
        this.footer.classList.remove('fadein');
    }
}

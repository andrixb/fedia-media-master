import FMNavigation from './fm-navigation';

export class FMHome {
    private fmNavigation: FMNavigation;
    private menu: HTMLElement;
    private header: HTMLElement;
    private footer: HTMLElement;
    private menuBtn: HTMLElement;
    private container: HTMLElement;
    private background: HTMLElement;

    constructor() {
        this.fmNavigation = new FMNavigation();
        this.init();
    }

    init() {
        this.header = document.querySelector('.logo__container');
        this.menu = document.querySelector('.menu__container');
        this.menuBtn = document.querySelector('.menu__btn--close');
        this.container = document.querySelector('.container');
        this.background = document.querySelector('.container__background');
        this.footer = document.querySelector('.footer__container');

        this.interactWithHeader();
    }

    private interactWithHeader() {
        if (this.header) {
            this.header.addEventListener('click', (e) => {
                this.fmNavigation.menuAppear();
            }, false);
    
            this.menuBtn.addEventListener('click', (e) => {
                this.fmNavigation.menuDisappear();
            }, false);
        }
    }
}

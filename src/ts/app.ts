import '../scss/main.scss';
// const sprite = require.context('../svg/sprite', false, /\.svg$/);
// sprite.keys().forEach(sprite);

import { FMHome } from './home/index';

export default class App {
    constructor() {
        this.init();
    }

    public init(): void {
        new FMHome();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();   
});

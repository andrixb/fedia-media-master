import * as React from 'react';

export interface FMNavigationProps { 
    expand: EventTarget
}

export class FMNavigation extends React.Component<FMNavigationProps, any> {
    render() {
        return (
            <nav className={`menu__container ${this.props.expand ? 'show' : 'hide'}`}>
                <div className="menu__btn--close">
                    <span> &#10005; </span>
                </div>
                <ul className="menu__wrapper">
                    <li className="menu__item">
                        <a className="menu__itemLink" href="#">home</a> 
                    </li>
                    <li className="menu__item">
                        <a className="menu__itemLink" href="about.html">about</a> 
                    </li>
                    <li className="menu__item">
                        <a className="menu__itemLink" href="#">contact</a> 
                    </li>
                </ul>
            </nav>
        );
    }
}

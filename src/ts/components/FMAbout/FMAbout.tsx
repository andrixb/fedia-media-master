import * as React from 'react';

import { FMNavigation } from '../FMIndex/FMNavigation';
import { FMPerson } from './FMPerson';
import { FMLogoSecondary } from './FMLogoSecondary';
import { FMTextDescription } from './FMTextDescription';

import './FMAbout.scss';

export interface FMAboutProps { }

export class FMAbout extends React.Component<FMAboutProps, any> {
    constructor(props: FMAboutProps) {
        super(props);
        this.state = {
            logoClicked: false,
        };
    }

    private handleChange(event: React.MouseEvent<Event>): void {
        console.log('click', this.state);
        this.setState({
            logoClicked: !this.state.logoClicked,
        });
    };

    render() {
        return (
            <div>
                <div className={`about__background ${this.state.logoClicked ? 'darken container__background' : ''}`}></div>
                <div className="about__logo" onClick={this.handleChange.bind(this)}>
                    <FMNavigation expand={this.state.logoClicked} />
                    <FMLogoSecondary />
                </div>
                <FMTextDescription />
                <div className="about__container">
                    <FMPerson />
                </div>
            </div>
        );
    }
}

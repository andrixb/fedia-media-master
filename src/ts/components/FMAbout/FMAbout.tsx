import * as React from 'react';

import { FMNavigation } from '../FMIndex/FMNavigation';
import { FMPerson } from './FMPerson';
import { FMLogoSecondary } from './FMLogoSecondary';

import './FMAbout.scss';

export interface FMAboutProps { }

export class FMAbout extends React.Component<FMAboutProps, any> {
    constructor(props: FMAboutProps) {
        super(props);
        this.state = {
            logoClicked: false,
            fade: false,
        };
        this.handleChange.bind(this);
    }

    private handleChange(event: React.MouseEvent<Event>): void {
        this.setState({
            logoClicked: !this.state.logoClicked,
            fade: !this.state.darken,
        });
    };

    render() {
        return (
            <div>
                <div className={`${this.state.fade ? 'darken' : ''}`}></div>
                <div className="about__logo" onClick={this.handleChange.bind(this)}>
                    <FMNavigation expand={this.state.logoClicked} />
                    <FMLogoSecondary logo="fedia" />
                </div>
                <div className="about__container">
                    <FMPerson />
                </div>
            </div>
        );
    }
}

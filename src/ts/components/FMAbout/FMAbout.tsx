import * as React from 'react';

import { FMNavigation } from '../FMIndex/FMNavigation';
import { FMPerson } from './FMPerson';
import { FMLogo } from './FMLogo';

import './FMAbout.scss';

export interface FMAboutProps {}

export class FMAbout extends React.Component<FMAboutProps, any> {
    constructor(props: FMAboutProps) {
        super(props);
        this.state = { 
            logoClicked: false 
        };
        this.handleChange.bind(this);
    }

    private handleChange(event: React.MouseEvent<Event>): void {
        this.setState({
            logoClicked: !this.state.logoClicked
        });
    };

    render() {
        return (
            <div className="about__container" onClick={this.handleChange.bind(this)}>
                <FMNavigation expand={this.state.logoClicked} />
                <FMLogo logo="fedia" />
                <FMPerson />
            </div>
        );
    }
}

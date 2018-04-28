import * as React from 'react';

import { FMNavigation } from './FMNavigation';
import { FMHome } from './FMHome';

export interface FMIndexProps { }

export class FMIndex extends React.Component<FMIndexProps, any> {
    constructor(props: FMIndexProps) {
        super(props);
        this.state = { 
            logoClicked: false 
        };
    }

    private handleChange(event: React.MouseEvent<Event>): void {
        this.setState({
            logoClicked: !this.state.logoClicked
        });
    };
    
    render() {
        return (
            <div onClick={this.handleChange.bind(this)} >
                <FMNavigation expand={this.state.logoClicked} />
                <FMHome logo="fedia" fade={this.state.logoClicked} />
            </div> 
        );
    }

}

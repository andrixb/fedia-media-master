import * as React from 'react';

export interface FMLogoSecondaryProps { 
    logo: string;
}

export class FMLogoSecondary extends React.Component<FMLogoSecondaryProps, {}> { 
    render() {
        return (
            <div className="logo__container">
                <h1 className="logo__element--secondary"> {this.props.logo} </h1>
            </div>
        );
    }
}

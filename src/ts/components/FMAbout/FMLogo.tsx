import * as React from 'react';

export interface FMLogoProps { 
    logo: string;
}

export class FMLogo extends React.Component<FMLogoProps, {}> { 
    render() {
        return (
            <div className="logo__container">
                <h1 className="logo__element--secondary"> {this.props.logo} </h1>
            </div>
        );
    }
}

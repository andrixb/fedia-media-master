import * as React from 'react';

export interface FMPersonDescriptionProps {
    text: string;
}

export class FMPersonDescription extends React.Component<FMPersonDescriptionProps, {}> {
    render() {
        return <p className="file__description"> {this.props.text} </p>
    }
}

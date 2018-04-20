import * as React from 'react'; 

export interface FMPersonDescriptionProps {
    description: string[];
}

export class FMPersonDescription extends React.Component<FMPersonDescriptionProps, {}> {        
    render() {
        return this.props.description.map((text: string) => {
            return <p className="person__description"> {text}</p>;
        });
    }
}

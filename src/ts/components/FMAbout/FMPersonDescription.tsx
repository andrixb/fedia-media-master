import * as React from 'react'; 

export interface FMPersonDescriptionProps {
    description: any;
}

export class FMPersonDescription extends React.Component<FMPersonDescriptionProps, {}> {        
    render() {
        return this.props.description.map((text: string) => {
            return <p className="file__description"> {text}</p>;
        });
    }
}

import * as React from 'react'; 

export interface FMPersonDescriptionProps {
    description: object[];
}

export class FMPersonDescription extends React.Component<FMPersonDescriptionProps, {}> {        
    render() {
        return this.props.description.map((data: any) => {
            return (
                <p className="person__description">
                    <span>{data.label}</span> {data.value}
                </p>
            );
        });
    }
}

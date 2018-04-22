import * as React from 'react'; 

export interface FMPersonDescriptionProps {
    description: object[];
}

export class FMPersonDescription extends React.Component<FMPersonDescriptionProps, {}> {        
    render() {
        return this.props.description.map((data: any, key: number) => {
            return (
                <p className="person__description" key={key}>
                    <span>{data.label}</span> {data.value}
                </p>
            );
        });
    }
}

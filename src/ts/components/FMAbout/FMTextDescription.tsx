import * as React from 'react'; 
import * as description from './description.data';

import './FMTextDescription.scss';

export interface FMTextDescriptionProps {}

export class FMTextDescription extends React.Component<FMTextDescriptionProps, {}> {  
    renderCopy() {
        return description.default.description.map((text, key) => {
           return <p className="text__copy" key={key}>{text}</p>
        });
    }
    
    render() {
        return (
            <article className="text__container">
                {this.renderCopy()}
                <p className="text__contact">{description.default.contact}</p>
            </article>
        );
    }
}

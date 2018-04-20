import * as React from 'react';
import { FMPerson } from './FMPerson';
import './FMAbout.scss';

export interface FMAboutProps {
}

export class FMAbout extends React.Component<FMAboutProps, {}> {
    render() {
        return (
            <div className="about__container">
                <FMPerson />
            </div>
        );
    }
}

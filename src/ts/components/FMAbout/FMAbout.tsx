import * as React from 'react';

import { FMPerson } from './FMPerson';
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

//-             p(class="file__description") Lived places: Naples (I), London (UK), Barcelona (ES)
//-             p(class="file__description") Visited places: 
//-             p(class="file__description") Movings made: too many
//-             p(class="file__description") Favourite cartoon: Alice in Wonderland
//-             p(class="file__description") Colour you’d not wear at all: pink, in all of its shades
//-             p(class="file__description") Vehicle: bike
//-             p(class="file__description") Always with: fresh ideas
//-             p(class="file__description") Never without: music
//-         div(class="file__picture")
//-             img(src="http://via.placeholder.com/250x375" alt="profile picture")
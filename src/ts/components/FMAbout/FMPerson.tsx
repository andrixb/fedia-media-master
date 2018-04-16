import * as React from 'react';

import { FMPersonDescription } from './FMPersonDescription';

export interface FMPersonProps {
}

export class FMPerson extends React.Component<FMPersonProps, {}> {
    render() {
        return (
            <article className="file__element">
                <div className="file__wrapper">
                    <h1 className="file__title">
                        I'm Andrea Baldo
                    </h1>
                    <FMPersonDescription text="PROVA" />
                    <p className="file__description"> Date of birth: 1985, June 12th </p>
                    <p className="file__description"> Eyes and spectacles: brown and no glasses </p>
                    <p className="file__description"> Height: 184cm </p>
                    <p className="file__description"> Main field of action: multimedial stuff/things </p>
                    <p className="file__description"> For whom you worked: Accademia di Belle Arti di Napoli, BBC, Rutply, RCS, British Heart Foundation, McDonald’s, BMW, Three, Disney, Cancer Research UK, amazon,  Transport for London, Sainsbury’s, Google, Patek Philippe, Virgin </p>
                    <p className="file__description"> Analogue or digital: hybrid </p>
                    <p className="file__description"> Good at: making up things to make other things up </p>
                    <p className="file__description"> Unable to: spend too much time in idle </p>
                    <p className="file__description"> Spoken languages: Italian, Neapolitan, English, Spanish, Catalan </p>
                    <p className="file__description"> Languages you’d speak: Arabic </p>
                </div>
                <div className="file__picture">
                    <img src="http://via.placeholder.com/250x375" alt="profile picture" />
                </div>
            </article>
        );
    }
}

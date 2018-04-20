import * as React from 'react';
import { FMPersonDescription } from './FMPersonDescription';
import * as people from './data';

export interface FMPersonProps {
}

export class FMPerson extends React.Component<FMPersonProps, {}> {
    render() {
        return people.default.people.map((person, key) => {
            return (
                <article className="file__element" key={key}>
                    <div className="file__wrapper" >
                        <h1 className="file__title" > I'm {person.name} </h1>
                        <FMPersonDescription description={person.description} />
                        <div className="file__picture" >
                            <img src={`${person.picture}`} alt="profile picture" />
                        </div>
                    </div>
                </article>
            );
        });
    }
}

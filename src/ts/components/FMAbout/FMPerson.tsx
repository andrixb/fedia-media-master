import * as React from 'react';
import { FMPersonDescription } from './FMPersonDescription';
import * as people from './people.data';
import './FMPerson.scss';

export interface FMPersonProps {}

export class FMPerson extends React.Component<FMPersonProps, {}> {
    render() {
        return people.default.people.map((person, key) => {
            return (
                <article className="person__element" key={key}>
                    <div className="person__wrapper" >
                        <div className="person__picture" >
                            <img src={`${person.picture}`} alt="profile picture" />
                        </div>
                        <h1 className="person__title" > I'm {person.name} </h1>
                        <FMPersonDescription description={person.description} />
                    </div>
                </article>
            );
        });
    }
}

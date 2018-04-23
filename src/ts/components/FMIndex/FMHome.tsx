import * as React from 'react';
import { FMLogo } from '../shared/FMLogo';

export interface FMHomeProps { 
    logo: string;
    fade: EventTarget; 
}

export class FMHome extends React.Component<FMHomeProps, any> {
    render() {
        return (
            <div className="container">
                <div className={`container__background ${this.props.fade ? 'darken' : ''}`}></div>
                <video autoPlay muted loop className="video__element">
                    <source src="assets/videos/video_bkg.mp4" type="video/mp4"></source>
                </video>
                <div className="logo__container">
                    <h1 className="logo__element--primary"> 
                        <FMLogo />
                    </h1>
                </div>
            </div>
        );
    }
}

import * as React from 'react';
import { FMLogo } from '../shared/FMLogo';

export interface FMHomeProps { 
    logo: string;
    fade: EventTarget; 
}

export class FMHome extends React.Component<FMHomeProps, any> {
    private detectMob() { 
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
        ){
           return true;
         }
        else {
           return false;
         }
    }

    renderVideoBkg() {
        if (this.detectMob()) {
            return (
                <div className="video__element">
                    <div className="video__fallback"></div>
                </div>
            );
        } else {
            return (
                <video autoPlay muted loop className="video__element">
                    <source src="assets/videos/video_bkg.mp4" type="video/mp4"></source>
                    <img src="assets/videos/video_bkg.gif" title="Your browser does not support the <video> tag" />
                </video>
            );
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className={`container__background ${this.props.fade ? 'darken' : ''}`}></div>
                {this.renderVideoBkg()}
                <div className="logo__container">
                    <h1 className="logo__element--primary"> 
                        <FMLogo />
                    </h1>
                </div>
            </div>
        );
    }
}

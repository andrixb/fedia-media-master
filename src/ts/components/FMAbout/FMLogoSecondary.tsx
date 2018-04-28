import * as React from 'react';

import { FMLogo } from '../shared/FMLogo';

export interface FMLogoSecondaryProps {}

export class FMLogoSecondary extends React.Component<FMLogoSecondaryProps, {}> { 
    render() {
        return (
            <div className="logo__container">
                <h1 className="logo__element--secondary"> 
                    <FMLogo />
                </h1>
            </div>
        );
    }
}

import '../scss/main.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// const sprite = require.context('../svg/sprite', false, /\.svg$/);
// sprite.keys().forEach(sprite);

import { FMNavigation } from './components/FMNavigation';
import { FMIndex } from './components/FMIndex'; 

ReactDOM.render(
    <FMIndex />,
    document.getElementById('app')
);

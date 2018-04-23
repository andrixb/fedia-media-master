import * as React from 'react';

export interface FMLogoProps {}

export class FMLogo extends React.Component<FMLogoProps, {}> {
    render() {
        return (
            <svg className="fm-logo" id="fm-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 232 69.2">
                <style>
                    { `.fm-logo__characters { fill: #231f20; }` }
                    { `.fm-logo__dot { fill: #eb008b; }` }
                </style>
                <path
                    className="fm-logo__characters"
                    d="M225.66,302.09q-.41-5.19,2.45-8.1a12.34,12.34,0,0,1,7.45-3.5l3.6-.5v17a6.67,6.67,0,0,1-5.35,3,7.76,7.76,0,0,1-5.35-2.05,9,9,0,0,1-2.8-5.85m34.6,9.3v-1c-2.34.54-3.94.35-4.8-.55s-1.3-3.11-1.3-6.65v-18q0-10.4-4.45-14.5t-14.9-4.1q-10.45,0-15.7,3.65T213.86,279a7,7,0,0,0,2.2,5.25,7.2,7.2,0,0,0,5.25,2.15,7.34,7.34,0,0,0,7.35-7.4,12.61,12.61,0,0,0-.7-3.5c-.47-1.46-.8-2.65-1-3.55a2.41,2.41,0,0,1,.8-2.4q1.1-1.05,5-1.05t5.15,3q1.29,3,1.3,11.7v4.9l-4,.5q-13,1.5-18.2,5.15a11.91,11.91,0,0,0-5.2,10.35,8.68,8.68,0,0,0,3.55,7.55,15.11,15.11,0,0,0,9.05,2.55q10.29,0,15.3-5.2,2.1,4.9,10.3,4.9a25.3,25.3,0,0,0,6.5-.75,8.78,8.78,0,0,0,3.8-1.75m-60.5-44h-19v2h4v42h-5v2h25v-2h-5ZM149.86,309a7.14,7.14,0,0,1-3.8,1.6q-4.5.71-7.7-4.3t-3.2-15.85q0-10.85,3.1-15.85t7.45-5q4.35,0,7,5.4v16.5q0,14.7-2.9,17.5m2.9-.2v4.6h20v-2h-5v-65h-20v2h5V272a10.54,10.54,0,0,0-5.2-5.1,17.87,17.87,0,0,0-7.7-1.7,18.08,18.08,0,0,0-14.1,6.6q-5.81,6.6-5.8,18.3t5.9,18.1a18.41,18.41,0,0,0,14,6.4q10.2,0,12.9-5.8m-69.4-18.5A55.55,55.55,0,0,1,85.26,275q1.89-6.65,6.2-6.65t6.25,6.9a59.5,59.5,0,0,1,2,16.1H83.36Zm24-17.5a21.53,21.53,0,0,0-15.9-6.4,23.84,23.84,0,0,0-16.25,5.85q-6.7,5.85-6.7,17.95a29.34,29.34,0,0,0,2.25,12.1,16.44,16.44,0,0,0,6.25,7.5,28.3,28.3,0,0,0,8.2,3.55,39,39,0,0,0,9.45,1.05,25.43,25.43,0,0,0,10.55-2.4q5.3-2.4,7.5-6.1l-1.4-1a12.7,12.7,0,0,1-6.35,4.5,22.76,22.76,0,0,1-7.75,1.6q-12.7,0-13.7-17.6h30.2q0-14.19-6.35-20.6m-53,38.6h-5v-42h13v-2h-13q0-10.29,1-15.15c.67-3.23,1.93-4.85,3.8-4.85q3.8,0,3.8,6.45t5.4,6.45a5.37,5.37,0,0,0,3.65-1.35,4.72,4.72,0,0,0,1.55-3.75q0-3.9-3.7-6.85t-10.7-3q-19.8,0-19.8,22h-6v2h6v42h-5v2h25Z"
                    transform="translate(-28.26 -245.39)" />
                <path
                    className="fm-logo__dot"
                    d="M114.37,248.79a8.4,8.4,0,0,0-6.21-2.6A8.88,8.88,0,0,0,99.31,255a8.36,8.36,0,0,0,2.6,6.2,8.62,8.62,0,0,0,6.25,2.55,8.69,8.69,0,0,0,8.75-8.75,8.65,8.65,0,0,0-2.54-6.25"
                    transform="translate(-28.26 -245.39)" />
            </svg>
        );
    }
}

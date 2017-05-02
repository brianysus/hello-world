require('file-loader?name=./[name].[ext]!../index.html');
require('file-loader?name=./styles/[name].[ext]!IR-style-guide/styleGuide-standalone.css');

// import { Button } from 'IR-style-guide';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/IR-style-guide/styleGuide-standalone.css';
import DemoButton from './DemoButton.js';


// export default class DemoButton extends Component {
//     render() {
//         return (
//             <div>
//             	<Button presentation={ Button.PRESENTATION.PRIMARY }>
//                     Primary Button
//             	</Button>
//             </div>
//         );
//     }
// }

ReactDOM.render(
	<DemoButton />,
    document.getElementById('react-view')
);

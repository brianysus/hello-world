require('file-loader?name=./[name].[ext]!../index.html');
require('file-loader?name=./styles/[name].[ext]!IR-style-guide/styleGuide-standalone.css');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/IR-style-guide/styleGuide-standalone.css';
import DemoButton from './DemoButton.js';

ReactDOM.render(
	<DemoButton />,
    document.getElementById('react-view')
);

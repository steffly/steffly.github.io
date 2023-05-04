import React from "react";
import ReactDOM from 'react-dom';
import { HostApp } from './hostApp';

ReactDOM.render(<HostApp env={'staging'} />, document.querySelector('.root'));

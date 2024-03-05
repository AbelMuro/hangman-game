import ReactDOM from "react-dom/client";
import Game from './Game.js';
import React from 'react';

const rootRef = document.getElementById('root');
const root = ReactDOM.createRoot(rootRef);
root.render(<Game/>);
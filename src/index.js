import React from 'react';
import { createRoot } from 'react-dom/client'; // Import ReactDOM from 'react-dom', not 'react'

import App from './App';

//ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);

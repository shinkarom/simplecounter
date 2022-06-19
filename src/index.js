import React from 'react';
import { render } from 'react-dom';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import { Provider } from 'react-redux'
import { HashRouter, Routes, Route	 } from 'react-router-dom'

import App from './App';

render(
	<Provider store={store}>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App/>} />
				<Route path="*" element={<App/>} />
			</Routes>
		</ HashRouter>
	</Provider>
, document.getElementById('root'));


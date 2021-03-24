/** @format */

import React from 'react';
import './App.css';
import MainPage from './pages';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	return (
		<div className="App">
			<DndProvider backend={HTML5Backend}>
				<MainPage />
			</DndProvider>
		</div>
	);
}

export default App;

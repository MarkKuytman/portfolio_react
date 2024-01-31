import logo from './logo.svg';
import './components/TileMap.js';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Player from "./objects/Player";

function App() {
    return (
        <div className="App">
            <Player/>
        </div>
    );
}

export default App;
import React from 'react'
import Homepage from './pages/Homepage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
        </Routes>
    )
}

export default App
import React from "react";
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import Room from './Room'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function HomePage(props) {
    const home = <h1>Home</h1>;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={home} />
                <Route path='/join' element={<RoomJoinPage />} />
                <Route path='/create' element={<CreateRoomPage />} />
                <Route path='/room:roomCode' element={<Room />} />
            </Routes>
        </BrowserRouter>
    )
};

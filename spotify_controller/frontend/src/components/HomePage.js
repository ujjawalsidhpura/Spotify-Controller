import React from "react";
import { render } from "react-dom";
import CreateRoomPage from './CreateRoomPage';
import RoomJoinPage from './RoomJoinPage';
import { BrowserRouter, Routes, Route, Link, Redirect } from 'react-router-dom'

export default function HomePage(props) {
    const home = <h1>Home</h1>;

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={home} />
                <Route path='/join' element={<RoomJoinPage />} />
                <Route path='/create' element={<CreateRoomPage />} />
            </Routes>
        </BrowserRouter>
    )
};

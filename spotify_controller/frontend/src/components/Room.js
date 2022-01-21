import React from "react";
import { useState } from "react";

export default function Room(props) {

    const [state, setState] = useState({
        votesToSkip: 2,
        guestCanPause: false,
        isHost: false,
    })

    const roomCode = props.match.params.roomCode;

    const getRoomDetails = () => {

        fetch("/api/get-room" + "?code=" + roomCode)
            .then((res) => res.json())
            .then((data) => {
                setState({
                    votesToSkip: data.votes_to_skip,
                    guestCanPause: data.guest_can_pause,
                    isHost: data.is_host,
                });
            });
    }

    getRoomDetails();

    return (
        <div>
            <h3>{roomCode}</h3>
            <p>Votes: {state.votesToSkip}</p>
            <p>Guest Can Pause: {state.guestCanPause.toString()}</p>
            <p>Host: {state.isHost.toString()}</p>
        </div>
    );
}
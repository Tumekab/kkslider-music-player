import React, {useState} from 'react'
import {BiSkipPrevious} from "react-icons/bi";
import {BiSkipNext} from "react-icons/bi";
import {FaPlay} from "react-icons/fa";
import {FaPause} from "react-icons/fa";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className="audioPlayer">
            {/* current time */}
            <div className="currentTime">0:00</div>

            {/* sound progress bar */}
            <div>
                <input type="range"/>
            </div>

            {/* duration */}
            <div className="duration">1:49</div>

            {/* player controls */}
            <button className="forwardBackward">
                <BiSkipPrevious />
            </button>
            <button onClick={togglePlayPause} className="playPause">
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button className="forwardBackward">
                <BiSkipNext />
            </button>
            {/* shuffle */}
            {/* repeat */}
        </div>
    )
}

export default AudioPlayer

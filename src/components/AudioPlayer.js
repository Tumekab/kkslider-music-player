import React, {useState} from 'react'
import {BsArrowLeftShort} from "react-icons/bs";
import {BsArrowRightShort} from "react-icons/bs";
import {FaPlay} from "react-icons/fa";
import {FaPause} from "react-icons/fa";

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div>
            <button className="forwardBackward">
                <BsArrowLeftShort />
            </button>

            <button onClick={togglePlayPause} className="playPause">
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>

            <button className="forwardBackward">
                <BsArrowRightShort />
            </button>

            {/* current time */}
            <div>0:00</div>

            {/* sound progress bar */}
            <div>
                <input type="range"/>
            </div>

            {/* duration */}
            <div>1:49</div>

            {/* shuffle */}
            {/* repeat */}
        </div>
    )
}

export default AudioPlayer

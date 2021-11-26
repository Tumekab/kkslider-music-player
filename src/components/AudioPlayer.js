import React from 'react'

const AudioPlayer = () => {
    return (
        <div>
            <button>Previous Song</button>
            <button>Play/Pause</button>
            <button>Next Song</button>

            {/* current time */}
            <div>0:00</div>

            {/* sound progress bar */}
            <div>
                <input type="range"/>
            </div>

            {/* duration */}
            <div>1:49</div>
        </div>
    )
}

export default AudioPlayer

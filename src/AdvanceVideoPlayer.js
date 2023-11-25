import React from 'react';
import ReactPlayer from 'react-player';

class AdvancedVideoPlayer extends React.Component {
    state = {
        url: null,
        playing: true,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0
    };

    load = (url) => {
        this.setState({
            url,
            played: 0,
            loaded: 0
        })
    }

    handlePlayPause = () => {
        this.setState({ playing: !this.state.playing })
    }

    handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
    }

    handleProgress = (state) => {
        console.log('onProgress', state)
        this.setState(state)
    }

    handleDuration = (duration) => {
        console.log('onDuration', duration)
        this.setState({ duration })
    }

    render() {
        const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state

        return (
            <div>
                <div>
                    <input type='text' value={url} onChange={e => this.setState({ url: e.target.value })} />
                    <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
                    <button onClick={() => this.setState({ url: null, playing: false })}>Stop</button>
                </div>
                <ReactPlayer
                    url={url}
                    playing={playing}
                    volume={volume}
                    muted={muted}
                    onReady={() => console.log('onReady')}
                    onStart={() => console.log('onStart')}
                    onPlay={() => this.setState({ playing: true })}
                    onPause={() => this.setState({ playing: false })}
                    onBuffer={() => console.log('onBuffer')}
                    onEnded={() => this.setState({ playing: this.state.loop })}
                    onError={e => console.log('onError', e)}
                    onProgress={this.handleProgress}
                    onDuration={this.handleDuration}
                />
                <div>
                    <input type='range' min={0} max={1} step='any' value={played} onChange={e => this.setState({ played: parseFloat(e.target.value) })} />
                </div>
                <div>
                    <input type='range' min={0} max={1} step='any' value={volume} onChange={this.handleVolumeChange} />
                </div>
            </div>
        )
    }
}

export default AdvancedVideoPlayer;
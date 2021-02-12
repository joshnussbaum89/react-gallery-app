import React, { Component } from 'react'

class Clock extends Component {

    state = {
        isDisplayed: false,
        date: new Date()
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    showOrHideClock = () => {
        this.setState((prevState) => ({
            isDisplayed: !prevState.isDisplayed
        }))
    }

    render() {
        let clockDisplay;

        (!this.state.isDisplayed) ? clockDisplay = (
            <div className='clock'>
                <button className='clockBtn' onClick={this.showOrHideClock}>show time &#8594;</button>
            </div>
        ) : clockDisplay = (
            <div className='clock'>
                <button className='clockBtnOpen' onClick={this.showOrHideClock}>hide time &#8594;</button>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )

        return clockDisplay;
    }
}

export default Clock;

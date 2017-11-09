import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 1,
            trueStep: 1,
            step: 1,
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ value: this.state.value + this.state.trueStep });
        }, 1000)
    }
    render() {
        return (
            <div
                style={{
                    backgroundColor:'black',
                    color:'white',
                }}
            >
                <div>计数器：{this.state.value}</div>
                <div>
                    间隔{this.state.trueStep}
                </div>
                <div>
                    更换间隔
                    <input
                        type="text"
                        value={this.state.step}
                        style={{ width: 50 }}
                        onChange={e => this.setState({ step: parseInt(e.target.value )})}
                    />
                    <button onClick={() => this.setState({ trueStep: this.state.step })}>确定</button>
                </div>
            </div>
        );
    }
}

export default App;
import React from 'react';
import './todo-list.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btn: {
                click: () => {
                }
            },
            active:0
        };

        setInterval(()=>{
            this.setState((prev)=>{
                const next = prev.active === 3 ? 0 : prev.active+1;
                return {active: next}
            });
        }, 1000)
    }


    componentDidMount() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', this.props.clicked());
         // btn.click();
        this.setState({btn})
    }

    onClick = (e) => {
        console.log('Clicked child');
    };

    render() {
        const {btn, active} = this.state;
        const {name} = this.props;
        return (
            <div>
                <h1>
                    React Zone: {name}
                </h1>
                <paper-button raised onClick={this.onClick}>Paper React button</paper-button>
                <button onClick={this.onClick}>React raw button</button>
                <div className="taber">
                    <paper-tabs selected={active} scrollable>
                        <paper-tab onClick={this.onClick}>The first tab</paper-tab>
                        <paper-tab id='tab-2'>Tab two</paper-tab>
                        <paper-tab>The third tab</paper-tab>
                        <paper-tab>Fourth tab</paper-tab>
                    </paper-tabs>

                </div>
            </div>

        )
    }

}

export default TodoList;
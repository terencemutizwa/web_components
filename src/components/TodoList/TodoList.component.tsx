import * as React from 'react';
import './todo-list.scss';

class TodoList extends React.Component {

    componentDidMount() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', this.props.clicked);
        // btn.click();
        this.setState({btn})
    }

    onClick = (e) => {
        this.props.clicked();
    };

    render() {
        const paperStyle= {
            border:'solid purple 1px'
        };
        return (
            <div>

                <h1>
                    React Zone:
                </h1>
                <paper-button onClick={this.onClick} style={paperStyle} raised className="indigo">Batana bepa with long text</paper-button>
                <button className="btn btn-warning" onClick={this.onClick}>React button</button>
            </div>

        )
    }

}

export default TodoList;
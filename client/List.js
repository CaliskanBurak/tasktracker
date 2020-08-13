import React, { Component } from 'react';
import { func } from 'prop-types';

class List extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            task: "",
            items: []
        }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    }


    onChange = event => {
        this.setState({task: event.target.value});
    }

    onSubmit = event => {
        event.preventDefault();
        this.setState({
            task:"",
            items: [...this.state.items, this.state.task]
        })
    }

    onDelete = (value, event) => {
        event.preventDefault();
        const data = [...this.state.items];
        data.filter(function(item, index) {
            if(index === value) {
                data.splice(index, 1);
            }
        })
        this.setState({items: [...data]})
    }

    render() {
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="taskName">Task Name</label>
                    <input
                    type ="text"
                    className="form-control"
                    id="taskName"
                    value={this.state.task}
                    onChange={this.onChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-block">Add</button>
            </form>
            <table className="table mt-3">
                {this.state.items.map((item, index) =>(
                    <tr>
                        <td key={index}  className="text-left">
                            {item}
                        </td>
                        <td className="text-right">
                            <button className="btn btn-danger" onClick={this.onDelete.bind(this, index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        )
    }
}

//So we can import List in other files.
export default List;
import React, { Component } from 'react';
import axios from 'axios'

export default class createUser extends Component {
    state = {
        users: [],
        username: ''
    }
    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data });
    }
    async componentDidMount() {
        this.getUsers();
    }
    onChangeUserName = (e) => {
        this.setState({
            username: e.target.value
        });
    }
    onSubmitUsername = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        this.state.username='';
        this.getUsers();    
    }
    onDoubleClickDelete = async(id)=>{
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        this.getUsers(); 
    }


    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3>Create new user</h3>
                            <form onSubmit={this.onSubmitUsername}>
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.onChangeUserName} value={this.state.username} />
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary">
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => {
                                return (
                                    <li key={user._id} onDoubleClick={()=>this.onDoubleClickDelete(user._id)} className="list-group-item list-group-item-action">
                                        {user.username}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import axios from 'axios';

export default class createNote extends Component {
    state = {
        users: [],
        author: '',
        title: '',
        content: '',
        date: '',
        editing: false,
        _id: ''
    }
    onSubmitNote = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content,
            date: this.state.date
        }
        if (this.state.editing) {
            await axios.put(`http://localhost:4000/api/notes/${this.state._id}`, newNote);
        } else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = "/";
    }
    onInputChange = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async componentDidMount() {
        if (this.props.match.params.id) {
            const res = (await axios.get(`http://localhost:4000/api/notes/${this.props.match.params.id}`)).data;
            let year = new Date(res.date).getFullYear();
            let month = ((new Date(res.date).getMonth() + 1) < 9) ? 0 + '' + (new Date(res.date).getMonth() + 1) : (new Date(res.date).getMonth() + 1);
            let day = ((new Date(res.date).getDate()) < 9) ? 0 + '' + new Date(res.date).getDate() : new Date(res.date).getDate();
            this.setState({
                _id: this.props.match.params.id,
                editing: true,
                title: res.title,
                content: res.content,
                date: `${year}-${month}-${day}`,
                author: res.author
            });
        }
        // Select user
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <h4>Create a new Note</h4>
                        <form onSubmit={this.onSubmitNote}>
                            <div className="form-group">
                                <select className="form-control" name="author" onChange={this.onInputChange} required value={this.state.author}>
                                    <option key="0" value="0" defaultValue>Select</option>
                                    {
                                        this.state.users.map(user => {
                                            return <option key={user._id} value={user.username}>{user.username}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="title" name="title" required onChange={this.onInputChange} value={this.state.title} />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="content" placeholder="content" required onChange={this.onInputChange} value={this.state.content} ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" name="date" required onChange={this.onInputChange} value={this.state.date} />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary">
                                Save Note
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

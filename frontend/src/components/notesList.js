import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { format } from 'timeago.js';

export default class notesList extends Component {
    state = {
        notes: []
    }
    componentDidMount() {
        this.getNotes();
    }
    async getNotes(){
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({ notes: res.data });
    }
    onDeleteNote = async(id)=>{
        await axios.delete('http://localhost:4000/api/notes/'+id);
        this.getNotes();
    }
    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => {
                        return (
                            <div key={note._id} className="col-md-4 p-2">
                                <div className="card">
                                    <div className="card-header text-center d-flex justify-content-between">
                                        <h5>{note.title}</h5>
                                        <Link className="btn btn-info btn-sm" to={`/edit/${note._id}`}>Edit</Link>
                                    </div>
                                    <div className="card-body">
                                        <p>{note.content}</p>
                                    </div>
                                    <div className="card-footer text-right">
                                        <p>{note.author} - {format(note.date)}</p>
                                        <button className="btn btn-sm btn-danger" onClick={()=>this.onDeleteNote(note._id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

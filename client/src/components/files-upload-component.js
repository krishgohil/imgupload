import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
        console.log(this.state)
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.profileImg)
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        console.log(formData)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            
            console.log(res,formData)
        })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
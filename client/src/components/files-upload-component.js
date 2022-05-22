import React, { Component, useEffect } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login'

import { gapi } from 'gapi-script'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// export default class FilesUploadComponent extends Component {

//     constructor(props) {
//         super(props);

//         this.onFileChange = this.onFileChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             profileImg: ''
//         }
//     }

//     onFileChange(e) {
//         this.setState({ profileImg: e.target.files[0] })
//         console.log(this.state)
//     }

//     onSubmit(e) {
//         e.preventDefault()
//         console.log(this.state.profileImg)
//         const formData = new FormData()
//         formData.append('profileImg', this.state.profileImg)
//         console.log(formData)
//         axios.post("https://imguploadmdb.herokuapp.com/api/user-profile", formData, {
//         }).then(res => {

//             console.log(res, formData)
//         })
//     }

//     responseSuccessGoogle(response,e) {
//         e.preventDefault()
//         console.log('scuceses')
//         console.log(response)
//     }

//     responseErrorGoogle() {

//     }



//     render() {
//         return (
//             <div className="container">
//                 <div className="row">
//                     <form onSubmit={this.onSubmit}>
//                         <div className="form-group">
//                             <input type="file" onChange={this.onFileChange} />
//                         </div>
//                         <div className="form-group">
//                             <button className="btn btn-primary" type="submit">Upload</button>

//                         </div>
//                     </form>
//                 </div>

//                 <GoogleLogin
//                     clientId="730517188418-bk49isi15dmh0tf2mnteg93ts9il4jrc.apps.googleusercontent.com"
//                     buttonText="Sign In with Google"
//                     onSuccess={this.responseSuccessGoogle}
//                     onFailure={this.responseErrorGoogle}
//                     cookiePolicy={'single_host_origin'}
//                 />

//             </div>
//         )
//     }
// }


const KRISH = () => {
    useEffect(() => {
        function start(params) {
            gapi.client.init({
                clientId: '730517188418-bk49isi15dmh0tf2mnteg93ts9il4jrc.apps.googleusercontent.com',
                scrope: ''
            });
            gapi.load('client:auth2', start)
        }
    }, [])

    const responseSuccessGoogle = (response) => {
        // e.preventDefault()
        console.log('scuceses')
        console.log(response)
    }

    const responseErrorGoogle = (response) => {
        console.log(response)
    }

    const toastfunc = () => {
        console.log('toast run')
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
    }

    return (
        <>
            <button onClick={toastfunc} >Login</button>
            <GoogleLogin
                clientId="730517188418-bk49isi15dmh0tf2mnteg93ts9il4jrc.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <ToastContainer />

        </>

    )
}

export default KRISH
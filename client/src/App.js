import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilesUploadComponent from './components/files-upload-component';
import FilesUploadComponent2 from './components/files-upload-component2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilesUploadComponent />
      </div>
    );
  }
}

export default App;
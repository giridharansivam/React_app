import React, { Component } from 'react';

class FileUploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      file: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like sending it to a server
    console.log('Form Data:', this.state);
    this.handleCancel();
  };
  handleCancel = () => {
    // Clear the form fields
    this.setState({
      name: '',
      description: '',
      file: null
      
    });
    document.getElementById('file').value = '';

  };

  render() {
    return (
      <div>
        <h2>New Shop</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
            <br></br>
          <div className="form-group">
            <label htmlFor="file">Attach File:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={this.handleFileChange}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default FileUploadForm;

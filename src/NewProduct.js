import React, { Component } from 'react';

class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      quantity: 0,
      category: '',
      price: 0,
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
    console.log('Form Data:', this.state);
    this.handleCancel();
  };

  handleCancel = () => {
    this.setState({
      name: '',
      description: '',
      quantity: 0,
      category: '',
      price: 0,
      file: null,
    });

    document.getElementById('file-input').value = '';
  };

  render() {
    return (
      <div>
        <h2>New Product</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>;&emsp;&emsp;
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
            <label htmlFor="description">Description:</label>;&emsp;&emsp;
            <textarea
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              className="form-control"
            />
            <br></br>
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>;&emsp;&emsp;
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="category">Category:</label>;&emsp;&emsp;
            <input
              type="text"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="price">Price:</label>;&emsp;&emsp;
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Attach File:</label>;&emsp;&emsp;
            <input
              type="file"
              id="file-input"
              name="file"
              onChange={this.handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &emsp;&emsp;&emsp;
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

export default NewProduct;

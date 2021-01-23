import React, { Component } from 'react';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }

 var boxStyle={
    width: 229
   }
 
 class AddEmployee extends Component {

 constructor(props) {
 super(props);
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.photoChange=this.photoChange.bind(this)
    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        photo:''
    }
 }
 

 // To add new employee when user submits the form
 handleSubmit = (event) => {
 event.preventDefault();
 const formData = new FormData()
 formData.append('photo', this.state.photo)
 formData.append('firstName',this.state.firstName)
 formData.append('lastName',this.state.lastName)
 formData.append('email',this.state.email)
 formData.append('phone',this.state.phone)
//  const { firstName, lastName, email, phone } = this.state;
 axios.post('http://localhost:5000/todos/to',
 formData,{})
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 }

  // When value changes of the fields

  photoChange = (event) => {
    //  this.setState({ firstName:event.target.files});
    // console.log(event.target.name,event.target.value)
    this.setState({ photo: event.target.files[0]})

    }

    handleChange = (event) => {
        //  this.setState({ firstName:event.target.files});
        // console.log(event.target.name,event.target.value)
        this.setState({ [event.target.name]: event.target.value})
    
        }
 
 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit} encType='multipart/form-data' >
 <label>
 First Name
 <input
 name="firstName"
 type="text"
 value={this.state.firstName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Last Name
 <input
 name="lastName"
 type="text"
 value={this.state.lastName}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Email
 <input
 name="email"
 type="text"
 value={this.state.email}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
 <label>
 Phone No
 <input
 name="phone"
 type="text"
 value={this.state.phone}
 onChange={this.handleChange}
 className="form-control"
 />
 </label>
 <br />
<label>
<input 


                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={this.photoChange}
                className="form-control"
                style={boxStyle}
            />
</label>
 

 <input
 type="submit"
 value="submit"
 className="btn btn-primary"
 />
 </form>
 </div>
 );
 }
 }
 
 export default AddEmployee;
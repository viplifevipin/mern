import React, { Component } from 'react';
import {Image,Col } from 'react-bootstrap';
 import axios from 'axios';
 
 const customStyle = {
 width: '300px',
 margin: '0 auto'
 }
 
 var boxStyle={
 width: 229
}

var imgStyle=
{width: 92,
    borderBottomWidth: 0,
    height: 47
}

 class editEmployee extends Component {

 constructor(props) {
 super(props);
 this.state = {
 firstName: '',
 lastName: '',
 email: '',
 phone: '',
 photo:''
 }
 }
 
 handleChange = (event) => {
    //  this.setState({ firstName:event.target.files});
    // console.log(event.target.name,event.target.value)
    this.setState({ [event.target.name]: event.target.value})

    }

    photoChange=(event)=>{
        this.setState({ photo: event.target.files[0]})
    }


 // To update employee when user submits the form
 handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append('photo', this.state.photo)
    formData.append('firstName',this.state.firstName)
    formData.append('lastName',this.state.lastName)
    formData.append('email',this.state.email)
    formData.append('phone',this.state.phone)
   //  const { firstName, lastName, email, phone } = this.state;
    axios.post('http://localhost:5000/todos/change/'+this.props.match.params.id,
    formData,{})
    .then((response) => {
    console.log(response);
    this.props.history.push('/');
    })
    .catch((error) => {
    console.log(error);
    });
    }
        // To edit employee when user submits the form
        // handleSubmit = (event) => {
        // event.preventDefault();
        // const { firstName, lastName, email, phone } = this.state;
        // axios.post('http://localhost:5000/todos/change/'+this.props.match.params.id, {
        // firstName: firstName,
        // lastName: lastName,
        // email: email,
        // phone: phone,
        // })
        // .then((response) => {
        // console.log(response);
        // this.props.history.push('/');
        // })
        // .catch((error) => {
        // console.log(error);
        // });
        // }

 componentDidMount = () => {
    axios.get('http://localhost:5000/todos/edit/'+this.props.match.params.id)
    .then((response)=>{
        console.log(response.data)
        this.setState({
            firstName:response.data.firstName,
            lastName:response.data.lastName,
            email:response.data.email,
            phone:response.data.phone,
            photo:response.data.photo
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}

 render() {
 return (
 <div className="container">
 <form style={customStyle} onSubmit={this.handleSubmit}>
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
        <input name="lastName"
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
 <label>current  Photo
 <Col xs={6} md={4}>
      <Image src={"http://localhost:5000/images/"+this.state.photo}  rounded style={imgStyle} />
    </Col>
 </label>

 <label>
     update photo

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
 
 export default editEmployee;
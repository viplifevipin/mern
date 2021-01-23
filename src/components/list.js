import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button ,Image,Col ,Dropdown } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';

var divStyle = {
margin: '8% 8%',
};

var imgStyle=
    {width: 92,
        borderBottomWidth: 0,
        height: 47
    }

class ListEmployee extends Component {

constructor(props) {
super(props);
this.deleteEmployee=this.deleteEmployee.bind(this)
this.state = {
employees: []
}
}

// // To get all the employees

componentDidMount = () => {
    this.getEmployee()
}

getEmployee(){
    axios.get('http://localhost:5000/todos/todos')
    .then((res)=>{
        this.setState({employees:res.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}

deleteEmployee(id){
    axios.delete('http://localhost:5000/todos/delete/'+id)
    .then((response)=>{
        console.log('deleted',response)
        this.getEmployee()
    })
    .catch((err)=>{
        console.log(err)
    })
}

render() {
const { employees } = this.state;
return (
<div style={divStyle}>
<Table responsive>
<thead>
<tr>
<th>#</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
<th>Phone</th>
<th>photo</th>
<th>created At</th>
<th>updated At</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
{
employees && employees.map((employee, i) => {
return (
    <input
    name="createdAt"
    type="text"
    value={this.state.phone}
    onChange={this.handleChange}
    className="form-control"
    />
<tr key={i}>
<td>{i}</td>
<td>{employee.firstName}</td>
<td>{employee.lastName}</td>
<td>{employee.email}</td>
<td>{employee.phone}</td>
<td>
<Col xs={6} md={4}>
      <Image src={"http://localhost:5000/images/"+employee.photo}  rounded style={imgStyle} />
    </Col>
</td>
<td>
<Moment format="YYYY/MM/DD h:mm:ss a">
{employee.createdAt}
            </Moment>
    </td>
    <td>
<Moment format="YYYY/MM/DD h:mm:ss a">
{employee.updatedAt}
            </Moment>
    </td>
<td>
<Link to={"/edit/" + employee._id} className="btn btn-primary">Edit</Link>
</td>
<td>
<Button onClick={()=>this.deleteEmployee(employee._id)} bsStyle="danger" >Delete</Button>
</td>

</tr>
)
})
}
</tbody>
</Table>
</div>
);
} 
}

export default ListEmployee;
import React, { Component } from 'react'


class Employees extends Component {
    constructor() {
        super();
        this.state = {
            refs :React.createRef(),
            title: "Employee Database",
            employeeData : [],
            act: 0,
            index:''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;

        if (this.state.act === 0) {
            let newEmployee = {
                "name": name,
                "age": age
            }
            employeeData.push(newEmployee);
        }
        else {
            let index = this.state.index;
            employeeData[index].name = name;
            employeeData[index].age = age;
        }
        this.setState({
            employeeData: employeeData,
            act: 0
        })
        this.refs.myForm.reset();
    }

    handleEdit = (i) => {
        let employeeData = this.state.employeeData[i];
        
        this.refs.txtName.value = employeeData.name;
        this.refs.txtAge.value = employeeData.age;
        

        this.setState({
            employeeData: employeeData,
            act: 1,
            index: i
        })
    }




    handleDelete = (i) => {
        let employeeData = this.state.employeeData;
        employeeData.splice(i, 1);

        this.setState({
            employeeData: employeeData
        });
    }






    render() {
        let employeeData = this.state.employeeData;

        return (
            <div className="container">
                
                <h2 className="text-left mb-3">{this.state.title} </h2>
                <div className="w-75 mx-auto shadow p-5">

                    <h1 className="text-center mb-4">Employee Database</h1>
                    <form ref="myForm" className="myForm">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" ref="txtName" placeholder="Enter your name" className="form-control form-control-lg" />
                            <label>Age</label>
                            <input type="text" ref="txtAge" placeholder="Enter your name" className="form-control form-control-lg" />


                            <button onClick={e => this.handleSubmit(e)}>Save</button>
                        </div>
                    </form>


                    <table>

                        <tr >
                            {/* <th >#</th> */}
                            <th>Name</th>
                            <th>Age </th>


                        </tr>


                        {employeeData.map((data, i) =>
                            <tr key={i}>

                                <td>{data.name}</td>
                                <td>{data.age}</td>

                                <td>
                                    <button type ="button" class ="btn btn-primary" onClick={e=>this.handleEdit(i)}>Edit </button>
                                    </td>
                                    <td>
                                    <button onClick={e => this.handleEdit(i)} >Edit</button>
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-primary" onClick={e => this.handleDelete(i)}>Delete</button>

                                </td>

                            </tr>
                        )}

                    </table>



                </div>


            </div>
        )
    }
}

export default Employees
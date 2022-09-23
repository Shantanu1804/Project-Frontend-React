import React, { Component } from 'react'
import { ProductConsumer } from '../Context'
import {Table,Button} from 'react-bootstrap'
export default class EmployeeData extends Component {
  render() {
    return (
      <div className="container">
          <h3>EmployeeData</h3>
          <ProductConsumer>
{
    (value) => {
        return (
            <Table size="sm" varient ="light ">
<tbody>
<tr>

<th>eid</th>
<th>name</th>
<th>role</th>
<th>dept</th>
<th>salary</th>
<th>Actions</th>
</tr>
<tr>
    
    <td><input type="text" value={value.eid} onChange={(e)=> {value.updateValue(e,"eid")}}/></td>
    <td><input type="text" value={value.name} onChange={(e)=> {value.updateValue(e,"name")}}/></td>
    <td><input type="text" value={value.role} onChange={(e)=> {value.updateValue(e,"role")}}/></td>
    <td><input type="text" value={value.dept} onChange={(e)=> {value.updateValue(e,"dept")}}/></td>
    <td><input type="text" value={value.salary} onChange={(e)=> {value.updateValue(e,"salary")}}/></td>
    <td><Button size ="sm" onClick ={()=> {value.onSave(value.id)}}>{value.id ? "Save" : "Add new row"}</Button></td>
</tr>
{
    value.Alldata.map(product=> {
        return (
            <tr>
                
                <td>{product.eid}</td>
                <td>{product.name}</td>
                <td>{product.role}</td>
                <td>{product.dept}</td>
                <td>{product.salary}</td>
                <td><Button size ="sm" varient ="primary" onClick={()=> {value.onEdit(product.id)}}>Edit</Button> | <Button size ="sm" varient ="primary" onClick={()=> {value.onDelete(product.eid)}}>Delete</Button></td>
            </tr>
        )
    })
}
</tbody>


            </Table>
        )
    }
}

          </ProductConsumer>



      </div>
    )
  }
}

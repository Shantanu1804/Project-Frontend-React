import React, { Component } from 'react'
import { rowData } from './appData'


const ProductContext = React.createContext();


 class ProductProvider extends Component {


    state ={
        Alldata : rowData,
        id:'',
        eid:'',
        name:'',
        role:'',
        dept: '',
        salary:'',
        updateEdit:[]
    }

getRecord=(id) => {
    const product = this.state.Alldata.find(item => item.id === id);
    return product;

}

onEdit=(id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
        id:selectedRecord['id'],
        eid:selectedRecord['eid'],
        name:selectedRecord['name'],
        role:selectedRecord['role'],
        dept:selectedRecord['dept'],
        salary:selectedRecord['salary'],
})
}

updateValue = (e,test) =>{
    if(test ==="eid"){
        this.state.eid =e.target.value;
    }
    if(test ==="name"){
        this.state.name =e.target.value;
    }
    if(test ==="role"){
        this.state.role =e.target.value;
    }
    if(test ==="dept"){
        this.state.dept =e.target.value;
    }
    if(test ==="salary"){
        this.state.salary =e.target.value;
    }
    const tempArr=[this.state.id,this.state.eid, this.state.name, this.state.role, this.state.dept, this.state.salary];
    this.setState({
        updateEdit: tempArr
})
}
onSave=(id) => {
    if(id!==''){
        const SavedRecord = this.state.Alldata;
        const index = SavedRecord.indexOf(this.getRecord(id));
        const Record = SavedRecord[index];
        
        Record['eid']= this.state.updateEdit[1];
        Record['name']= this.state.updateEdit[2];
        Record['role']= this.state.updateEdit[3];
        Record['dept']= this.state.updateEdit[4];
        Record['salary']= this.state.updateEdit[5];
        this.setState({
            Alldata: [...this.state.Alldata],
            id:"",eid:"",name:"",role:"",dept:"",salary:""
        })
    }
    else{
        const MaxId =Math.max(...this.state.Alldata.map(item=> item.id));
        const id = MaxId+1;
        const newArr= [];
        newArr['eid']= this.state.updateEdit[1];
        newArr['name']= this.state.updateEdit[2];
        newArr['role']= this.state.updateEdit[3];
        newArr['dept']= this.state.updateEdit[4];
        newArr['salary']= this.state.updateEdit[5];
        this.setState({
            Alldata: [...this.state.Alldata,newArr],
            id:"",eid:"",name:"",role:"",dept:"",salary:""
        })
        }

}
onDelete=(eid) => {
    const tempProduct = this.state.Alldata.filter(item=> item.eid !== eid);
    
    this.setState({
        Alldata: tempProduct
    })
}

  render() {

    
    return (

      <div>
          <ProductContext.Provider 
          value={{...this.state,
             onEdit:this.onEdit,
             updateValue: this.updateValue,
             onSave: this.onSave,
             onDelete: this.onDelete}}>
              {this.props.children}
          </ProductContext.Provider>
          
          
         </div>
    )
  }
}
const ProductConsumer =ProductContext.Consumer;
export {ProductProvider, ProductConsumer}

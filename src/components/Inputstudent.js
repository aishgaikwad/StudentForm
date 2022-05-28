import React from 'react'
import axios from 'axios'
class Inputstudent extends React.Component
{
    state = {
        firstname :'',
        lastname :'',
        place :''
    }
    handleChange =(e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit =()=>{
        if(this.state.firstname!='' && this.state.lastname!='', this.state.place!='')
        {
            axios.post('http://localhost:5000/student',this.state)
            .then(res=>{
                console.log('successfully added');
            this.setState({firstname:'',lastname:'',place:''});
            });
            window.location = '/';
        }
    }
    render()
    {
        return(
            <div className='row text-center'>
                <div className='col-md-4'>
                    <form onSubmit={()=>this.handleSubmit()}>
                    <input onChange={(e)=>this.handleChange(e)} name='firstname' value={this.state.firstname} style={{marginLeft:'50px',marginTop:'20px',borderRadius:'10px',fontFamily:'Cursive,sans-serif,Gugi'}} placeholder='First Name' className='form-control'/> 
                    <input onChange={(e)=>this.handleChange(e)} name='lastname' value={this.state.lastname} style={{marginLeft:'50px',marginTop:'20px',borderRadius:'10px',fontFamily:'Cursive,sans-serif,Gugi'}} placeholder='Last Name' className='form-control'/> 
                    <input onChange={(e)=>this.handleChange(e)} name='place' value={this.state.place} style={{marginLeft:'50px',marginTop:'20px',borderRadius:'10px',fontFamily:'Cursive,sans-serif,Gugi'}} placeholder='Place' className='form-control'/> 
                        <button style={{marginLeft:'50px',marginTop:'20px',fontFamily:'Cursive,sans-serif,Gugi', width:'435px',borderRadius:'10px'}} className='btn btn-primary'>Create</button>

                    </form>
                    
                </div>
                <div>
                    </div>
            </div>
        );
    }
}
export default Inputstudent;
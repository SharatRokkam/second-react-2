import React,  { useState } from 'react';
// import Style from './Style.css';


const  Form = () =>
{

    const [name, setName] = useState("")
    const [department, setDept] = useState("")
    const [rate, setRate] = useState("")

    const[allUser, setAllUser] = useState([])

    
const handleSubmit = (event) =>
{
    event.preventDefault();
    const newUser = {
        name : name,
        department:department,
        rate : rate
    }
    setAllUser([...allUser, newUser])
  

   
  
};

    return(
        < >
            <div className='main-container'>
                <h1>
                   
                    EMPLOYEE FEEDBACK FORM
                    
                </h1>
<div className='content'>
                <form onSubmit={handleSubmit}>
                    <center>
                <div>                        
                    <label htmlFor="name">Name : </label>
                    <input type="text" name="name" id="name"  placeholder='Enter ur Name Here ... ' onChange={(e) => setName(e.target.value)} 
                   value={name}
                    required />
                </div>
                    <br/>
                
                <div>
                    <label htmlFor="department">Department : </label>

                    <input type="text"  name="department" id="department" placeholder='Enter ur department' required  onChange={(e) => setDept(e.target.value)}  value={department} />
                    </div>

                    <br />
                    <div>
                    <label htmlFor="rate">Rating : </label>

                    <input type="number" placeholder='Enter rate between 1 to 5' name="rate" id="rate"  max="5" min="1" 
                     
                     onChange={(e) => setRate(e.target.value)} value={rate} required/>
                     </div>
                    <br />

                    <button className='sub-btn' type="submit" value="Submit" >Submit </button>
                    </center>
                </form>
                </div>
            </div>
            
           
           <div className='show-data'>
               <center>

        
                <p className='table-show' > 
                <h1 className='user'>
                       
                    {allUser.map((data)=>(
                        
                       
                            <p>NAME:{data.name}   
                                 ||                  
                            Department : {data.department}
                             ||
                           Rate : {data.rate}</p>
                            

                       
                    ))}
                    <br />
                     </h1>
                </p>
                </center>

            </div>
            
        </>
    );

}

export default Form;
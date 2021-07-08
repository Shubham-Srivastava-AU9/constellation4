import React, { Fragment } from 'react'
import { Link } from "react-router-dom";


const DetailItem = ({details}) => {
    
    return (
        
        <div className = 'details'>
            <table>
                <thead>
                    <tr>
                        <th>city</th>
                        <th>Address</th>
                        <th>Docter</th>
                        <th>Desighnation</th>
                    </tr>
                </thead>
                {details?.map((item)=>{
                    return (
                   
                        <tbody>
                            <tr>
                                <td>{item.city}</td>
                                <td>{item.address1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.professional_desighnation}</td>
                              <Link to ={`/details/${item._id}`}>  <button style ={{color:"blue"}}>view</button></Link>
                            </tr>
                        </tbody>
                        
                   
                    )
                })}
                
            </table>
        </div>
        
    )
}

export default DetailItem

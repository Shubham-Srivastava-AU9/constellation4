import React, {Fragment, useContext , useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom'
import DetailContext from '../../context/Details/detailContext'
import DetailItem from "./DetailItem";



function Description(){
    const params = useParams()
    const detailContext = useContext(DetailContext);
    const {details , getDetails} = detailContext;
    const [description , setDescription] = useState([])

    useEffect(()=>{
        getDetails()
      },[])

      useEffect(() => {
        setDescription(details?.find(des=>{
         return des._id === params.id
        }))
        },[details])

    return (
        <Fragment>
            <h2>Service Location Details<hr/></h2>
            <div>
                <h5>Buisness Name : {description?.practicename }</h5>
                <h5>Service Location Address : {`${description?.address1} ${description?.address2} ${description?.city}`} City</h5>
                <h5>Service Location Phone : {description?.phone }</h5>
                <h5>Service Location Fax : {description?.fax}</h5>
            </div>
            <div className = 'details'>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Desighnation</th>
                    </tr>
                </thead>
                <tbody>
                            <tr>
                                
                                <td>{description?.first_name}</td>
                                <td>{description?.last_name}</td>
                                <td>{description?.gender}</td>
                                <td>{description?.professional_desighnation}</td>
                              
                            </tr>
                        </tbody>
                </table>
                </div>

        </Fragment>
        
        
    )
}

export default Description

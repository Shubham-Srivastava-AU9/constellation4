import React,{ Fragment, useContext, useEffect , useState} from 'react'
import DetailContext from '../../context/Details/detailContext'
import DetailItem from './DetailItem'
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {
    const detailContext = useContext(DetailContext);
    const {details , getDetails} = detailContext;
    // console.log(details,'shu');
    const [showDetails , setShowDetails] = useState([])

    useEffect(()=>{
        getDetails()
    },[])

    useEffect(()=>{
        setShowDetails(details)
        // console.log(details);
    },[details])
    return (
        <Fragment>
        
            <h1>Location Screen <hr/></h1>
            <DetailItem details ={showDetails} 
                />
             
            
        </Fragment>
        
    )
}

export default Home

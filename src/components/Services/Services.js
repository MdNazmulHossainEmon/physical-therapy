import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
      fetch("./Services.JSON")
      .then(res=>res.json())
      .then(data=>setServices(data))
    },[])
    return (
        <div>
            <Container className='py-4'>
        <h2 className='text-center mb-4 home-service-title'>Our Most Popular <span>Services</span> </h2>
       { 
       services.length===0 ?  <div className='text-center'>
        <Spinner animation="border" variant="dark" />
       </div>
       :
       <Row xl={3} lg={3} md={2} sm={1}>
          
          {
        services.map(service=><Service
        key={service.id}
        service={service}
        ></Service>)
      }
          
        </Row>
        }


      </Container>
        </div>
    );
};

export default Services;
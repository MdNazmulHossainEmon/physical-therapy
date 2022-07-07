import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";
const HomeServiceDetail = () => {
  const { serviceId } = useParams();
  // data store useState uses
  const [details, setDetails] = useState([]);
  const [singleDetail, setSingleDetail] = useState({});

  // data loaded useEffect uses
  useEffect(() => {
    fetch(`/Services.JSON`)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [])

  useEffect(() => {
    const foundDetail = details.find(detail => detail.id === serviceId);
    setSingleDetail(foundDetail);
  }, [details])


  return (
    <div>
      <h2 className='py-5 detail-title text-center'>{singleDetail?.name} Service No : {serviceId}</h2>
      <div className="container main-detail-service mb-5">
        <div className="card detail-card" >
          <div className="row g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <img src={singleDetail?.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12">
              <div className="card-body mt-5">
                <div>
                  <h5 className="card-title">Name : {singleDetail?.name} </h5>
                </div>
                <p className="card-text"> Description : {singleDetail?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceDetail;
import React from 'react'
import { Link } from 'react-router-dom'
const Cards = (props) => {


  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <>
      <div>
        <div className="card m-3" style={{ "width": "18rem", "color": "black" }}>
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{ height: "15rem" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">{props.desc}</p>
            <div className="container w-100">

              <select className='m-2 h-100 bg-success' name="" id="">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  )
                })}
              </select>

              <select className='m-2 h-100 bg-success rounded' name="" id="">
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>

              <div className='d-inline h-100 fs-5'>Total</div>

            </div>
            <Link href="/" className="btn btn-success">Add to Cart</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards

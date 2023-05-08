import React from 'react'
import './Content.css'
import CachedIcon from '@mui/icons-material/Cached';
const Content = () => {
  return (
    <div className="content">
      <div className="content___wrapper">
        <div className="content___wrapper___business">
          <div className="content___wrapper___business___left">
            <p className="content___wrapper___business___left--p1">Make Your Business More Profitable</p>
            <p className="content___wrapper___business___left--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <button className="content___wrapper___business___left--btn">Get Started</button>
          </div>
          <div className="content___wrapper___business___right">
            <img src="https://preview.colorlib.com/theme/imagine/images/undraw_investing_7u74.svg" alt="" />
          </div>
        </div>
        <div className="content___wrapper___imagine">
          <div className="content___wrapper___imagine___hero">
              <p className="content___wrapper___imagine___hero--p1">Imagine Features</p>
              <p className="content___wrapper___imagine___hero--p2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.</p>
          </div>
          <div className="content___wrapper___imagine___container">
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
            <div className="content___wrapper___imagine___container___item">
              <div className="circle"><CachedIcon/></div>
              <p className="content___wrapper___imagine___container___item--p1">Marketing Consulting</p>
              <p className="content___wrapper___imagine___container___item--p2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
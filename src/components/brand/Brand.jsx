import React from 'react'
import './brand.css'
import {google,slack,shopify,dropbox,Bitmap} from './import'
function Brand() {
  return (
    <div className='gpt3__brand section__padding'>
          <div>
            <img src={google} alt="google" />
          </div>
          <div>
            <img src={slack} alt="google" />
          </div>
          <div>
            <img src={Bitmap} alt="google" />
          </div>
          <div>
            <img src={dropbox} alt="google" />
          </div>
          <div>
            <img src={shopify} alt="google" />
          </div>
    </div>
  )
}

export default Brand
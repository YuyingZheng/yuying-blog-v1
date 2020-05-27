
import './index.scss'
import React from 'react'

const Loading = () => {
    return (
        <div className="loading-container">
          {/* <div className="loader">
                Loading...
          </div> */}
          <div className="loading-top"></div>
          <div className="spinner-line">
            <p></p>
          </div>
          <div className="loading-bottom"></div>
        </div>
    )
}

export default Loading
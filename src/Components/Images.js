
import React from 'react'

const Images = ({data}) => {
    console.log(data)
  return (
    <div className='container'>
       <img src={data.urls.regular} alt=""/>
        {/* <div class="des"><p>{data.alt_description}</p>
        <p>{data.created_at}</p> </div> */}
        <div class="likes">
            {/* <i class="fa fa-heart" aria-hidden="true" style="color:red"></i> */}
            <span class="like-count">{data.likes}</span></div>
      
    </div>
  )
}

export default Images

import React, { useEffect } from 'react'
import Hoc from './Hoc'
import { blogAction } from '../redux/actions/testiAction';
import { useDispatch, useSelector } from 'react-redux';

function Blog() {
      


    const state = useSelector(state => state)
    const data = state.testimonial.blog.data;

    const dispatch = useDispatch();
useEffect(() => {
  dispatch(blogAction())
}, [])



  return (
    <>
<div className='container py-5'>
<div className='d-flex justify-content-center'> 
        <h3 className='borderbottom'>
        Blog</h3>
        </div>
<div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 p-0 g-5'>
    {
        data?.map((x,i)=>{
          
            return(
                <>
                <div className='col' key={i}>
                  
                    <div className='card h-100 border-0 '>
                    <a href={x.url} className='nav-link' target='_blank'>
                        <div style={{height:"200px"}}>
                        
      <img src={`${process.env.REACT_APP_IMAGE_URL}${x.image_file}`} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
                   
                        </div>
                    </a>
                        <div className='p-3'>
                            <div className='fs-4 fw-medium py-2'>{x.blog_title}</div>
                        <div className='py-1'>{x.blog_description}</div>
                        </div>
                    </div>
                   
                </div>
                </>
            )
        })
    }
</div>
    </div>    

    </>
  )
}

export default Hoc(Blog)
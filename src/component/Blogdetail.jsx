import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hoc from './Hoc';

function Blogdetail() {
    const { id: blog_title } = useParams(); // Extract blog_title from URL
    const decodedTitle = decodeURIComponent(blog_title); // Decode the title in case of special characters or spaces

    console.log(decodedTitle); // To check the decoded blog_title

    const state = useSelector(state => state);
    const blogData = state.testimonial.blog.data;

    console.log(blogData);

    // Find the blog based on the blog_title parameter
    const selectedBlog = blogData?.find(blog => blog.blog_title === decodedTitle);

    console.log(selectedBlog);

    if (!selectedBlog) {
        return <div className='d-flex justify-content-center text-center'>Blog not found</div>;
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h4 className='mx-auto text-center'>{selectedBlog.blog_title}</h4>
                  <div className='w-50 mx-auto text-center'>
                  <img
                        src={`${process.env.REACT_APP_IMAGE_URL}${selectedBlog.image_file}`}
                        alt={selectedBlog.blog_title}
                        className="img-fluid my-4 w-100 h-100"
                    />
                  </div>
                    <p>{selectedBlog.blog_description}</p>
                </div>
            </div>
        </div>
    );
}

export default Hoc(Blogdetail);

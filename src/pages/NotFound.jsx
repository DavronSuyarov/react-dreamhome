import React from 'react';

const NotFound = () => {
  return (
    <div>
      <section className='flat-title '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='title-inner '>
                <div className='title-group fs-12'>
                  <a className='home fw-6 text-color-3' href='index.html'>
                    Home
                  </a>
                  <span>Property Listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-error center '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='images'>
                <img src='assets/images/mark/mark-error.png' alt='images' />
              </div>
              <div className='heading-sections center'>
                <h2>Oh no... We lost this page</h2>
                <p className='text-color-2'>
                  We searched everywhere but couldn’t find what you’re looking
                  for. Let’s find a better place for you to go.
                </p>
                <div className='button-error center'>
                  <a className='sc-button' href='index.html'>
                    <span>Back to home</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

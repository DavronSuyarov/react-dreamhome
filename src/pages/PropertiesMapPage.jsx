import React from 'react';

const PropertiesMapPage = () => {
  return (
    <div>
      <div className='top-filters style'>
        <div className='container6'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flat-tabs style2 flex'>
                <div className='box-tab center'>
                  <ul className='menu-tab tab-title flex'>
                    <li className='item-title active flex align-center'>
                      <i className='far fa-check-circle' />{' '}
                      <h4 className='inner'>Rent</h4>
                    </li>
                    <li className='item-title style'>
                      <h4 className='inner'> Buy </h4>
                    </li>
                  </ul>
                </div>
                <div className='content-tab'>
                  <div className='content-inner tab-content'>
                    <div className='form-sl'>
                      <form method='post'>
                        <div className='wd-find-select flex'>
                          <div className='form-group-1 search-form form-style relative'>
                            <i className='far fa-search' />
                            <input
                              type='search'
                              className='search-field'
                              placeholder='Type keyword...'
                              defaultValue
                              name='s'
                              title='Search for'
                              required
                            />
                          </div>
                          <div className='form-group-2 form-style'>
                            <div className='group-select'>
                              <div className='nice-select' tabIndex={0}>
                                <span className='current'>Property type</span>
                                <ul className='list'>
                                  <li data-value className='option selected'>
                                    Property type
                                  </li>
                                  <li data-value='bungalow' className='option'>
                                    Bungalow
                                  </li>
                                  <li data-value='apartment' className='option'>
                                    Apartment
                                  </li>
                                  <li data-value='house' className='option'>
                                    House
                                  </li>
                                  <li
                                    data-value='smart-home'
                                    className='option'
                                  >
                                    Smart Home
                                  </li>
                                  <li
                                    data-value='Single family home'
                                    className='option'
                                  >
                                    Office
                                  </li>
                                  <li
                                    data-value='Multi family home'
                                    className='option'
                                  >
                                    Villa
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='form-group-3 form-style'>
                            <div className='group-select'>
                              <div className='nice-select' tabIndex={0}>
                                <span className='current'>Location</span>
                                <ul className='list'>
                                  <li data-value className='option selected'>
                                    Location
                                  </li>
                                  <li data-value='Japan' className='option'>
                                    Japan
                                  </li>
                                  <li data-value='America' className='option d'>
                                    America
                                  </li>
                                  <li data-value='England' className='option '>
                                    England
                                  </li>
                                  <li data-value='Japan' className='option'>
                                    Belgium
                                  </li>
                                  <li data-value='England' className='option '>
                                    France
                                  </li>
                                  <li data-value='VietNam' className='option'>
                                    VietNam
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='form-group-2 form-style'>
                            <div className='group-select'>
                              <div className='nice-select' tabIndex={0}>
                                <span className='current'>Baths</span>
                                <ul className='list'>
                                  <li data-value className='option selected'>
                                    Baths
                                  </li>
                                  <li data-value='floating' className='option'>
                                    Floating baths
                                  </li>
                                  <li data-value='massage' className='option'>
                                    Massage baths
                                  </li>
                                  <li
                                    data-value='floor-standing'
                                    className='option'
                                  >
                                    Floor-standing bath
                                  </li>
                                  <li data-value='built-in' className='option'>
                                    Built-in baths
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='form-group-3 form-style'>
                            <div className='group-select'>
                              <div className='nice-select' tabIndex={0}>
                                <span className='current'>Beds</span>
                                <ul className='list'>
                                  <li data-value className='option selected'>
                                    Beds
                                  </li>
                                  <li data-value='twin' className='option'>
                                    Twin beds
                                  </li>
                                  <li data-value='bunk' className='option'>
                                    Bunk beds
                                  </li>
                                  <li data-value='kids' className='option'>
                                    Kids beds
                                  </li>
                                  <li data-value='single' className='option'>
                                    Single bed
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='form-group-4 form-style'>
                            <a
                              className='icon-filter button-top pull-right'
                              href='#'
                            >
                              <span>Filters</span>
                              <svg
                                width={18}
                                height={18}
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M3 10.5V0.75M3 10.5C3.39782 10.5 3.77936 10.658 4.06066 10.9393C4.34196 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.34196 12.7794 4.06066 13.0607C3.77936 13.342 3.39782 13.5 3 13.5M3 10.5C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5M3 17.25V13.5M15 10.5V0.75M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5M15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5M15 17.25V13.5M9 4.5V0.75M9 4.5C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5M9 17.25V7.5'
                                  stroke='#000'
                                  strokeWidth='1.5'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </a>
                          </div>
                          <div className='button-search sc-btn-top'>
                            <a className='sc-button button-top' href='#'>
                              <span>Search Now</span>
                              <i className='far fa-search' />
                            </a>
                          </div>
                        </div>
                        <div className='wd-find-select wd-search-form '>
                          <div className='box1 flex flex-wrap form-wg'>
                            <div className='form-group wg-box3'>
                              <div className='group-select'>
                                <div className='nice-select' tabIndex={0}>
                                  <span className='current'>Baths: Any</span>
                                  <ul className='list'>
                                    <li data-value className='option selected'>
                                      Baths: Any
                                    </li>
                                    <li data-value={1} className='option'>
                                      1
                                    </li>
                                    <li data-value={2} className='option'>
                                      2
                                    </li>
                                    <li data-value={3} className='option'>
                                      3
                                    </li>
                                    <li data-value={4} className='option'>
                                      4
                                    </li>
                                    <li data-value={5} className='option'>
                                      5
                                    </li>
                                    <li data-value={6} className='option'>
                                      6
                                    </li>
                                    <li data-value={7} className='option'>
                                      7
                                    </li>
                                    <li data-value={8} className='option'>
                                      8
                                    </li>
                                    <li data-value={9} className='option'>
                                      9
                                    </li>
                                    <li data-value={9} className='option'>
                                      10
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='group-select'>
                                <div className='nice-select' tabIndex={0}>
                                  <span className='current'>Beds: Any</span>
                                  <ul className='list'>
                                    <li data-value className='option selected'>
                                      Beds: Any
                                    </li>
                                    <li data-value={1} className='option'>
                                      1
                                    </li>
                                    <li data-value={2} className='option'>
                                      2
                                    </li>
                                    <li data-value={3} className='option'>
                                      3
                                    </li>
                                    <li data-value={4} className='option'>
                                      4
                                    </li>
                                    <li data-value={5} className='option'>
                                      5
                                    </li>
                                    <li data-value={6} className='option'>
                                      6
                                    </li>
                                    <li data-value={7} className='option'>
                                      7
                                    </li>
                                    <li data-value={8} className='option'>
                                      8
                                    </li>
                                    <li data-value={9} className='option'>
                                      9
                                    </li>
                                    <li data-value={9} className='option'>
                                      10
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='widget widget-price '>
                                <div className='caption flex-two'>
                                  <div>
                                    <span className='fw-6'>Form</span>
                                    <span id='slider-range-value1' />
                                    <span id='slider-range-value2' />
                                  </div>
                                </div>
                                <div id='slider-range' />
                                <div className=' slider-labels'>
                                  <div>
                                    <input
                                      type='hidden'
                                      name='min-value'
                                      defaultValue
                                    />
                                    <input
                                      type='hidden'
                                      name='max-value'
                                      defaultValue
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* /.widget_price */}
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='widget widget-price '>
                                <div className='caption flex-two'>
                                  <div>
                                    <span className='fw-6'>Size</span>
                                    <span id='slider-range-value01' />
                                    <span id='slider-range-value02' />
                                  </div>
                                </div>
                                <div id='slider-range2' />
                                <div className='slider-labels'>
                                  <div>
                                    <input
                                      type='hidden'
                                      name='min-value2'
                                      defaultValue
                                    />
                                    <input
                                      type='hidden'
                                      name='max-value2'
                                      defaultValue
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* /.widget_price */}
                            </div>
                          </div>
                          <div className='boder-wg' />
                          <div className='box2 flex flex-wrap form-wg'>
                            <div className='form-group wg-box3'>
                              <div className='tf-amenities bg-white'>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Swimming pool</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Garage</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Alarm system</span>
                                </label>
                              </div>
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='tf-amenities bg-white'>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Balcony</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Outdoor area</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Broadband</span>
                                </label>
                              </div>
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='tf-amenities bg-white'>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Ensuite</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Built in robes</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13 '>Gym</span>
                                </label>
                              </div>
                            </div>
                            <div className='form-group wg-box3'>
                              <div className='tf-amenities bg-white'>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Tennis court</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Study</span>
                                </label>
                                <label className='flex'>
                                  <input name='newsletter' type='checkbox' />
                                  <span className='btn-checkbox' />
                                  <span className='fs-13'>Outdoor spa</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* End Job  Search Form*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' wrap-map3 flat-property flat-property-list2  style flex'>
        <div className='content-left wg-dream relative'>
          <div className='category-filter flex justify-space'>
            <div className='box-1 '>
              <div className='heading-listing fs-30 lh-45 fw-7'>
                Property Listing
              </div>
              <div className>There are currently 164,814 properties.</div>
            </div>
            <div className='box-2 flex'>
              <div className='wd-find-select flex'>
                <div className='group-select'>
                  <div className='nice-select' tabIndex={0}>
                    <span className='current'>Default order</span>
                    <ul className='list style'>
                      <li data-value className='option selected'>
                        Default order
                      </li>
                      <li data-value='by-latest' className='option'>
                        All{' '}
                      </li>
                      <li data-value='low-to-high' className='option'>
                        Low to high
                      </li>
                      <li data-value='high-to-low' className='option'>
                        High to low
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='wrap-list'>
            <div className='box box-dream '>
              <div className='image-group relative flex'>
                <div className='img-box img-box1 relative'>
                  <span className='featured fs-12 fw-6'>Featured</span>
                  <span className='featured style fs-12 fw-6'>For sale</span>
                  <img
                    src='assets/images/house/property-listing-map-1.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box2'>
                  <img
                    className='img-2'
                    src='assets/images/house/property-listing-map-2.jpg'
                    alt='images'
                  />
                  <img
                    src='assets/images/house/property-listing-map-3.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box3'>
                  <img
                    className='img-3'
                    src='assets/images/house/property-listing-map-4.jpg'
                    alt='images'
                  />
                  <div className='icon-inner center relative'>
                    <div className='imgs'>
                      <img
                        src='assets/images/house/property-listing-map-5.jpg'
                        alt='images'
                      />
                    </div>
                    <div className='contents z-2'>
                      <svg
                        width={21}
                        height={18}
                        viewBox='0 0 21 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='fw-6 text-color-1'>
                        <a href='#'>12 images</a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content relative'>
                <h3 className='link-style-1'>
                  <a href='property-detail-v1.html'>
                    Gorgeous Apartment Building
                  </a>{' '}
                </h3>
                <div className='text-address'>
                  <p className='p-12'>58 Hullbrook Road, Billesley, B13 0LA</p>
                </div>
                <div className='money fs-18 fw-6  text-color-3'>
                  <a href='property-detail-v1.html'>$7,500</a>
                </div>
                <div className='icon-box flex'>
                  <div className='icons icon-1 flex'>
                    <span>Beds: </span>
                    <span className='fw-6'>4</span>
                  </div>
                  <div className='icons icon-2 flex'>
                    <span>Baths: </span>
                    <span className='fw-6'>2</span>
                  </div>
                  <div className='icons icon-3 flex'>
                    <span>Sqft: </span>
                    <span className='fw-6'>1150</span>
                  </div>
                </div>
                <a className='icon-d icon-book'>
                  <svg
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z'
                      stroke='#FFA920'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {/* <i class="far fa-bookmark"></i> */}
                </a>
                <a className='icon-d icon-repeat'>
                  <svg
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5'
                      stroke='#1C1C1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='box box-dream '>
              <div className='image-group relative flex'>
                <div className='img-box img-box1 relative'>
                  <span className='featured fs-12 fw-6'>Featured</span>
                  <span className='featured style fs-12 fw-6'>For sale</span>
                  <img
                    src='assets/images/house/property-listing-map-6.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box2'>
                  <img
                    className='img-2'
                    src='assets/images/house/property-listing-map-7.jpg'
                    alt='images'
                  />
                  <img
                    src='assets/images/house/property-listing-map-8.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box3'>
                  <img
                    className='img-3'
                    src='assets/images/house/property-listing-map-9.jpg'
                    alt='images'
                  />
                  <div className='icon-inner center relative'>
                    <div className='imgs'>
                      <img
                        src='assets/images/house/property-listing-map-10.jpg'
                        alt='images'
                      />
                    </div>
                    <div className='contents z-2'>
                      <svg
                        width={21}
                        height={18}
                        viewBox='0 0 21 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='fw-6 text-color-1'>
                        <a href='#'>12 images</a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content relative'>
                <h3 className='link-style-1'>
                  <a href='property-detail-v1.html'>
                    Gorgeous Apartment Building
                  </a>{' '}
                </h3>
                <div className='text-address'>
                  <p className='p-12'>58 Hullbrook Road, Billesley, B13 0LA</p>
                </div>
                <div className='money fs-18 fw-6  text-color-3'>
                  <a href='property-detail-v1.html'>$7,500</a>
                </div>
                <div className='icon-box flex'>
                  <div className='icons icon-1 flex'>
                    <span>Beds: </span>
                    <span className='fw-6'>4</span>
                  </div>
                  <div className='icons icon-2 flex'>
                    <span>Baths: </span>
                    <span className='fw-6'>2</span>
                  </div>
                  <div className='icons icon-3 flex'>
                    <span>Sqft: </span>
                    <span className='fw-6'>1150</span>
                  </div>
                </div>
                <a className='icon-d icon-book'>
                  <svg
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z'
                      stroke='#FFA920'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {/* <i class="far fa-bookmark"></i> */}
                </a>
                <a className='icon-d icon-repeat'>
                  <svg
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5'
                      stroke='#1C1C1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='box box-dream '>
              <div className='image-group relative flex'>
                <div className='img-box img-box1 relative'>
                  <span className='featured fs-12 fw-6'>Featured</span>
                  <span className='featured style fs-12 fw-6'>For sale</span>
                  <img
                    src='assets/images/house/property-listing-map-11.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box2'>
                  <img
                    className='img-2'
                    src='assets/images/house/property-listing-map-12.jpg'
                    alt='images'
                  />
                  <img
                    src='assets/images/house/property-listing-map-13.jpg'
                    alt='images'
                  />
                </div>
                <div className='img-box img-box3'>
                  <img
                    className='img-3'
                    src='assets/images/house/property-listing-map-14.jpg'
                    alt='images'
                  />
                  <div className='icon-inner center relative'>
                    <div className='imgs'>
                      <img
                        src='assets/images/house/property-listing-map-15.jpg'
                        alt='images'
                      />
                    </div>
                    <div className='contents z-2'>
                      <svg
                        width={21}
                        height={18}
                        viewBox='0 0 21 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M0.75 12.75L5.909 7.591C6.11793 7.38206 6.36597 7.21633 6.63896 7.10325C6.91194 6.99018 7.20452 6.93198 7.5 6.93198C7.79548 6.93198 8.08806 6.99018 8.36104 7.10325C8.63403 7.21633 8.88207 7.38206 9.091 7.591L14.25 12.75M12.75 11.25L14.159 9.841C14.3679 9.63206 14.616 9.46633 14.889 9.35325C15.1619 9.24018 15.4545 9.18198 15.75 9.18198C16.0455 9.18198 16.3381 9.24018 16.611 9.35325C16.884 9.46633 17.1321 9.63206 17.341 9.841L20.25 12.75M2.25 16.5H18.75C19.1478 16.5 19.5294 16.342 19.8107 16.0607C20.092 15.7794 20.25 15.3978 20.25 15V3C20.25 2.60218 20.092 2.22064 19.8107 1.93934C19.5294 1.65804 19.1478 1.5 18.75 1.5H2.25C1.85218 1.5 1.47064 1.65804 1.18934 1.93934C0.908035 2.22064 0.75 2.60218 0.75 3V15C0.75 15.3978 0.908035 15.7794 1.18934 16.0607C1.47064 16.342 1.85218 16.5 2.25 16.5ZM12.75 5.25H12.758V5.258H12.75V5.25ZM13.125 5.25C13.125 5.34946 13.0855 5.44484 13.0152 5.51517C12.9448 5.58549 12.8495 5.625 12.75 5.625C12.6505 5.625 12.5552 5.58549 12.4848 5.51517C12.4145 5.44484 12.375 5.34946 12.375 5.25C12.375 5.15054 12.4145 5.05516 12.4848 4.98484C12.5552 4.91451 12.6505 4.875 12.75 4.875C12.8495 4.875 12.9448 4.91451 13.0152 4.98484C13.0855 5.05516 13.125 5.15054 13.125 5.25Z'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <div className='fw-6 text-color-1'>
                        <a href='#'>12 images</a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='content relative'>
                <h3 className='link-style-1'>
                  <a href='property-detail-v1.html'>
                    Gorgeous Apartment Building
                  </a>{' '}
                </h3>
                <div className='text-address'>
                  <p className='p-12'>58 Hullbrook Road, Billesley, B13 0LA</p>
                </div>
                <div className='money fs-18 fw-6  text-color-3'>
                  <a href='property-detail-v1.html'>$7,500</a>
                </div>
                <div className='icon-box flex'>
                  <div className='icons icon-1 flex'>
                    <span>Beds: </span>
                    <span className='fw-6'>4</span>
                  </div>
                  <div className='icons icon-2 flex'>
                    <span>Baths: </span>
                    <span className='fw-6'>2</span>
                  </div>
                  <div className='icons icon-3 flex'>
                    <span>Sqft: </span>
                    <span className='fw-6'>1150</span>
                  </div>
                </div>
                <a className='icon-d icon-book'>
                  <svg
                    width={14}
                    height={14}
                    viewBox='0 0 14 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10.2626 1.93781C10.9042 2.01247 11.375 2.56606 11.375 3.21239V12.25L7 10.0625L2.625 12.25V3.21239C2.625 2.56606 3.09517 2.01247 3.73742 1.93781C5.90519 1.68618 8.09481 1.68618 10.2626 1.93781V1.93781Z'
                      stroke='#FFA920'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  {/* <i class="far fa-bookmark"></i> */}
                </a>
                <a className='icon-d icon-repeat'>
                  <svg
                    width={16}
                    height={16}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 14L2 11M2 11L5 8M2 11H11M11 2L14 5M14 5L11 8M14 5H5'
                      stroke='#1C1C1E'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className='themesflat-pagination clearfix center'>
            <ul>
              <li>
                <a href='#' className='page-numbers style'>
                  <i className='far fa-angle-left' />
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers'>
                  1
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers'>
                  2
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers current'>
                  3
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers'>
                  4
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers'>
                  ...
                </a>
              </li>
              <li>
                <a href='#' className='page-numbers style'>
                  <i className='far fa-angle-right' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='content-right'>
          <div
            id='map'
            className='row-height'
            data-map-zoom={16}
            data-map-scroll='true'
          />
        </div>
      </div>
      <section className='flat-contact2 relative style'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section'>
                <h2>
                  Find for your dream home and increase your investment
                  opportunities
                </h2>
                <p className='text-color-2 font-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sed tristique metus proin id lorem odio
                </p>
                <div className='button-footer'>
                  <a className='sc-button center btn-icon' href='contact.html'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.25 6.75C2.25 15.034 8.966 21.75 17.25 21.75H19.5C20.0967 21.75 20.669 21.5129 21.091 21.091C21.5129 20.669 21.75 20.0967 21.75 19.5V18.128C21.75 17.612 21.399 17.162 20.898 17.037L16.475 15.931C16.035 15.821 15.573 15.986 15.302 16.348L14.332 17.641C14.05 18.017 13.563 18.183 13.122 18.021C11.4849 17.4191 9.99815 16.4686 8.76478 15.2352C7.53141 14.0018 6.58087 12.5151 5.979 10.878C5.817 10.437 5.983 9.95 6.359 9.668L7.652 8.698C8.015 8.427 8.179 7.964 8.069 7.525L6.963 3.102C6.90214 2.85869 6.76172 2.6427 6.56405 2.48834C6.36638 2.33397 6.1228 2.25008 5.872 2.25H4.5C3.90326 2.25 3.33097 2.48705 2.90901 2.90901C2.48705 3.33097 2.25 3.90326 2.25 4.5V6.75Z'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                    <span>Contact Seller</span>
                  </a>
                </div>
              </div>
              <div className='mark-img'>
                <img src='assets/images/mark/mark-contact2.png' alt='images' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesMapPage;

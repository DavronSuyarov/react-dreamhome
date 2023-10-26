import React from 'react';

const HomePages = () => {
  return (
    <div>
      <section className='slider home2 home5'>
        <div className='slider-item'>
          <div className='container  relative'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='content po-content-two'>
                  <div className='heading center'>
                    <h1
                      className='text-color-1 wow slideInDown js-letters'
                      data-wow-delay='50ms'
                      data-wow-duration='1000ms'
                    >
                      Choose your home for future life
                    </h1>
                    <p className='fs-16 lh-24 fw-6 text-color-1'>
                      Find a variety of properties that suit you very easily,
                      forget all difficulties in finding a residence for you
                    </p>
                  </div>
                  <div className='flat-tabs themesflat-tabs'>
                    <div className='box-tab center'>
                      <ul className='menu-tab tab-title flex justify-center'>
                        <li className='item-title active'>
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
                              <div className='form-group-1 search-form form-style'>
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
                                    <span className='current'>
                                      Property type
                                    </span>
                                    <ul className='list'>
                                      <li
                                        data-value
                                        className='option selected'
                                      >
                                        Property type
                                      </li>
                                      <li
                                        data-value='bungalow'
                                        className='option'
                                      >
                                        Bungalow
                                      </li>
                                      <li
                                        data-value='apartment'
                                        className='option'
                                      >
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
                                      <li
                                        data-value
                                        className='option selected'
                                      >
                                        Location
                                      </li>
                                      <li data-value='Japan' className='option'>
                                        Japan
                                      </li>
                                      <li
                                        data-value='America'
                                        className='option d'
                                      >
                                        America
                                      </li>
                                      <li
                                        data-value='England'
                                        className='option '
                                      >
                                        England
                                      </li>
                                      <li data-value='Japan' className='option'>
                                        Belgium
                                      </li>
                                      <li
                                        data-value='England'
                                        className='option '
                                      >
                                        France
                                      </li>
                                      <li
                                        data-value='VietNam'
                                        className='option'
                                      >
                                        VietNam
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className='form-group-4 form-style'>
                                <a className='icon-filter pull-right'>
                                  <svg
                                    width={18}
                                    height={18}
                                    viewBox='0 0 18 18'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M3 10.5V0.75M3 10.5C3.39782 10.5 3.77936 10.658 4.06066 10.9393C4.34196 11.2206 4.5 11.6022 4.5 12C4.5 12.3978 4.34196 12.7794 4.06066 13.0607C3.77936 13.342 3.39782 13.5 3 13.5M3 10.5C2.60218 10.5 2.22064 10.658 1.93934 10.9393C1.65804 11.2206 1.5 11.6022 1.5 12C1.5 12.3978 1.65804 12.7794 1.93934 13.0607C2.22064 13.342 2.60218 13.5 3 13.5M3 17.25V13.5M15 10.5V0.75M15 10.5C15.3978 10.5 15.7794 10.658 16.0607 10.9393C16.342 11.2206 16.5 11.6022 16.5 12C16.5 12.3978 16.342 12.7794 16.0607 13.0607C15.7794 13.342 15.3978 13.5 15 13.5M15 10.5C14.6022 10.5 14.2206 10.658 13.9393 10.9393C13.658 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5M15 17.25V13.5M9 4.5V0.75M9 4.5C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.342 6.77936 10.0607 7.06066C9.77936 7.34196 9.39782 7.5 9 7.5M9 4.5C8.60218 4.5 8.22064 4.65804 7.93934 4.93934C7.65804 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.65804 6.77936 7.93934 7.06066C8.22064 7.34196 8.60218 7.5 9 7.5M9 17.25V7.5'
                                      stroke='#FFA920'
                                      strokeWidth='1.5'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </a>
                              </div>
                              <div className='button-search sc-btn-top'>
                                <a className='sc-button' href='#'>
                                  <span>Search Now</span>
                                  <i className='far fa-search text-color-1' />
                                </a>
                              </div>
                            </div>
                            <div className='wd-find-select wd-search-form '>
                              <div className='box1 flex flex-wrap form-wg'>
                                <div className='form-group wg-box3'>
                                  <div className='group-select'>
                                    <div className='nice-select' tabIndex={0}>
                                      <span className='current'>
                                        Baths: Any
                                      </span>
                                      <ul className='list'>
                                        <li
                                          data-value
                                          className='option selected'
                                        >
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
                                        <li
                                          data-value
                                          className='option selected'
                                        >
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
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>
                                        Swimming pool
                                      </span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>Garage</span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>
                                        Alarm system
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className='form-group wg-box3'>
                                  <div className='tf-amenities bg-white'>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>Balcony</span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>
                                        Outdoor area
                                      </span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>Broadband</span>
                                    </label>
                                  </div>
                                </div>
                                <div className='form-group wg-box3'>
                                  <div className='tf-amenities bg-white'>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>Ensuite</span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>
                                        Built in robes
                                      </span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13 '>Gym</span>
                                    </label>
                                  </div>
                                </div>
                                <div className='form-group wg-box3'>
                                  <div className='tf-amenities bg-white'>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>
                                        Tennis court
                                      </span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
                                      <span className='btn-checkbox' />
                                      <span className='fs-13'>Study</span>
                                    </label>
                                    <label className='flex'>
                                      <input
                                        name='newsletter'
                                        type='checkbox'
                                      />
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
                  <div className='wrap-icon flex align-center justify-center link-style-3'>
                    <div className='icon-box fs-13'>
                      <span className='icons-house icon-house-1' />
                      <a href='#'>Houses</a>
                    </div>
                    <div className='icon-box fs-13'>
                      <span className='icons-house icon-house-2' />
                      <a href='#'>Villa</a>
                    </div>
                    <div className='icon-box fs-13'>
                      <span className='icons-house icon-house-3' />
                      <a href='#'>Office</a>
                    </div>
                    <div className='icon-box fs-13'>
                      <span className='icons-house icon-house-4' />
                      <a href='#'>Apartments</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-featured wg-dream home5'>
        <div className='container3'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Featured properties</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </p>
              </div>
              <div className='flat-tabs themesflat-tabs'>
                <div className='box-tab center'>
                  <ul className='menu-tab tab-title flex justify-center'>
                    <li
                      className='item-title active hv-tool'
                      data-tooltip='8 Property'
                    >
                      <h5 className='inner'>Houses</h5>
                    </li>
                    <li
                      className='item-title hv-tool'
                      data-tooltip='6 Property'
                    >
                      <h5 className='inner'> Smart home </h5>
                    </li>
                    <li
                      className='item-title hv-tool'
                      data-tooltip='5 Property'
                    >
                      <h5 className='inner '>Apartments</h5>
                    </li>
                    <li
                      className='item-title hv-tool'
                      data-tooltip='7 Property'
                    >
                      <h5 className='inner'> Office </h5>
                    </li>
                    <li
                      className='item-title hv-tool'
                      data-tooltip='6 Property'
                    >
                      <h5 className='inner'>Villa</h5>
                    </li>
                    <li
                      className='item-title hv-tool'
                      data-tooltip='3 Property'
                    >
                      <h5 className='inner'> Bungalow </h5>
                    </li>
                  </ul>
                </div>
                <div className='content-tab'>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 1 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-1.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 2 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 3 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 4 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 5 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-5.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 6 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 7 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 8 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container noo carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 5 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-5.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 6 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 7 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 8 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 1 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-31.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-1.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 2 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-32.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 3 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-33.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 4 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-34.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-2.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 1 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 2 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-5.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 3 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 4 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 1 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-35.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-5.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 2 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-26.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 3 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-17.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 4 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-38.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-7.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='wrap-item flex'>
                      {/* col 1 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-28.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-27.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-23.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-24.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-25.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 2 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-25.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-11.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-8.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-5.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 3 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative '>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='featured style fs-12 fw-6'>
                            For sale
                          </span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-17.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-6.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                      {/* col 4 */}
                      <div className='box box-dream hv-one'>
                        <div className='image-group relative'>
                          <span className='featured fs-12 fw-6'>Featured</span>
                          <span className='icon-bookmark'>
                            <i className='far fa-bookmark' />
                          </span>
                          <div className='swiper-container  carousel-2 img-style'>
                            <a
                              href='property-detail-v1.html'
                              className='icon-plus'
                            >
                              <img
                                src='assets/images/icon/plus.svg'
                                alt='images'
                              />
                            </a>
                            <div className='swiper-wrapper '>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-36.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-1.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-3.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-4.jpg'
                                  alt='images'
                                />
                              </div>
                              <div className='swiper-slide'>
                                <img
                                  src='assets/images/house/featured-5.jpg'
                                  alt='images'
                                />
                              </div>
                            </div>
                            <div className='pagi2'>
                              <div className='swiper-pagination2'></div>{' '}
                            </div>
                            <div className='swiper-button-next2 '>
                              <i className='fal fa-arrow-right' />
                            </div>
                            <div className='swiper-button-prev2 '>
                              <i className='fal fa-arrow-left' />{' '}
                            </div>
                          </div>
                        </div>
                        <div className='content'>
                          <h3 className='link-style-1'>
                            <a href='property-detail-v1.html'>
                              Gorgeous Apartment Building
                            </a>{' '}
                          </h3>
                          <div className='text-address'>
                            <p className='p-12'>
                              58 Hullbrook Road, Billesley, B13 0LA
                            </p>
                          </div>
                          <div className='money fs-18 fw-6 text-color-3'>
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
                          <div className='days-box flex justify-space align-center'>
                            <a
                              className='compare flex align-center fw-6'
                              href='#'
                            >
                              Compare
                            </a>
                            <div
                              className='img-author hv-tool'
                              data-tooltip='Kathryn Murphy'
                            >
                              <img
                                src='assets/images/author/author-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='days'>3 years ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-rent tf-section wg-dream dots-style'>
        <div className='container3'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Properties for rent</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </p>
              </div>
              <div className='swiper-container'>
                <div className='two-carousel owl-carousel owl-theme'>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-12.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-12.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative'>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-13.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-13.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-14.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-14.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-15.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-15.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-16.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-4.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-1.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-6.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='https://themesflat.co/html/dreamhomehtml/single-property.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
                          <a href='https://themesflat.co/html/dreamhomehtml/single-property.html'>
                            $7,500
                          </a>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-1.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-14.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-14.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-15.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-15.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-find-neighborhood wg-search-area home5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Featured Categories</h2>
                <p className='text-color-4'>
                  Find your dream apartment with our listing
                </p>
              </div>
              <div className='wrap-find find-1 flex'>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-1.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className>
                      <h3>California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-2.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className>
                      <h3> California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
              </div>
              <div className='wrap-find find-2 flex'>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-3.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className>
                      <h3>California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-4.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className='link-style-2'>
                      <h3>California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-5.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className>
                      <h3> California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
                <div className='box'>
                  <div className='images'>
                    <img
                      src='assets/images/img-box/find-home5-6.jpg'
                      alt='images'
                    />
                    <a href='properties-map-v1.html' className='icon-plus'>
                      <img src='assets/images/icon/plus.svg' alt='images' />
                    </a>
                  </div>
                  <div className='content link-style-3'>
                    <a href='properties-map-v1.html' className>
                      <h3> California</h3>
                    </a>
                    <p className='text-color-1'>1570 listing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-sale wg-dream tf-section home4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center style2'>
                <h2>Properties for sale</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </p>
              </div>
              <div className='swiper-container2'>
                <div className='one-carousel owl-carousel owl-theme'>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-27.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-1.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-23.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-12.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-13.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-14.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-15.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-2.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-24.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-7.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-8.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-9.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-3.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item '>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-27.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-4.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item '>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-23.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-12.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-13.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-14.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-15.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-5.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item '>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-24.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-2.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-3.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-4.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-5.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-6.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='slide-item'>
                    <div className='box box-dream hv-one'>
                      <div className='image-group relative '>
                        <span className='featured fs-12 fw-6'>Featured</span>
                        <span className='featured style fs-12 fw-6'>
                          For sale
                        </span>
                        <span className='icon-bookmark'>
                          <i className='far fa-bookmark' />
                        </span>
                        <div className='swiper-container noo carousel-2 img-style'>
                          <a
                            href='property-detail-v1.html'
                            className='icon-plus'
                          >
                            <img
                              src='assets/images/icon/plus.svg'
                              alt='images'
                            />
                          </a>
                          <div className='swiper-wrapper '>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-27.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-22.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-10.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-14.jpg'
                                alt='images'
                              />
                            </div>
                            <div className='swiper-slide'>
                              <img
                                src='assets/images/house/featured-15.jpg'
                                alt='images'
                              />
                            </div>
                          </div>
                          <div className='pagi2'>
                            <div className='swiper-pagination2'></div>{' '}
                          </div>
                          <div className='swiper-button-next2 '>
                            <i className='fal fa-arrow-right' />
                          </div>
                          <div className='swiper-button-prev2 '>
                            <i className='fal fa-arrow-left' />{' '}
                          </div>
                        </div>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-1'>
                          <a href='property-detail-v1.html'>
                            Gorgeous Apartment Building
                          </a>{' '}
                        </h3>
                        <div className='text-address'>
                          <p className='p-12'>
                            58 Hullbrook Road, Billesley, B13 0LA
                          </p>
                        </div>
                        <div className='money fs-18 fw-6 text-color-3'>
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
                        <div className='days-box flex justify-space align-center'>
                          <a
                            className='compare flex align-center fw-6'
                            href='#'
                          >
                            Compare
                          </a>
                          <div
                            className='img-author hv-tool'
                            data-tooltip='Kathryn Murphy'
                          >
                            <img
                              src='assets/images/author/author-7.jpg'
                              alt='images'
                            />
                          </div>
                          <div className='days'>3 years ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-icon'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Easy, fast and efficient</h2>
                <p className='font-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sed tristique metus proin id lorem odio
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <div className='icon'>
                  <svg
                    width={50}
                    height={50}
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_1397_20011)'>
                      <path
                        d='M47.3958 43.75H2.60417C1.16593 43.75 0 44.9159 0 46.3542V47.3958C0 48.8341 1.16593 50 2.60417 50H47.3958C48.8341 50 50 48.8341 50 47.3958V46.3542C50 44.9159 48.8341 43.75 47.3958 43.75Z'
                        fill='#FFA920'
                      />
                      <path
                        d='M47.8321 21.6355L48.7988 20.1865C49.1749 19.6268 49.3183 18.9427 49.1987 18.2791C49.0792 17.6155 48.7059 17.0245 48.1582 16.6313L26.5259 0.981286C26.0818 0.660168 25.5478 0.487305 24.9998 0.487305C24.4518 0.487305 23.9178 0.660168 23.4738 0.981286L1.84149 16.6313C1.29369 17.0245 0.920481 17.6155 0.800902 18.2791C0.681324 18.9427 0.824772 19.6268 1.20086 20.1865L2.16753 21.6355C2.3633 21.9252 2.61513 22.1729 2.90816 22.3638C3.20118 22.5546 3.52948 22.6849 3.87367 22.7468C4.21785 22.8088 4.57096 22.8012 4.91216 22.7244C5.25335 22.6477 5.57572 22.5034 5.86024 22.3L24.6946 8.67608C24.7834 8.61186 24.8902 8.57728 24.9998 8.57728C25.1094 8.57728 25.2162 8.61186 25.305 8.67608L44.1394 22.3C44.4238 22.5037 44.7462 22.6482 45.0874 22.7251C45.4287 22.802 45.7819 22.8097 46.1261 22.7477C46.4704 22.6858 46.7988 22.5554 47.0918 22.3644C47.3848 22.1733 47.6365 21.9255 47.8321 21.6355Z'
                        fill='#FFA920'
                      />
                      <path
                        d='M43.5309 23.1456L25.3018 9.95806C25.2129 9.89696 25.1076 9.86426 24.9997 9.86426C24.8918 9.86426 24.7865 9.89696 24.6976 9.95806L6.46844 23.1456C6.18804 23.3468 5.87905 23.5048 5.55177 23.6143C5.4502 23.6525 5.36277 23.7209 5.3013 23.8103C5.23983 23.8997 5.20727 24.0058 5.20802 24.1143V42.1872C5.20802 42.3254 5.26289 42.4578 5.36057 42.5555C5.45824 42.6532 5.59072 42.7081 5.72885 42.7081H44.2705C44.4087 42.7081 44.5411 42.6532 44.6388 42.5555C44.7365 42.4578 44.7914 42.3254 44.7914 42.1872V24.1143C44.7921 24.0058 44.7595 23.8997 44.6981 23.8103C44.6366 23.7209 44.5492 23.6525 44.4476 23.6143C44.1195 23.5068 43.8102 23.3487 43.5309 23.1456ZM41.1455 36.9789C41.1455 38.084 40.7065 39.1438 39.9251 39.9252C39.1437 40.7066 38.0839 41.1456 36.9789 41.1456H13.0205C11.9155 41.1456 10.8556 40.7066 10.0742 39.9252C9.29284 39.1438 8.85385 38.084 8.85385 36.9789V29.6872C8.85385 28.5822 9.29284 27.5223 10.0742 26.7409C10.8556 25.9595 11.9155 25.5206 13.0205 25.5206H17.958L22.8226 20.6976C22.5648 20.3049 22.4181 19.8498 22.3979 19.3804C22.3778 18.9111 22.4849 18.445 22.7081 18.0317C22.9312 17.6183 23.262 17.2729 23.6655 17.0322C24.0689 16.7916 24.5299 16.6645 24.9997 16.6645C25.4695 16.6645 25.9305 16.7916 26.3339 17.0322C26.7373 17.2729 27.0682 17.6183 27.2913 18.0317C27.5144 18.445 27.6216 18.9111 27.6015 19.3804C27.5813 19.8498 27.4345 20.3049 27.1768 20.6976L32.0414 25.5206H36.9789C38.0839 25.5206 39.1437 25.9595 39.9251 26.7409C40.7065 27.5223 41.1455 28.5822 41.1455 29.6872V36.9789Z'
                        fill='#FFA920'
                      />
                      <path
                        d='M26.4476 21.4375C26.0186 21.7228 25.5149 21.875 24.9997 21.875C24.4845 21.875 23.9807 21.7228 23.5518 21.4375L19.4372 25.5208H30.5622L26.4476 21.4375ZM21.6143 30.2083C21.0278 30.1764 20.4525 30.3774 20.0136 30.7676C19.5746 31.1578 19.3075 31.7055 19.2705 32.2917V35.9375C19.2705 36.0756 19.3254 36.2081 19.4231 36.3058C19.5207 36.4035 19.6532 36.4583 19.7913 36.4583C19.9295 36.4583 20.062 36.4035 20.1596 36.3058C20.2573 36.2081 20.3122 36.0756 20.3122 35.9375V34.375H22.9163V35.9375C22.9163 36.0756 22.9712 36.2081 23.0689 36.3058C23.1666 36.4035 23.299 36.4583 23.4372 36.4583C23.5753 36.4583 23.7078 36.4035 23.8055 36.3058C23.9031 36.2081 23.958 36.0756 23.958 35.9375V32.2917C23.921 31.7055 23.6539 31.1578 23.215 30.7676C22.776 30.3774 22.2007 30.1764 21.6143 30.2083ZM22.9163 33.3333H20.3122V32.2917C20.3506 31.9826 20.5082 31.7007 20.7515 31.5061C20.9947 31.3116 21.3043 31.2197 21.6143 31.25C21.9243 31.2197 22.2338 31.3116 22.4771 31.5061C22.7203 31.7007 22.8779 31.9826 22.9163 32.2917V33.3333ZM30.208 35.4167H27.6038C27.4657 35.4167 27.3332 35.3618 27.2356 35.2641C27.1379 35.1664 27.083 35.034 27.083 34.8958V30.7292C27.083 30.591 27.0281 30.4586 26.9305 30.3609C26.8328 30.2632 26.7003 30.2083 26.5622 30.2083C26.424 30.2083 26.2916 30.2632 26.1939 30.3609C26.0962 30.4586 26.0413 30.591 26.0413 30.7292V34.8958C26.0413 35.3102 26.206 35.7077 26.499 36.0007C26.792 36.2937 27.1894 36.4583 27.6038 36.4583H30.208C30.3461 36.4583 30.4786 36.4035 30.5763 36.3058C30.674 36.2081 30.7288 36.0756 30.7288 35.9375C30.7288 35.7994 30.674 35.6669 30.5763 35.5692C30.4786 35.4715 30.3461 35.4167 30.208 35.4167ZM15.0611 31.25H15.9726C16.3486 31.25 16.6663 31.4885 16.6663 31.7708C16.6663 31.909 16.7212 32.0414 16.8189 32.1391C16.9166 32.2368 17.049 32.2917 17.1872 32.2917C17.3253 32.2917 17.4578 32.2368 17.5555 32.1391C17.6531 32.0414 17.708 31.909 17.708 31.7708C17.6832 31.3342 17.487 30.925 17.1619 30.6323C16.8369 30.3397 16.4094 30.1873 15.9726 30.2083H15.0611C14.8046 30.1795 14.5448 30.2052 14.2989 30.2837C14.0529 30.3621 13.8263 30.4916 13.6338 30.6637C13.4414 30.8358 13.2874 31.0465 13.182 31.2822C13.0765 31.5178 13.022 31.7731 13.022 32.0313C13.022 32.2894 13.0765 32.5447 13.182 32.7803C13.2874 33.016 13.4414 33.2267 13.6338 33.3988C13.8263 33.5709 14.0529 33.7004 14.2989 33.7788C14.5448 33.8573 14.8046 33.883 15.0611 33.8542H15.6684C15.7871 33.8245 15.911 33.8224 16.0307 33.8478C16.1503 33.8732 16.2626 33.9255 16.3591 34.0009C16.4555 34.0762 16.5334 34.1724 16.5871 34.2824C16.6407 34.3924 16.6686 34.5131 16.6686 34.6354C16.6686 34.7578 16.6407 34.8785 16.5871 34.9884C16.5334 35.0984 16.4555 35.1947 16.3591 35.27C16.2626 35.3453 16.1503 35.3976 16.0307 35.4231C15.911 35.4485 15.7871 35.4463 15.6684 35.4167H14.757C14.3799 35.4167 14.0622 35.1781 14.0622 34.8958C14.0622 34.7577 14.0073 34.6252 13.9096 34.5275C13.812 34.4299 13.6795 34.375 13.5413 34.375C13.4032 34.375 13.2707 34.4299 13.1731 34.5275C13.0754 34.6252 13.0205 34.7577 13.0205 34.8958C13.0453 35.3327 13.2417 35.742 13.5669 36.0347C13.8922 36.3274 14.3199 36.4796 14.757 36.4583H15.6684C15.925 36.4871 16.1847 36.4615 16.4307 36.383C16.6766 36.3045 16.9032 36.175 17.0957 36.003C17.2882 35.8309 17.4422 35.6202 17.5476 35.3845C17.653 35.1488 17.7075 34.8936 17.7075 34.6354C17.7075 34.3773 17.653 34.122 17.5476 33.8863C17.4422 33.6507 17.2882 33.4399 17.0957 33.2679C16.9032 33.0958 16.6766 32.9663 16.4307 32.8878C16.1847 32.8094 15.925 32.7837 15.6684 32.8125H15.0611C14.9424 32.8421 14.8186 32.8443 14.6989 32.8189C14.5792 32.7935 14.4669 32.7411 14.3705 32.6658C14.2741 32.5905 14.1961 32.4942 14.1425 32.3843C14.0888 32.2743 14.061 32.1536 14.061 32.0313C14.061 31.9089 14.0888 31.7882 14.1425 31.6782C14.1961 31.5683 14.2741 31.472 14.3705 31.3967C14.4669 31.3214 14.5792 31.269 14.6989 31.2436C14.8186 31.2182 14.9424 31.2204 15.0611 31.25ZM33.984 31.25H36.7184C36.8566 31.25 36.989 31.1951 37.0867 31.0975C37.1844 30.9998 37.2393 30.8673 37.2393 30.7292C37.2393 30.591 37.1844 30.4586 37.0867 30.3609C36.989 30.2632 36.8566 30.2083 36.7184 30.2083H33.984C33.5873 30.2267 33.214 30.4014 32.9456 30.6941C32.6772 30.9869 32.5356 31.374 32.5518 31.7708V34.8958C32.5356 35.2927 32.6772 35.6798 32.9456 35.9725C33.214 36.2653 33.5873 36.4399 33.984 36.4583H36.7184C36.8566 36.4583 36.989 36.4035 37.0867 36.3058C37.1844 36.2081 37.2393 36.0756 37.2393 35.9375C37.2393 35.7994 37.1844 35.6669 37.0867 35.5692C36.989 35.4715 36.8566 35.4167 36.7184 35.4167H33.984C33.7757 35.4167 33.5934 35.1781 33.5934 34.8958V33.8542H36.7184C36.8566 33.8542 36.989 33.7993 37.0867 33.7016C37.1844 33.6039 37.2393 33.4715 37.2393 33.3333C37.2393 33.1952 37.1844 33.0627 37.0867 32.965C36.989 32.8674 36.8566 32.8125 36.7184 32.8125H33.5934V31.7708C33.5934 31.4885 33.7726 31.25 33.984 31.25Z'
                        fill='#FFA920'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1397_20011'>
                        <rect width={50} height={50} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='content'>
                  <div className='inner'>
                    <h3>Reach potential customers</h3>
                    <p className='font-2'>
                      {' '}
                      vel gravida arcu porttitor non. Vestibulum massa sapien,
                      facilisis sed mattis id.
                    </p>
                  </div>
                  <div className='meta style'>
                    <a
                      href='#'
                      className='btn-button flex align-center fw-6 text-color-2'
                    >
                      <span>Contact seller </span>
                      <i className='far fa-long-arrow-alt-right fs-16' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <div className='icon'>
                  <svg
                    width={50}
                    height={50}
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M45.7047 24.5542C45.3419 24.1103 44.8178 23.8685 44.2531 23.8685H10.258L7.23348 12.7382C6.95119 11.6898 6.02368 11.0042 4.93487 11.0042H0.902231C0.458742 11.0042 0.0957031 11.3673 0.0957031 11.8107C0.0957031 12.2546 0.458742 12.6172 0.902231 12.6172H4.89465C5.25738 12.6172 5.53977 12.8189 5.62052 13.1415L13.3632 41.6929C13.5648 42.4588 14.2907 43.0235 15.0972 43.0235H40.5835C41.4303 43.0235 42.156 42.4588 42.3577 41.6522L45.9468 26.0459C46.1485 25.5217 46.0276 24.9574 45.7047 24.5542ZM37.9217 36.8938H17.7585C17.3151 36.8938 16.9519 36.5308 16.9519 36.0873C16.9519 35.6438 17.3151 35.2808 17.7585 35.2808H37.9217C38.3656 35.2808 38.7282 35.6439 38.7282 36.0873C38.7282 36.5307 38.3656 36.8938 37.9217 36.8938ZM39.9786 31.3288H15.7021C15.2582 31.3288 14.8956 30.9659 14.8956 30.5223C14.8956 30.0786 15.2582 29.7157 15.7021 29.7157H39.9786C40.4221 29.7157 40.7851 30.0786 40.7851 30.5223C40.7851 30.9659 40.4221 31.3288 39.9786 31.3288ZM23.2432 47.1369C23.2432 45.5553 21.9432 44.2735 20.3397 44.2735C18.7361 44.2735 17.4361 45.5553 17.4361 47.1369C17.4361 48.718 18.736 49.9999 20.3396 49.9999C21.9431 49.9999 23.2432 48.718 23.2432 47.1369ZM38.8897 47.1369C38.8897 45.5553 37.5898 44.2735 35.9862 44.2735C34.3826 44.2735 33.0826 45.5553 33.0826 47.1369C33.0826 48.718 34.3825 49.9999 35.9861 49.9999C37.5897 49.9999 38.8897 48.718 38.8897 47.1369ZM17.2745 10.0367C17.4762 10.0367 17.7183 9.9559 17.8794 9.83502L28.4048 2.25335L38.8091 9.79439C39.0107 9.9559 39.293 10.0367 39.5754 9.99602C39.8573 9.9559 40.0996 9.79439 40.2606 9.59276C40.4221 9.39113 40.5028 9.10884 40.4622 8.82686C40.4221 8.54447 40.2606 8.30231 40.059 8.18134L29.0097 0.196809C28.6467 -0.0449482 28.1627 -0.0854762 27.7999 0.196809L16.6697 8.22196C16.2263 8.54447 16.1053 9.1895 16.4279 9.63339C16.6697 9.87514 16.952 10.0367 17.2745 10.0367Z'
                      fill='#FFA920'
                    />
                    <path
                      d='M36.9131 22.2957C37.3569 22.2957 37.7197 21.9331 37.7197 21.4892V11.0044C37.7197 10.7626 37.5987 10.5204 37.397 10.3593L28.8884 4.06822C28.6061 3.86658 28.2028 3.86658 27.9204 4.06822L19.2904 10.4401C19.0888 10.6011 18.9678 10.8434 18.9678 11.0851V21.4893C18.9678 21.9331 19.3309 22.2959 19.7743 22.2959H24.8557C24.8152 21.9331 24.7751 21.6102 24.7751 21.4893V14.9968C24.7751 14.5531 25.1377 14.1902 25.5816 14.1902H31.1465C31.5899 14.1902 31.9531 14.5531 31.9531 14.9968V22.2959L36.9131 22.2957Z'
                      fill='#FFA920'
                    />
                    <path
                      d='M26.4287 15.8032H30.3404V22.2956H26.4287V15.8032Z'
                      fill='#FFA920'
                    />
                  </svg>
                </div>
                <div className='content'>
                  <div className='inner'>
                    <h3>Own your dream home</h3>
                    <p className='font-2'>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc congue metus ante,
                    </p>
                  </div>
                  <div className='meta style'>
                    <a
                      href='#'
                      className='btn-button flex align-center fw-6 text-color-2'
                    >
                      <span>Contact seller</span>
                      <i className='far fa-long-arrow-alt-right fs-16' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <div className='icon'>
                  <svg
                    width={50}
                    height={50}
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_1444_27228)'>
                      <path
                        d='M21.1184 0.590783C20.6932 2.26503 19.6597 3.49635 18.4668 3.95699C18.3199 4.01442 18.1938 4.11488 18.105 4.24521C18.0163 4.37554 17.9689 4.52965 17.9692 4.68735C17.9696 4.84504 18.0175 4.99897 18.1068 5.12893C18.1962 5.2589 18.3227 5.35885 18.4698 5.41568C19.6627 5.87632 20.6932 7.11355 21.1155 8.79075C21.3163 9.57915 22.4324 9.57915 22.6332 8.79075C23.0584 7.1165 24.086 5.87927 25.2819 5.42454C25.4301 5.36853 25.5577 5.26888 25.6481 5.13875C25.7384 5.00862 25.7871 4.85415 25.7877 4.69575C25.7884 4.53735 25.7409 4.38249 25.6516 4.25164C25.5624 4.12078 25.4355 4.0201 25.2878 3.9629C24.0949 3.49931 23.0584 2.26503 22.6303 0.590783C22.5867 0.423038 22.4887 0.274493 22.3517 0.168454C22.2146 0.0624154 22.0462 0.00488281 21.8729 0.00488281C21.6996 0.00488281 21.5312 0.0624154 21.3941 0.168454C21.257 0.274493 21.162 0.423038 21.1184 0.590783ZM45.3315 3.90679C44.9063 5.58104 43.8758 6.81236 42.6828 7.273C42.5358 7.33013 42.4095 7.43034 42.3205 7.56048C42.2314 7.69063 42.1838 7.84465 42.1838 8.00235C42.1838 8.16004 42.2314 8.31406 42.3205 8.44421C42.4095 8.57436 42.5358 8.67456 42.6828 8.73169C43.8787 9.19233 44.9092 10.4296 45.3315 12.1068C45.5293 12.8952 46.6485 12.8952 46.8463 12.1068C47.2715 10.4325 48.302 9.19528 49.495 8.74055C49.6431 8.68454 49.7708 8.58489 49.8611 8.45476C49.9514 8.32463 50.0001 8.17016 50.0008 8.01176C50.0014 7.85336 49.954 7.6985 49.8647 7.56765C49.7755 7.43679 49.6486 7.33611 49.5009 7.27891C48.3079 6.81532 47.2745 5.58104 46.8463 3.90679C46.7607 3.56427 46.4683 3.31623 46.0904 3.31623C45.7124 3.31623 45.4142 3.58198 45.3315 3.90679ZM3.1535 13.0812C2.7283 14.7554 1.69481 15.9897 0.501877 16.4474C0.353941 16.504 0.226667 16.6042 0.13688 16.7347C0.0470941 16.8652 -0.000976562 17.0198 -0.000976562 17.1782C-0.000976563 17.3366 0.0470941 17.4913 0.13688 17.6218C0.226667 17.7523 0.353941 17.8524 0.501877 17.909C1.69777 18.3697 2.7283 19.6069 3.15055 21.2812C3.34839 22.0725 4.46751 22.0725 4.6683 21.2812C5.09055 19.6069 6.12108 18.3726 7.31402 17.9149C7.46124 17.8584 7.58794 17.7587 7.67752 17.6289C7.7671 17.4991 7.81537 17.3453 7.81601 17.1876C7.81665 17.0299 7.76962 16.8757 7.6811 16.7452C7.59257 16.6147 7.46668 16.514 7.31993 16.4563C6.12994 15.9927 5.0935 14.7584 4.66535 13.0812C4.57971 12.7416 4.28738 12.4906 3.90942 12.4906C3.53146 12.4906 3.23618 12.7564 3.1535 13.0812ZM23.0496 14.844C22.6903 14.8432 22.3344 14.9134 22.0023 15.0506C21.6702 15.1877 21.3684 15.3891 21.1144 15.6431C20.8603 15.8972 20.6589 16.1989 20.5218 16.531C20.3847 16.8631 20.3145 17.219 20.3153 17.5783C20.3153 19.0931 21.5348 20.3126 23.0496 20.3126H45.7065C46.0658 20.3134 46.4217 20.2432 46.7538 20.1061C47.0859 19.9689 47.3876 19.7676 47.6417 19.5135C47.8957 19.2594 48.0971 18.9577 48.2343 18.6256C48.3714 18.2935 48.4416 17.9376 48.4408 17.5783C48.4416 17.219 48.3714 16.8631 48.2343 16.531C48.0971 16.1989 47.8957 15.8972 47.6417 15.6431C47.3876 15.3891 47.0859 15.1877 46.7538 15.0506C46.4217 14.9134 46.0658 14.8432 45.7065 14.844H23.0496ZM14.8437 20.3097C10.9076 20.3136 7.13381 21.8791 4.35082 24.6627C1.56783 27.4462 0.00302593 31.2203 -0.000101008 35.1564C-0.000101008 43.3446 6.65554 50.0002 14.8437 50.0002C23.0318 50.0002 29.6875 43.3446 29.6875 35.1564C29.6844 31.2203 28.1196 27.4462 25.3366 24.6627C22.5536 21.8791 18.7798 20.3136 14.8437 20.3097ZM24.4315 21.8747C26.4285 23.3155 28.0789 25.1837 29.2623 27.3433H41.0145C41.3735 27.3437 41.7291 27.2732 42.0609 27.1359C42.3926 26.9986 42.694 26.7971 42.9478 26.5431C43.2015 26.2891 43.4026 25.9875 43.5396 25.6556C43.6765 25.3237 43.7466 24.968 43.7458 24.609C43.7466 24.2497 43.6764 23.8938 43.5393 23.5617C43.4022 23.2296 43.2008 22.9279 42.9467 22.6738C42.6927 22.4197 42.3909 22.2184 42.0588 22.0812C41.7267 21.9441 41.3708 21.8739 41.0115 21.8747H24.4315ZM14.8407 23.8294C17.8454 23.8294 20.7271 25.0226 22.8522 27.1467C24.9774 29.2707 26.1721 32.1518 26.1736 35.1564C26.1705 38.1606 24.9753 41.0407 22.8505 43.1645C20.7257 45.2882 17.8449 46.4819 14.8407 46.4834C11.8366 46.4834 8.95557 45.29 6.83135 43.1658C4.70712 41.0416 3.51375 38.1605 3.51375 35.1564C3.51375 32.1523 4.70712 29.2713 6.83135 27.147C8.95557 25.0228 11.8366 23.8294 14.8407 23.8294ZM14.8407 25.3944C13.5587 25.394 12.2891 25.6463 11.1045 26.1367C9.91997 26.6272 8.84366 27.3462 7.9371 28.2528C7.03054 29.1593 6.31149 30.2357 5.82104 31.4202C5.33059 32.6048 5.07835 33.8744 5.07874 35.1564C5.12327 37.7172 6.17181 40.1581 7.99852 41.9533C9.82524 43.7486 12.284 44.7545 14.8452 44.7545C17.4064 44.7545 19.8651 43.7486 21.6918 41.9533C23.5185 40.1581 24.5671 37.7172 24.6116 35.1564C24.6112 33.8734 24.3581 32.6031 23.8667 31.4179C23.3752 30.2328 22.6551 29.1561 21.7475 28.2493C20.8399 27.3425 19.7625 26.6234 18.5769 26.133C17.3914 25.6427 16.1208 25.3907 14.8378 25.3915L14.8407 25.3944ZM14.8496 28.5155C15.2335 28.5155 15.6262 28.7813 15.6262 29.2951V30.0599C16.9963 30.4053 17.8201 31.3709 18.207 32.5963C18.4727 33.618 17.0465 34.0284 16.7128 33.0629C16.3998 32.0766 15.7768 31.5717 14.823 31.5363C13.7571 31.5451 12.9332 32.3424 12.9332 33.3582C12.9332 33.8395 13.1074 33.9871 13.3378 34.1023C13.6508 34.2529 14.2561 34.3474 14.9323 34.4182C15.6026 34.4891 16.3496 34.5363 17.0465 34.8789C17.7463 35.2214 18.328 35.8887 18.328 37.0256C18.3201 37.8023 18.0484 38.5533 17.5574 39.1553C17.0665 39.7573 16.3855 40.1746 15.6262 40.3386V41.0178C15.6262 42.0335 14.0642 42.0749 14.0642 41.0178V40.3298C13.0425 40.067 11.9972 39.3494 11.4952 37.7903C11.2088 36.7923 12.6438 36.3346 12.9864 37.3179C13.2817 38.2982 13.9844 38.8474 14.8762 38.8652C15.3706 38.8715 15.8474 38.6813 16.2017 38.3364C16.556 37.9914 16.759 37.52 16.766 37.0256C16.766 36.494 16.5534 36.3877 16.3585 36.2814C16.0484 36.1309 15.4431 36.0393 14.7669 35.9684C14.0937 35.8976 13.3496 35.8503 12.6527 35.5078C11.9529 35.1682 11.3712 34.5098 11.3712 33.3582C11.3712 31.7223 12.5346 30.3876 14.0642 30.0421V29.2951C14.0642 28.7695 14.4657 28.5126 14.8496 28.5155ZM30.0093 28.9053C30.7151 30.6061 31.1403 32.4487 31.2318 34.3739H47.2656C47.6251 34.3751 47.9814 34.3052 48.3138 34.1682C48.6462 34.0313 48.9483 33.83 49.2027 33.5759C49.4571 33.3218 49.6587 33.0199 49.796 32.6876C49.9333 32.3553 50.0036 31.9992 50.0028 31.6396C50.0036 31.2803 49.9334 30.9244 49.7963 30.5923C49.6592 30.2602 49.4578 29.9585 49.2037 29.7044C48.9497 29.4504 48.6479 29.249 48.3158 29.1119C47.9837 28.9747 47.6278 28.9045 47.2685 28.9053H30.0093ZM31.2318 35.936C31.1438 37.8158 30.7302 39.6662 30.0093 41.4046H47.2685C47.6278 41.4054 47.9837 41.3352 48.3158 41.198C48.6479 41.0609 48.9497 40.8595 49.2037 40.6055C49.4578 40.3514 49.6592 40.0497 49.7963 39.7176C49.9334 39.3855 50.0036 39.0296 50.0028 38.6703C50.0036 38.311 49.9334 37.9551 49.7963 37.623C49.6592 37.2909 49.4578 36.9891 49.2037 36.7351C48.9497 36.481 48.6479 36.2797 48.3158 36.1425C47.9837 36.0054 47.6278 35.9352 47.2685 35.936H31.2318ZM29.2652 42.9696C28.0848 45.1209 26.4408 46.9828 24.4522 48.4205C24.5053 48.4234 24.5555 48.4352 24.6116 48.4352H47.2656C47.6251 48.4364 47.9814 48.3665 48.3138 48.2295C48.6462 48.0926 48.9483 47.8913 49.2027 47.6372C49.4571 47.3831 49.6587 47.0812 49.796 46.7489C49.9333 46.4166 50.0036 46.0605 50.0028 45.7009C50.0036 45.3414 49.9333 44.9852 49.796 44.6529C49.6587 44.3207 49.4571 44.0188 49.2027 43.7647C48.9483 43.5106 48.6462 43.3093 48.3138 43.1723C47.9814 43.0354 47.6251 42.9654 47.2656 42.9666L29.2652 42.9696Z'
                        fill='#FFA920'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1444_27228'>
                        <rect width={50} height={50} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='content'>
                  <div className='inner'>
                    <h3>
                      Increase passive income by renting out your property
                    </h3>
                    <p className='font-2'>
                      {' '}
                      Fermentum ut erat. Fusce quis vestibulum felis. Maecenas
                      sit amet ipsum sollicitudin.
                    </p>
                  </div>
                  <div className='meta style'>
                    <a
                      href='#'
                      className='btn-button flex align-center fw-6 text-color-2'
                    >
                      <span>Contact seller</span>
                      <i className='far fa-long-arrow-alt-right fs-16' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='box'>
                <div className='icon'>
                  <svg
                    width={50}
                    height={50}
                    viewBox='0 0 50 50'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clipPath='url(#clip0_1444_27241)'>
                      <path
                        d='M15.234 43.5156C14.9215 43.2812 14.5309 43.0469 14.2184 42.8906C14.2965 42.2656 14.2184 41.5625 14.0622 40.8594C13.7497 39.6875 13.1247 38.5937 12.2653 37.5781C11.484 38.2031 11.0934 39.2969 11.2497 40.4688C10.7028 39.9219 10.1559 39.375 9.68716 38.8281C9.99966 38.2812 10.1559 37.5781 10.1559 36.875C10.234 35.7031 9.99967 34.5312 9.45279 33.3594C8.43717 33.75 7.81216 34.7656 7.65591 35.9375C7.26529 35.3125 6.95279 34.6094 6.64029 33.9844C7.10904 33.5156 7.49966 32.8906 7.73404 32.1875C8.12466 31.0938 8.20279 29.9219 7.96841 28.6719C6.87466 28.8281 5.93716 29.6094 5.46841 30.7812C5.23404 30 5.07779 29.2969 4.99966 28.5156C5.62466 28.2031 6.17154 27.6562 6.56216 27.0312C7.18716 26.0938 7.65591 24.9219 7.73404 23.6719C6.56216 23.5156 5.39029 24.1406 4.68716 25.2344C4.68716 24.4531 4.76529 23.5938 4.84341 22.8125C5.54654 22.6562 6.24966 22.2656 6.87466 21.7969C7.73404 21.0938 8.43716 20.0781 8.90591 18.9063C7.81216 18.4375 6.48404 18.75 5.46841 19.6875C5.70279 18.9063 5.93716 18.0469 6.24966 17.2656C7.03091 17.3438 7.81216 17.1094 8.51529 16.7969C9.53091 16.3281 10.4684 15.5469 11.2497 14.4531C10.3122 13.6719 8.90592 13.6719 7.65591 14.375C8.12466 13.5938 8.59341 12.8906 9.14029 12.1875C9.84341 12.5 10.7028 12.5 11.5622 12.3438C12.734 12.1094 13.9059 11.6406 14.9997 10.7812C14.2965 9.76562 12.8903 9.375 11.4059 9.76562C12.4997 8.75 13.6715 7.8125 15.0778 7.03125C15.4684 6.79688 15.6247 6.32812 15.3903 5.9375C15.1559 5.54687 14.609 5.39062 14.2184 5.625C12.734 6.48437 11.4059 7.5 10.234 8.59375C10.859 7.03125 10.9372 5.625 10.234 4.53125C8.82779 5.46875 7.81216 7.03125 7.57779 8.35938C7.34341 9.375 7.49966 10.2344 7.96841 10.9375C7.34341 11.7188 6.79654 12.5781 6.32779 13.3594C6.48404 11.7188 6.09341 10.3125 5.15591 9.53125C4.06216 11.0156 3.59341 12.7344 3.74966 14.0625C3.82779 15.0781 4.21841 15.8594 4.84341 16.4062C4.45279 17.3438 4.14029 18.2031 3.90591 19.1406C3.59341 17.5781 2.89029 16.3281 1.71841 15.7813C1.09341 17.5 1.09341 19.2188 1.56216 20.4688C1.95279 21.4062 2.49966 22.0312 3.28091 22.4219C3.12466 23.3594 3.12466 24.2969 3.12466 25.2344C2.42154 23.8281 1.40591 22.8906 0.155914 22.7344C-0.000335678 24.5312 0.468414 26.1719 1.24966 27.2656C1.79654 28.0469 2.57779 28.5156 3.35904 28.6719C3.43716 29.6094 3.67154 30.4687 3.82779 31.3281C2.81216 30.2344 1.64029 29.6094 0.390289 29.7656C0.702789 31.5625 1.56216 33.0469 2.65591 33.8281C3.35904 34.4531 4.21841 34.6875 4.92154 34.6094C5.23404 35.3906 5.62466 36.25 6.01529 36.9531C4.68716 36.4062 3.43716 36.0937 2.34341 36.5625C3.12466 38.2031 4.37466 39.4531 5.62466 40C6.48404 40.3906 7.26529 40.3906 7.96841 40.2344C8.51529 40.9375 9.06216 41.5625 9.68716 42.1875C8.35904 41.875 7.18716 41.9531 6.32779 42.6562C7.57779 44.0625 9.21842 44.9219 10.6247 45.1562C11.484 45.3125 12.2653 45.1562 12.8903 44.8438C13.2028 45.0781 13.5934 45.3125 13.9059 45.5469C14.5309 45.9375 15.3122 45.7031 15.6247 45.0781C15.9372 44.5312 15.7809 43.8281 15.234 43.5156ZM46.3278 31.3281C46.5622 30.4687 46.7184 29.5312 46.7965 28.6719C47.5778 28.5156 48.2809 28.0469 48.9059 27.2656C49.6872 26.1719 50.1559 24.5312 49.9997 22.7344C48.7497 22.8906 47.734 23.9062 47.0309 25.2344C47.0309 24.2969 46.9528 23.3594 46.8747 22.4219C47.5778 22.1094 48.2028 21.4062 48.5934 20.4688C49.0622 19.2188 49.1403 17.5 48.4372 15.7813C47.2653 16.3281 46.5622 17.5781 46.2497 19.1406C46.0153 18.2031 45.7028 17.2656 45.3122 16.4062C45.9372 15.8594 46.3278 15.0781 46.4059 14.0625C46.5622 12.7344 46.0934 11.0156 44.9997 9.53125C43.984 10.3125 43.6715 11.7969 43.8278 13.3594C43.2028 12.5 42.6559 11.7188 42.0309 10.9375C42.4997 10.3125 42.6559 9.375 42.4215 8.35938C42.1872 7.03125 41.1715 5.46875 39.609 4.21875C38.9059 5.23438 38.984 6.71875 39.609 8.28125C38.4372 7.1875 37.109 6.17188 35.6247 5.3125C35.234 5.07813 34.6872 5.23437 34.4528 5.625C34.2184 6.01562 34.3747 6.48438 34.7653 6.71875C36.0934 7.5 37.3434 8.4375 38.4372 9.45312C36.9528 9.0625 35.5465 9.45312 34.8434 10.4687C35.9372 11.3281 37.109 11.7969 38.2809 12.0312C39.1403 12.1875 39.9997 12.1875 40.7028 11.875C41.2497 12.5781 41.7965 13.3594 42.1872 14.0625C40.9372 13.3594 39.5309 13.3594 38.5934 14.1406C39.3747 15.1563 40.3122 16.0156 41.3278 16.4844C42.109 16.875 42.8903 17.0313 43.5934 16.9531C43.9059 17.7344 44.1403 18.5156 44.3747 19.375C43.359 18.4375 42.0309 18.125 40.9372 18.5938C41.4059 19.7656 42.109 20.7812 42.9684 21.4844C43.5934 22.0312 44.2965 22.3438 44.9997 22.5C45.0778 23.2812 45.1559 24.1406 45.1559 24.9219C44.4528 23.8281 43.2809 23.2031 42.109 23.3594C42.2653 24.6094 42.6559 25.7812 43.2809 26.7188C43.6715 27.3438 44.2184 27.8906 44.8434 28.2031C44.6872 28.9844 44.5309 29.6875 44.3747 30.4687C43.9059 29.2969 43.0465 28.4375 41.8747 28.3594C41.6403 29.6094 41.7965 30.8594 42.109 31.875C42.3434 32.5781 42.6559 33.2031 43.2028 33.6719C42.8903 34.375 42.5778 35 42.1872 35.625C42.0309 34.4531 41.4059 33.4375 40.3903 33.0469C39.8434 34.2187 39.609 35.3906 39.6872 36.5625C39.6872 37.2656 39.8434 37.9688 40.1559 38.5156C39.6872 39.0625 39.1403 39.6094 38.5934 40.1562C38.7497 38.9844 38.4372 37.8906 37.5778 37.2656C36.7184 38.2812 36.0934 39.375 35.7809 40.5469C35.6247 41.25 35.5465 41.9531 35.6247 42.5781C35.3122 42.8125 34.9997 43.0469 34.609 43.2031C34.0622 43.5156 33.9059 44.2188 34.1403 44.7656C34.4528 45.3906 35.234 45.625 35.859 45.2344C36.2497 45 36.5622 44.7656 36.8747 44.5312C37.4997 44.8438 38.2809 45 39.1403 44.8438C40.5465 44.6094 42.1872 43.75 43.4372 42.3438C42.5778 41.6406 41.4059 41.5625 40.0778 41.875C40.7028 41.25 41.2497 40.625 41.7965 39.9219C42.4997 40.0781 43.2809 40 44.1403 39.6875C45.3903 39.1406 46.6403 37.9688 47.4215 36.25C46.3278 35.7812 45.0778 36.0937 43.9059 36.7969C44.2965 36.0156 44.6872 35.2344 44.9997 34.4531C45.7809 34.4531 46.5622 34.2187 47.2653 33.6719C48.2809 32.8125 49.2184 31.4062 49.5309 29.6094C48.5153 29.6094 47.3434 30.3125 46.3278 31.3281Z'
                        fill='#FFA920'
                      />
                      <path
                        d='M34.6094 38.5156L32.9688 29.0625L39.8438 22.3438C40.0781 22.1094 40.1562 21.7969 40.0781 21.5625C40 21.25 39.7656 21.0938 39.4531 21.0156L29.9219 19.6094L25.7031 11.0156C25.5469 10.7813 25.3125 10.5469 25 10.5469C24.6875 10.5469 24.4531 10.7031 24.2969 11.0156L20.0781 19.6094L10.5469 21.0156C10.2344 21.0938 10 21.25 9.92187 21.5625C9.84375 21.875 9.92188 22.1875 10.1563 22.3438L17.0312 29.0625L15.3906 38.5156C15.3125 38.8281 15.4688 39.1406 15.7031 39.2969C15.9375 39.4531 16.25 39.5313 16.5625 39.375L25 34.8437L33.5156 39.2969C33.5938 39.375 33.75 39.375 33.9062 39.375C34.0625 39.375 34.2188 39.2969 34.375 39.2188C34.5312 39.0625 34.6875 38.8281 34.6094 38.5156Z'
                        fill='#FFA920'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1444_27241'>
                        <rect width={50} height={50} fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className='content'>
                  <div className='inner'>
                    <h3>Check quality, check for scam before buying</h3>
                    <p className='font-2'>
                      {' '}
                      Molestie mi non, commodo tellus. Suspendisse enim est,
                      varius eu nunc eget
                    </p>
                  </div>
                  <div className='meta style'>
                    <a
                      href='#'
                      className='btn-button flex align-center fw-6 text-color-2'
                    >
                      <span>Contact seller</span>
                      <i className='far fa-long-arrow-alt-right fs-16' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-find-neighborhood wg-search-area tf-section home5-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Find your neighborhood</h2>
                <p className='text-color-4'>
                  Find your dream apartment with our listing
                </p>
              </div>
              <div className='swiper-container carousel-10 img-style'>
                <div className='swiper-wrapper '>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-10.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>Mississauga</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-11.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>California</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-12.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>Edmonton</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-13.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>Moncton</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-10.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>Mississauga</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box'>
                      <div className='images'>
                        <img
                          src='assets/images/img-box/find-your-11.jpg'
                          alt='images'
                        />
                        <a href='properties-map-v1.html' className='icon-plus'>
                          <img src='assets/images/icon/plus.svg' alt='images' />
                        </a>
                      </div>
                      <div className='content'>
                        <h3 className='link-style-3'>
                          <a href='properties-map-v1.html'>California</a>
                        </h3>
                        <p className='text-color-1'>1570 listing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pagi style center'>
                  <div className='swiper-pagination1'></div>{' '}
                </div>
              </div>
              <div className='swiper-button-next ' />
              <div className='swiper-button-prev '> </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-featured wg-dream home2 home4 home5-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>Our most potential real estate</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </p>
              </div>
              <div className='flat-tabs themesflat-tabs'>
                <div className='box-tab center'>
                  <ul className='menu-tab tab-title flex justify-center'>
                    <li
                      className='item-title active hv-tool'
                      data-tooltip='7 Property'
                    >
                      <h5 className='inner '>For Sale</h5>
                    </li>
                    <li
                      className='item-title style hv-tool'
                      data-tooltip='4 Property'
                    >
                      <h5 className='inner '> For Rent </h5>
                    </li>
                  </ul>
                </div>
                <div className='content-tab'>
                  <div className='content-inner tab-content'>
                    <div className='swiper-container2 '>
                      <div className='sponsors-carousel owl-carousel owl-theme'>
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-17.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-2.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-3.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-4.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-5.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 2 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-18.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-12.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-13.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-14.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-15.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 3 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-19.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-22.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-23.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-24.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-25.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 4 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-17.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-2.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-3.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-4.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-5.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 5 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-18.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-12.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-13.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-14.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-15.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 6 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-19.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-22.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-23.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-24.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-25.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 7 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-17.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-2.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-3.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-4.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-5.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='content-inner tab-content'>
                    <div className='swiper-container '>
                      <div className='sponsors-carousel owl-carousel owl-theme'>
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-7.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-2.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-3.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-4.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-5.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 2 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-18.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-12.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-13.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-14.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-15.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 3 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-9.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-22.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-23.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-24.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-25.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* col 4 */}
                        <div className='slide-item'>
                          <div className='box box-dream hv-one'>
                            <div className='image-group relative '>
                              <span className='featured fs-12 fw-6'>
                                Featured
                              </span>
                              <span className='featured style fs-12 fw-6'>
                                For sale
                              </span>
                              <span className='icon-bookmark'>
                                <i className='far fa-bookmark' />
                              </span>
                              <div className='swiper-container noo carousel-2 img-style'>
                                <a
                                  href='property-detail-v1.html'
                                  className='icon-plus'
                                >
                                  <img
                                    src='assets/images/icon/plus.svg'
                                    alt='images'
                                  />
                                </a>
                                <div className='swiper-wrapper '>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-7.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-2.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-3.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-4.jpg'
                                      alt='images'
                                    />
                                  </div>
                                  <div className='swiper-slide'>
                                    <img
                                      src='assets/images/house/featured-5.jpg'
                                      alt='images'
                                    />
                                  </div>
                                </div>
                                <div className='pagi2'>
                                  <div className='swiper-pagination2'></div>{' '}
                                </div>
                                <div className='swiper-button-next2 '>
                                  <i className='fal fa-arrow-right' />
                                </div>
                                <div className='swiper-button-prev2 '>
                                  <i className='fal fa-arrow-left' />{' '}
                                </div>
                              </div>
                            </div>
                            <div className='content'>
                              <h3 className='link-style-1'>
                                <a href='property-detail-v1.html'>
                                  Gorgeous Apartment Building
                                </a>{' '}
                              </h3>
                              <div className='text-address'>
                                <p className='p-12'>
                                  58 Hullbrook Road, Billesley, B13 0LA
                                </p>
                              </div>
                              <div className='money fs-18 fw-6 text-color-3'>
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
                              <div className='days-box flex justify-space align-center'>
                                <a
                                  className='compare flex align-center fw-6'
                                  href='#'
                                >
                                  Compare
                                </a>
                                <div
                                  className='img-author hv-tool'
                                  data-tooltip='Kathryn Murphy'
                                >
                                  <img
                                    src='assets/images/author/author-1.jpg'
                                    alt='images'
                                  />
                                </div>
                                <div className='days'>3 years ago</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-contact tf-section home5 relative'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='heading-section'>
                <h2 className='font-2 fw-8 text-color-1'>
                  We provide the most suitable and quality real estate.
                </h2>
                <p className='text-color-1'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sed tristique metus proin id lorem odio
                </p>
              </div>
              <div className='wrap-info'>
                <div className='box-info flex align-center'>
                  <div className='icon-info'>
                    <svg
                      width={50}
                      height={50}
                      viewBox='0 0 50 50'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M42.5742 38.0897L42.7 38.0394V37.904V23.749C42.7 23.1695 43.1704 22.699 43.75 22.699C44.3295 22.699 44.8 23.1695 44.8 23.749V38.749C44.8 39.179 44.5378 39.5638 44.1424 39.7261C44.1421 39.7262 44.1419 39.7263 44.1417 39.7264L31.6657 44.7158L31.7375 44.8952C31.7375 44.8974 31.7375 44.8994 31.7375 44.9015L31.6563 44.7187L31.6371 44.7272C31.3894 44.8262 31.113 44.8262 30.8654 44.7272L30.8462 44.7187L30.8074 44.7015H30.801L18.8243 39.9108L18.75 39.8811L18.6757 39.9108L6.64074 44.7233L6.64072 44.7233C6.5143 44.7739 6.382 44.799 6.25 44.799C6.04199 44.799 5.83872 44.7382 5.66233 44.6185C5.37414 44.4229 5.2 44.0971 5.2 43.749V21.249C5.2 20.8188 5.46227 20.4344 5.85956 20.2746C5.85958 20.2746 5.8596 20.2746 5.85962 20.2746L18.3281 15.2857L18.3282 15.2863L18.3507 15.2788L18.3509 15.2791L18.3623 15.2745C18.6118 15.1739 18.8907 15.1739 19.1402 15.2745L19.1401 15.2746L19.1448 15.2763L19.1648 15.2838L19.1987 15.2965H19.1989L26.6456 18.2772C26.6456 18.2772 26.6456 18.2772 26.6457 18.2772C27.1862 18.4939 27.4479 19.1052 27.2319 19.6419L27.2318 19.6421C27.0154 20.182 26.3971 20.4421 25.8673 20.2285L25.8668 20.2283L20.0743 17.9108L19.8 17.8011V18.0965V37.9015V38.0369L19.9257 38.0872L29.9257 42.0872L30.2 42.1969V41.9015V28.749C30.2 28.1695 30.6704 27.699 31.25 27.699C31.8295 27.699 32.3 28.1695 32.3 28.749V41.904V42.1994L32.5742 42.0897L42.5742 38.0897ZM18.2775 15.134L18.265 15.1028L18.265 15.1028L18.265 15.0965L18.2775 15.134ZM17.5743 38.0872L17.7 38.0369V37.9015V18.094V17.7986L17.4257 17.9083L7.42572 21.9083L7.3 21.9586V22.094V41.9015V42.1969L7.57428 42.0872L17.5743 38.0872Z'
                        fill='#fff'
                        stroke='white'
                        strokeWidth='0.4'
                      />
                      <path
                        d='M32.6999 13.749C32.6999 11.792 34.2928 10.199 36.2499 10.199C38.2069 10.199 39.7999 11.792 39.7999 13.749C39.7999 15.7061 38.2069 17.299 36.2499 17.299C34.2928 17.299 32.6999 15.7061 32.6999 13.749ZM34.7999 13.749C34.7999 14.5495 35.4494 15.199 36.2499 15.199C37.0503 15.199 37.6999 14.5495 37.6999 13.749C37.6999 12.9486 37.0503 12.299 36.2499 12.299C35.4494 12.299 34.7999 12.9486 34.7999 13.749Z'
                        fill='#fff'
                        stroke='white'
                        strokeWidth='0.4'
                      />
                      <path
                        d='M36.0971 24.4704L36.25 24.6518L36.4029 24.4704C37.7722 22.8466 39.3407 20.7865 40.5681 18.831C41.1818 17.8533 41.7126 16.8981 42.0906 16.0341C42.4666 15.1746 42.7 14.3865 42.7 13.749C42.7 10.1936 39.8054 7.29902 36.25 7.29902C32.6945 7.29902 29.8 10.1936 29.8 13.749C29.8 14.3871 30.0334 15.1755 30.4094 16.0351C30.7874 16.8993 31.3182 17.8544 31.9319 18.8319C33.1593 20.7872 34.7278 22.8466 36.0971 24.4704ZM27.7 13.749C27.7 9.03448 31.5355 5.19902 36.25 5.19902C40.9645 5.19902 44.8 9.03448 44.8 13.749C44.8 14.8262 44.3769 16.1323 43.7105 17.5145C43.0462 18.8922 42.1501 20.3255 41.2259 21.6512C39.3782 24.3016 37.43 26.5055 37.0314 26.9501C36.8312 27.1712 36.5474 27.299 36.25 27.299C35.9526 27.299 35.6688 27.1712 35.4686 26.9501C35.0699 26.5053 33.1217 24.3015 31.2741 21.6512C30.3499 20.3255 29.4538 18.8922 28.7895 17.5145C28.1231 16.1323 27.7 14.8262 27.7 13.749Z'
                        fill='#fff'
                        stroke='white'
                        strokeWidth='0.4'
                      />
                    </svg>
                  </div>
                  <div className='content'>
                    <h5 className='text-color-1'>Office address</h5>
                    <h4 className='fw-4 text-color-1'>
                      2715 Ash Dr. San Jose, South Dakota 83475
                    </h4>
                  </div>
                </div>
                <div className='box-info flex align-center'>
                  <div className='icon-info'>
                    <svg
                      width={50}
                      height={51}
                      viewBox='0 0 50 51'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M26.4648 13.7812C26.4648 14.5902 27.1207 15.2461 27.9297 15.2461C28.7387 15.2461 29.3945 14.5902 29.3945 13.7812C29.3945 12.9723 28.7387 12.3164 27.9297 12.3164C27.1207 12.3164 26.4648 12.9723 26.4648 13.7812Z'
                        fill='#fff'
                      />
                      <path
                        d='M32.3242 13.7812C32.3242 14.5902 32.9801 15.2461 33.7891 15.2461C34.598 15.2461 35.2539 14.5902 35.2539 13.7812C35.2539 12.9723 34.598 12.3164 33.7891 12.3164C32.9801 12.3164 32.3242 12.9723 32.3242 13.7812Z'
                        fill='#fff'
                      />
                      <path
                        d='M38.1836 13.7812C38.1836 14.5902 38.8395 15.2461 39.6484 15.2461C40.4574 15.2461 41.1133 14.5902 41.1133 13.7812C41.1133 12.9723 40.4574 12.3164 39.6484 12.3164C38.8395 12.3164 38.1836 12.9723 38.1836 13.7812Z'
                        fill='#fff'
                      />
                      <path
                        d='M22.6771 37.2188L27.0716 34.2891L35.8398 37.2188V43.0781C35.8398 44.6961 34.549 46.0078 32.931 46.0078C16.7508 46.0078 1.46484 30.8195 1.46484 14.6394C1.46484 13.0214 2.77656 11.7305 4.39453 11.7305H10.2539L13.1836 20.4987L10.2539 24.8933C12.1247 29.5703 18 35.3479 22.6771 37.2188Z'
                        stroke='#fff'
                        strokeWidth='1.7'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M19.1406 13.7812C19.1406 18.6354 23.0756 22.5703 27.9297 22.5703V28.4297L33.7891 22.5703H39.6484C44.5025 22.5703 48.5352 18.6354 48.5352 13.7812C48.5352 8.92715 44.5025 4.99219 39.6484 4.99219H27.9297C23.0756 4.99219 19.1406 8.92715 19.1406 13.7812Z'
                        stroke='#fff'
                        strokeWidth='1.7'
                        strokeMiterlimit={10}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                  <div className='content'>
                    <h5 className='text-color-1'>Request a call back</h5>
                    <a href='tel:0123456789'>
                      <h4 className='fw-7 fs-30 text-color-1 lh-45'>
                        314-555-0123
                      </h4>
                    </a>
                  </div>
                </div>
                <div className='box-info flex align-center'>
                  <div className='icon-info'>
                    <svg
                      width={50}
                      height={50}
                      viewBox='0 0 50 50'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_1505_28697)'>
                        <path
                          d='M36.6559 17.8341L36.6559 17.8341L36.6609 17.8392C36.8315 18.0113 37.0549 18.0969 37.2788 18.0969C37.5021 18.0969 37.7258 18.0116 37.8976 17.8411C38.2409 17.5005 38.241 16.9425 37.8996 16.5985C37.5586 16.2548 37.0037 16.2526 36.66 16.5934L36.6559 17.8341ZM36.6559 17.8341L36.6551 17.8332M36.6559 17.8341L36.6551 17.8332M36.6551 17.8332C36.3141 17.4895 36.3163 16.9345 36.66 16.5935L36.6551 17.8332Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M46.4639 27.8825H46.7054L46.5346 27.7118L39.3343 20.5115C38.992 20.1691 38.992 19.6141 39.3343 19.2718C39.6767 18.9296 40.2317 18.9296 40.574 19.2718L49.6441 28.3419C49.8085 28.5063 49.9009 28.7294 49.901 28.9618C49.901 29.1943 49.8086 29.4172 49.6442 29.5816L34.0757 45.1502C33.9114 45.3145 33.6884 45.4069 33.4559 45.4069C33.2235 45.4069 33.0005 45.3145 32.8361 45.1502L9.34306 21.6572C9.34306 21.6572 9.34305 21.6572 9.34305 21.6572C9.00075 21.3148 9.00076 20.7598 9.34305 20.4175L24.9114 4.84884C25.2537 4.50664 25.8087 4.50664 26.151 4.84884C26.151 4.84884 26.151 4.84884 26.1511 4.84884L34.9723 13.67C35.3146 14.0124 35.3146 14.5675 34.9723 14.9098C34.6299 15.252 34.0749 15.2519 33.7326 14.9098L26.7811 7.95839L26.6104 7.78768V8.0291V25.1994C26.6104 26.679 27.8139 27.8825 29.2935 27.8825H46.4639ZM24.8575 7.62373V7.38231L24.6868 7.55302L12.2497 19.9901L12.079 20.1608H12.3204H24.7575H24.8575V20.0608V7.62373ZM32.4087 42.2434L32.5794 42.4141V42.1727V29.7356V29.6356H32.4794H29.2937C26.8477 29.6356 24.8575 27.6455 24.8575 25.1994V22.0139V21.9139H24.7575H12.3204H12.079L12.2497 22.0846L32.4087 42.2434ZM34.3324 42.1728V42.4142L34.5031 42.2435L46.9401 29.8064L47.1108 29.6356H46.8694H34.4324H34.3324V29.7356V42.1728Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M0.976562 24.9047H6.70225C7.18637 24.9047 7.57881 25.2972 7.57881 25.7812C7.57881 26.2654 7.18637 26.6578 6.70225 26.6578H0.976562C0.492442 26.6578 0.1 26.2653 0.1 25.7812C0.1 25.2972 0.492442 24.9047 0.976562 24.9047Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M9.59961 24.9047H9.61426C10.0984 24.9047 10.4908 25.2972 10.4908 25.7812C10.4908 26.2653 10.0984 26.6578 9.61426 26.6578H9.59961C9.11549 26.6578 8.72305 26.2653 8.72305 25.7812C8.72305 25.2972 9.11549 24.9047 9.59961 24.9047Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M0.978516 14.6508H4.10381C4.58793 14.6508 4.98037 15.0433 4.98037 15.5273C4.98037 16.0114 4.58793 16.4039 4.10381 16.4039H0.978516C0.494395 16.4039 0.101953 16.0114 0.101953 15.5273C0.101953 15.0433 0.494395 14.6508 0.978516 14.6508Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M7.29315 14.6508H10.9873C11.4714 14.6508 11.8639 15.0433 11.8639 15.5273C11.8639 16.0114 11.4714 16.4039 10.9873 16.4039H7.29315C6.80903 16.4039 6.41659 16.0114 6.41659 15.5273C6.41659 15.0433 6.80903 14.6508 7.29315 14.6508Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M7.64453 30.2758H13.1132C13.5972 30.2758 13.9897 30.6683 13.9897 31.1523C13.9897 31.6364 13.5973 32.0289 13.1132 32.0289H7.64453C7.16041 32.0289 6.76797 31.6364 6.76797 31.1523C6.76797 30.6683 7.16041 30.2758 7.64453 30.2758Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                        <path
                          d='M3.61328 36.5258H17.3827C17.8668 36.5258 18.2593 36.9183 18.2593 37.4023C18.2593 37.8864 17.8668 38.2789 17.3827 38.2789H3.61328C3.12916 38.2789 2.73672 37.8864 2.73672 37.4023C2.73672 36.9183 3.12916 36.5258 3.61328 36.5258Z'
                          fill='#fff'
                          stroke='white'
                          strokeWidth='0.2'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_1505_28697'>
                          <rect width={50} height={50} fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className='content'>
                    <h5 className='text-color-1'>Email us</h5>
                    <a href='../../cdn-cgi/l/email-protection.html#670f020b0b081412171708151327000a060e0b4904080a'>
                      <h4 className='fw-4 text-color-1'>
                        <span
                          className='__cf_email__'
                          data-cfemail='e78f828b8b8894929797889593a7808a868e8bc984888a'
                        >
                          [email&nbsp;protected]
                        </span>
                      </h4>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='wrap-contact'>
                <div className='box-title flex justify-space'>
                  <div className='inner'>
                    <div className='title-ct fs-30 fw-7'>Contact us </div>
                    <p>We will respond as soon as we receive your message.</p>
                  </div>
                  <div className='icon-message animate-zoom'>
                    <svg
                      width={40}
                      height={40}
                      viewBox='0 0 40 40'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M33.8668 1.7959H18.0927C15.6302 1.7959 13.6269 3.79882 13.6269 6.26215V14.193H6.12893C3.6681 14.1934 1.66602 16.1963 1.66602 18.6571V28.5738C1.66602 31.0347 3.6681 33.038 6.12893 33.038H6.82768V36.1263C6.82768 36.9651 7.30518 37.6959 8.07393 38.0305C8.34143 38.1472 8.62477 38.2042 8.9056 38.2042C9.43297 38.2041 9.94074 38.0043 10.3268 37.6451L15.2314 33.038H21.9077C24.3694 33.038 26.3718 31.0351 26.3718 28.5738V22.1421L29.6752 25.2367C29.9697 25.5146 30.3394 25.6999 30.7382 25.7695C31.1371 25.8391 31.5477 25.7901 31.9189 25.6284C32.2904 25.4677 32.6068 25.2018 32.8289 24.8634C33.051 24.525 33.1692 24.129 33.1689 23.7242V20.6446H33.8673C36.3293 20.6451 38.3327 18.6417 38.3327 16.1788V6.26215C38.3327 3.79923 36.3293 1.7959 33.8668 1.7959ZM21.9077 30.7838H14.7856C14.4989 30.7841 14.223 30.8934 14.0139 31.0896L9.08185 35.7234V31.9109C9.0819 31.7629 9.05279 31.6163 8.99617 31.4795C8.93954 31.3428 8.85653 31.2185 8.75186 31.1138C8.64719 31.0091 8.52292 30.9261 8.38615 30.8695C8.24938 30.8129 8.10279 30.7838 7.95477 30.7838H6.12893C5.54312 30.7832 4.98151 30.5501 4.5674 30.1357C4.15329 29.7214 3.92051 29.1596 3.92018 28.5738V18.6571C3.92051 18.0713 4.15329 17.5096 4.5674 17.0952C4.98151 16.6809 5.54312 16.4478 6.12893 16.4471H13.6406C13.7806 18.7851 15.721 20.6451 18.0927 20.6451H24.1173V28.5738C24.1169 29.1598 23.884 29.7216 23.4698 30.136C23.0555 30.5504 22.4936 30.7834 21.9077 30.7838ZM36.0785 16.1788C36.0779 16.7652 35.8446 17.3274 35.43 17.7421C35.0154 18.1568 34.4533 18.3901 33.8668 18.3909H32.0414C31.8934 18.3908 31.7468 18.42 31.6101 18.4766C31.4733 18.5332 31.349 18.6162 31.2443 18.7209C31.1397 18.8256 31.0567 18.9498 31 19.0866C30.9434 19.2234 30.9143 19.37 30.9144 19.518V23.3109L26.0218 18.7192L25.9985 18.6971L25.9956 18.7005L25.9898 18.6951C25.7808 18.4995 25.5051 18.3909 25.2189 18.3913H18.0927C17.5063 18.3905 16.9441 18.1572 16.5295 17.7425C16.1149 17.3278 15.8817 16.7656 15.881 16.1792V16.1771H15.8893L15.881 6.26298C15.8817 5.67658 16.1149 5.11437 16.5295 4.69968C16.9441 4.28499 17.5063 4.05167 18.0927 4.0509H33.8668C34.4533 4.05167 35.0154 4.28499 35.43 4.69968C35.8446 5.11437 36.0779 5.67658 36.0785 6.26298V16.1788Z'
                        fill='#FFA920'
                      />
                      <path
                        d='M30.4872 7.77051H21.4713C21.1724 7.77051 20.8857 7.88925 20.6744 8.10062C20.463 8.31199 20.3442 8.59867 20.3442 8.89759C20.3442 9.19651 20.463 9.48319 20.6744 9.69456C20.8857 9.90593 21.1724 10.0247 21.4713 10.0247H30.4876C30.6356 10.0246 30.7821 9.99547 30.9189 9.9388C31.0556 9.88213 31.1798 9.79909 31.2845 9.69441C31.3891 9.58973 31.4721 9.46547 31.5287 9.32871C31.5854 9.19196 31.6145 9.04539 31.6145 8.89738C31.6144 8.74937 31.5852 8.60282 31.5286 8.46608C31.4719 8.32935 31.3889 8.20512 31.2842 8.10048C31.1795 7.99584 31.0553 7.91284 30.9185 7.85622C30.7817 7.79961 30.6352 7.77048 30.4872 7.77051ZM30.4872 12.2784H21.4713C21.1724 12.2784 20.8857 12.3972 20.6744 12.6085C20.463 12.8199 20.3442 13.1066 20.3442 13.4055C20.3442 13.7044 20.463 13.9911 20.6744 14.2025C20.8857 14.4138 21.1724 14.5326 21.4713 14.5326H30.4876C30.6356 14.5326 30.7821 14.5034 30.9189 14.4467C31.0556 14.3901 31.1798 14.307 31.2845 14.2023C31.3891 14.0976 31.4721 13.9734 31.5287 13.8366C31.5854 13.6999 31.6145 13.5533 31.6145 13.4053C31.6144 13.2573 31.5852 13.1107 31.5286 12.974C31.4719 12.8373 31.3889 12.713 31.2842 12.6084C31.1795 12.5038 31.0553 12.4208 30.9185 12.3641C30.7817 12.3075 30.6352 12.2784 30.4872 12.2784ZM9.52049 22.5163C9.38549 22.5605 9.27258 22.6505 9.16008 22.7409C8.95716 22.9655 8.82174 23.2605 8.82174 23.553C8.82174 23.8455 8.95674 24.1384 9.16008 24.3409C9.38549 24.5655 9.65591 24.6801 9.94883 24.6801C10.1063 24.6801 10.2647 24.6338 10.3997 24.5897C10.5351 24.5434 10.6476 24.453 10.7601 24.3409C10.963 24.1384 11.0984 23.8455 11.0984 23.553C11.0984 23.2605 10.963 22.9651 10.7601 22.7409C10.4447 22.4484 9.94883 22.3359 9.52049 22.5163ZM14.9076 22.5163C14.4792 22.3359 13.9834 22.448 13.668 22.7409C13.4651 22.9655 13.3526 23.2605 13.3526 23.553C13.3526 23.8455 13.4651 24.1384 13.668 24.3409C13.7805 24.453 13.8934 24.5434 14.0284 24.5897C14.1863 24.6338 14.3213 24.6801 14.4792 24.6801C14.7726 24.6801 15.043 24.5655 15.2684 24.3409C15.4713 24.1384 15.6067 23.8455 15.6067 23.553C15.6067 23.2605 15.4713 22.9651 15.2684 22.7409C15.1555 22.6509 15.043 22.5605 14.9076 22.5163ZM19.4159 22.5163C19.1455 22.4018 18.8297 22.4018 18.5367 22.5163C18.4017 22.5605 18.2888 22.6505 18.1763 22.7409C17.9734 22.9655 17.838 23.2605 17.838 23.553C17.838 23.8455 17.973 24.1384 18.1763 24.3409C18.4017 24.5655 18.6722 24.6801 18.9655 24.6801C19.123 24.6801 19.2809 24.6338 19.4163 24.5897C19.5517 24.5434 19.6642 24.453 19.7772 24.3409C19.9801 24.1384 20.0926 23.8455 20.0926 23.553C20.0926 23.2605 19.9797 22.9651 19.7772 22.7409C19.6638 22.6509 19.5513 22.5605 19.4159 22.5163ZM7.70716 11.1518H9.96133C10.2602 11.1518 10.5469 11.033 10.7583 10.8216C10.9697 10.6103 11.0884 10.3236 11.0884 10.0247C11.0884 9.72575 10.9697 9.43908 10.7583 9.22771C10.5469 9.01634 10.2602 8.89759 9.96133 8.89759H7.70716C7.40824 8.89759 7.12156 9.01634 6.91019 9.22771C6.69882 9.43908 6.58008 9.72575 6.58008 10.0247C6.58008 10.3236 6.69882 10.6103 6.91019 10.8216C7.12156 11.033 7.40824 11.1518 7.70716 11.1518ZM32.5013 29.1838H30.2472C29.9482 29.1838 29.6616 29.3026 29.4502 29.514C29.2388 29.7253 29.1201 30.012 29.1201 30.3109C29.1201 30.6098 29.2388 30.8965 29.4502 31.1079C29.6616 31.3193 29.9482 31.438 30.2472 31.438H32.5013C32.8003 31.438 33.0869 31.3193 33.2983 31.1079C33.5097 30.8965 33.6284 30.6098 33.6284 30.3109C33.6284 30.012 33.5097 29.7253 33.2983 29.514C33.0869 29.3026 32.8003 29.1838 32.5013 29.1838Z'
                        fill='#FFA920'
                      />
                    </svg>
                  </div>
                </div>
                <div id='comments' className='comments'>
                  <div className='respond-comment'>
                    <form
                      method='post'
                      id='contactform'
                      className='comment-form form-submit'
                      action='contact/contact-process.php.html'
                      acceptCharset='utf-8'
                      noValidate='novalidate'
                    >
                      <fieldset className='name-wrap'>
                        <label className='font-2 fw-8 fs-16'>Your name</label>
                        <input
                          type='text'
                          className='tb-my-input'
                          name='name'
                          placeholder='Your name'
                          required
                        />
                        <img
                          className='img-icon'
                          src='assets/images/icon/contact-name.svg'
                          alt='images'
                        />
                      </fieldset>
                      <div className='text-wrap flex'>
                        <fieldset className='email-wrap style-text'>
                          <label className='font-2 fw-8 fs-16'>Email</label>
                          <input
                            type='email'
                            className='tb-my-input'
                            name='email'
                            placeholder='Email'
                            required
                          />
                          <img
                            className='img-icon img-email'
                            src='assets/images/icon/contact-email.svg'
                            alt='images'
                          />
                        </fieldset>
                        <fieldset className='phone-wrap style-text'>
                          <label className='font-2 fw-8 fs-16'>Phone</label>
                          <input
                            type='tel'
                            className='tb-my-input'
                            name='tel'
                            placeholder='Phone'
                            required
                          />
                          <img
                            className='img-icon'
                            src='assets/images/icon/contact-phone.svg'
                            alt='images'
                          />
                        </fieldset>
                      </div>
                      <div className='wd-find-select'>
                        <label className='font-2 fw-8 fs-16'>
                          Property type
                        </label>
                        <div className='nice-select relative' tabIndex={0}>
                          <span className='current'>Choose</span>
                          <ul className='list style'>
                            <li data-value className='option selected'>
                              Choose
                            </li>
                            <li data-value='apartment' className='option'>
                              Apartment
                            </li>
                            <li data-value='house' className='option'>
                              House
                            </li>
                            <li data-value='rent' className='option'>
                              Rent
                            </li>
                          </ul>
                          <img
                            className='img-icon icon-style'
                            src='assets/images/icon/contact-choose.svg'
                            alt='images'
                          />
                        </div>
                      </div>
                      <fieldset className='message-wrap'>
                        <label className='font-2 fw-8 fs-16'>Message</label>
                        <textarea
                          id='comment-message'
                          name='message'
                          rows={4}
                          tabIndex={4}
                          placeholder='Your message'
                          aria-required='true'
                          defaultValue={''}
                        />
                      </fieldset>
                      <div className='button-boxs'>
                        <button
                          className='sc-button btn-icon'
                          name='submit'
                          type='submit'
                        >
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clipPath='url(#clip0_1505_28737)'>
                              <path
                                d='M17.7381 0.0295345L0.899726 5.53166C0.424186 5.68706 0.355417 6.33388 0.788208 6.58552L7.1516 10.2857C7.24979 10.3428 7.36258 10.3699 7.47599 10.3635C7.5894 10.3572 7.69846 10.3177 7.78965 10.2499L9.57844 8.92152L8.25002 10.7103C8.1823 10.8015 8.14281 10.9106 8.13645 11.024C8.13009 11.1374 8.15714 11.2502 8.21424 11.3484L11.9144 17.7118C12.1664 18.1449 12.813 18.0754 12.9683 17.6003L18.4705 0.76186C18.618 0.309727 18.1881 -0.117584 17.7381 0.0295345ZM12.2669 16.0078L9.41045 11.0954L12.8548 6.45741C12.9378 6.34558 12.9779 6.20763 12.9676 6.06873C12.9574 5.92984 12.8976 5.79924 12.7991 5.70076C12.7006 5.60228 12.57 5.54247 12.4311 5.53225C12.2923 5.52203 12.1543 5.56207 12.0425 5.64507L7.40447 9.08947L2.49215 6.233L17.0112 1.48874L12.2669 16.0078ZM6.59633 12.7247L2.74099 16.58C2.51425 16.8067 2.1466 16.8068 1.91987 16.58C1.69309 16.3533 1.69309 15.9856 1.91987 15.7589L5.77521 11.9036C6.00202 11.6769 6.36967 11.6768 6.59633 11.9036C6.82311 12.1303 6.82311 12.498 6.59633 12.7247ZM1.50311 12.8706C1.27634 12.6438 1.27634 12.2762 1.50311 12.0495L3.02438 10.5282C3.25112 10.3014 3.61877 10.3014 3.8455 10.5282C4.07228 10.7549 4.07228 11.1226 3.8455 11.3493L2.32424 12.8706C2.09754 13.0973 1.72985 13.0973 1.50311 12.8706ZM7.97175 14.6544C8.19852 14.8811 8.19852 15.2488 7.97175 15.4755L6.45045 16.9968C6.3966 17.0508 6.33261 17.0936 6.26215 17.1228C6.1917 17.152 6.11617 17.167 6.0399 17.1669C5.52724 17.1669 5.26254 16.5424 5.62936 16.1756L7.15066 14.6544C7.37736 14.4276 7.74501 14.4276 7.97175 14.6544Z'
                                fill='white'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_1505_28737'>
                                <rect
                                  width={18}
                                  height={18}
                                  fill='white'
                                  transform='translate(0.5)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>Send request</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-testimonial4 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='heading-section center'>
                <h2>From our happy customers</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  sed tristique metus proin id lorem odio
                </p>
              </div>
              <div className='swiper-container carousel-7 img-style'>
                <div className='swiper-wrapper '>
                  <div className='swiper-slide'>
                    <div className='box center'>
                      <div className='inner'>
                        <svg
                          width={30}
                          height={30}
                          viewBox='0 0 30 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z'
                            fill='#FFA920'
                          />
                        </svg>
                        <div className='texts fs-16 fw-5 lh-24 font-italic'>
                          “ Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer vel tortor justo. Vestibulum vitae
                          vulputate lacus. Aliquam sollicitudin mauris odio.
                          Fusce egestas consectetur semper vulputate ”
                        </div>
                      </div>
                      <div className='author-box'>
                        <div className='images'>
                          <img
                            src='assets/images/author/author-testimonial4.jpg'
                            alt='images'
                          />
                        </div>
                        <h4>Esther Howard</h4>
                        <p>Internet Security Assistant</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box center'>
                      <div className='inner'>
                        <svg
                          width={30}
                          height={30}
                          viewBox='0 0 30 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z'
                            fill='#FFA920'
                          />
                        </svg>
                        <div className='texts fs-16 fw-5 lh-24 font-italic'>
                          “ Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer vel tortor justo. Vestibulum vitae
                          vulputate lacus. Aliquam sollicitudin mauris odio.
                          Fusce egestas consectetur semper vulputate ”
                        </div>
                      </div>
                      <div className='author-box'>
                        <div className='images'>
                          <img
                            src='assets/images/author/author-testimonial4.jpg'
                            alt='images'
                          />
                        </div>
                        <h4>Esther Howard</h4>
                        <p>Internet Security Assistant</p>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='box center'>
                      <div className='inner'>
                        <svg
                          width={30}
                          height={30}
                          viewBox='0 0 30 30'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M28.0934 11.3076H25.2697V15.9908C25.2697 18.3363 23.3615 20.2445 21.0159 20.2445H14.1609V21.9843C14.1609 23.0355 15.0162 23.8909 16.0675 23.8909H22.1349L25.0277 27.3976C25.201 27.6074 25.4569 27.7249 25.7222 27.7249C25.7881 27.7249 25.8547 27.7175 25.9208 27.7027C26.252 27.6278 26.513 27.3726 26.5954 27.043L27.3836 23.8909H28.0934C29.1446 23.8909 30 23.0358 30 21.9843V13.2142C30 12.1627 29.1446 11.3076 28.0934 11.3076Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M21.0159 0H2.45361C1.10069 0 0 1.10069 0 2.45361V15.9906C0 17.3435 1.10069 18.444 2.45361 18.444H4.25743L5.56664 23.6799C5.6488 24.0097 5.90973 24.2647 6.24115 24.3398C6.3073 24.3546 6.37367 24.362 6.43982 24.362C6.70509 24.3617 6.96098 24.2443 7.13402 24.0344L11.7462 18.444H21.0159C22.3689 18.444 23.4695 17.3435 23.4695 15.9906V2.45361C23.4695 1.10069 22.3689 0 21.0159 0V0ZM17.021 8.59955L15.0309 10.5396L15.5008 13.2786C15.5587 13.6164 15.4198 13.9577 15.1426 14.1591C14.9858 14.2731 14.8002 14.331 14.6134 14.331C14.4701 14.331 14.3264 14.2969 14.1946 14.2275L11.7348 12.9343L9.27475 14.2275C8.97148 14.3871 8.60413 14.3605 8.32672 14.1591C8.04955 13.9577 7.91084 13.6164 7.96875 13.2786L8.43864 10.5393L6.44829 8.59955C6.20316 8.36037 6.11481 8.00262 6.22055 7.67693C6.32652 7.351 6.60828 7.11342 6.94725 7.06421L9.69749 6.66458L10.9275 4.17229C11.0793 3.86513 11.3921 3.67058 11.7348 3.67058C12.0774 3.67058 12.3903 3.86513 12.5418 4.17229L13.7718 6.66458L16.5221 7.06421C16.8613 7.11342 17.143 7.351 17.2488 7.67693C17.3547 8.00285 17.2664 8.36037 17.021 8.59955Z'
                            fill='#FFA920'
                          />
                          <path
                            d='M12.367 7.8858L11.7348 6.60498L11.1026 7.8858C10.9715 8.15154 10.7181 8.33556 10.4249 8.37836L9.01111 8.58366L10.034 9.5809C10.2462 9.78758 10.343 10.0856 10.2928 10.3776L10.0514 11.7855L11.3159 11.1208C11.578 10.983 11.8914 10.983 12.1537 11.1208L13.418 11.7855L13.1765 10.3776C13.1264 10.0856 13.2232 9.78758 13.4354 9.5809L14.4583 8.58366L13.0447 8.37836C12.7515 8.33556 12.4981 8.15154 12.367 7.8858Z'
                            fill='#FFA920'
                          />
                        </svg>
                        <div className='texts fs-16 fw-5 lh-24 font-italic'>
                          “ Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer vel tortor justo. Vestibulum vitae
                          vulputate lacus. Aliquam sollicitudin mauris odio.
                          Fusce egestas consectetur semper vulputate ”
                        </div>
                      </div>
                      <div className='author-box'>
                        <div className='images'>
                          <img
                            src='assets/images/author/author-testimonial4.jpg'
                            alt='images'
                          />
                        </div>
                        <h4>Esther Howard</h4>
                        <p>Internet Security Assistant</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='pagi style center'>
                  <div className='swiper-pagination1'></div>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-brand tf-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='title-section center'>
                <h4 className='fw-8'>Trusted by over 150+ major companies</h4>
              </div>
              <div className='swiper-container carousel-5'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-1.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-2.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-3.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-4.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-5.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='slogan-logo'>
                      <a href='#'>
                        <img
                          src='assets/images/img-box/brand-6.png'
                          alt='images'
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <div className='heading-section center'>
                <h2 className>Pricing plans for every budget</h2>
                <p className='text-color-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer vel lobortis justo
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='box box-style'>
                <div className='sub-title fs-30 fw-7'>Basic</div>
                <p className='text-sub fw-6 '>
                  Automatically reach potential customers
                </p>
                <div className='title-price flex'>
                  <h2>$19 </h2>
                  <div className='mo fw-4 fs-30 fw-7'> / mo</div>
                </div>
                <p className='texts'>Per month, per company or team members</p>
                <ul className='check'>
                  <li className='flex-three'>Listing free</li>
                  <li className='flex-three'>Support 24/7</li>
                  <li className='flex-three'>Quick access to customers</li>
                  <li className='flex-three'>Auto refresh ads</li>
                </ul>
                <div className='button-pricing'>
                  <a className='sc-button btn-1' href='pricing.html'>
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='box box-style active'>
                <div className='sub-title fs-30 fw-7'>Business</div>
                <p className='text-sub fw-6 '>
                  Automatically reach potential customers
                </p>
                <div className='title-price flex'>
                  <h2>$87</h2>
                  <div className='mo fw-4 fs-30 fw-7'>/ mo</div>
                </div>
                <p className='texts'>Per month, per company or team members</p>
                <ul className='check'>
                  <li className='flex-three'>Vip listing</li>
                  <li className='flex-three'>Support 24/7</li>
                  <li className='flex-three'>Quick access to customers</li>
                  <li className='flex-three'>Auto refresh ads</li>
                </ul>
                <div className='button-pricing'>
                  <a className='sc-button btn-1' href='pricing.html'>
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='box box-style'>
                <div className='sub-title fs-30 fw-7'>Enterprise</div>
                <p className='text-sub fw-6'>
                  Automatically reach potential customers
                </p>
                <div className='title-price flex'>
                  <h2>$120</h2>
                  <div className='mo fw-4 fs-30 fw-7'>/ mo</div>
                </div>
                <p className='texts'>Per month, per company or team members</p>
                <ul className='check'>
                  <li className='flex-three'>Listing free</li>
                  <li className='flex-three'>Support 24/7</li>
                  <li className='flex-three'>Quick access to customers</li>
                  <li className='flex-three'>Auto refresh ads</li>
                </ul>
                <div className='button-pricing'>
                  <a className='sc-button btn-1' href='pricing.html'>
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flat-contact2 relative'>
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

export default HomePages;

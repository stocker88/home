import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader2 from './partials/SectionHeader2';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import { useState } from 'react';
import Modal from '../elements/Modal';
import ContactForm from '../elements/ContactUs';
import history from '../../history';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const innerClasses = classNames(
'hero-inner section-inner',
);

const Blog = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);
  const [pictureActive, setPictureActive] = useState(false);
  const showContactForm = useState(false)

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const openPicture = (e) => {
    e.preventDefault();
    setPictureActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const closePicture = (e) => {
    e.preventDefault();
    setPictureActive(false);
  }

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'We write about investing, analytics, and adjacent topics',
    paragraph: ''
  };

  return (
    <section
      {...props}
      id="resume"
      className={outerClasses}
      id="blog"
    >
      <div className="container">
        <div className={innerClasses}>
        <SectionHeader data={sectionHeader} className="center-content" />
        <br></br>
          <div className={splitClasses}>

            <div className="split-item">

              <a href="https://www.hellostocker.com/#/Attribution" style={{cursor:'pointer'}}>
              <div className="split-item-content reveal-from-left" data-reveal-container=".split-item">

                                <Image
                                  src={require('./../../assets/images/attribution.jpg')}
                                  alt="Features split 03"
                                  style={{width: 450, borderRadius: 5}}
                                  resizeMode={"cover"} />

                                  <br></br>

              </div>
              </a>
            </div>


          </div>
        </div>
      </div>
                           <div className="container-sm">

      <center>

        <Button color="cyan" type="button" onClick={openModal}>
          <span className="btn-inner--icon mr-1" >
            <i className="ni ni-cloud-download-95" />
          </span>
          <p style={{fontFamily:"Arial"}}>SUBSCRIBE TO BETA</p>
          </Button>
      </center>


      <div className="reveal-from-bottom" data-reveal-delay="1600">

            </div>
        <Modal
          id="video-modal"
          show={videoModalActive}
          handleClose={closeModal}
          form=<ContactForm/>
          videoTag="iframe" />
        <Modal
          id="video-modal"
          show={pictureActive}
          handleClose={closePicture}
          form=<ContactForm/>
          videoTag="iframe" />



</div>
    <br></br>
    <br></br>
    </section>

  );
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;

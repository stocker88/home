import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Linking } from 'react'
import * as emailjs from 'emailjs-com'
import ContactForm from '../elements/ContactUs';
import {Link} from 'react-router-dom'
import { openInbox } from 'react'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
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
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <Image
              src={require('./../../assets/images/stocker.png')}
              alt="Features split 01"
              width={500}
              height={50}
              />
            <div className="container-xs">
              <br></br>
              <br></br>
              <p style={{ color: 'white', fontSize: "25px" }} className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="600">
                The first social and commission free trading app
                <br></br>that empowers people with cutting edge analytics
                </p>
              <br></br>
              <div className="reveal-from-bottom" data-reveal-delay="1200">
                  <ButtonGroup>
                    <Button color="dark" type="button" onClick={openModal}>
                      <span className="btn-inner--icon mr-1">
                        <i className="ni ni-cloud-download-95" />
                      </span>
                      SUBSCRIBE TO BETA
                      </Button>
                      <a href={`mailto:aness.hussein.ali@gmail.com,ulyanats@gmail.com`}>
                    <Button size="lg" color="primary" >
                      EMAIL US
                      </Button>
                      </a>
                  </ButtonGroup>
             </div>
            <div className="reveal-from-bottom" data-reveal-delay="1600">
                          <br></br>
              </div>
            </div>
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
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;

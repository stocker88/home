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

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const innerClasses = classNames(
'hero-inner section-inner',
);

const FeaturesSplit = ({
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-cyan center-content-mobile fw-600 tt-u mb-8 bold" style={{fontWeight: 'bold'}}>
                  Beautiful and Insightful Analytics
                  </div>
                <h3 className="mt-0 mb-12 center-content-mobile " style={{color:'black'}}>
                  All in one 🔥
                  </h3>
                <p className="m-0 " style={{color:'grey',fontSize:"min(21px,max(16px,1vw))", fontWeight: 'normal'}}>
                  <ul>
                  <li> Financial and fundamental data, macroeconomics, earnings calendar and company prospects </li>
                  <li> Discuss investment ideas, share your ideas with the community, see what's trending </li>
                   <li> Educate yourself and others through our educational materials and influencers' channels</li>
                   </ul>
                  </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/analytics.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-cyan center-content-mobile fw-600 tt-u mb-8" style={{fontWeight: 'bold'}}>
                  Hot investment opportunities
                  </div>
                <h3 className="mt-0 mb-12 center-content-mobile" style={{color:'black'}}>
                  Find the one 💸
                  </h3>
                <p className="m-0 " style={{color:'grey',fontSize:"min(21px,max(16px,1vw))", fontWeight: 'normal'}}>
                  <ul>
                  <li>Hot investments are accessible via our screener: leverage our Social Sentiment and Financial metrics to easily shop and navigate through a huge universe of stocks and cryptos</li>
                  <li>Stay on top of the hottest trends: screen on market news and insights</li>
                  <li>Find the next TSLA, the next GME, the next Cryptocurrency, start the journey</li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/screening.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-cyan fw-600 tt-u mb-8 center-content-mobile" style={{fontWeight: 'bold'}}>
                  Video Oriented Social Platform
                  </div>
                <h3 className="mt-0 mb-12 center-content-mobile" style={{color:'black'}}>
                  Be the one 🚀
                  </h3>
                <p className="m-0 " style={{color:'grey',fontSize:"min(21px,max(16px,1vw))", fontWeight: 'normal'}}>
                  <ul>
                  <li> Discuss investment ideas, share your activity and see what people are trading</li>
                  <li> Follow and chat with your friends, share your findings and insights</li>
                  <li> Educate yourself and others through our educational material and influencers' channels </li>
                  </ul>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/social.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
                           <div className="container-sm">

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


    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;

import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Hot investment opportunities at your fingertips',
    paragraph: ''
  };

  const iconSize = 50;
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Follow CEOs and Access company 360 overviews with Earnings, Balance Sheet, Revenues and more
                    </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Leverage our stock screener: sort and filter on Social and Financial Metrics to target new investment ideas
                    </h4>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Commission free trading
                    </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Interact with the community through our social platform: exchange and monetize trade ideas
                    </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Educate yourself with our investment tips, educate the community and help us empower the people!
                    </h4>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={iconSize}
                      height={iconSize} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" style={{color:"grey", fontWeight:"200", fontSize:"20px"}}>
                    Receive direct support from Investment Banking Traders and Machine Learning experts
                    </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;

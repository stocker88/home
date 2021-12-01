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
import MathJax from 'react-mathjax2'

const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
const content = `This can be dynamic text (e.g. user-entered) text with ascii math embedded in $$ symbols like $$${ascii}$$`

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const innerClasses = classNames(
'hero-inner section-inner',
);


const PrivacyPolicy = ({
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
    "scroll-to-top",
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
  const formulaForSelection = `SP500^{Weight}_{TechnologyIndustry}*(Portfolio^{Return}_{TechnologyStocks}-SP500^{Return}_{TechnologyIndustry})`
  const formulaForAllocation1 = `(Portfolio^{Weight}_{TechnologyStocks}-SP500^{Weight}_{TechnologyIndustry})`
  const formulaForAllocation2 = `* (SP500^{Return}_{TechnologyIndustry}-SP500^{TotalReturn})`
  const formulaForInteraction1 = `(Portfolio^{Weight}_{TechnologyStocks}-SP500^{Weight}_{TechnologyIndustry})`
  const formulaForInteraction2 = `* (Portfolio^{Return}_{TechnologyStocks}-SP500^{Return}_{TechnologyIndustry})`
  return (
    <section
      {...props}
      id="resume"
      className={outerClasses}
    >
      <div className="container-sm">
      <br></br>
      <br></br>

          <center>
                     <Image
                       src={require('./../../assets/images/banner.PNG')}
                       alt="sun.jpg"
                       style={{width: 750, borderRadius: 5}}
                       resizeMode={"cover"} />
                  </center>

<p style={{color:'#222125', opacity:"0.8", padding:"min(25px,6vw)", fontSize:"min(21px,max(16px,1vw))"}}>
It is well known that over the long run, only very few investors manage to outperform the market.
<br></br>
<br></br>
The US market is replicated by the S&P index, and anyone can easily buy it - in the same way you would buy a stock - by investing in the SPY: an ETF that tracks and delivers the same performance as the S&P.
<br></br>
<br></br>
Market volatility has been surging, and it is now very tempting to do stock picking with the hope of outperforming the market.
<br></br>
<br></br>
In practise, most of people who select their stocks fail to outperform the market, resulting in a loss of time and energy: they could have realized more profits by buying the market and not worry at all!
<br></br>
<br></br>
<i style={{color:'black'}}>
What if you could understand your strengths and weaknesses, and focus on what you are good at?
</i>
<br></br>
<br></br>

<h3 style={{color:'black'}}>
Performance Attribution
</h3>


In Stocker, the screening functionality allows you to segment the market in many ways. For simplicity, let's assume we decide to segment the market by Industry.
<br></br>
<br></br>
<p>Stocker Performance Attribution allows you to understand what are your skills:</p>
<b> 1) Selection Skill</b>
 <br></br>
 <br></br>
 Are you great at selecting the stocks that will outperform its respective industry segment?  
You could be doing great at picking technology stocks that outperform the S&P technology industry, and doing not so well at picking health stocks that outperform the S&P health industry.
<br></br>
<br></br>
<b>2) Allocation Skill</b>
 <br></br>
 <br></br>Are you great at allocating your investments across industries?
You could be doing great at forecasting what would happen to the technology industry, increasing your positions when you expect the sector to be doing well, and decreasing them when you expect it to underperform.
<br></br>
<br></br>
<b>3) Interaction Skill</b>
 <br></br>
 <br></br>
 Do you understand your strengths? For example, if you had superior selection skills and overweighted that particular industry, the interaction effect would be positive! If you had superior selection, but underweighted that industry, the interaction effect would be negative.
In this case, you did not take advantage of the superior selection by allocating more assets to that industry. Don’t worry, we are here to help you! 

<br></br>
<br></br>
<i style={{color:'black'}}>
Sounds obvious? How would you quantify your skills? Can you put numbers on each category?
</i>
<br></br>

<br></br>
<h3 style={{color:'black'}}>
The Math behind
</h3>
In <a style={{color:"#01CAFF"}}href="http://hellostocker.com">Stocker</a>, you can segment with respect to many metrics: stock fundamentals such as value, growth, P/E ratio, and other financial metrics such as Short Ratio, as well as Popularity and Social metrics.
<br></br>
<br></br>
Again, for simplicity, let's assume the segmentation is done by industry. Our benchmark here is the S&P: the index that replicate the US market.
<br></br>
<br></br>
<i>We list below the calculation methodologies - a positive figure means you are skilled, the higher the number the more skilled you are.</i>
<br></br>
<br></br>
<b> 1) Selection Skill</b>
 <br></br>
 <br></br>

The selection effect measures the investor’s ability to select securities within a given
industry relative to the SP500. A positive selection effect occurs for a particular industry when our portfolio return is greater than the benchmark return.
<br></br>
<br></br>
The Selection Effect for the Technology industry is calculated using the below metrics and formula:
<br></br>
<br></br>
<ul>
<li> The Technology industry weight in the SP500</li>
<li> The Technology industry return of the SP500</li>
<li> The Technology industry return of our Portfolio</li>
</ul>
<br></br>
                 <MathJax.Context input='tex'>
                     <div style={{fontSize: "min(25px,max(10px,1vw))"}}>
                         <MathJax.Node>{formulaForSelection}</MathJax.Node>
                     </div>
                 </MathJax.Context>
<br></br>
<br></br>

<b>2) Allocation Skill</b>
 <br></br>
 <br></br>
The allocation effect measures the investor’s ability to effectively allocate their portfolio’s assets to various industries.
Positive allocation occurs when the portfolio is overweighted in an industry that outperforms the SP500 and underweighted in
an industry that underperforms the SP500.
 <br></br>
 <br></br>
 The Allocation Effect for the Technology industry with respect to our investor's portfolio is calculated using the below metrics and formula:
 <br></br>
 <br></br>
 <ul>
 <li> The Technology industry weight in our Portfolio</li>
 <li> The Technology industry weight in the SP500</li>
 <li> The Technology industry return of the SP500</li>
 <li> The total return of the SP500</li>
 </ul>
<br></br>
                 <MathJax.Context input='tex'>
                     <div style={{fontSize: "min(25px,max(12px,1.2vw))"}}>
                         <MathJax.Node>{formulaForAllocation1}</MathJax.Node>
                         <MathJax.Node>{formulaForAllocation2}</MathJax.Node>
                     </div>
                 </MathJax.Context>

<br></br>
<br></br>

 <b>3) Interaction Skill</b>
  <br></br>
  <br></br>
If you are good at selecting stocks for a particular industry, you should overallocate the weight of this industry in your portfolio.
 <br></br>
 <br></br>
 A positive interaction effect on the technology industry would occur for instance when both of the following conditions are met:
 <br></br>
 <br></br>
 <ul>
 <li>the investor's portfolio <i>weight</i> in the technology industry was greater than the SP500 weight in the same industry, </li>
 <li>the investor's portfolio <i>return</i> for the technology industry was greater than the SP500 return for the same industry. </li>
 </ul>
 <br></br>
 In this scenario, the investor exercised good selection and overallocated assets to that segment.
 <br></br>
 <br></br>
 The interaction effect would also be positive if the investor underweighted the industries for which he underperformed because of poor selection skills.
  <br></br>
  <br></br>
 The Interaction Effect for the Technology industry with respect to our investor's portfolio is calculated using the below metrics and formula:
 <br></br>
 <br></br>
  <ul>
 <li> The Technology industry weight in our Portfolio</li>
 <li> The Technology industry return of our Portfolio</li>
 <li> The Technology industry weight in the SP500</li>
 <li> The Technology industry return of the SP500</li>
  </ul>
<br></br>
                 <MathJax.Context input='tex'>
                     <div style={{fontSize:"min(25px,max(12px,1.2vw))"}}>
                         <MathJax.Node>{formulaForInteraction1}</MathJax.Node>
                         <MathJax.Node>{formulaForInteraction2}</MathJax.Node>
                     </div>
                 </MathJax.Context>


          </p>


<p style={{color:'#222125', opacity:"0.8", padding:"min(25px,6vw)", fontSize:"min(21px,max(16px,1vw))"}}>
<h3 style={{color:'black'}}>
Know your strengths: outperform the market
</h3>
Summing all three effects will tell you how well you are doing over the market. This will tell you:
   <br></br>
   <br></br>
   <ul>
   <li> how good you are at selecting stocks</li>
   <li> how good you are at allocating your positions</li>
   <li> and how good you know your overall strengths and manage the interaction effect of allocating and selecting stocks </li>
</ul>
<br></br>
These metrics and analytics will be calculated for you in <a style={{color:"#01CAFF"}}href="http://hellostocker.com">Stocker</a> so that you can always track how skilled you are, accross multiple market segmentation, and against your respective country and market benchmark.
<br></br>
<br></br>

By <a href={`mailto:aness.hussein.ali@hellostocker.com`} style={{color:"#01CAFF"}}>Aness Hussein Ali</a> · December 11, 2021

</p>
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

PrivacyPolicy.propTypes = propTypes;
PrivacyPolicy.defaultProps = defaultProps;

export default PrivacyPolicy;

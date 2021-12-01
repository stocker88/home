import React, { Component } from "react";
import {Link} from 'react-scroll'
import Image from '../elements/Image';

class Header extends Component {

  render() {

    return (

    <header id="home">
            <nav class="opaque " id="nav-wrap">
                <div className="header-nav-inner">
                <ul id="nav" className="nav">
                  {/*        <li>
                      <a className="smoothscroll" href="#overview" style={{color:"white", fontSize:"min(23px,max(17px,1vw))"}}>
                        Overview
                      </a>
                      </li>

                       <li>
                        <a className="smoothscroll" href="#features" style={{color:"white", fontSize:"min(23px,max(17px,1vw))"}}>
                        Features
                        </a>
                         </li>

                    <a className="smoothscroll" href="#blog" style={{color:"white", fontSize:"min(23px,max(16px,1vw))"}}>
                          Blog
                        </a>
                         </li>
                         <li> */}

                      <li>
                                  <a href={`mailto:support@hellostocker.com`} >

                                    <svg
                                      width="19"
                                      height="19"
                                      viewBox="0 0 490 490"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <title>Twitter</title>
                                      		<path d="M295.2,257.8L251.4,295c-3.5,2.9-8.6,2.9-12,0l-43.8-37.1L16.7,409.1h456.6L295.2,257.8z" fill="white"/>
                                            <polygon points="0,92.2 0,397.8 180.1,245 			" fill="white"/>
                                            <polygon points="16.7,80.9 245,274.6 473.3,80.9 			" fill="white"/>
                                            <polygon points="309.9,245 490,397.8 490,92.2 			" fill="white"/>
                                    </svg>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://twitter.com/HelloStocker" >

                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 16 16"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <title>Twitter</title>
                                      <path
                                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="white"/>
                                    </svg>
                                  </a>
                                </li>
                                        <li>
                                          <a href="https://www.instagram.com/stocker_app/">
                                            <svg
                                              width="20"
                                              height="20"
                                              viewBox="0 0 23 23"
                                              xmlns="http://www.w3.org/2000/svg">
                                              <title>Twitter</title>
                                              <path
                                                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" fill="white"/>
                                            </svg>
                                          </a>
                                        </li>
                                <li>
                                  <a href="https://t.me/stockerapp">
                                    <svg
                                      width="22"
                                      height="22"
                                      viewBox="0 0 23 23"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <title>Twitter</title>
                                      <path
                                        fill="white" d="m16 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>

                                </svg>
                                  </a>
                                </li>
              </ul>
                </div>
          </nav>


            <p className="scrolldown">
              <a className="smoothscroll" href="#about">
                <i className="icon-down-circle"></i>
              </a>
            </p>

               </header>
    );
  }
}

export default Header;

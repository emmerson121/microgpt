import React, { useState } from "react";
import './home.css';
import micro from './img/micro.jpg';
import flow1 from './img/flow1.png';
import flow2 from './img/flow2.png';
import flow3 from './img/flow3.png';
import flow4 from './img/flow4.png';
import seedify1 from './img/seedify1.png';
import seedify2 from './img/seedify2.png';
import ape from './img/ape.png';
import fullcode from './img/fullcode.png';
import optimal from './img/optimal.png';
import tick from './img/tick.svg'
import arrow from './img/arrow.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars, faEnvelope, faPlus} from "@fortawesome/fontawesome-free-solid";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin, faMedium, faTelegram, faTiktok, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'



const Home = () => {
    const [toggle, setToggle] = useState(true);

    return(
        <div>
            <div className="container">
            <div className="main">
                <div className="navBar">   
                <a href="/"><div className="image1"><img className="image" src={micro}  alt="microGPT" /></div></a>
                <div className="bar"><FontAwesomeIcon onClick={() => setToggle(!toggle)} className="famark" icon={faBars} /></div>
                </div>
                
            <div className="micro">
                <div><a className="part">Participate in 1M $MICRO AIRDROP</a></div>
                </div>

                <div className="line">
                    <div className="mainList">
                    <a href="/">
                    <img className="image" src={micro}  alt="microGPT" />
                    </a>

                    <ul className="list">
                    <li><a className="an" href="/">Home</a></li>
                    <li><a className="an" href="#feature">Features</a></li>
                    <li><a className="an" href="/innovation">Innovation</a></li>
                    <li><a className="an" href="http://localhost:3000/#products">Products</a></li>
                    <li><a className="an" href="https://microgpt.gitbook.io/microgpt">Whitepaper</a></li>
                    <li><a className="an" href="https://microgpt.io/MicroGPT-Deck.pdf">Pitchdeck</a></li>
                    <li><a className="an" href="https://microgpt.io/microgpt-impression.pdf">Impression</a></li>
                </ul>
                </div>

                <div className="but">
                    <div className="">
                    <div className="but1"><a className="but1" href="https://marketplace.visualstudio.com/items?itemName=MicroGPT.MicroGPT">Download</a></div>
                    </div>

                    <div className="">
                    <div className="but2"><a className="but3" href="https://microgpt.io/#products">Buy $MICRO</a></div>
                    </div>
                </div>
                </div>
                </div>

                <section>
                <div className="flow">
                    <div>
                        <img className="flow-1" src={flow1} alt="" />
                    </div>

                    <div>
                        <img className="flow-2" src={flow2} alt="" />
                    </div>
                </div>
                </section>

                <div className="opt">
                <div className="opt1">Optimize and monetize your coding experience with a new AI Partner</div>
                </div>

                <div className="paid">
                    <p className="paid1">Get paid whenever you use MicroGPT's products. You earn money, and we enhance our LLMs. It's a win-win.</p>
                </div>

                <div className="get-started">
                    <div className="">
                    <div className="micro1"><a className="mini" href="/">Get Started</a></div>
                    </div>

                    <div className="">
                    <div className="micro2"><a className="mini" href="/">Buy $MICRO</a></div>
                    </div>

                    <div className="">
                    <div className="micro2"><a className="mini" href="/">Claim</a></div>
                    </div>
                </div>  

                <div className="tagg">
                        <div className="tag"><a className="tags" href="/">X.com</a></div>
                        <div className="tag"><a className="tags" href="/">Telegram</a></div>
                        <div className="tag"><a className="tags" href="/">Dextools</a></div>
                        <div className="tag"><a className="tags" href="/">White Paper</a></div>
                        <div className="tag"><a className="tags" href="/">Pitch Deck</a></div>
                    </div>      

                    <div className="incubate">
                        <div className="incubate1">
                            <div className="incubate2">Incubated by</div>
                            <div className="seedify">
                            <img className="see1" src={seedify1} alt="" />
                        </div>
                        </div>

                        <div className="launch">
                            <div className="launch1">Launchpads</div>
                            <div className="seed">
                        <div>
                            <img className="see2" src={seedify2} alt="/" />
                        </div>

                        <div>
                            <img className="see3" src={ape} alt="" />
                        </div>
                        </div>
                        </div>

                        <div className="exchange">
                            Exchanges
                        </div>
                    </div>    

                <div className="code">
                  <img className="code1" src={fullcode} alt="" />  
                </div> 

                <div className="optim">
                    <div className="optim1">
                        <img className="opti" src={optimal} alt="" />
                    </div>

                    <div className="sent">
                    <div className="tangible">
                    Optimal Efficiency meets Tangible Rewards
                    </div>
                <br />

                <div className="phase">
                Each development phase is an opportunity to <span>earn $MICRO</span>, ensuring that your time spent coding translates directly into value.
                </div>
                </div>
                </div>

            <div id="feature">

                <div>
                <div className="machine">
                    <div className="machine1">Sophisticated Machine Learning to help you code <span>super efficiently</span></div>
                </div>
                </div>
                

                <div className="wrapper">
                    <div className="wrapp">
                    <div className="wrap1">
                    <div className="wrap">Real-time, Context-aware Suggestions</div>
                    <div className="para">Get instant code suggestions ranging from simple code snippets to entire functions, depending on the context of your existing code and past inputs</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Custom Feedback to suit your stlye</div>
                    <div className="para">Given the uniqueness of our individual coding journeys, MicroGPT allows you to adjust how much assistant it gives you, adapting to your preferences.</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Automated Code Refactoring</div>
                    <div className="para">microGPT optimizes your existing code in line with standard coding practice at the snap of a finger.</div>
                    </div>
                    </div>

                    {/* <div className="color1"></div> */}

                    <div className="wrapp2">
                    <div className="wrap1">
                    <div className="wrap">Intelligent Debugging</div>
                    <div className="para">Detect and resolve issues quickly with microGPT. Smart detection as you type make errors less likely.</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Supports your coding language</div>
                    <div className="para">Being able to speak multiple programming languages makes microGPT handy for various projects.</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Documentation Assistance</div>
                    <div className="para">Generates in-line comments and documentation, making your projects documentation always easy to update</div>
                    </div>
                    {/* <div className="color2"></div> */}
                </div>
                </div>
                </div>
                
                <div id="products">
                <div className="first">
                <div className="product">
                <div className="pro">Products</div>

                <div className="dash">DASHBOARD</div>

                <div className="user">Allow users to manage authentication, interact with GitHub repositories, track project data, and modify announcements</div>
                </div>

                <div className="items">
                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Auth</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Github Integration</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Analytics</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Revenue</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Settings</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>User Profile</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Modify channel announcements, templates, etc.</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Connect Telegram channels.</div>
                    </div>

                    <div className="goto">
                    <div><a className="ahead" href="/">Go to</a></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
                </div>
                </div>
                <br />
                
                <div className="second">
                    <div></div>
                   <div className="editor">
                    <div className="edit">
                        <div>MICRO EDITOR <span>Coming soon</span></div>
                    </div>

                    <div className="combines">Combines lightweight yet strong editing capabilities 
                        with AI-powered code optimization and security checks</div>
                    </div>

                    <div className="itemList2">
                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Find ways to optimize code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>NLP Search</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Pinch to summarize</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Optimize code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Auto code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Security checks</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Auto organize folders</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Harmonize naming and namespaces</div>
                    </div>
                </div>
                </div>
                <br />

                <div className="third">
                <div className="editor">
                    <div className="edit">
                        <div>MICRO PLUGINS</div>
                    </div>

                    <div className="combines">Includes capabiliities such as error correction, code explanation, predictive suggestions, code search, and summary.</div>
                    </div>

                <div className="itemList3">
                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Find ways to optimize code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Fixed errors</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Logical errors</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Explain function of code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Settings</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Replace stubs</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Prediction</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>NLP search</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Pinch to summarize</div>
                    </div>

                    <div className="goto">
                    <div><a className="ahead" href="/">Go to</a></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
                </div>

                <br />

                <div className="fourth">
                   <div className="editor">
                    <div className="edit">
                        <div>EXTENSION</div>
                    </div>

                    <div className="combines">Includes tools for code review, optimization, error resolution, and code logic explanation</div>
                    </div>

                    <div className="itemList4">
                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Find ways to optimize code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Fix errors</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Logical errors</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Explain function of code</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Replace stubs</div>
                    </div>
                </div>
                </div>

                
                <div className="fifth">
                   <div className="editor">
                    <div className="edit">
                        <div>MICRO ALERTS</div>
                    </div>

                    <div className="combines">Detect updates and send them in a channel. Automates the delivery of update notifications and announcements.</div>
                    </div>

                    <div className="itemList5">
                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Detect GitHub commits</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Analyze changes with GPT</div>
                    </div>

                    <div className="ticker">
                        <img src={tick} alt="" />
                        <div>Create an announcement based on the template created by user</div>
                    </div>

                    <div className="goto">
                    <div><a className="ahead" href="/">Go to</a></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
                </div>
                      

            <div className="intro">
                <div className="pioneer">Introducing a pioneering 'Code to Earn' model that rewards your development efforts with <span>$MICRO</span></div>

                <div className="discover">
                    <div><a className="ahead" href="/">Discover more</a></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
            </div>   

            <div className="team">
                <div className="meet">Meet the <span>awesome team</span></div>
            
                <div className="cover">
                    <div className="wrap1">
                    <div className="wrap">Maj</div>
                    <div className="founder">Founder & CEO</div>
                    <div className="details">Maj, Founder and CEO of MicroGPT, brings extensive 
                        experience in game and software development to lead the creation of 
                        advanced AI tools for developers. His expertise drives MicroGPT's 
                        mission to transform productivity and innovation in the tech industry</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Reflex</div>
                    <div className="founder">CoFounder & CMO</div>
                    <div className="details">Reflex, Co-founder and CMO of MicroGPT, is a dynamic
                         leader with a strategic vision for driving growth and brand presence 
                         in the tech industry. His expertise in marketing and innovation powers
                          MicroGPT’s mission to make advanced AI tools accessible and 
                          transformative for developers worldwide</div>
                    </div>

                    <div className="wrap1">
                    <div className="wrap">Fuse</div>
                    <div className="founder">CTO</div>
                    <div className="details">Fuse, CTO of MicroGPT, is a technical powerhouse 
                        dedicated to advancing AI-driven solutions for developers. With a deep 
                        background in software engineering and innovation, Fuse leads the 
                        development of MicroGPT's cutting-edge tools, driving the platform's
                         commitment to scalability, efficiency, and transformative impact in
                          the tech industry</div>
                    </div>
                    </div>
            </div>  

            <div className="questions">
                <div className="frequent">FAQs</div>

                <div className="gpt gpt1">
                <p className="microg">What is MicroGPT?</p>
                <div className="img"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

                <div className="gpt gpt2">
                <p className="microg">What data has MicroGPT been trained on?</p>
                <div className="img"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

                <div className="gpt gpt3">
                <p className="microg">Is MicroGPT free?</p>
                <div className="img"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

                <div className="gpt gpt4">
                <p className="microg">What languages, IDEs, and platforms does MicroGPT supports?</p>
                <div className="img"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

                <div className="gpt gpt5">
                <p className="microg">Does MicroGPT 'copy/paste'?</p>
                <div className="img"><FontAwesomeIcon icon={faPlus} /></div>
                </div>

                <div className="gpt gpt6">
                <p className="microg">For more Questions</p>
                <div><img src="data:image/svg+xml,%3csvg%20width='258'%20height='21'%20viewBox='0%200%20258%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M247.704%2010.8536C247.899%2010.6583%20247.899%2010.3417%20247.704%2010.1464L244.522%206.96447C244.327%206.7692%20244.01%206.7692%20243.815%206.96447C243.619%207.15973%20243.619%207.47631%20243.815%207.67157L246.643%2010.5L243.815%2013.3284C243.619%2013.5237%20243.619%2013.8403%20243.815%2014.0355C244.01%2014.2308%20244.327%2014.2308%20244.522%2014.0355L247.704%2010.8536ZM10.6498%2011H247.35V10H10.6498V11Z'%20fill='white'/%3e%3c/svg%3e" class=" min-w-[20px] -768:max-w-[150px] flex-1 -500:hidden" alt=""></img></div>
                <div className="arrow">
                    <FontAwesomeIcon className="envelope" icon={faEnvelope} />
                    <div className="mail">contact@microGPT.io</div>
                </div>
                </div>
            </div>    

            <div className="call">
                <div className="smallerimg">
                    <img className="small1" src={flow3} alt="" />

                    <img className="small2" src={flow4} alt="" />
                </div>
                    <div className="bot">
                        Calling all <span>autobots</span> developers!
                        microGPT to your rescue
                    </div>

                    <div className="elevate">TO ELEVATE YOUR CODING EXPERIENCE</div>

                    <div className="discover">
                    <div><a className="ahead" href="/">Get Started</a></div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>

                <div className="overall">
                    
                    <div className="mainimg">
                    <img className="lastimg" src={micro}  alt=""/>
                    <p className="paragraph">MICROGPT</p>
                    </div>
                    <div className="column1">
                    <div className="audit">AUDITED BY ASSUREDEFI</div>
                    <div className="coding">Enhance your coding experience while earning rewards.</div>
                        <div className="join">
                            <div><a className="short" href="/">Join Community</a></div>
                            <div><a className="short" href="/">Download</a></div>
                        </div>
                    </div>


                    <div className="plat">
                        <div className="plat1"><a className="tinted" href="/">Platform</a></div>
                        <div className="plat1"><a className="short" href="/">Home</a></div>
                        <div className="plat1"><a className="short" href="/">Innovators</a></div>
                        <div className="plat1"><a className="short" href="/">FAQs</a></div>
                    </div>

                    <div className="plat">
                    <div className="plat1"><a className="tinted" href="/">External Links</a></div>
                        <div className="plat1"><a className="short" href="/">Whitepaper</a></div>
                        <div className="plat1"><a className="short" href="/">Pitchdeck</a></div>
                        <div className="plat1"><a className="short" href="/">Impression</a></div>
                    </div>

                    <div className="plat">
                    <div className="plat1"><a className="tinted" href="/">Legal Links</a></div>
                        <div className="plat1"><a className="short" href="/">Disclaimer</a></div>
                        <div className="plat1"><a className="short" href="/">Privacy Policy</a></div>
                        <div className="plat1"><a className="short" href="/">Terms of Service</a></div>
                    </div>
                </div>

                <div className="add">
                    <div className="address">
                    Address:
                    <br />
                    Trust Company Complex, Ajeltake Road, Ajeltake Island, Majuro, Republic of the Marshall Islands MH 96960
                    </div>

                    <div className="social">
                        <div className="link"><a className="link1" href="https://linkedin.com"><FontAwesomeIcon className="linked" icon={faLinkedin} /></a></div>
                        <div className="link"><a className="link1" href="https://x.com"><FontAwesomeIcon className="linked" icon={faSquareXTwitter} /></a></div>
                        <div className="link"><a className="link1" href="https://instagram.com"><FontAwesomeIcon className="linked" icon={faInstagram} /></a></div>
                        <div className="link"><a className="link1" href="https://telegram.com"><FontAwesomeIcon className="linked" icon={faTelegram} /></a></div>
                        <div className="link"><a className="link1" href="https://tiktok.com"><FontAwesomeIcon className="linked" icon={faTiktok} /></a></div>
                        <div className="link"><a className="link1" href="https://medium.com"><FontAwesomeIcon className="linked" icon={faMedium} /></a></div>
                        <div className="link"><a className="link1" href="https://youtube.com"><FontAwesomeIcon className="linked" icon={faYoutube} /></a></div>
                    </div>
                </div>

                <div className="copy">
                    <div className="line"></div>
                    <div className="copyright">Copyright 2024. All rights reserved</div>
                    <div></div>
                </div>
                </div>
            
            {!toggle ?
        <div className='navbar'>
      <div className='nav1'>
      <div className="xmark"><FontAwesomeIcon onClick={() => setToggle(true)} icon={faXmark} /></div>
      {/* <div className="xmark"><FontAwesomeIcon className="famark" icon={faBars} /></div> */}
    {/* <div className='font'> <div className='xmark'><FontAwesomeIcon onClick={() => setToggle(true)} className='faMark' icon={faXmark} /></div></div> */}
      <ul className='options'>
                <li><a className="col1" href="/">Home</a></li>
                <li><a className="col1" href="#feature">Features</a></li>
                <li><a className="col1" href="/innovation">Innovation</a></li>
                <li><a className="col1" href="http://localhost:3000/#products">Products</a></li>
                <li><a className="col1" href="https://microgpt.gitbook.io/microgpt">Whitepaper</a></li>
                <li><a className="col1" href="https://microgpt.io/MicroGPT-Deck.pdf">Pitchdeck</a></li>
                <li><a className="col1" href="https://microgpt.io/microgpt-impression.pdf">Impression</a></li>
      </ul>
      </div>
    </div>
                
            : ''}
            </div>
    )
}

export default Home
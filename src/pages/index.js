import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic0 from '../assets/images/stampd.png';
import pic1 from '../assets/images/projectweek.png';
import pic2 from '../assets/images/notes.png';
import pic3 from '../assets/images/safespace.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <p>
            Living in Central Texas <br />
            Reach out and Let's Chat
          </p>
        </header>
        <ul className="icons major">
          {config.contactLinks.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <h2>Current Projects</h2>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic0} alt="S&J Architects" />
        </div>
        <div className="content">
          <h2>Stampd</h2>
          <p>
            Tired of searching for your credentials? Waiting on hold with the <br/>
            registrar office only to have to send in numerous documents and having to <br/>
            wait for weeks? Stampd allows you to have your credentials in one place <br/>
            directly from your institution and held on the blockchain. 
          </p>
          <ul className="icons">
            {config.pL1.map(social => {
              const { style, icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${style} ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="S&J Architects" />
        </div>
        <div className="content">
          <h2>S&J Architects</h2>
          <p>
            A responsive modern architecture website <br />
            Built with HTML, CSS and ES6 JavaScript <br />
          </p>
          <ul className="icons">
            {config.pL1.map(social => {
              const { style, icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${style} ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>Notes</h2>
          <p>
            A place to keep notes and the ability to update and remove them{' '}
            <br />
            Made using React, Redux and Styled Components
          </p>
          <ul className="icons">
            {config.pL2.map(social => {
              const { style, icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${style} ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>Safe Space</h2>
          <p>
            Send yourself a positive text and brighten your day <br />
            Built by a team of five, my focus was on the backend <br />
            Utilizing express node and twillio for the messaging service <br />
          </p>
          <ul className="icons">
            {config.pL3.map(social => {
              const { style, icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${style} ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>HTML and CSS</h3>
            <p>
              Spent time focusing on the fundamentals to gain a deeper
              understanding and build a strong foundation
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>JavaScript</h3>
            <p>
              Focusing with ES6 and continuing to grown in JavaScript skill set
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>React</h3>
            <p>
              Always transforming and growing, I expand my skills to learn the
              newest information in regards to react. Proficient with Redux and
              growing my knowledge with hooks.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Node</h3>
            <p>
              Node has been my primary focus for backend development Continuing
              to grow my knowledge base beyond just node.
            </p>
          </li>
          {/* <li className="icon fa-heart">
            <h3></h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li> */}
        </ul>
      </div>
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;

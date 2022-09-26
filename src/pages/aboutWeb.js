import React from 'react';
import RegularText from '../components/Template/RegularText';
import Title from '../components/Template/Title';
import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const AboutWeb = () => (
  <Main fullpage>
    <div className="flex-center full-width">
      <div className="blog-container aboutme" style={{ fontFamily: 'Lato' }}>
        <Title>Greetings!</Title>
        <div className="flex-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <RegularText>
            I’m Mufei, an engineer who hopes to solve problems with beautiful.
            <br />
            <br />
            I majored in computer science in college and fortunately found my passion for HCI and
            Machine Learning before graduating in May 2021.
            <br />
            <br />
            I love drawing and have spent time on fine art for years. I do sketches, watercolors,
            and paintings. Back in college, I was a member of the ArtsEngine program and kept
            updating my drawings on Instagram. However, I turned the private mode on while learning
            digital drawing since I became shy about my previous work.
            <br />
            <br />
          </RegularText>
          <img
            src={`${PUBLIC_URL}/images/myPic.png`}
            className="me"
            alt=""
            style={{ width: '308px' }}
          />
        </div>
        <RegularText>
          Upon graduation, I became a database developer, then worked as a UX Engineer. I’m
          interested in cognitive science and social science, which is one of the reasons I’ve been
          passionate about creating solutions to improve user experience. For me, HCI is a fantastic
          combination of art and logic! This website displays some of my school projects.
          To learn more about my professional work, feel free to reach out to mufei@umich.edu.
          <br />
          <br />
          Fun Fact: I hand drew this profile picture and developed this website!
        </RegularText>
      </div>
    </div>
  </Main>
);
export default AboutWeb;

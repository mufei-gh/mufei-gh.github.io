import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import RegularText from '../components/Template/RegularText';
import Title from '../components/Template/Title';
import PrototypeContainer from '../components/Projects/Prototype';
import BackToPortfolio from '../components/Projects/BackToPortfolio';

const imageBaseUrl = '/images/projects/';

const RegTextBlue = (props) => <div className="color-00adb5 dis-contents">{props.children}</div>;

RegTextBlue.propTypes = {
  children: PropTypes.string.isRequired,
};

const RegTextNavy = (props) => <div className="highlight dis-contents">{props.children}</div>;

RegTextNavy.propTypes = {
  children: PropTypes.string.isRequired,
};

const NewKidsTimes = () => (
  <div className="full-width new-kids-times flex-center">
    <div className="full-width no-margin arrow-container">
      <Link className="arrow-icon" to="/work">
        <svg
          width="64"
          height="38"
          viewBox="0 0 64 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM64 16.5L3 16.5V21.5L64 21.5V16.5Z"
            fill="#00ADB5"
          />
        </svg>
      </Link>
    </div>
    <div className="blog-container">
      <RegularText className="upperTitle">Tablet App</RegularText>
      <div className="header">
        <div className="part1">The New Kids</div>
        <div className="part2">&nbsp;Times</div>
      </div>
      <div className="subheader">
        <div className="left">Research / UX / Visual Design / Program Testing</div>
        <div className="middle" />
        <div className="right">Project Duration: 3 months</div>
      </div>
      <Title className="subtitle">Problem</Title>
      <RegularText className="subContent">
        News access is not friendly for kids in 4th grade through 8th grade who are willing to
        explore the world since news generally is from{' '}
        <RegTextBlue>adults&apos; perspectives</RegTextBlue> with{' '}
        <RegTextBlue>hard-to-follow terms.</RegTextBlue> Also, there are{' '}
        <RegTextBlue>too many negativities</RegTextBlue> with in news magazines. Therefore,
        traditional news articles can be confusing and boring to read for kids and teenagers.
      </RegularText>
      <Title className="subtitle">The project</Title>
      <RegularText className="subContent">
        Delivers a channel as an App on iPad that creates enjoyable experiences for kids to gain
        news literacy at any time.
      </RegularText>
      <Title className="subtitle">Improvement</Title>
      <RegularText className="subContent">
        To improve users’ experience reading news, the team{' '}
        <RegTextBlue> attaches explanations to words</RegTextBlue> that exceed users’ reading level,
        web crawls news articles with <RegTextBlue>kids or teenagers related topics</RegTextBlue>{' '}
        and adds{' '}
        <RegTextBlue>more positive news</RegTextBlue> to the app. Moreover, the team creates a{' '}
        <RegTextBlue>“View” channel with opinion articles</RegTextBlue> for kids to know thoughts
        toward news topics from different people, with an interactive activity to submit their ideas
        through the article submission function.
      </RegularText>
      <Title className="subtitle">Contribution</Title>
      <RegularText className="subContent">
        The News Kids Times is a course project designed and developed by a team of five. I was
        responsible for{' '}
        <RegTextBlue>every UI/UX-related job{' '}</RegTextBlue>
        (basically everything you see on this page) with front-end and back-end engineers. Besides,
        I implemented a few test cases on the front end and managed the
        project with a Gantt chart.
      </RegularText>
      <PrototypeContainer
        data={[
          'prototypeSlider.png',
          'prototypeSlider1.png',
          'prototypeSlider2.png',
          'prototypeSlider3.png',
        ].map((d) => `${imageBaseUrl}newKidsTimesPrototype1/${d}`)}
        noHeader
        arrowUp={false}
        innerstyle={{ paddingBottom: '2em' }}
        arrowColor="#0D0D46"
      />
      <Title className="researchTitle">Research & Discovery</Title>
      <RegTextNavy>We did some media research asking questions below:</RegTextNavy>
      <RegularText className="question">
        How do you describe news in a few words?
        <br />
        What do you think about the news?
        <br />
        Please tell me one of your experiences of reading the news.
        <br />
        Do you read the news often?
        <br />
        Is there anything that prevents you from reading the news?
        <br />
        Is there anything you think needs to be improved regarding current news articles?
        <br />
        What do you feel when you read the news?
        <br />
        Do you trust the news? If not, Why?
        <br />
      </RegularText>
      <RegTextNavy className="finding">
        Then concluded the highlights of research findings.
      </RegTextNavy>
      <div className="researchFeatures">
        <Title className="features">Vocabulary Explanation</Title>
        <RegularText className="featuresContent">
          During the research, we found some users mentioned the news generally contain some
          hard-to-follow terms that they do not understand, and it is exhausted to check each of
          them manually. Therefore, we built the vocabulary explanation function that{' '}
          <RegTextBlue>enables users to view word explanations on the same page.</RegTextBlue> The
          vocabulary that exceeds 4th-grade reading level comes with an explanation.
        </RegularText>
        <Title className="features">CBC Kids News as a source of news</Title>
        <RegularText className="featuresContent">
          Some users are interested in reading news but feel upset because kids and teenagers, in
          general, are not involved in news articles. To encourage the interest, the team includes
          CBC Kids News as a source of the news posted in App,{' '}
          <RegTextBlue>balancing traditional news and kids-related topics.</RegTextBlue>
        </RegularText>
        <Title className="features">More positive contents</Title>
        <RegularText className="featuresContent">
          The young audience would like to know important things happening with rational thinking,
          but many negativities in the news are still too heavy for them. Thus, the team decided to
          include more news articles with positive stories{' '}
          <RegTextBlue>balancing positive and critical facts on the back end.</RegTextBlue>
        </RegularText>
        <Title className="features">&quot;View&quot; as one category</Title>
        <RegularText className="featuresContent">
          Some users said they feel ignored and bored because news articles are always from
          professional adults’ perspectives. The team builds a view channel with{' '}
          <RegTextBlue>opinion articles containing various perspectives</RegTextBlue> to improve the
          user experience. There are two sources of these opinion articles.
        </RegularText>
        <RegularText className="featuresPara">
          First, kids are encouraged to <RegTextBlue>submit their opinion articles</RegTextBlue>{' '}
          towards specific topics, then selected submissions will be under the “View” category. The
          team also hopes this interactive function can make the user experience more enjoyable.
        </RegularText>
        <RegularText className="featuresPara">
          Second, the team web crawled opinion articles from The New York Times, a reputable news
          source. Also, the team lists opinion articles under an individual category to help kids{' '}
          <RegTextBlue>discover the difference between news and opinion articles.</RegTextBlue>
        </RegularText>
      </div>
      <Title className="personaTitle">User Persona</Title>
      <img src="/images/projects/persona.png" className="persona" alt=" " />
      <Title className="appTitle">App Design</Title>
      <RegularText className="designContent">
        In addition to the four functional improvements listed from research findings, the team
        makes some efforts on <RegTextNavy>design improvements.</RegTextNavy>
      </RegularText>
      <Title className="features">Aim for attention span</Title>
      <RegularText className="featuresContent">
        As kids and teenagers generally have limited attention spans compared to adults, the team
        gives featured designs as follows:
        <br />
        <img src="/images/projects/attention.png" className="attention" alt=" " />
        {/* <ul className="color-0D0D46">
          <li>
            Every two news pages have <RegTextBlue>at least one picture</RegTextBlue> related to the
            topic to make the article not look text-heavy.
            <br />
          </li>
          <li>
            The app was initially a website, but it is finally on iPad, so users can{' '}
            <RegTextBlue>read the news at any time</RegTextBlue> instead of staring at a screen for
            a long time.
          </li>
        </ul> */}
      </RegularText>
      <Title className="features">Comfortable Vision</Title>
      <img src="/images/projects/vision.png" className="vision" alt=" " />
      {/* <RegularText className="featuresContent">
        Day/Night switching to adjust light changes
        <br />
        All white elements are in #FEFEFE
      </RegularText> */}
      <Title className="bigTitle">User&apos;s Taskes & Workflows</Title>
      <img src="/images/projects/userWorkflow.png" className="workflow" alt=" " />
    </div>
    <img src="/images/projects/workFlowPic.png" alt="work flow" className="full-width" />
    <div
      className="full-width flex-center no-margin"
      style={{ background: '#0D0D46', paddingTop: '0' }}
    >
      <div className="blog-container">
        <PrototypeContainer
          data={[
            'prototypeSlider.png',
            'prototypeSlider1.png',
            'prototypeSlider2.png',
            'prototypeSlider3.png',
          ].map((d) => `${imageBaseUrl}newKidsTimesPrototype2/${d}`)}
          noHeader
          arrowUp={false}
          innerstyle={{ paddingBottom: '2em' }}
        />
      </div>
    </div>
    <BackToPortfolio color="#00ADB5" background="white">
      Back to Portfolio
    </BackToPortfolio>
  </div>
);

export default NewKidsTimes;

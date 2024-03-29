import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import RegularText from '../components/Template/RegularText';
import Title from '../components/Template/Title';
import PrototypeContainer from '../components/Projects/Prototype';
import BackToPortfolio from '../components/Projects/BackToPortfolio';

const imageBaseUrl = '/images/projects/';
const RegTextGreen = (props) => <div className="color-187c34">{props.children}</div>;
const RegTextBold = (props) => <div className="bold-black">{props.children}</div>;

RegTextGreen.propTypes = {
  children: PropTypes.string.isRequired,
};
RegTextBold.propTypes = {
  children: PropTypes.string.isRequired,
};
const Way2Supermarket = () => (
  <div className="full-width way2Supermarket flex-center">
    <div className="full-width no-margin arrow-container">
      <Link className="arrow-icon" to="/work">
        <svg
          width="64"
          height="38"
          viewBox="0 0 64 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM64 16.5L3 16.5V21.5L64 21.5V16.5Z"
            fill="#2A9949"
          />
        </svg>
      </Link>
    </div>
    <div className="blog-container">
      <RegularText className="type">Website App</RegularText>
      <div className="bigTitle">Way2 Supermarket</div>
      <div className="subtitle">
        <div className="left"> Research / UX / Visual Design / User Testing / Front End</div>
        <div className="middle" />
        <div className="right">Project Duration: 3 months</div>
      </div>
      <div className="goals">Problem</div>
      <RegularText className="summary">
        Grocery shopping is a necessary activity in daily lives, whereas shopping in person may{' '}
        <RegTextGreen>increase the risk of exposure to COVID-19</RegTextGreen> during the pandemic.
        In addition, it is considered time-consuming by people who live a busy life and then{' '}
        <RegTextGreen>do not have much time</RegTextGreen> to do grocery shopping.
      </RegularText>
      <div className="goals">Solution</div>
      <RegularText className="summary">
        Way2 Supermarket is a website developed to provide people a way to{' '}
        <RegTextGreen>shop groceries online from a local store</RegTextGreen> (assuming there is
        also a grocery store in your neighborhood named Way2 Supermarket) aiming to minimize
        the risk of exposure to viruses and save shopping time.
      </RegularText>
      <div className="goals">Contribution</div>
      <RegularText className="summary">
        Way2 Supermarket is a course project with the topic of solving problems locally. I worked as
        a <RegTextGreen>UI/ UX Designer</RegTextGreen> and{' '}
        <RegTextGreen>front-end engineer</RegTextGreen> in a team of four, responsible for every UI/
        UX-related job(basically everything you see on this page) and shopping cart development.
        Functions I implemented: add/ remove items, adjust item quantities, price calculation, and
        proceed to check out.
      </RegularText>
      <PrototypeContainer
        data={[
          'prototypeSlider1.png',
          'prototypeSlider2.png',
          'prototypeSlider3.png',
          'prototypeSlider4.png',
          'prototypeSlider5.png',
          'prototypeSlider6.png',
          'prototypeSlider7.png',
          'prototypeSlider8.png',
          'prototypeSlider9.png',
          'prototypeSlider9.5.png',
          'prototypeSlider10.png',
          'prototypeSlider11.png',
          'prototypeSlider12.png',
          'prototypeSlider13.png',
          'prototypeSlider14.png',
          'prototypeSlider15.png',
          'prototypeSlider16.png',
          'prototypeSlider17.png',
          'prototypeSlider18.png',
          'prototypeSlider18.5.png',
          'prototypeSlider19.png',
          'prototypeSlider20.png',
          'prototypeSlider22.png',
          'prototypeSlider23.png',
          'prototypeSlider24.png',
          'prototypeSlider25.png',
          'prototypeSlider26.png',
          'prototypeSlider27.png',
          'prototypeSlider28.png',
          'prototypeSlider29.png',
          'prototypeSlider30.png',
          'prototypeSlider31.png',
          'prototypeSlider32.png',
          'prototypeSlider33.png',
          'prototypeSlider34.png',
          'prototypeSlider35.png',
          'prototypeSlider36.png',
          'prototypeSlider37.png',
          'prototypeSlider38.png',
          'prototypeSlider39.png',
        ].map((d) => `${imageBaseUrl}way2Prototype/${d}`)}
      />
      <Title className="researchTitle">Research & Discovery</Title>
      {/* <div className="line" /> */}
      <div className="research">
        <RegularText className="intro">
          According to the research from Mercatus, a provider in integrated digital commerce
          solutions for retails,online grocery sales will account for 21.5% of total grocery sales
          by 2025, based on a survey of nearly 60,000 American shoppers across 20 states in the U.S.
          On the contrary,shoppers also have loyalty to retailers that have a physical store
          presence. <RegTextGreen>During the research, they found:</RegTextGreen>
        </RegularText>
        <Title className="media">E-commerce Increase</Title>
        <RegularText className="mediaContent">
          3.4% of grocery e-commerce was out of total grocery sales in 2019, while it grew to 10.2%
          in 2020, made more than a <RegTextGreen>100% increase.</RegTextGreen>
        </RegularText>
        <Title className="media">Retailer Loyalty</Title>
        <RegularText className="mediaContent">
          40% of online shoppers are likely to continue to purchase via online channels, while 78%
          of all shoppers still <RegTextGreen>prefer to shop in-store.</RegTextGreen>
        </RegularText>
      </div>
    </div>
    <div className="full-width flex-center grey" style={{ background: '#e5e5e5' }}>
      <div className="blog-container">
        <RegularText className="transition">
          On the one hand, the percent of people doing online grocery shopping has increased
          significantly. On the other hand, shoppers remain loyal to local grocery stores. To
          understand users better,{' '}
          <RegTextGreen> we spread surveys and concluded highlights below.</RegTextGreen>
        </RegularText>
      </div>
    </div>
    <div className="blog-container">
      <div className="survey">
        <Title className="question">What makes these people shop groceries online? </Title>
        <img className="shopOnline" src="/images/projects/shopOnlinePic.png" alt=" " />
        <Title className="question">
          And why are they loyal in shopping for groceries locally?
        </Title>
        <img className="amazon" src="/images/projects/amazon.png" alt=" " />
        <div className="dataContainer">
          <div className="percentage">95%</div>
          <RegularText className="data">
            of respondents would like to use a platform that allows{' '}
            <RegTextGreen>online grocery shopping from a grocery store locally.</RegTextGreen>
          </RegularText>
        </div>
      </div>
    </div>
    <div className="full-width flex-center no-margin" style={{ background: '#e5e5e5' }}>
      <div className="blog-container">
        <RegularText className="transition">
          Therefore, Way2 Supermarket is a platform that delivers groceries from a local store,
          so customers can save time and minimize the COVID-19 concerns by shopping groceries
          online without worries about food quality. Besides, Way2 Supermarket is built with{' '}
          <RegTextGreen>features below to satisfy customers’ needs better:</RegTextGreen>
        </RegularText>
      </div>
    </div>
    <div className="blog-container">
      <div className="newFeatures">
        <Title className="media">Time-Saving Workflow</Title>
        <RegularText className="mediaContent">
          <RegTextGreen>
            Build hierarchy in the directory with categories and subcategories.{' '}
          </RegTextGreen>
          Subcategories only show up when users click their parent category. Users can navigate
          quickly by not viewing categories at the same time and find one from many. Moreover,{' '}
          <RegTextGreen>build search function.</RegTextGreen> Users can find the item they want
          easily by searching the product using the search bar on the top center of the website.
        </RegularText>
        <Title className="media">No Contact Delivery</Title>
        <RegularText className="mediaContent">
          Before placing the order, users can{' '}
          <RegTextGreen>choose no contact delivery,</RegTextGreen>
          then the driver will not meet them in person but only leave the order at the door or a
          specific place that users require in the special notes.
        </RegularText>
        <Title className="media">Take a Virtual Tour</Title>
        <RegularText className="mediaContent">
          Some users are worried about the food quality when shopping for groceries online because
          they can’t see the food before ordering. This function{' '}
          <RegTextGreen>provides users a view of what exactly is in this grocery store by an
            introductory video.
          </RegTextGreen>
        </RegularText>
      </div>
    </div>
    <div className="full-width flex-center no-margin pos-rel">
      <div
        className="full-width no-margin"
        style={{ background: 'black', opacity: 0.8 }}
      >
        <div className="blog-container flex-center opacity">
          <img className="researchPhoto" src="/images/projects/personaSec.png" alt=" " />
        </div>
      </div>
      <div className="full-width flex-center no-margin pos-abs">
        <div className="blog-container">
          <img className="researchPhoto" src="/images/projects/personaSec.png" alt=" " />
        </div>
      </div>
    </div>
    <div className="full-width flex-center no-margin" style={{ background: '#187c34' }}>
      <div className="blog-container">
        <img className="researchPhoto" src="/images/projects/storyboard.png" alt=" " />
      </div>
    </div>
    {/* <div className="line" /> */}
    <div className="full-width flex-center no-margin" style={{ background: 'white' }}>
      <div className="blog-container">
        <img className="workflowPhoto" src="/images/projects/workflow.png" alt=" " />
      </div>
    </div>
    <div className="blog-container">
      <Title className="testingTitle">Testing</Title>
      <RegularText className="testing">
        Before the team finalized the wireframe and design listed above, we recruited five people to{' '}
        <RegTextGreen> test the Lo-Fi prototype and made improvements as follows:</RegTextGreen>
      </RegularText>
      <Title className="media">Overall Effect</Title>
      <RegularText className="mediaContent">
        The initial design has a pop-up shopping cart while clicking the shopping cart icon at the
        top right corner, while two of the users do not like it because it blocks their vision to
        see items on the page. The change is{' '}
        <RegTextGreen>moving the shopping cart to the right side of the page.</RegTextGreen>{' '}
        Moreover, the team agreed that a shopping cart on the right-hand side with the category list
        on the left-hand side gives users a smoother workflow from left to right.
      </RegularText>
      <RegularText className="testingPara">
        Similarly,{' '}
        <RegTextGreen>the search bar is moved from the upper right corner to the center,{' '}
        </RegTextGreen>
        so users can see the search bar when the shopping cart is open and then search items they
        want to add immediately after closing the shopping cart.
      </RegularText>
      <RegularText className="testingPara">
        Furthermore,{' '}
        <RegTextGreen>the layer of the header in green moved to the top layer,{' '}</RegTextGreen>
        so the shopping cart icon still lights up after the cart appears, making the shopping cart
        icon and the content layer as a whole.
      </RegularText>
      <img src="/images/projects/testingPic.png" alt=" " className="testingPic" />
      <Title className="media">Quantity Adjustment</Title>
      <RegularText className="mediaContent">
        The initial version uses triangle buttons adjusting quantities in the shopping cart, which
        are relatively small, so it is not easy for every user to click them. The team decided to{' '}
        <RegTextGreen>change adjust-quantity-triangles to round buttons.</RegTextGreen>
      </RegularText>
      <RegularText className="testingPara">
        In addition, the team{' '}
        <RegTextGreen>uses a remove icon instead of the usual minus button when the quantity number
          of an item is one,{' '}
        </RegTextGreen>so users know that they can delete it directly, rather than taking another
        few seconds to reach the remove button at the bottom.
      </RegularText>
    </div>
    <img src="/images/projects/flowPic.png" alt=" " className="full-width" />
    <div className="blog-container">
      <div className="designSec">
        <Title className="name">Design Highlights</Title>
        <Title className="feature">Directory</Title>
        <RegularText className="featureContent">
          Subcategories appear when users click the main category. It provides a hierarchy for users
          to find the item they need, so users will not feel overwhelmed with many subcategories.
        </RegularText>
        <img src="/images/projects/directory.png" alt=" " className="designPic" />
        <Title className="feature">Search</Title>
        <RegularText className="featureContent">
          Found item appears. The search function provides users a quick way to find things they
          need.
        </RegularText>
        <img src="/images/projects/search.png" alt=" " className="designPic" />
        <Title className="feature">Virtual Tour</Title>
        <RegularText className="featureContent">
          Users can see what is exactly in the local store by watching this introductory video,
          so they will not be worried about the food quality when placing an order online.
        </RegularText>
        <img src="/images/projects/tour.png" alt=" " className="tourPic" />
        <Title className="feature">Delivery Information</Title>
        <RegularText className="featureContent">
          Fill out the delivery information to help users get notifications about their orders.
          Icons light up (become green), telling users each required information filled. Users
          can proceed to check out if all icons light up. Moreover, users can choose no contact
          delivery under Special Instructions, aiming to relieve COVID19 concerns.
        </RegularText>
        <img src="/images/projects/deliveryInfo.png" alt=" " className="designPic" />
        <Title className="feature">Cart Review</Title>
        <RegularText className="featureContent">
          Help users review the cart again to confirm the order before placing the order, so users
          have an opportunity to go back and edit the shopping cart again at this stage.
        </RegularText>
        <img src="/images/projects/cartReview.png" alt=" " className="cartPic" />
      </div>
    </div>
    <BackToPortfolio color="white" background="#2A9949">
      Back to Portfolio
    </BackToPortfolio>
  </div>
);
export default Way2Supermarket;

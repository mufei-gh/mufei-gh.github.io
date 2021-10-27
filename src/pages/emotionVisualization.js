import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import RegularText from '../components/Template/RegularText';
import Title from '../components/Template/Title';
import BackToPortfolio from '../components/Projects/BackToPortfolio';

const RegTextPurple = (props) => <div className="color-purple">{props.children}</div>;

RegTextPurple.propTypes = {
  children: PropTypes.string.isRequired,
};
const EmotionVisualization = () => (
  <div className="full-width emotionVisualization flex-center">
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
            fill="#481074"
          />
        </svg>
      </Link>
    </div>
    <div className="blog-container">
      <div className="titleName">Emotion Visualization</div>
      <div className="subtitle">Deep Learning Data Analysis</div>
      <Title>Introduction</Title>
      <RegularText>Emotion Visualization is a project to visualize users’ emotional changes across
        one year scope by analyzing tweets posted by users. I first generated this idea because I
        felt bored quarantining at home during the COVID 19 pandemic and wanted to record my mood
        using colors to light up the dull life. The initial idea was to develop a journal on which
        users can write some words and manually choose their mood for the day. It ends up with the
        idea that a language model can analyze posts and generate emotional labels automatically.
        This project is to achieve this function.<br />
        <br />
        In this project, I build a model to predict users’ emotions by analyzing their tweets, then
        generate their emotion chart for a year. A sample interactive website shows the emotion
        chart of the given user id, aiming to display the effect of the model as a test.
      </RegularText>
      <img src="/images/projects/emotionV/overall.png" className="overallPic" alt=" " />
      <div className="overall">
        <RegularText className="text22-1">
          <ol>
            <li>Train a language model (RoBERTa)</li>
            <li>Fetch tweet text by user id as test data using tweet API</li>
            <li>Predict using the trained model and give each tweet a categorical emotion</li>
            <li>label three categories with numeric values</li>
          </ol>
        </RegularText>
        <RegularText className="text22-2">
          <ol>
            <li>Match each label to a 2D color map by using bilinear interpolation</li>
            <li>Record “emotions of the year” on a website</li>
          </ol>
        </RegularText>
      </div>
      <Title>Data Preprocessing</Title>
      <RegularText className="line">Tweet text data labelled by three categorical emotions (joy, anger, and sadness)
      </RegularText>
      <div className="processContainer">
        <RegularText className="preprocessWords">
          <ol>
            <li>Misspelled data</li>
            <li>Remove URLS and mentions</li>
            <li>Remove emojis</li>
            <li>Remove empty comments</li>
            <li>Bert encoding and padding</li>
            <li>Train-validation-test split</li>
          </ol>
        </RegularText>
        <img src="/images/projects/emotionV/processing.png" className="processingPic" alt=" " />
      </div>
      <Title>Model Training</Title>
      <div className="modelContainer">
        <img src="/images/projects/emotionV/roberta.png" className="robertaPic" alt=" " />
        <RegularText className="roberta">RoBERTa  ---a pre-trained BERT model using 850M english tweets<br />
          <br />
          Dimensions:<br />
          <ol>
            <li>Input word ids (batch_size, seq_length)</li>
            <li>RoBERTa model pooler output (batch_size, 768)</li>
            <li>Dense layer output (batch_size, 4)</li>
          </ol>
        </RegularText>
      </div>
      <Title>Prediction</Title>
      <div className="predictionContainer">
        <RegularText class="predictionWord">Three categorical emotions:<br />
          <ol>
            <li>Joy</li>
            <li>Anger</li>
            <li>Sadness</li>
          </ol>
          <br />
          Match the result(labels and values) to the<br />
          palette on the left.<br />
          The range of each axis is from -1 to 1.
        </RegularText>
        <img src="/images/projects/emotionV/color.png" className="colorPic" alt=" " />
      </div>
      <Title>Visualization</Title>
      <img src="/images/projects/emotionV/chart.png" className="chartPic" alt=" " />
      <RegularText className="lastLine">
        An example of a user’s mood swings over a year.<br />
        <br />
      </RegularText>
      <RegularText className="note">
        <RegTextPurple>Note:<br /></RegTextPurple>
        Due to the ethical concerns, the input userId shown in the picture is not the
        actual username of the twitter account used to generate this emotion chart but a
        representation of all possible account names.
      </RegularText>
    </div>
    <BackToPortfolio color="white" background="#481074">
      Back to Portfolio
    </BackToPortfolio>
  </div>
);
export default EmotionVisualization;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import featureImg from './alphatestersanimation2.gif';
import PropTypes from 'prop-types';
import "../../style/landing.css";
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (

    <section className='landing'>
      <div className='featureImg'>
        <div className="featureImg__right">
          <img className="featureImg__image" src={featureImg} alt="featureImg" />

        </div>
        <div className="featureImg__left">
          <h1 className="featureImg__h1">
            We are here to <br />
        Serve you with best
      </h1>
          <p className="featureImg__p">
            Generate maximum return from your online campaigns with <br />
        proactive support supplied by our online advertising specialists .
      </p>

          <a className="featureImg__getStart" href="#" ><span className="featureImg__href">Get Started </span></a>

        </div>


      </div>

    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);

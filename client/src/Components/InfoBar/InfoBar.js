
import React from 'react';

import onlineIcon from '../../icones/onlineIcon.png';
import closeIcon from '../../icones/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      Room: {room}
    </div>
    <div className="rightInnerContainer">
    <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;
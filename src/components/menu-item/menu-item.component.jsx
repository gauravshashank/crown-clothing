import React from "react";
import "./menu-item.styles.scss";

import {AppContants} from '../../App.constants';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{AppContants.menu_item_shop_now}</span>
    </div>
  </div>
);

export default MenuItem;

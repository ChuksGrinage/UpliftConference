
import React from "react";
import styles from './NavBar.module.scss';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className={styles.navBar}>
        <h1>Christ Embassy Arlington</h1>
        {/* <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">News</a></li>
        </ul> */}
      </div>
    );
  }
}

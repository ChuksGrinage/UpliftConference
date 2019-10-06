
import React from "react";
import styles from './NavBar.module.scss';

interface NavBarProps {}
interface NavBarState {
}

export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
  }

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

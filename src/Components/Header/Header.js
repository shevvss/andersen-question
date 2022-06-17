import React from 'react';
import styles from '../Form/Styles.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Create a questionnaire</h1>;
      </div>
    );
  }
}

export default Header;

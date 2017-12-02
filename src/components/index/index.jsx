// Requirements ////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import {render} from 'react-dom';

import Game from 'src/components/game/game.jsx';

import styles from './index.scss';

const language = 'en';
const transData = require(`./translations.${language}.yml`);

// Definitions /////////////////////////////////////////////////////////////////

// Classes /////////////////////////////////////////////////////////////////////

/**
 * Main component of the app
 */
class Main extends Component {
  /**
   * @param {?Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * @return {*}
   */
  render() {
    return (
        <div className={styles.main}>
          <Game />
          <div className={styles.credit}>
            A WebGL game by <a href="mailto:fenghou1st@gmail.com">Fenghou</a>.
          </div>
        </div>
    );
  }
}

// Functions ///////////////////////////////////////////////////////////////////

// Initializations /////////////////////////////////////////////////////////////

document.title = transData.title;

render(<Main />, document.getElementById('app'));

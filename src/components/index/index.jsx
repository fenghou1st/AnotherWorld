// Requirements ////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import {render} from 'react-dom';

import './index.scss';
import testImage from './test.png';
import testJson from './test.json';

const language = 'en';
const transData = require(`./translations.${language}.yml`);

// Definitions /////////////////////////////////////////////////////////////////

// Classes /////////////////////////////////////////////////////////////////////

/**
 * An example react component
 */
class Hello extends Component {
  /**
   * @return {*}
   */
  render() {
    return (
        <div>
          <div>{ transData.content.desc }</div>

          <img src={ testImage } alt="Test Image" />

          <pre>{ JSON.stringify(testJson, null, 2) }</pre>
        </div>
    );
  }
}

// Functions ///////////////////////////////////////////////////////////////////

// Initializations /////////////////////////////////////////////////////////////

document.title = transData.title;

render(<Hello />, document.getElementById('app'));

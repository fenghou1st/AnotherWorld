import React, {Component} from 'react';
import {render} from 'react-dom';

import 'src/css/index.scss';

import imgAvatar from 'src/images/avatar.png';

/**
 * An example react component
 */
export default class Hello extends Component {
  /**
   * @return {*}
   */
  render() {
    return (
        <div>
          Another World

          <img src={ imgAvatar } alt="My Avatar" />
        </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));

import { grey50 } from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * A background for material ui based components.
 *
 * The background will expand to fill the its parent container. Typically this is used as a parent
 * container for material cards.
 *
 * @see https://material.io/guidelines/style/color.html#color-themes for details.
 *
 * @param {Object} style - Additional styling to pass to the element.
 * @param {Object} props - Any additional props to pass to the underlying `<div />`.
 */
export default class Background extends React.Component {
  static propTypes = {
    style: PropTypes.shape(),
  };

  static defaultProps = {
    style: null,
  };

  static contextTypes = {
    muiTheme: PropTypes.shape({
      background: PropTypes.shape({
        color: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const { style } = this.props;
    const backgroundStyle = {
      display: 'flex',
      flex: '1 0 auto',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: this.context.muiTheme.background.color,
      ...style,
    };
    return <div {...this.props} style={backgroundStyle} />;
  }
}


export const light = grey50;
export const dark = '#303030';


export function appendMuiBackground(muiTheme, color = light) {
  return {
    background: {
      color,
    },
    ...muiTheme,
  };
}

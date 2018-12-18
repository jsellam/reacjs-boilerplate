import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class Home extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className:''
  }

  render() {
    return (
    <div className={classNames('home',this.props.className)}>
      this is the home page
    </div>
    )
  }
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class Button extends Component {

  // Prop type checking
  static propTypes = {
    className: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.node
    ])
  }

  // Set default props
  static defaultProps = {
    className: '--primary',
    disabled: false,
    loading: false
  }

  // Assign prop types and default props
  constructor (props, propTypes, defaultProps) {
    super(props)
    this.propTypes = propTypes
    this.defaultProps = defaultProps
  }

  // Handle click events
  handleClick = event => {
    const { disabled } = this.props

    if (disabled) {
      event.preventDefault()
      return
    }

    this.props.onClick()
  }

  render () {
    const { children, className, disabled, loading, onClick } = this.props

    // classnames format is 'static class', expression classes, variable classes
    const classes = classnames('gg-button', {
      '--disabled': disabled,
      '--loading': loading
    }, className)

    return (
      <button
        className={ classes }
        disabled={ disabled }
        onClick={ onClick }>
        { children }
      </button>
    )
  }
}

export default Button

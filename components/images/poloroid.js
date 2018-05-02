import React from 'react'

const containerStyle = {
  background: 'white',
  display: 'inline',
  float: 'left',
  margin: '0 15px 30px',
  textAlign: 'center',
  textDecoration: 'none',
  boxShadow: '0 4px 6px rgba(0,0,0,.3)',
  transition: 'all 3s linear',
  zIndex: 0,
  position: 'relative'
  // transform: 'rotate(-4deg)'
}

const imageStyle = {
  marginTop: '20px',
  maxWidth: '80%',
  border: '1px solid #021a40'
}

const captionStyle = {
  color: '#333',
  fontSize: '20px',
  position: 'relative',
  top: '5px'
}

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      timer: null,
      rotation: this.randomRotation()
    }
  }

  componentDidMount () {
    let timer = setInterval(() => this.rotateImage(), 4 * 1000)
    this.setState({timer})
  }

  componentWillUnmount () {
    clearTimeout(this.state.timer)
  }

  randomRotation () {
    const max = 3
    const min = -3

    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  rotateImage () {
    this.setState({
      rotation: this.randomRotation()
    })
  }

  render () {
    let combinedContainerStyle = Object.assign({}, containerStyle)
    combinedContainerStyle.transform = `rotate(${this.state.rotation}deg)`

    if (!this.props.src) { throw new Error('poloroid images need a src prop') }

    return (
      <div style={combinedContainerStyle}>
        <img style={imageStyle} src={this.props.src} />
        <p style={captionStyle}>{this.props.caption}</p>
      </div>
    )
  }
}

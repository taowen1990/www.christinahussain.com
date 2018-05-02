import React from 'react'

export default class extends React.Component {
  render () {
    if (!this.props.title) { throw new Error('props should include title') }

    return (
      <div className='card border-primary'>
        <div className='card-header'>
          <h4>{this.props.title}</h4>
        </div>
        <div className='card-body'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

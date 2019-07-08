import React, {Component} from 'react'
import {connect} from 'react-redux'
import filterByMagTypeAction from '../store/actions/filter-mag-type-action'
import filterByMagAction from '../store/actions/filter-mag-action'

class Filters extends Component {
  handleMag = mag => {
    this.props.filterMag(mag.target.value)
  }

  handleMagType = magType => {
    this.props.filterMagType(magType.target.value)
  }

  render() {
    return (
      <div className="filter-container">
        <input
          className="filter-input"
          placeholder="mag"
          onChange={this.handleMag}
          /* type="number" */
        />
        <input
          className="filter-input"
          placeholder="mag type"
          onChange={this.handleMagType}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterMag: data => dispatch(filterByMagAction(data)),
    filterMagType: data => dispatch(filterByMagTypeAction(data))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(Filters)

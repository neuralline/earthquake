import React, {Component} from 'react'
import './App.css'
import {connect} from 'react-redux'
import Properties from './components/properties'
import earthquakeAction from './store/actions/earthquake-action'
import Filters from './components/filters'

class App extends Component {
  componentDidMount() {
    this.props.earthquake()
  }
  render() {
    const connectionError = this.props.connectionError
      ? this.props.errorMessage
      : this.props.loadingMessage

    const results = this.props.data
    const features = results.length ? (
      results.map(feature => {
        return <Properties feature={feature} key={feature.id} />
      })
    ) : (
      <div className="col-md-4">{connectionError}</div>
    )

    return (
      <div className="container">
        <h1>Earthquake data</h1>
        <Filters />
        <div>
          <ul className="features">{features}</ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.featured,
    connectionError: state.connectionError,
    errorMessage: state.errorMessage,
    loadingMessage: state.loadingMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    earthquake: data => dispatch(earthquakeAction(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

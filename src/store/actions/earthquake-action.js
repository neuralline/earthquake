import axios from 'axios'

const earthquakeAction = () => {
  return (dispatch, getState) => {
    axios
      .get(
        'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02'
      )
      .then(res => {
        dispatch({
          type: 'EVENT_LIST',
          payload: res.data
        })
      })
      .catch(err =>
        dispatch({
          type: 'EVENT_ERROR',
          payload: err
        })
      )
  }
}

export default earthquakeAction

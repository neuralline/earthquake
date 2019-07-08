const filterByMagTypeAction = condition => {
  return (dispatch, getState) => {
    dispatch({
      type: 'EVENT_FILTER_BY_MAG_TYPE',
      condition: condition
    })
  }
}

export default filterByMagTypeAction

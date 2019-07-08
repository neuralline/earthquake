const filterByMagAction = condition => {
  return (dispatch, getState) => {
    dispatch({
      type: 'EVENT_FILTER_BY_MAG',
      condition: condition
    })
  }
}

export default filterByMagAction

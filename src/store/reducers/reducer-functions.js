/**
 *
 * @param {object} events
 * @param {string} condition
 */

export const mag = (events, condition) => {
  const data = events.filter(
    event => event.properties.mag * 100 === condition * 100
  )
  return data
}

/**
 *
 * @param {object} events
 * @param {string} condition
 */
export const magType = (events, condition) => {
  const data = events.filter(
    event =>
      event.properties.magType.toLowerCase() ===
      condition.toLowerCase()
  )
  return data
}

/**
 * Config Data should never be added to the window Object.
 * If this was done inside a Node.js env this could be
 * exported using module.exports. Or if we were using 
 * babel we could use export default and then import
 * it where needed.
 * 
 * On a side note. This type of configurations
 * would usually be fetched async whit somethin like
 * axios (e.g. axios.get('/navigation.conf')). 
 */

window.navigation = {
  "cities": [
    {
      "section": "cupertino",
      "label": "Cupertino"
    },
    {
      "section": "new-york-city",
      "label": "New York City"
    },
    {
      "section": "london",
      "label": "London"
    },
    {
      "section": "amsterdam",
      "label": "Amsterdam"
    },
    {
      "section": "tokyo",
      "label": "Tokyo"
    },
    {
      "section": "hong-kong",
      "label": "Hong Kong"
    },
    {
      "section": "sydney",
      "label": "Sydney"
    }
  ]
}
  
/* read theme.json
 * parse json
 * extract keys and values
 * apply keys and values to .env
 */

const fs = require('fs')
const path = require('path')
var result = ""

const parsed_test = JSON.parse(fs.readFileSync('../theme.json'))

function formatConfiguration(parsed_json) {
  result = result.concat( "color0: " + parsed_test.theme.color0 + "\n", 
                          "color1: " + parsed_test.theme.color1 + "\n",
                          "color2: " + parsed_test.theme.color2 + "\n",
                          "color3: " + parsed_test.theme.color3 + "\n"
  )
}

formatConfiguration(parsed_test)

function applyConfigurationToEnv(parsed_json) {
  fs.writeFile('../.env', parsed_json, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

applyConfigurationToEnv(result)

/* read .env
 *
 *
 *
 *
 */
function applyConfigurationToCss(dotenvfile) {
  fs.readFile('../style.css', 'utf-8', function(err, data) {
    if (err) throw err;
    var newValue = data.replace(/color0.*$/gm, 'color0: testi;');

    fs.writeFile('../style.css', newValue, 'utf-8', function(err, data) {
      if (err) throw err;
      console.log('done')
    })
  })
}

applyConfigurationToCss(result)

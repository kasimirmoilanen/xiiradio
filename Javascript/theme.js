/* read theme.json
 * parse json
 * extract keys and values
 * apply keys and values to .env
 * 
 *
 *
 *
 *
 */

const fs = require('fs')
const path = require('path')
var result = ""

//const theme_keys = []
//const theme_values = []

/*
const theme_json_parsed = JSON.parse(fs.readFileSync('../theme.json'), (key, value) => {
  theme_keys.push(key)
  console.log(theme_keys);
  console.log(key);
  theme_values.push(value)
  console.log(theme_values);
  console.log(value);
})
*/

const parsed_test = JSON.parse(fs.readFileSync('../theme.json'))

function formatConfiguration(parsed_json) {
  result = result.concat( "color0: " + parsed_test.theme.color0 + "\n", 
                          "color1: " + parsed_test.theme.color1 + "\n",
                          "color2: " + parsed_test.theme.color2 + "\n",
                          "color3: " + parsed_test.theme.color3 + "\n"
  )
}

formatConfiguration(parsed_test)

function applyConfiguration(parsed_json) {
  fs.writeFile('../.env', parsed_json, (err) => {
    if (err) {
      console.log(err)
    }
  })
}

applyConfiguration(result)

/*
fs.writeFile('./created_file.css', test_data, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('File written succesfully.')
    console.log('The file has the following contents:')
    console.log(fs.readFileSync('./created_file.css'))
  }
})
*/

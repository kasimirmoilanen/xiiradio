
const fs = require('fs')
const path = require('path')
var result = ""
var theme_keys = []
var theme_values = []
var regex = new RegExp(`/--${theme_keys[0]}: .*$/gm`)


const key_value_pairs = JSON.parse(fs.readFileSync('../theme.json'), (key, value) => {
  theme_keys.push(key)
  theme_values.push(value)
})
function applyConfigurationToCss() {
  fs.readFile('../style.css', 'utf-8', function(err, data) {
    if (err) throw err;
    for (let i = 0; i < theme_keys.length; i++) {
      //var newValue = data.replace(new RegExp(`/--${theme_keys[i]}: .*$/gm`), `--${theme_keys[i]}: ${theme_values[i]}`) 
      //console.log(newValue)
      fs.writeFile('../style.css', 
                    data.replace(new RegExp(`/--${theme_keys[i]}: .*$/gm`), `--${theme_keys[i]}: ${theme_values[i]}`), 
                    'utf-8', function(err, data) {
        if (err) throw err;
        console.log('done')
      })
    }
  })
}

applyConfigurationToCss()

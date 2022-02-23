const fs = require('fs')
const path = require('path')

function applyConfigurationToCss() {
  let str = '';
  let regex = new RegExp(`--${str}: .*$`, 'gm')
  let theme_keys = []
  let theme_values = []
  let css_file = fs.readFileSync('../style.css', 'utf-8')

  const key_value_pairs = JSON.parse(fs.readFileSync('../theme.json'), (key, value) => {
    theme_keys.push(key)
    theme_values.push(value)
  })

  for (let i = 0; i < theme_keys.length - 2; i++) {
    str = theme_keys[i]
    console.log(str)
    regex = new RegExp(`--${str}: .*$`, 'gm')
    fs.writeFileSync('../style.css', css_file.replace(regex, `--${str}: ${theme_values[i]};`), 'utf-8')
    css_file = fs.readFileSync('../style.css', 'utf-8')
    console.log(process.memoryUsage())
  }
}

applyConfigurationToCss()

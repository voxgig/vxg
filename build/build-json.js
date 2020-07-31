'use strict'
const shell = require('shelljs')

shell.mkdir('-p', 'dist/json')
shell.cd('../api-generator')
shell.exec('yarn build')
shell.mv('dist/tags.json', '../vxg/dist/json')
shell.mv('dist/attributes.json', '../vxg/dist/json')
shell.mv('dist/web-types.json', '../vxg/dist/json')

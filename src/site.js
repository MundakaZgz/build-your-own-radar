require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')

//window.location = 'http://localhost:8080/?sheetId=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1OGkA0pLMQEo9Z0a738tq0NqTKtsSOx6lWP5LctDPmj8%2Fedit%23gid%3D0';

GoogleSheetInput().build()

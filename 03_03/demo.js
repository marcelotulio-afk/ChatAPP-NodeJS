var fs = require('fs')

/* the data is set to a json object */
var data = {
    profession: 'Sotware Developer'
}

/* In order to write a data, the second parameter requires a string, a json object.  */
fs.writeFile('data.json', JSON.stringify(data), (err) =>{
    console.log('write finished', err)
})
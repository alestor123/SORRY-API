var axios = require('axios');
module.exports = async () => {
var res = await axios.get('https://apologygenerator.com/assets/apology.json')
data = res.data;
return data.introduction[random(data.introduction)] + data.sadness[random(data.sadness)] + data.explanation[random(data.explanation)] + data.conclusion[random(data.conclusion)]
}
var random = op =>  Math.floor(Math.random()*op.length);
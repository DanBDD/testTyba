const { config } = require('./config/config');
const axios= require('axios')

async function test(){
    try {
        const lat=5.06889
        const long =-75.51738
        const {data} = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${config.geocodingKey}`)
        // console.log(data.results[0].address_components)
        let city=''
        data.results[0].address_components.forEach(element => {
          if(element.types.includes('locality')){
            city = element.long_name
          }
        });
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${city}&type=restaurant&key=${config.placesKey}`
        )
         console.log(response.data)
        } 
      catch (err) {
       console.log(err)
     }
}

test()
module.exports = ({ config }) => {
    return {
        ...config, 
        ios: {
            ...config.ios,
            config: {
                googleMapsApiKey: process.env.GMAPS_API_KEY
            }
        },
        android: {
            ...config.android,
            config: {
                googleMaps: {
                    apiKey: process.env.GMAPS_API_KEY
                }
            }
        }
    }
}
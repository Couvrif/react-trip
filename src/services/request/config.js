const devBaseURL = 'http://codercba.com:1888/airbnb/api'
const proBaseURL = 'http://codercba.com:1888/airbnb/api'
// export const BASE_URL = "http://codercba.com:1888/api"

export const TIMEOUT = 10000
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

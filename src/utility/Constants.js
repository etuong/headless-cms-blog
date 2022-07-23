require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
console.log(process.env)
export const URL = process.env.REACT_APP_STRAPI_URL;
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
export const URL = process.env.REACT_APP_STRAPI_URL;

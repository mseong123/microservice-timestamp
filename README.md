# Timestamp Microservice

This service accepts a valid date (either in the format YYYY-MM-DD or in UNIX timestamp seconds) submitted as part of the GET METHOD. It will return a JSON object with UNIX and UTC time properties of the submitted date. If an invalid date is given, it will return a JSON object stating so.

*Built using NodeJS and ExpressJS.
*Hosted on Netlify.
*Server-side API is built using Netlify's serverless AWS Lambda Functions. 
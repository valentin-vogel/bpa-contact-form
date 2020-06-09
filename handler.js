const aws = require("aws-sdk");
const ses = new aws.SES();
const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

/**
 * Returns the success response for the client.
 * @param {number} code 
 * @param {Object} payload 
 */
function generateSuccessResponse(code, payload) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(payload),
  };
}

/**
 * Returns the error response for the client.
 * @param {number} code 
 * @param {Object} err 
 */
function generateErrorResponse(code, err) {
  return {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin": myDomain,
      "Access-Control-Allow-Headers": "x-requested-with",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(err.message),
  };
}

/**
 * Returns the parameter object for SES SendMail
 * @param {Object} body 
 */
function generateEmailParams(body) {
  // @TODO 1: Get form values (email, name and content) from the event body.
  // @TODO 2: Create the parameter object for AWS-SES SendMail method.
  return {}
}

/**
 * Main method of AWS-Lambda function
 * @return JSON (success or error)
 */ 
module.exports.send = async (event) => {
  // @TODO 3: Try sending an email with AWS-SES, return success response and catch possible errors.
};

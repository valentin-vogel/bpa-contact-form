const aws = require("aws-sdk");
const ses = new aws.SES();
const myEmail = process.env.EMAIL;
const myDomain = process.env.DOMAIN;

/**
 * Returns the success response for the client.
 * @param {number} code
 * @param {Object} payload
 * @returns {Object}
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
 * @returns {Object}
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
 * Returns the parameter object for SES SendMail.
 * @param {Object} body
 * @returns {Object}
 */
function generateEmailParams(body) {
  const { email, name, content } = JSON.parse(body);
  if (!(email && name && content)) {
    throw new Error(
      "Missing parameters! Make sure to add parameters 'email', 'name', 'content'."
    );
  }

  return {
    Source: myEmail,
    Destination: { ToAddresses: [myEmail] },
    ReplyToAddresses: [email],
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Message sent from email ${email} by ${name} \nContent: ${content}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `You received a message from ${myDomain}!`,
      },
    },
  };
}

/**
 * Main method of AWS-Lambda function
 * @returns {Object} (success or error)
 */
module.exports.send = async (event) => {
  try {
    const emailParams = generateEmailParams(event.body);
    const data = await ses.sendEmail(emailParams).promise();
    return generateSuccessResponse(200, data);
  } catch (err) {
    return generateErrorResponse(500, err);
  }
};

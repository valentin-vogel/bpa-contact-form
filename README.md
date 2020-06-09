# BPA Serverless Contact Form

This repository contains a serverless contact form as serverless function example (for university).

## Prerequisites

* Latest LTS [NodeJS 12.x & NPM](https://nodejs.org/en/download/)
* [Serverless Framework 1.72.x](https://www.serverless.com/framework/docs/providers/aws/guide/installation/)
* Setup [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html) and [AWS Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

**Without AWS-Account:** If you don't have an AWS-Account, you will get all required credentials in our lesson. You will also receive an email request to confirm your email address.

**With AWS-Account:** If you own an AWS-Account, you can use your own credentials. Please make sure that you have all required roles and permissions (Lambda, Cloudformation, API-Gateway, S3, Logs and IAM). The easiest is to use an IAM with administrator permissions. Furthermore you have to verify your email address in AWS-SES.

## Installation

```bash
git clone https://github.com/valentin-vogel/bpa-contact-form.git
cd bpa-contact-form
npm install
```

Open `secrets.json` and set **Email** and **SNumber**. If you are a lecturer or professor please use your lastname (small letters) for **SNumber**. 

Deploy / remove application:

```bash
npm run deploy
npm run remove
```

After your first successful deploy you find the endpoint url and the static website address in your console output. 

## Task

**Scenario:** Consider a simple web server that only returns a progressive web app or a static website (frontend). There is no possibility of running your own backend code. Is it still possible to integrate a contact form? 

**Your Task (20-30 min.):** Complete the code that you can receive an email via the contact form on the static website.

## Help

* [AWS-SES SendEmail Object](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)
* [AWS-SES example](https://docs.aws.amazon.com/de_de/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html)
* [JS async/await](https://javascript.info/async-await)
* [AWS Lambda function handler in Node.js](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)

... and don't forget to set the endpoint url in the client code!

## License
[MIT](LICENSE)
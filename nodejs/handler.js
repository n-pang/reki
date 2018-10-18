'use strict';

module.exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const response = {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: 'hello world'
    };

    callback(null, response);
};
    

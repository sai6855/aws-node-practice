'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'testing deployment by updating function',
        input: event,
      },
      null,
      2
    ),
  };
};

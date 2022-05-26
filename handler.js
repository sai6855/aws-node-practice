"use strict";

module.exports.hello = async (event) => {
  const wait = (time) =>
    new Promise((resolve, reject) => setTimeout(resolve, time));

  await wait(1000 * 3);

  return {
    message: "success",
  };
};

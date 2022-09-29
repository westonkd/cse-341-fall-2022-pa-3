const express = require("express");

const routes = (router) => {
  router.use([express.json()]);

  router.use("/contacts", require("./contacts.routes"));

  return router;
};

module.exports = routes;

const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZqp3aPA-Sotnv8OzHi7vjMgTQlNXz0v69tDG1-6wsg9fxCb3owF8aH9VTtOFO4NQN3iubiVlqoUSYEz",
  client_secret: "AZqp3aPA-Sotnv8OzHi7vjMgTQlNXz0v69tDG1-6wsg9fxCb3owF8aH9VTtOFO4NQN3iubiVlqoUSYEz",
});

module.exports = paypal;

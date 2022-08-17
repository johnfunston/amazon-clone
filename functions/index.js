/* eslint-disable max-len */
/* eslint-disable func-call-spacing */
/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { useStripe } = require("@stripe/react-stripe-js");
const stripe = require("stripe")("sk_test_51LXZ4oLDYQmKiWABNN7PTidlOWKiJe3PgPcNPNsYaYVHCOYUvTqbRfLz9vUGYIEyvgwBwpaYWv6BV9RX3Au4ornK003rr9uhdi");

//  App config
const app = express();
//  Middleware
app.use(cors({origin: true}));
app.use(express.json());
//  API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment request received for ', total)

  const paymentIntent = await useStripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})
//  Listen Command
exports.api = functions.https.onRequest(app);

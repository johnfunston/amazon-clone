/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios'

const instance = axios.create({
  baseURL: //   'https://us-central1-clone-95666.cloudfunctions.net/api' //live site
  'http://localhost:5001/clone-95666/us-central1/api', // API (cloud function) URL for testing
});

export default instance;


const express = require('express');
const bodyparser = require('body-parser');
const sequilize = require('./util/database');
const User = require('./models/user');

const app = express();
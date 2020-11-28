var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

require('dotenv/config');
const db = require('./config/database');
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME

db(`mongodb+srv://ruth:${dbPass}@cluster0.h8q0y.mongodb.net/${dbName}?retryWrites=true&w=majority`);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const notas = require('./routes/notas')
app.use('/notas', notas)

const usuarios = require('./routes/usuarios')
app.use('/usuarios', usuarios)

const empresas = require('./routes/empresas')
app.use('/empresas', empresas)

module.exports = app;

const express = require('express')
const add = require('./operation')
const md5 = require('md5')
const app = express()
const log = console.log

// import { createHash } from 'node:crypto'

// function md5(content) {  
//   return createHash('md5').update(content).digest('hex')
// }


app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.get('/login', (req, res) => {
	res.send('login')
})

app.listen(9000, () => {
	log('palu on 9000')
})
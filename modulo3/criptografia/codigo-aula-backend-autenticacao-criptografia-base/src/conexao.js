const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: '013579',
	database: 'aula_autenticacao_criptogragia',
})

module.exports = pool

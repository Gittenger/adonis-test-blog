'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
	up() {
		this.create('posts', (table) => {
			table.increments()
			table.text('content')
			table.string('title')
			table.string('excerpt')
			table.date('date')
			table.timestamps()
		})
	}

	down() {
		this.drop('posts')
	}
}

module.exports = PostsSchema

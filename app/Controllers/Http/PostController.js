'use strict'

const Post = use('App/Models/Post')
const showdown = require('showdown')

class PostController {
	async index({ view }) {
		const posts = await Post.all()

		return view.render('posts.index', {
			posts: posts.toJSON(),
		})
	}

	async post({ params, view }) {
		const post = await Post.find(params.id)

		// date
		const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
		const dateObj = new Date(post.date)
		const date = dateObj.toLocaleDateString('en-US', dateOptions)

		// markdown
		const converter = new showdown.Converter()
		const postMarkdown = converter.makeHtml(post.content)

		return view.render('posts.post', {
			post,
			postMarkdown,
			date,
		})
	}
}

module.exports = PostController

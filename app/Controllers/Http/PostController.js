'use strict'

const Post = use('App/Models/Post')

class PostController {
	async index({ view }) {
		const posts = await Post.all()

		return view.render('posts.index', {
			posts: posts.toJSON(),
		})
	}

	async post({ params, view }) {
		const post = await Post.find(params.id)

		return view.render('posts.post', {
			post: post,
		})
	}
}

module.exports = PostController

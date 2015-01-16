/**
 * External dependencies
 */
var React = require( 'react/addons' );

/**
 * Internal dependencies
 */
var Post = require( '../post/post.jsx' );

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

/**
 * Renders list of posts
 */
PostList = React.createClass({
	render: function() {
		var postNodes = this.props.data.map( function ( post ) {
			return (
				<Post key={post.ID} id={post.ID} post_class={post.post_class} link={post.link} title={post.title} date={post.date} content={post.content}/> 
			);
		});
		return (
			<div>
				<ReactCSSTransitionGroup transitionName="example">
					{postNodes}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
});

module.exports = PostList;
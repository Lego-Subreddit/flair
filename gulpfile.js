/**
 * Configuration
 */

/* We need to tell the tasks where to find files */
var sources = {
	stylesheets: './data/stylesheets/*.css',
	build: './build/'
}

/**
 * Dependencies
 */

/* gulp is a task manager */
var gulp = require('gulp');
/* gulp-concat combines (concatenates) multiple files together into one */
var concat = require('gulp-concat');
/* passport is an oauth authentication lib */
var passport = require('passport');
/* passport-reddit is a strategy for logging into Reddit with passport */
var RedditStrategy = require('passport-reddit').Strategy;

/**
 * Building Tasks
 */

/* This task will concatenate our css into a single file */
gulp.task('concat-css', function () {
	/* Get all stylesheet files */
	gulp.src(sources.stylesheets)
		/* Concatenate stylesheets together */
		.pipe(concat('stylesheet.css'))
		/* Write out file in build directory */
		.pipe(gulp.dest(sources.build));
});

/* This task will trigger all of the other tasks for building */
gulp.task('build', ['concat-css']);

/**
 * Reddit Tasks
 */

gulp.task('reddit-login', function () {
	passport.use(new RedditStrategy({
			clientID: REDDIT_CONSUMER_KEY,
			clientSecret: REDDIT_CONSUMER_SECRET,
			callbackURL: "http://127.0.0.1:3000/auth/reddit/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			// asynchronous verification, for effect...
			process.nextTick(function () {
				// To keep the example simple, the user's Reddit profile is returned to
				// represent the logged-in user.  In a typical application, you would want
				// to associate the Reddit account with a user record in your database,
				// and return that user instead.
				return done(null, profile);
			});
		}
	));
});
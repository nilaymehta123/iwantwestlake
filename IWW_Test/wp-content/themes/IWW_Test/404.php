<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); 
$sHomeUrl = home_url();?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
			<div class="page-wrapper">
				<div class="error-page">
					<h1 class="error-content">404</h1>
					<h4 class="oops">Oops! You're lost</h4>
					<h5 class="error-msg" >We can not find the page you're looking for</h5>
					<p><a class="home-link" href="<?php echo $sHomeUrl; ?>">Return to home</a></p>
				</div>
			</div>
		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>

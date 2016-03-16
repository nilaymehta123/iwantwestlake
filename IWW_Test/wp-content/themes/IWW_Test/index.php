<?php 
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one of the
 * two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 *
 * @package WordPress
 * @subpackage IWantWestlake
 * @since iwantwestlake 1.0
 */
get_header();


// Start the loop.
query_posts(array( 'post_type' => 'page', 'post_in' => array(6), "order" => "ASC",'posts_per_page' => -1));
while ( have_posts() ) : the_post();
// $pageId = get_the_ID();
// echo "<h2>".get_the_title( $pageId )."</h2>";
echo "<div>".the_content()."</div>";
// End the loop.
endwhile;


get_footer();
?>

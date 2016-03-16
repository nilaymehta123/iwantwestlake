<?php
/**
 * The template for displaying pages
 *
 * @package WordPress
 * @subpackage midwayfleet
 * @since midwayfleet 1.0
 */
 if (isset($_GET['id'])) {
	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("X-Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");

 }

get_header();
$pageId = get_the_ID();
if($pageId==446){
	if (is_plugin_inactive('api-handler/api-handler.php')) {
        echo  '<div class="error-msg col-md-24"> <h1>Oops!</h1><h3>Something went wrong</h3><p>Sorry, some technical error occured while loading. Please try again later.</p> </div>';

}
}
// query_posts(array( 'post_type' => 'page', 'p' => $pageId, "order" => "ASC"));
// Start the loop.
while ( have_posts() ) : the_post();		
// Main page content
the_content();
endwhile;
get_footer(); ?>


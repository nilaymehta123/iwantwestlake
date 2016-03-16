<?php
// Scripts adding 
// function midwayfleet_enqueue() {
// 	wp_enqueue_script( 'jquery-ui', get_template_directory_uri().'/js/jquery-1.11.2.min.js', array( 'jquery') );
// 	wp_enqueue_script( 'bootstrap', get_template_directory_uri(). '/js/bootstrap.min.js', array( 'jquery' ) );
// 	wp_enqueue_script( 'custom', get_template_directory_uri(). '/js/custom.js', array( 'custom' ) );
// }
// add_action('wp_head', 'midwayfleet_enqueue');

// Primary navigation menu
function midwayfleet_register_theme_menu() {
    register_nav_menu( 'primary', __('Header') );
}
add_action( 'init', 'midwayfleet_register_theme_menu' );

if ( function_exists('register_sidebars') ) {

	register_sidebar(array(
	'name' => 'Footer Widget 1',
	'id' => 'footer1',
	'before_widget' => '',
	'after_widget' => '',
	'before_title' => '',
	'after_title' => '',
	));

	register_sidebar(array(
	'name' => 'Footer Widget 2',
	'id' => 'footer2',
	'before_widget' => '',
	'after_widget' => '',
	'before_title' => '',
	'after_title' => '',
	));

	register_sidebar(array(
	'name' => 'Footer Widget 3',
	'id' => 'footer3',
	'before_widget' => '',
	'after_widget' => '',
	'before_title' => '',
	'after_title' => '',));
}

function example_customizer( $wp_customize ) {

    $Links 		= array();
	
	$i = 0;
	foreach( $Links as $logo ) {
		
	  // SETTINGS
	  $wp_customize->add_setting(
	    $logo['slug']
	  );

	  // CONTROLS
	  $wp_customize->add_control(
	  	$logo['slug'],
		array(  
			'label' => $logo['label'], 
			'type' => 'textbox',
		    'section' => 'apiurl',
		    'settings' => $logo['slug'])
	  );
	}

		$wp_customize->add_section( 'mfl_logo_section' , array(
	    'title'       => __( 'Logo', 'mfl' ),
	    'priority'    => 30,
	    'description' => 'Upload a logo to replace the default site name and description in the header',
	) );

	$wp_customize->add_setting( 'mfl_logo' );

	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'mfl_logo', array(
	    'label'    => __( 'Logo', 'mfl' ),
	    'section'  => 'mfl_logo_section',
	    'settings' => 'mfl_logo',
	) ) );

	// add new section
	$wp_customize->add_section( 'mfl_theme_colors', array(
		'title' => __( 'Theme Colors', 'mfl' ),
		'priority' => 100,
	) );

	// add color picker setting
	$wp_customize->add_setting( 'link_color', array(
		'default' => '#ffff'
	) );

	// add color picker control
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'link_color', array(
		'label' => 'Link Color',
		'section' => 'mfl_theme_colors',
		'settings' => 'link_color',
	) ) );
}

add_action( 'customize_register', 'example_customizer' );

function mfl_customizer_head_styles() {
	$link_color = get_theme_mod( 'link_color' ); 
	
	if ( $link_color != '#ffff' ) :
	?>
		<style type="text/css">
			a {
				color: <?php echo $link_color; ?>;
			}
		</style>
	<?php
	endif;
}
add_action( 'wp_head', 'mfl_customizer_head_styles' );

add_theme_support('post-thumbnails');
add_image_size('custom-thumbnail', 80, 80, true );
add_image_size('medium-thumbnail', 180, 120, true );
add_image_size('large-thumbnail', 571, 300, true );

add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
    if (in_array('current-menu-item', $classes) ){
        $classes[] = 'active ';
    }
    return $classes;
}

function remove_pages_editor(){
    remove_post_type_support( 'bepro_listings', 'editor' );
}   
add_action( 'init', 'remove_pages_editor' );

function hide_update_notice_to_all_but_admin_users()
{
    if (!current_user_can('update_core')) {
        remove_action( 'admin_notices', 'update_nag', 3 );
    }
}
add_action( 'admin_head', 'hide_update_notice_to_all_but_admin_users', 1 );

// add new dashboard widgets
function wptutsplus_add_dashboard_widgets() {

    wp_add_dashboard_widget( 'wptutsplus_dashboard_welcome', 'Midwayfleet', 'wptutsplus_add_welcome_widget' );
    wp_add_dashboard_widget( 'wptutsplus_dashboard_links', 'Useful Links', 'wptutsplus_add_links_widget' );
}

function wptutsplus_add_welcome_widget(){ ?>
 
    This content management system lets you edit the pages and posts on your website.
    Your site consists of the following content, which you can access via the menu on the left:
    <ul>
        <li><strong>Pages</strong> - static pages which you can edit.</li>
        <!-- <li><strong>Posts</strong> - news or blog articles - you can edit these and add more.</li>
        <li><strong>Media</strong> - images and documents which you can upload via the Media menu on the left or within each post or page.</li> -->
        <li><strong>Forms </strong> - you can add or edit forms with this plugin.</li>
        <li><strong>BePro Listing</strong> - Manage car listing, add new car categorization etc.</li>
        <li><strong>Visual Composer </strong> - This is the tool that we used for manage static site pages.</li>
    </ul>
 
    On each editing screen there are instructions to help you add and edit content.
 
<?php }
 
function wptutsplus_add_links_widget() { ?>

    Some links to resources which will help you manage your site:
    <ul>
        <li><a href="<?php echo get_site_url();?>/wp-admin/edit-tags.php?taxonomy=bepro_listing_types&post_type=bepro_listings">Add New Listing Category</a></li>
        <li><a href="<?php echo get_site_url();?>/wp-admin/post-new.php?post_type=bepro_listings">Add New Vehicle</a></li>
        <li><a href="<?php echo get_site_url();?>/wp-admin/edit.php?post_type=bepro_listings">Edit Vehicle</a></li>
    </ul>
<?php }

/*Dasborad menu reordering*/
add_action( 'wp_dashboard_setup', 'wptutsplus_add_dashboard_widgets' );
function custom_menu_order($menu_ord) {
    if (!$menu_ord) return true;
     
    return array(
        'index.php', // Dashboard
        // 'separator1', // First separator
        'edit.php?post_type=page', // Pages
        'edit.php', // Posts
        'upload.php', // Media
        'link-manager.php', // Links
        'edit-comments.php', // Comments
        'separator2', // Second separator
        'themes.php', // Appearance
        'users.php', // Users
        'tools.php', // Tools
        'options-general.php', // Settings
        'plugins.php', // Plugins
        'separator-last', // Last separator
    );
}
add_filter('custom_menu_order', 'custom_menu_order'); // Activate custom_menu_order
add_filter('menu_order', 'custom_menu_order');

add_action( 'admin_menu', 'my_remove_menu_pages' );
function my_remove_menu_pages() {
	remove_menu_page('link-manager.php');	
	remove_menu_page('edit-comments.php');	
}

function lorem_function() {

	$aTitle = explode('/', $_SERVER["REQUEST_URI"]);
	$sTitle = str_replace('-', ' ', $aTitle[3]);

  return "<h1>".ucfirst($sTitle)."</h1>";
}
add_shortcode('lorem', 'lorem_function');

//api-handler plugin

function apiHandler_shortcode() {
    
	if (function_exists('apiHandler_code')) {
		ob_start();
		apiHandler_code();
		return ob_get_clean();
	} else {
		
		echo  '<div class="error-msg col-md-24"> <h1>Oops!</h1><h3>Something went wrong</h3><p>Sorry, some technical error occured while loading service. Please try again later.</p> </div>';
	}
}
add_shortcode( 'api_handler', 'apiHandler_shortcode' );


function vehicleDetail_shortcode(){
    
	if (function_exists('vehicleDetail_code')) {
		ob_start();
		vehicleDetail_code();
		return ob_get_clean();
	} else {

		echo  '<div class="error-msg col-md-24"> <h1>Oops!</h1><h3>Something went wrong</h3><p>Sorry, some technical error occured while loading. Please try again later.</p> </div>';
	}
}
add_shortcode( 'detail_view', 'vehicleDetail_shortcode' );


//sitemap menu shortcode
function sitemap_menu_shortcode($atts, $content = null) {
    extract(shortcode_atts(array( 'name' => 'Sitemap', ), $atts));
    return wp_nav_menu( array( 'menu' => $name, 'echo' => false ) );
}
add_shortcode('sitemap-menu', 'sitemap_menu_shortcode');

function sitemap_apply_menu_shortcode($atts, $content = null) {
    extract(shortcode_atts(array( 'name' => 'Sitemap Apply Menu', ), $atts));
    return wp_nav_menu( array( 'menu' => $name, 'echo' => false ) );
}
add_shortcode('sitemap-apply', 'sitemap_apply_menu_shortcode');

function sitemap_contact_menu_shortcode($atts, $content = null) {
    extract(shortcode_atts(array( 'name' => 'Sitemap Contact Menu', ), $atts));
    return wp_nav_menu( array( 'menu' => $name, 'echo' => false ) );
}
add_shortcode('sitemap-contactus', 'sitemap_contact_menu_shortcode');

//midway forms shortcode

function midway_consumer_form_shortcode(){
    ob_start();
	consumerApplication_code();
    return ob_get_clean();
}
add_shortcode( 'consumer-application', 'midway_consumer_form_shortcode' );



function footer_enqueue_scripts() {

   remove_action('wp_head', 'wp_print_scripts');
   remove_action('wp_head', 'wp_print_head_scripts', 9);
   remove_action('wp_head', 'wp_enqueue_scripts', 1);
   add_action('wp_footer', 'wp_print_scripts', 5);
   add_action('wp_footer', 'wp_enqueue_scripts', 5);
   add_action('wp_footer', 'wp_print_head_scripts', 5);
}
add_action('after_setup_theme', 'footer_enqueue_scripts');

//Disable YOAST nag messages
/*remove_action( 'admin_notices', array( Yoast_Notification_Center::get(), 'display_notifications' ) );
remove_action( 'all_admin_notices', array( Yoast_Notification_Center::get(), 'display_notifications' ) );*/

/*function run_activate_plugin( $plugin ) {

    $current = get_option( 'active_plugins' );
    $plugin = plugin_basename( trim( $plugin ) );

    if ( !in_array( $plugin, $current ) ) {

        $current[] = $plugin;
        sort( $current );
        do_action( 'activate_plugin', trim( $plugin ) );
        update_option( 'active_plugins', $current );
        do_action( 'midwayfleet_plugin_activate' );
        do_action( 'activated_plugin', 'midwayfleet_plugin_activate' );
    }
    return null;
}
run_activate_plugin( ABSPATH.'wp-content/plugins/midway-forms/midwayfleetforms.php' );
*/

/*add_shortcode( 'display_post', 'display_posts_shortcode' );


function display_posts_shortcode() {
query_posts( 'p=1857' );
while (have_posts()) : the_post();
	the_content();
endwhile;

}*/


add_action( 'wp_enqueue_scripts', 'enqueue_assets' );


add_shortcode( 'embed_post', 't5_embed_post' ); 

function t5_embed_post( $atts )
{
	$defaults = array (
		'id'    => FALSE,
		'title' => FALSE,
		'type'  => 'page'
	);
	extract( shortcode_atts( $defaults, $atts ) );
 
	// Not enough input data.
	if ( ! $id and ! $title )
	{
		return;
	}
 
	$post = FALSE;
 
	if ( $id )
	{
		$post = get_post( $id );
	}
	elseif ( $title )
	{
		$post = get_page_by_title( $title, OBJECT, $type );
	}
 
	if ( $post )
	{
		remove_filter( 'the_content', 'wpautop' );
		return apply_filters( 'the_content', $post->post_content );
	}
	
}
add_shortcode( 'getselectstateoptions', 'get_select_state_options' ); 
function get_select_state_options($atts){
	$defaults = array (
		'selected'	=> ''
	);
	extract( shortcode_atts( $defaults, $atts ) );
	$retVal = '';
	$usStates = array(
            'AL'=>'Alabama', 'AZ'=>'Arizona', 'AR'=>'Arkansas', 'CA'=>'California', 'CO'=>'Colorado',
			'CT'=>'Connecticut', 'DE'=>'Delaware', 'DC'=>'District Of Columbia', 'FL'=>'Florida', 
			'GA'=>'Georgia', 'HI'=>'Hawaii', 'ID'=>'Idaho', 'IL'=>'Illinois', 'IN'=>'Indiana', 
            'IA'=>'Iowa', 'KS'=>'Kansas', 'KY'=>'Kentucky', 'LA'=>'Louisiana', 'ME'=>'Maine', 
            'MD'=>'Maryland', 'MA'=>'Massachusetts', 'MI'=>'Michigan', 'MN'=>'Minnesota', 'MS'=>'Mississippi', 
			'MO'=>'Missouri', 'MT'=>'Montana', 'NE'=>'Nebraska', 'NV'=>'Nevada', 'NH'=>'New Hampshire', 
            'NJ'=>'New Jersey', 'NM'=>'New Mexico', 'NY'=>'New York', 'NC'=>'North Carolina', 'ND'=>'North Dakota', 
			'OH'=>'Ohio', 'OK'=>'Oklahoma', 'OR'=>'Oregon', 'PA'=>'Pennsylvania', 'RI'=>'Rhode Island', 'SC'=>'South Carolina', 
			'SD'=>'South Dakota', 'TN'=>'Tennessee', 'TX'=>'Texas', 'UT'=>'Utah', 'VT'=>'Vermont', 'VA'=>'Virginia', 
			'WA'=>'Washington', 'WV'=>'West Virginia', 'WI'=>'Wisconsin', 'WY'=>'Wyoming');
	
	foreach($usStates AS $key=>$item) {
		$retVal .= '<option value="'.$key.'" '.($selected==$key?'selected':'').' >'.$item.'</option>';
	}
	
	return $retVal;
}

add_shortcode( 'getpath', 'get_backend_path' ); 
function get_backend_path($atts){
	$defaults = array (
		'page'	=> 'submit',
		'type'  => 'url'
	);
	extract( shortcode_atts( $defaults, $atts ) );
	
	return get_bloginfo($type).'/'.$page;
}

add_shortcode( 'getpostvars', 'get_post_vars' ); 
function get_post_vars($atts){
	$defaults = array ( 'name'	=> '' );
	extract( shortcode_atts( $defaults, $atts ) );
	
	return trim(htmlspecialchars(@$_POST[$name]));
}

add_shortcode( 'backendvalidation', 'backend_validation' ); 
function backend_validation(){
	$script = '<script>jQuery(document).ready(function () {';
	
	if (trim(@$_GET['msg'])=='require' && $_SERVER['REQUEST_METHOD']=='POST'){
		$select = array('buyer_year', 'buyer_model_category', 'buyer_hdyh_about_us', 'buyer_state', 'buyer_residence');
		foreach($_POST AS $key=>$val){
			if ($key=='buyer_year' && trim(@$_POST['buyer_model_category'])=='') {
				$script .="setTimeout(function(){ jQuery('#{$key}').val(\"{$val}\"); jQuery('#{$key}').trigger('change'); }, 5000);";
			} else if ($key=='buyer_year' && trim(@$_POST['buyer_model_category'])!='') {
				$script .="setTimeout(function(){ jQuery('#{$key}').val(\"{$val}\"); jQuery('#{$key}').trigger('change'); }, 5000);";
				$script .="setTimeout(function(){ jQuery('#buyer_model_category').val(\"".trim(@$_POST['buyer_model_category'])."\"); }, 9000);";
			} else if ($key!='buyer_model_category') {
				$script .= "jQuery('#{$key}').val('{$val}');";
			}	
		}
		$script .= "jQuery('.submit-button').click();";
		return $script."}); </script>";
	}
}

function enqueue_assets() { 
	$ss_url = get_stylesheet_directory_uri();	 
	wp_enqueue_style( 'ytload-css', "{$ss_url}/css/ytLoad.jquery.css"); 	
	wp_enqueue_style( 'jquery-ui-min', "{$ss_url}/css/jquery-ui.min.css");  
	wp_enqueue_style( 'jquery-ui-structure', "{$ss_url}/css/jquery-ui.structure.min.css"); 
	wp_enqueue_style( 'jquery-ui-theme', "{$ss_url}/css/jquery-ui.theme.min.css"); 
	
	wp_enqueue_script( 'jquery-min-1-10-2', "{$ss_url}/customjs/jquery.min.js"); 
	wp_enqueue_script( 'bootstrap-min-js', "{$ss_url}/customjs/jquery-ui.min.js"); 
	wp_enqueue_script( 'jquery-maskedinput-min', "{$ss_url}/customjs/jquery.maskedinput.min.js");
	wp_enqueue_script( 'jquery-validate-min', "{$ss_url}/customjs/jquery.validate.min.js");
	wp_enqueue_script( 'additional-methods-min', "{$ss_url}/customjs/additional-methods.min.js"); 
	/*wp_enqueue_script( 'moment', "{$ss_url}/js/moment.min.js");*/
	
	wp_enqueue_script( 'transit-js', "{$ss_url}/js/jquery.transit.js"); 
	wp_enqueue_script( 'ytload-js', "{$ss_url}/js/ytLoad.jquery.js"); 
	
	
	wp_enqueue_script( 'default-scripts', "{$ss_url}/customjs/main.js"); 
	/*
	wp_enqueue_script( 'lead-application', "{$ss_url}/customjs/leadapplication.js"); 
	*/
}
add_action( 'wp_enqueue_scripts', 'enqueue_assets' );

if(!$smof_data['status_gmap']) {
			//$map_api = 'http' . ( ( is_ssl() ) ? 's' : '' ) . '://maps.googleapis.com/maps/api/js?sensor=false&amp;language=' . substr(get_locale(), 0, 2);			
			$map_api = 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places';
			wp_register_script( 'google-maps-api', $map_api );
			wp_register_script( 'google-maps-infobox', 'https://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/src/infobox.js', array(), null, false);
		}
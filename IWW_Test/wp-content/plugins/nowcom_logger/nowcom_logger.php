<?php
/**
 * @wordpress-plugin
 * Plugin Name:       Nowcom Site Logger
 * Plugin URI:        http://www.nowcom.com/
 * Description:       Nowcom Site Logging Management
 * Version:           1.0.0
 * Author:            Nowcom Corporation
 * Author URI:        http://www.nowcom.com/
 * License:           proprietary
 * License URI:       
 * Text Domain:       nowcom-logger
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/class-nowcom-logger-activator.php';

/**
 * The code that runs during plugin deactivation.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/class-nowcom-logger-deactivator.php';

/** This action is documented in includes/class-plugin-name-activator.php */
register_activation_hook( __FILE__, array( 'Nowcom_Logger_Activator', 'activate' ) );

/** This action is documented in includes/class-plugin-name-deactivator.php */
register_deactivation_hook( __FILE__, array( 'Nowcom_Logger_Deactivator', 'deactivate' ) );

/**
 * The core plugin class that is used to define internationalization,
 * dashboard-specific hooks, and public-facing site hooks.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/class-nowcom-logger.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
$Nowcom_Logger = new Nowcom_Logger();
$Nowcom_Logger->run();
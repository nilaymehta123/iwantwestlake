<?php

/**
 * The core plugin class.
 *
 * This is used to define internationalization, dashboard-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Nowcom_Logger
 * @subpackage nowcom_logger/includes
 * @author     Nowcom
 */
class Nowcom_Logger {

    protected $loader;
    protected $plugin_name;
    protected $version;

		const LOGFILE_EXT = 'log';

    public function __construct() {

        $this->plugin_name = 'nowcom-logger';
        $this->version = '1.0.0';

        $this->load_dependencies();
        $this->define_admin_hooks();
        //$this->define_public_hooks();
    }

    private function load_dependencies() {
        
        // 12-2-2015
        // jeph
        // temporary fix if submission does not ge through wordpress
        require_once(ABSPATH . 'wp-admin/includes/file.php');

        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-nowcom-logger-loader.php';
		require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-nowcom-logger-common.php';
        require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-nowcom-logger-admin.php';
        //require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-nowcom-logger-public.php';

        $this->loader = new Nowcom_Logger_Loader();
    }

    private function define_admin_hooks() {

        $plugin_admin = new Nowcom_Logger_Admin($this->get_plugin_name(), $this->get_version());

		$this->loader->add_action('init', $plugin_admin, 'filter_request');
		$this->loader->add_action('admin_menu', $plugin_admin, 'add_submenu_page');
		$this->loader->add_action('admin_init', $plugin_admin, 'page_init');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_styles');
        $this->loader->add_action('admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts');
    }

    private function define_public_hooks() {

        $plugin_public = new Nowcom_Logger_Public($this->get_plugin_name(), $this->get_version());

        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
    }

    public function run() {
        $this->loader->run();
    }

    public function get_plugin_name() {
        return $this->plugin_name;
    }

    public function get_loader() {
        return $this->loader;
    }

    public function get_version() {
        return $this->version;
    }

	public static function write($message, $log_type){

		// get logfiles_path
		$nowcom_logger_admin_options = get_option('nowcom_logger_admin_options');            
		$logfiles_path = get_home_path().trailingslashit($nowcom_logger_admin_options['logfiles_path']);

		//check message
		if($message == ''){
			return array(status => false, message => 'Messsage is empty');
		}
			
		//get ip address
		if(($remote_addr = $_SERVER['REMOTE_ADDR']) == ''){
			$remote_addr = "REMOTE_ADDR_UNKNOWN";
		}
			
		//get uri script
		if(($request_uri = $_SERVER['REQUEST_URI']) == ''){
			$request_uri = "REQUEST_URI_UNKNOWN";
		}
			
		$formatted_log_message = "[" . date('Y-m-d H:i:s') . "] " . $remote_addr . " " . $request_uri . " " . $message;
			
		error_log("<div style='color:{$log_type}'>" . $formatted_log_message . "</div>", 3, $logfiles_path . date('Y-m-d') . '.' . self::LOGFILE_EXT);
	}

    public static function log_submission_service_communication($product_type, $invoked_library_method, $invoked_service_method, $service_result, $time_started){
			$log_details = "{" . $product_type . "|" . $invoked_library_method . "|" . $invoked_service_method;
			$log_details .= "|" . (($service_result['status'] == 'success') ? "<span style='color:green'>Succeeded</span>" : "<span style='color:red'>Failed</span>");
			$log_details .= "|" . (($service_result['app_id'] == '') ? 'None' : $service_result['app_id']);
			$log_details .= "|" . (($service_result['err_msg'] == '') ? 'None' : $service_result['err_msg']);
			$log_details.= "} - Started: " . $time_started . ", Ended: " . date('Y-m-d H:i:s');
			
			self::write($log_details, Nowcom_LogType::INFO);
    }

}
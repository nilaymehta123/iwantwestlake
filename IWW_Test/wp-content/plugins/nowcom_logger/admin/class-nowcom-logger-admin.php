<?php

/**
 * The dashboard-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the dashboard-specific stylesheet and JavaScript.
 *
 * @package    Nowcom_Logger
 * @subpackage nowcom_marquess/includes
 * @author     Nowcom
 */
 

class Nowcom_Logger_Admin {

	private $plugin_name;
	private $version;
	private $wpdb;
	private $options;

	public function __construct( $plugin_name, $version ) {
		global $wpdb;
		$this->wpdb = $wpdb;
		
		$this->plugin_name 	= $plugin_name;
		$this->version 		= $version;
	}

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name.'_css', plugin_dir_url( __FILE__ ) . 'css/nowcom-logger-admin.css', array(), $this->version, 'all' );
		wp_enqueue_style($this->plugin_name.'_css_tabs', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.min.css', array(), $this->version, 'all');
		wp_enqueue_style($this->plugin_name.'_css_tabs_theme', plugin_dir_url( __FILE__ ) . 'css/jquery-ui.theme.min.css', array(), $this->version, 'all');
	}

	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name.'_js_tabs', plugin_dir_url( __FILE__ ) . 'js/jquery-ui.min.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->plugin_name.'_js', plugin_dir_url( __FILE__ ) . 'js/nowcom-logger-admin.js', array( 'jquery' ), $this->version, false );
	}

	/**
	 * Add options page
	 */
	public function add_submenu_page()
	{
		// This page will be under "Tools"
		add_management_page(
			'Nowcom Site Logger', 
			'Site Logger', 
			'manage_options', 
			'nowcom-logger-admin', 
			array($this, 'create_admin_page')
		);
	}

	/**
	 * Options page callback
	 */
	public function create_admin_page()
	{
		// Set class property
		$this->options = get_option( 'nowcom_logger_admin_options' );
?>			<h2>Nowcom Site Logger</h2>
        <div id="nowcom-logger-admin-tabs" class="wrap">
					<ul>
						<li><a href="#tab-1">Logs</a></li>
						<li><a href="#tab-2">Settings</a></li>
					</ul>
					<div id="tab-1">
						<h3>Log List</h3>
						<div class="file-list-wrapper">
							<?php
							self::log_list();
							?>
						</div>
					</div>
					<div id="tab-2">
            <form method="post" action="options.php">
            <?php
						// This prints out all hidden setting fields
						settings_fields( 'nowcom_logger_option_group' );   
						do_settings_sections( 'nowcom-logger-admin' );
						submit_button(); 
            ?>
            </form>
					</div>
        </div>
<?php
	}

	/**
   * Register and add settings
   */
    public function page_init()
    {        
        register_setting(
            'nowcom_logger_option_group', // Option group
            'nowcom_logger_admin_options', // Option name
            array( $this, 'sanitize' ) // Sanitize
        );

        add_settings_section(
            'nowcom_logger_general_section', // ID
            'General Options', // Title
            array( $this, 'general_section_info' ), // Callback
            'nowcom-logger-admin' // Page
        );

        add_settings_field(
            'nowcom_logger_logfiles_path', 
            'Log files path', 
            array( $this, 'nowcom_logger_logfiles_path_callback' ), 
            'nowcom-logger-admin', 
            'nowcom_logger_general_section'
        );

		}

    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public function sanitize( $input )
    {
			$new_input = array();
				if( isset( $input['logfiles_path'] ) ){
					$logfiles_path =  trailingslashit($input['logfiles_path']);
					if((@opendir(get_home_path().$logfiles_path) !== false) && is_writable(get_home_path().$logfiles_path)){
						$new_input['logfiles_path']  = $logfiles_path ;
					}
				}
        return $new_input;
    }

    /** 
     * Print the Section text
     */
    public function general_section_info()
    {
        //print '';
    }

		public function nowcom_logger_logfiles_path_callback()
    {
    ?>
    <span class="current_home_path"><?php echo get_home_path(); ?></span><input type="text" id="logfiles_path" name="nowcom_logger_admin_options[logfiles_path]" value="<?php echo isset( $this->options['logfiles_path'] ) ? $this->options['logfiles_path'] : ''; ?>" class="regular-text ltr" placeholder="valid_directory_path/"/>
    <p class="description">Valid relative directory path where log files will be created.</p>
    <?php if(is_writable(get_home_path().$this->options['logfiles_path'])) : ?>
    <p class="status notice">Status: Folder is writable.</p>
    <?php else: ?>
    <p class="status error">Status: Folder is not-writable.</p>
    <?php endif; ?>
    
    <?php
    }

		public static function log_list(){

			// get logfiles_path
			$nowcom_logger_admin_options = get_option('nowcom_logger_admin_options');            
			$logfiles_path = get_home_path().trailingslashit($nowcom_logger_admin_options['logfiles_path']);

			if (trim($logfiles_path) != '' && $handle = opendir($logfiles_path)) {
				$log_list = '';
				while (false !== ($entry = readdir($handle))) {
					
					if ($entry != "." && $entry != "..") {
						$target_file = $logfiles_path.$entry;
					  $file_info = pathinfo($target_file);
						if($file_info['extension'] == Nowcom_Logger::LOGFILE_EXT){
							$href = home_url(add_query_arg(array('file' => $entry)));
							$log_list = "<a href='{$href}' target='_blank'>{$entry}</a><br/>" . $log_list;
						}
					}
				}
				if(empty($log_list)){
					$log_list = 'No *.' . Nowcom_Logger::LOGFILE_EXT . ' files found in ' . $logfiles_path . '.';
				}
				echo $log_list;
				closedir($handle);
				
			}
		}

		public static function log_viewer(){
			$nowcom_logger_admin_options = get_option('nowcom_logger_admin_options');            
			$logfiles_path = ABSPATH.trailingslashit($nowcom_logger_admin_options['logfiles_path']);

			$target_file = $logfiles_path . $_GET['file'];
			$file_info = pathinfo($target_file);
			if($file_info['extension'] == Nowcom_Logger::LOGFILE_EXT){
				echo "<div style='font:12px arial;'>Log File: {$_GET['file']}<br/><br/>";
				echo file_get_contents($target_file);
			}else{
				echo "<p>Log file not found.</p>";
			}
			echo "</div>";
		}

		public function filter_request(){
			// check if requesting to view log file
			if(!empty($_GET['page']) && !empty($_GET['file']) && current_user_can('manage_options')){
				self::log_viewer();
				exit;
			}
		}
}

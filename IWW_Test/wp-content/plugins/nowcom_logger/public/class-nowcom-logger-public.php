<?php

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the dashboard-specific stylesheet and JavaScript.
 *
 * @package    Nowcom_Logger
 * @subpackage nowcom_logger/includes
 * @author     Nowcom 
 */
class Nowcom_Logger_Public {

    private $plugin_name;
    private $version;

    public function __construct($plugin_name, $version) {
        global $wpdb;
        $this->wpdb = $wpdb;

        $this->plugin_name = $plugin_name;
        $this->version = $version;

    }

    public function enqueue_styles() {
        
    }

    public function enqueue_scripts() {
        
    }

}

/**
 * Get the absolute filesystem path to the root of the WordPress installation
 *
 * @since 1.5.0
 *
 * @return string Full filesystem path to the root of the WordPress installation
 */

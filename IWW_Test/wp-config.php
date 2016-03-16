<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

 /***** REGION: Change for custom connection settings *****/ 

/*
    > NGS

    $custom_db_name = "iwantwestlake_local";
    $custom_db_user = "user";
    $custom_db_password = "user";
    $custom_db_host = "ngswebdemo";
    $custom_db_table_prefix = "iwantwestlake_";	
*/

/*
    > ALABANG

    $custom_db_name = "iwantwestlake_local";
    $custom_db_user = "DevMySQL_dev0";
    $custom_db_password = "Testing.Dev0";
    $custom_db_host = "alabang1.hankeyinvestments.dev0";
    $custom_db_table_prefix = "iwantwestlake_";	
*/

$custom_db_name = "iww_test";
$custom_db_user = "DevMySQL_dev0";
$custom_db_password = "Testing.Dev0";
$custom_db_host = "alabang1.hankeyinvestments.dev0";
$custom_db_table_prefix = "iwantwestlake_";	
$custom_site_url = "http://localhost:9021/";

define('DB_NAME', $custom_db_name);
define('DB_USER', $custom_db_user);
define('DB_PASSWORD', $custom_db_password);
define('DB_HOST', $custom_db_host);

define('WP_SITEURL', $custom_site_url);
define('WP_HOME', $custom_site_url);
/***** ENDREGION: Change for custom connection settings *****/
 
 

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6^xR=uWOMMsLx{~j}X$8n<[*jz97$v:i4lL02THi];n3<9);Q.i<e-uA=G%=K(Aa');
define('SECURE_AUTH_KEY',  'Ug#MH7{J-krN0ZM/q?*!VALP*m<[{g^vo0-D7F-MT|z1aK>Ixhs92c.Gw|<d9N*9');
define('LOGGED_IN_KEY',    'U q*Tfs-vjuQjcE5vT0e XoY8zY{ae*N/V{_G&Hm(F/-gJ8n$x.bT[J]Ky[q2+a8');
define('NONCE_KEY',        '<Yf+4cPS)`i%=+?YcS9]^:4`pgO7=|)-<g~.qZIYF-V%;3eu#d:Jv]KBV3 V);zc');
define('AUTH_SALT',        'LZ|1j]swQW~GvXSDbD`x-sJ{arHQ|RHAi,XMI|H03&fH?4w>H|@AN8G-&KA;Ru2S');
define('SECURE_AUTH_SALT', '+$x;Xf$7~61-yzrUOm|>3Fy?Z}7m4U[.X_EUn|4:G7J+>OYwq*VD/1.-Vz9,)F5r');
define('LOGGED_IN_SALT',   'H?&NXejfd1SV -J#J+`XKutfB-/fGyEL;`5<in:+!lC.lCFq}Y-7dAWJ.)6Gh*GC');
define('NONCE_SALT',       'b|pJOw[4+%DJ,4-}{ZT0r&YACIzMpL+G&g9q&B$]-`nI43V5]-~ [PXebbhy<iFe');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = $custom_db_table_prefix;

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('WP_SITEURL', $custom_site_url);
define('WP_HOME', $custom_site_url);

/** site specific variables */
require_once(ABSPATH . 'site-config.php');

define( 'AUTOMATIC_UPDATER_DISABLED', true );
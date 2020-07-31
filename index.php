<?php
   /**
   * Plugin Name: Fiesta Blocks
   * Plugin URI: https://github.com/jsaarine/fiesta-blocks
   * Description: Container plugin for custom Gutenberg blocks
   * Version: 1.0
   * Author: jsaarine
   **/

if(!defined('ABSPATH')) exit; // Exit if accessed directly

include dirname(__FILE__).'/sample-block/block.php';
// include dirname(__FILE__).'/sample-block2/block.php';

// Disable auto updates
add_filter('plugin_auto_update_setting_html', function($html, $plugin_file, $plugin_data) {
	if('fiesta-blocks/index.php' === $plugin_file ) {
		$html = __('Auto-updates are not available for this plugin.');
	}

	return $html;
}, 10, 3);

?>
<?php
/**
* Plugin Name: Fiesta Blocks
* Plugin URI: https://github.com/jsaarine/fiesta-blocks
* Description: Container plugin for custom Gutenberg blocks
* Version: 1.0
* Author: jsaarine
**/

namespace Fiesta\Blocks;


// Exit if accessed directly
if(!defined('ABSPATH')) exit;

// Include blocks
include dirname(__FILE__).'/src/sample-block/block.php';
// include dirname(__FILE__).'/src/sample-block2/block.php';

// Disable auto updates
add_filter('plugin_auto_update_setting_html', function($html, $plugin_file, $plugin_data) {
	if('fiesta-blocks/index.php' === $plugin_file ) {
		$html = __('Auto-updates are not available for this plugin.');
	}

	return $html;
}, 10, 3);

?>

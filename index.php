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
$dir = new \DirectoryIterator(dirname(__FILE__).'/src');

foreach($dir as $fileinfo) {
	if($fileinfo->isDir() && !$fileinfo->isDot()) {
		include $fileinfo->getPath().'/'.$fileinfo->current().'/block.php';
	}
}

// Disable auto updates
add_filter('plugin_auto_update_setting_html', function($html, $plugin_file, $plugin_data) {
	if('fiesta-blocks/index.php' === $plugin_file ) {
		$html = __('Auto-updates are not available for this plugin.');
	}

	return $html;
}, 10, 3);

?>

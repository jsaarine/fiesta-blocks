<?php

namespace Fiesta\Blocks\Sample;


// Exit if accessed directly
if(!defined('ABSPATH')) exit;

// Set block name
const BLOCK_NAME = 'sample';

// Enqueue block JavaScript
add_action('admin_enqueue_scripts', function () {
	wp_enqueue_script(BLOCK_NAME.'-block', plugin_dir_url(__FILE__) . '../../dist/'.BLOCK_NAME.'/block.js', array('wp-editor'), true);
});

add_action('init', function() {
	if(!function_exists('register_block_type')) {
		// Gutenberg is not active.
		return;
	}

	register_block_type(\Fiesta\Blocks\PREFIX.'/'.BLOCK_NAME, array(
		'render_callback' => function($attributes, $content) {
			$align = 'alignfull';
			$classname = 'wp-block-'.\Fiesta\Blocks\PREFIX.'-'.BLOCK_NAME.' '.$align;

			ob_start(); ?>

			<div class="<?= $classname ?>">
				<?= $content ?>
			</div>

			<?php
			return ob_get_clean();
		},
	));
});


?>

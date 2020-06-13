<?php

if(!defined('ABSPATH')) exit; // Exit if accessed directly

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script('sample-block', plugin_dir_url(__FILE__) . '../dist/sample-block/block.js', array('wp-blocks', 'wp-editor'), true );
});

add_action('init', function() {
	if(! function_exists('register_block_type')) {
		// Gutenberg is not active.
		return;
	}

	register_block_type('fiesta/sample-block', array(
		'render_callback' => function($attributes, $content) {
			$align = $attributes['align'] ? ' align'.$attributes['align'] : '';
			
			return '
			<div class="wp-block-fiesta-sample-block'.$align.'">
				'.$content.'
			</div>';
		},
	));    
});


?>
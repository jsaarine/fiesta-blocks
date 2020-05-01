<?php

if(!defined('ABSPATH')) exit; // Exit if accessed directly

add_action('enqueue_block_editor_assets', function () {
	wp_enqueue_script('test-block', plugin_dir_url(__FILE__) . '../dist/test-block/block.js', array('wp-blocks', 'wp-editor'), true );
});

add_action('init', function() {
	if(! function_exists('register_block_type')) {
		// Gutenberg is not active.
		return;
	}

	register_block_type('fiesta/test-block', array(
		'render_callback' => function($attributes, $content) {
			return '
			<div class="wp-block-fiesta-test-block">
				<!--<h2>'.$attributes['title'].'</h2>
				<p>'.$attributes['content'].'</p>
				<a href="" class="c-button">'.$attributes['buttonText'].'</a>-->
				'.$content.'
			</div>';
		},
	));    
});


?>
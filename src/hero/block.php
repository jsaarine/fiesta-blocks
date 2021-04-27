<?php

namespace Fiesta\Blocks\Hero;


// Exit if accessed directly
if(!defined('ABSPATH')) exit;

// Set block name
const BLOCK_NAME = 'hero';

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
			$has_thumbnail = has_post_thumbnail();

			ob_start(); ?>

			<div class="<?= $classname ?><?= $has_thumbnail ? ' image' : ' plain' ?>">
				<?= the_post_thumbnail('hero', array('loading' => false)) ?>
				<div class="text">
					<div>
						<?= $content ?>
					</div>
				</div>
			</div>

			<?php
			return ob_get_clean();
		},
	));
});


?>

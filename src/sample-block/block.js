const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow, TextControl } = wp.components;

registerBlockType('fiesta/sample-block', {
	title: 'Sample block',
	icon: 'admin-site',
	category: 'common',
	supports: {
		align: ['wide', 'full']
	},
	attributes: {
		align: {type: 'string', default: 'wide'}
	},

	edit: ({attributes, setAttributes, className}) => {
		const allowedBlocks = ['core/heading', 'core/paragraph', 'core/buttons'];

		return (
			<div className={className}>
				<InnerBlocks allowedBlocks={allowedBlocks} templateLock="all" template={[
					['core/heading', { placeholder: 'Enter title...' }],
					['core/paragraph', { placeholder: 'Enter content...' }],
					['core/buttons', { placeholder: 'Enter button text...' }],
				]}/>
			</div>
		);
	},

	save: ({attributes}) => {
		return <InnerBlocks.Content />
	}
})

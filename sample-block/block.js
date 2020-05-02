const { registerBlockType } = wp.blocks;
const { RichText, InnerBlocks } = wp.editor;
  
registerBlockType('fiesta/sample-block', {
	title: 'Sample block',
	icon: 'admin-site',
	category: 'common',
	attributes: {
		title: {type: 'string'},
		content: {type: 'string'},
		buttonText: {type: 'string'},
		buttonLink: {type: 'string'}
	},
  
	edit: function({attributes, setAttributes, className}) {
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

	save: function({attributes}) {
		return <InnerBlocks.Content />
	}
})
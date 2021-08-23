const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

registerBlockType("fiesta/sample", {
	title: "Sample block",
	icon: "block-default",
	category: "fiesta",
	attributes: {
		align: {type: "string", default: "full"}
	},
	example: {},
	getEditWrapperProps() {
		return {
			"data-align": "full",
		};
	},

	edit: ({attributes, setAttributes, className}) => {
		const allowedBlocks = ["core/heading", "core/paragraph", "core/buttons"];

		return (
			<div className={className}>
				<InnerBlocks allowedBlocks={allowedBlocks} template={[
					["core/heading"],
					["core/paragraph"],
					["core/buttons"],
				]}/>
			</div>
		);
	},

	save: ({attributes}) => {
		return <InnerBlocks.Content />
	}
})

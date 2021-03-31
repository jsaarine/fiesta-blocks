const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

registerBlockType("fiesta/sample", {
	title: "Sample block",
	icon: "block-default",
	category: "common",
	attributes: {
		align: {type: "string", default: "full"}
	},
	getEditWrapperProps() {
		return {
			"data-align": "full",
		};
	},

	edit: ({attributes, setAttributes, className}) => {
		const allowedBlocks = ["core/heading", "core/paragraph", "core/buttons"];

		return (
			<div className={className}>
				<InnerBlocks allowedBlocks={allowedBlocks} templateLock="all" template={[
					["core/heading", { placeholder: "Enter title..." }],
					["core/paragraph", { placeholder: "Enter content..." }],
					["core/buttons", { placeholder: "Enter button text..." }],
				]}/>
			</div>
		);
	},

	save: ({attributes}) => {
		return <InnerBlocks.Content />
	}
})

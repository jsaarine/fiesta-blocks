const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;
const { useSelect, select } = wp.data;

registerBlockType("fiesta/hero", {
	title: "Hero",
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
		const { image } = useSelect(
			() => {
				const featuredImageId = wp.data.select("core/editor").getEditedPostAttribute("featured_media");

				return {
					image: featuredImageId ? wp.data.select("core").getMedia(featuredImageId) : null,
				};
			}
		);

		const allowedBlocks = ["core/heading", "core/paragraph", "core/buttons"];
		const url = image ? image.media_details.sizes.full.source_url : null;

		return (
			<div className={className + (image ? " image" : " plain")}>
				{url &&
					<img src={url} alt="" />
				}
				<div className="text">
					<div>
						<InnerBlocks allowedBlocks={allowedBlocks} template={[
							["core/heading", { level: 1, placeholder: "Add hero title..." }],
							["core/paragraph", { placeholder: "Add hero text..." }],
						]}/>
					</div>
				</div>
			</div>
		);
	},

	save: ({attributes}) => {
		return <InnerBlocks.Content />
	}
})

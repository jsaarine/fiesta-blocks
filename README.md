# fiesta-blocks
Container plugin for custom Gutenberg blocks

## Usage

1. Create folder `fiesta-blocks` inside your plugins folder and extract into it
2. Activate plugin from WordPress
3. Run `npm install`
4. Run `npm run watch` to start watch
5. Run `npm run build` to build for production

## Create new block

1. Duplicate the `sample-block` folder and rename it
2. Include the new block in `index.php`
3. Change block namespace, name and path in `block.php`
4. Change block name in `block.js`

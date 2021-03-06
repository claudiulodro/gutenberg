<?php
/**
 * Two images side by side block pattern.
 *
 * @package gutenberg
 */

return array(
	'title'       => __( 'Two images side by side', 'gutenberg' ),
	'categories'  => array( 'gallery' ),
	'description' => _x( 'An image gallery with two cropped example images.', 'Block pattern description', 'gutenberg' ),
	'content'     => "<!-- wp:gallery {\"ids\":[null,null],\"align\":\"wide\"} -->\n<figure class=\"wp-block-gallery alignwide columns-2 is-cropped\"><ul class=\"blocks-gallery-grid\"><li class=\"blocks-gallery-item\"><figure><img src=\"https://s.w.org/images/core/5.5/Glacial_lakes,_Bhutan.jpg\" alt=\"\" data-id=\"\"/></figure></li><li class=\"blocks-gallery-item\"><figure><img src=\"https://s.w.org/images/core/5.5/Sediment_off_the_Yucatan_Peninsula.jpg\" alt=\"\" data-id=\"\"/></figure></li></ul></figure>\n<!-- /wp:gallery -->",
);

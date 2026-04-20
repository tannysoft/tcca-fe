<?php
/**
 * Plugin Name: TCCA Headless
 * Description: Custom Post Types, Taxonomies, Options Pages, and headless (WPGraphQL / REST) exposure for the TCCA Next.js frontend.
 * Version: 1.0.0
 * Author: TCCA
 * Requires Plugins: advanced-custom-fields-pro
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/* ============================================================
 * 1) RENAME built-in Post type admin menu -> "News"
 *    News content lives in core posts (no CPT), rebranded in UI.
 * ========================================================== */

add_action( 'init', function () {
    global $wp_post_types;
    if ( isset( $wp_post_types['post'] ) ) {
        $labels = &$wp_post_types['post']->labels;
        $labels->name               = 'News';
        $labels->singular_name      = 'News';
        $labels->add_new            = 'Add News';
        $labels->add_new_item       = 'Add New News';
        $labels->edit_item          = 'Edit News';
        $labels->new_item           = 'New News';
        $labels->view_item          = 'View News';
        $labels->search_items       = 'Search News';
        $labels->not_found          = 'No news found';
        $labels->not_found_in_trash = 'No news in trash';
        $labels->all_items          = 'All News';
        $labels->menu_name          = 'News';
        $labels->name_admin_bar     = 'News';
        $wp_post_types['post']->menu_icon = 'dashicons-megaphone';
    }
} );

add_action( 'admin_menu', function () {
    global $menu, $submenu;
    if ( isset( $menu[5][0] ) ) {
        $menu[5][0] = 'News';
    }
    if ( isset( $submenu['edit.php'] ) ) {
        foreach ( $submenu['edit.php'] as &$item ) {
            if ( $item[0] === 'All Posts' ) $item[0] = 'All News';
            if ( $item[0] === 'Add New Post' || $item[0] === 'Add New' ) $item[0] = 'Add News';
        }
    }
}, 999 );

/* ============================================================
 * 2) Seed Pages for Home / About / Register (on activation)
 * ========================================================== */

register_activation_hook( __FILE__, 'tcca_seed_pages' );

function tcca_seed_pages() {
    $pages = array(
        'home'     => array( 'title' => 'Home',     'template' => 'page-home.php' ),
        'about'    => array( 'title' => 'About',    'template' => 'page-about.php' ),
        'register' => array( 'title' => 'Register', 'template' => 'page-register.php' ),
    );
    foreach ( $pages as $slug => $meta ) {
        $existing = get_page_by_path( $slug );
        if ( ! $existing ) {
            $id = wp_insert_post( array(
                'post_type'    => 'page',
                'post_status'  => 'publish',
                'post_title'   => $meta['title'],
                'post_name'    => $slug,
                'post_content' => '',
            ) );
            if ( $id && ! is_wp_error( $id ) ) {
                update_post_meta( $id, '_wp_page_template', $meta['template'] );
            }
        } elseif ( ! get_post_meta( $existing->ID, '_wp_page_template', true ) ) {
            update_post_meta( $existing->ID, '_wp_page_template', $meta['template'] );
        }
    }
}

// Register virtual page templates so editors can pick them (and ACF can target them).
add_filter( 'theme_page_templates', function ( $templates ) {
    $templates['page-home.php']     = 'TCCA — Home';
    $templates['page-about.php']    = 'TCCA — About';
    $templates['page-register.php'] = 'TCCA — Register';
    return $templates;
} );

/* ============================================================
 * 3) CUSTOM POST TYPES
 * ========================================================== */

add_action( 'init', function () {

    // --- Events --------------------------------------------
    register_post_type( 'tcca_event', array(
        'label'               => 'Events',
        'labels'              => array(
            'name'          => 'Events',
            'singular_name' => 'Event',
        ),
        'public'              => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'event',
        'graphql_plural_name' => 'events',
        'supports'            => array( 'title', 'editor', 'excerpt', 'thumbnail', 'custom-fields' ),
        'has_archive'         => false,
        'rewrite'             => array( 'slug' => 'events' ),
        'menu_icon'           => 'dashicons-calendar-alt',
        'menu_position'       => 21,
    ) );

    // --- Partners ------------------------------------------
    register_post_type( 'tcca_partner', array(
        'label'               => 'Partners',
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'partner',
        'graphql_plural_name' => 'partners',
        'supports'            => array( 'title', 'thumbnail', 'custom-fields', 'page-attributes' ),
        'menu_icon'           => 'dashicons-groups',
        'menu_position'       => 22,
    ) );

    // --- Pillars (6 พันธกิจหลัก) ----------------------------
    register_post_type( 'tcca_pillar', array(
        'label'               => 'Pillars',
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'pillar',
        'graphql_plural_name' => 'pillars',
        'supports'            => array( 'title', 'custom-fields', 'page-attributes' ),
        'menu_icon'           => 'dashicons-grid-view',
        'menu_position'       => 23,
    ) );

    // --- Committee -----------------------------------------
    register_post_type( 'tcca_committee', array(
        'label'               => 'Committee',
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'committeeGroup',
        'graphql_plural_name' => 'committeeGroups',
        'supports'            => array( 'title', 'custom-fields', 'page-attributes' ),
        'menu_icon'           => 'dashicons-businessperson',
        'menu_position'       => 24,
    ) );

    // --- Timeline Entry ------------------------------------
    register_post_type( 'tcca_timeline', array(
        'label'               => 'Timeline',
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'timelineEntry',
        'graphql_plural_name' => 'timelineEntries',
        'supports'            => array( 'title', 'editor', 'custom-fields', 'page-attributes' ),
        'menu_icon'           => 'dashicons-chart-line',
        'menu_position'       => 25,
    ) );

    // --- Benefits (Register page) --------------------------
    register_post_type( 'tcca_benefit', array(
        'label'               => 'Membership Benefits',
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'benefit',
        'graphql_plural_name' => 'benefits',
        'supports'            => array( 'title', 'custom-fields', 'page-attributes' ),
        'menu_icon'           => 'dashicons-awards',
        'menu_position'       => 26,
    ) );

    /* --------------------------------------------------------
     * TAXONOMIES
     * ------------------------------------------------------ */

    /* News uses the built-in Categories + Tags taxonomies — no custom one needed. */

    register_taxonomy( 'tcca_event_tag', array( 'tcca_event' ), array(
        'label'               => 'ประเภทงาน',
        'hierarchical'        => false,
        'public'              => false,
        'show_ui'             => true,
        'show_in_rest'        => true,
        'show_in_graphql'     => true,
        'graphql_single_name' => 'eventTag',
        'graphql_plural_name' => 'eventTags',
    ) );

} );

/* ============================================================
 * 2) ACF OPTIONS PAGES
 * ========================================================== */

add_action( 'acf/init', function () {
    if ( ! function_exists( 'acf_add_options_page' ) ) {
        return;
    }

    acf_add_options_page( array(
        'page_title'  => 'TCCA — Site Settings',
        'menu_title'  => 'TCCA Settings',
        'menu_slug'   => 'tcca-settings',
        'capability'  => 'edit_posts',
        'redirect'    => true,
        'icon_url'    => 'dashicons-admin-site-alt3',
        'position'    => 2,
        'show_in_graphql' => true,
    ) );

    /* Home / About / Register now live on WP Pages (see tcca_seed_pages + page_template).
       Only truly site-wide singletons remain as Options pages. */
    $pages = array(
        array( 'title' => 'Identity & Contact', 'slug' => 'tcca-identity' ),
        array( 'title' => 'Navigation',         'slug' => 'tcca-navigation' ),
        array( 'title' => 'Footer',             'slug' => 'tcca-footer' ),
        array( 'title' => 'Partners Section',   'slug' => 'tcca-partners' ),
    );

    foreach ( $pages as $p ) {
        acf_add_options_sub_page( array(
            'page_title'  => $p['title'],
            'menu_title'  => $p['title'],
            'menu_slug'   => $p['slug'],
            'parent_slug' => 'tcca-settings',
            'show_in_graphql' => true,
        ) );
    }
} );

/* ============================================================
 * 3) ACF -> WPGraphQL integration
 *    Makes ACF fields available under the "acf" group in GraphQL.
 * ========================================================== */

add_filter( 'wpgraphql_acf_schema_field_config', function ( $config ) {
    $config['show_in_graphql'] = true;
    return $config;
} );

/* ============================================================
 * 4) Convenience: also expose featured image / author in REST
 *    with expanded data (optional — remove if using WPGraphQL only).
 * ========================================================== */

add_action( 'rest_api_init', function () {
    register_rest_field(
        array( 'post', 'tcca_event' ),
        'cover_image',
        array(
            'get_callback' => function ( $post ) {
                $id = get_post_thumbnail_id( $post['id'] );
                if ( ! $id ) return null;
                return tcca_image_payload( $id );
            },
        )
    );
} );

/* ============================================================
 * 5) Custom REST endpoints for the Next.js frontend
 *    Namespace: /wp-json/tcca/v1/...
 *    Returns shape that maps 1:1 to Next.js component props.
 *    All endpoints are public GET (no auth) and CORS-enabled.
 * ========================================================== */

/**
 * Normalize an image attachment id into a flat payload.
 */
function tcca_image_payload( $id ) {
    if ( ! $id ) return null;
    $url = wp_get_attachment_image_url( $id, 'full' );
    if ( ! $url ) return null;
    $meta = wp_get_attachment_metadata( $id );
    return array(
        'id'     => (int) $id,
        'url'    => $url,
        'alt'    => (string) get_post_meta( $id, '_wp_attachment_image_alt', true ),
        'width'  => isset( $meta['width'] ) ? (int) $meta['width'] : null,
        'height' => isset( $meta['height'] ) ? (int) $meta['height'] : null,
        'sizes'  => array(
            'thumbnail' => wp_get_attachment_image_url( $id, 'thumbnail' ),
            'medium'    => wp_get_attachment_image_url( $id, 'medium' ),
            'large'     => wp_get_attachment_image_url( $id, 'large' ),
        ),
    );
}

/**
 * Given an ACF image field value (can be id, url, or array), return a normalized payload.
 */
function tcca_acf_image( $value ) {
    if ( empty( $value ) ) return null;
    if ( is_numeric( $value ) ) return tcca_image_payload( (int) $value );
    if ( is_array( $value ) && isset( $value['ID'] ) ) return tcca_image_payload( (int) $value['ID'] );
    if ( is_array( $value ) && isset( $value['id'] ) ) return tcca_image_payload( (int) $value['id'] );
    return null;
}

/**
 * Normalize an ACF file field value.
 */
function tcca_acf_file( $value ) {
    if ( empty( $value ) ) return null;
    $id = null;
    if ( is_numeric( $value ) ) $id = (int) $value;
    elseif ( is_array( $value ) && isset( $value['ID'] ) ) $id = (int) $value['ID'];
    elseif ( is_array( $value ) && isset( $value['id'] ) ) $id = (int) $value['id'];
    if ( ! $id ) return null;
    $url = wp_get_attachment_url( $id );
    if ( ! $url ) return null;
    return array(
        'id'       => $id,
        'url'      => $url,
        'filename' => basename( get_attached_file( $id ) ),
        'title'    => get_the_title( $id ),
        'mime'     => get_post_mime_type( $id ),
    );
}

function tcca_opt( $slug, $key, $default = null ) {
    $v = get_field( $key, $slug );
    return ( $v === null || $v === '' || $v === false ) ? $default : $v;
}

/**
 * Return the first category name for a post (used as the card badge label),
 * plus the full list.
 */
function tcca_article_categories( $post_id ) {
    $terms = get_the_terms( $post_id, 'category' );
    if ( is_wp_error( $terms ) || empty( $terms ) ) {
        return array( 'label' => '', 'list' => array() );
    }
    $list = array();
    foreach ( $terms as $t ) {
        // Skip the default "Uncategorized" bucket so the badge doesn't show it.
        if ( (int) $t->term_id === (int) get_option( 'default_category' ) && strtolower( $t->slug ) === 'uncategorized' ) {
            continue;
        }
        $list[] = array( 'slug' => $t->slug, 'name' => $t->name );
    }
    return array(
        'label' => ! empty( $list ) ? $list[0]['name'] : '',
        'list'  => $list,
    );
}

function tcca_article_tags( $post_id ) {
    $terms = get_the_terms( $post_id, 'post_tag' );
    if ( is_wp_error( $terms ) || empty( $terms ) ) return array();
    return array_map( fn( $t ) => $t->name, $terms );
}

/**
 * Render the Gutenberg post_content through the full `the_content` filter
 * chain so block markup, core block styles, and shortcodes are resolved.
 */
function tcca_rendered_content( $post ) {
    if ( empty( $post->post_content ) ) return '';
    return apply_filters( 'the_content', $post->post_content );
}

function tcca_article_payload( $post ) {
    $id = $post->ID;
    $fields = get_fields( $id ) ?: array();

    $cover   = tcca_image_payload( get_post_thumbnail_id( $id ) );
    $cats    = tcca_article_categories( $id );
    $hashtags = tcca_article_tags( $id );

    $related = array();
    if ( ! empty( $fields['related'] ) && is_array( $fields['related'] ) ) {
        foreach ( $fields['related'] as $r ) {
            if ( $r instanceof WP_Post ) {
                $r_cats = tcca_article_categories( $r->ID );
                $related[] = array(
                    'slug'      => $r->post_name,
                    'title'     => $r->post_title,
                    'tag_label' => $r_cats['label'],
                    'date_th'   => tcca_thai_date( $r->post_date ),
                    'cover'     => tcca_image_payload( get_post_thumbnail_id( $r->ID ) ),
                );
            }
        }
    }

    $toc = array();
    if ( ! empty( $fields['toc'] ) && is_array( $fields['toc'] ) ) {
        foreach ( $fields['toc'] as $t ) {
            $toc[] = array( 'id' => $t['id'] ?? '', 'label' => $t['label'] ?? '' );
        }
    }

    // Cover caption: prefer the featured-image attachment's caption, if any.
    $cover_caption = '';
    $thumb_id = get_post_thumbnail_id( $id );
    if ( $thumb_id ) {
        $thumb_post = get_post( $thumb_id );
        if ( $thumb_post && ! empty( $thumb_post->post_excerpt ) ) {
            $cover_caption = $thumb_post->post_excerpt;
        }
    }

    return array(
        'id'             => $id,
        'slug'           => $post->post_name,
        'title'          => get_the_title( $post ),
        'excerpt'        => $post->post_excerpt,
        'date'           => $post->post_date,
        'date_th'        => tcca_thai_date( $post->post_date ),
        'subtitle'       => $fields['subtitle'] ?? '',
        'tag_label'      => $cats['label'],
        'categories'     => $cats['list'],
        'read_minutes'   => (int) ( $fields['read_minutes'] ?? 3 ),
        'is_featured'    => (bool) ( $fields['is_featured'] ?? false ),
        'author_display' => $fields['author_display'] ?? 'Newsroom',
        'author_role'    => $fields['author_role'] ?? 'TCCA Official',
        'cover'          => $cover,
        'cover_caption'  => $cover_caption,
        'og_image'       => tcca_acf_image( $fields['og_image'] ?? null ),
        'body_html'      => tcca_rendered_content( $post ),
        'hashtags'       => $hashtags,
        'toc'            => $toc,
        'related'        => $related,
        'gallery'        => array_map( 'tcca_acf_image', (array) ( $fields['gallery'] ?? array() ) ),
        'attachments'    => array_map( function ( $r ) {
            return array( 'label' => $r['label'] ?? '', 'file' => tcca_acf_file( $r['file'] ?? null ) );
        }, (array) ( $fields['attachments'] ?? array() ) ),
    );
}

function tcca_event_payload( $post ) {
    $id = $post->ID;
    $fields = get_fields( $id ) ?: array();
    $cover = tcca_acf_image( $fields['cover'] ?? null ) ?: tcca_image_payload( get_post_thumbnail_id( $id ) );
    return array(
        'id'               => $id,
        'slug'             => $post->post_name,
        'title'            => $post->post_title,
        'excerpt'          => $fields['excerpt'] ?? $post->post_excerpt,
        'event_date'       => $fields['event_date'] ?? '',
        'time_start'       => $fields['time_start'] ?? '',
        'time_end'         => $fields['time_end'] ?? '',
        'date_display_th'  => $fields['date_display_th'] ?? '',
        'day_label'        => $fields['day_label'] ?? '',
        'month_label'      => $fields['month_label'] ?? '',
        'tag'              => $fields['tag'] ?? '',
        'host'             => $fields['host'] ?? '',
        'venue'            => $fields['venue'] ?? '',
        'is_featured'      => (bool) ( $fields['is_featured'] ?? false ),
        'featured_eyebrow' => $fields['featured_eyebrow'] ?? '',
        'featured_title'   => $fields['featured_title'] ?? '',
        'agenda'           => array_map( function ( $r ) {
            return array( 'time' => $r['time'] ?? '', 'label' => $r['label'] ?? '' );
        }, (array) ( $fields['agenda'] ?? array() ) ),
        'cta_label'        => $fields['cta_label'] ?? '',
        'cta_href'         => $fields['cta_href'] ?? '',
        'cover'            => $cover,
        'sticker'          => tcca_acf_image( $fields['sticker'] ?? null ),
        'og_image'         => tcca_acf_image( $fields['og_image'] ?? null ),
        'venue_map'        => tcca_acf_image( $fields['venue_map'] ?? null ),
        'gallery'          => array_map( 'tcca_acf_image', (array) ( $fields['gallery'] ?? array() ) ),
        'attachments'      => array_map( function ( $r ) {
            return array( 'label' => $r['label'] ?? '', 'file' => tcca_acf_file( $r['file'] ?? null ) );
        }, (array) ( $fields['attachments'] ?? array() ) ),
    );
}

/** Very small Thai-date formatter (d M yy พ.ศ.). */
function tcca_thai_date( $date_str ) {
    if ( ! $date_str ) return '';
    $ts = strtotime( $date_str );
    if ( ! $ts ) return '';
    $months = array( '', 'ม.ค.','ก.พ.','มี.ค.','เม.ย.','พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.' );
    $d = (int) date( 'j', $ts );
    $m = (int) date( 'n', $ts );
    $y = (int) date( 'Y', $ts ) + 543;
    $yy = substr( (string) $y, -2 );
    return sprintf( '%02d %s %s', $d, $months[ $m ], $yy );
}

/** Read ACF fields from the page with the given slug. Returns [] if page missing. */
function tcca_page_fields( $slug ) {
    $page = get_page_by_path( $slug );
    if ( ! $page ) return array();
    $f = get_fields( $page->ID );
    return $f ?: array();
}

add_action( 'rest_api_init', function () {

    $ns = 'tcca/v1';

    // --- BOOTSTRAP (identity + nav + footer in one call) -----
    register_rest_route( $ns, '/bootstrap', array(
        'methods'             => 'GET',
        'permission_callback' => '__return_true',
        'callback'            => function () {
            $identity_slug   = 'option';
            $f_identity      = get_fields( $identity_slug ) ?: array();

            return array(
                'identity' => array(
                    'logo'            => tcca_acf_image( $f_identity['logo'] ?? null ),
                    'logo_white'      => tcca_acf_image( $f_identity['logo_white'] ?? null ),
                    'site_name'       => $f_identity['site_name'] ?? '',
                    'tagline'         => $f_identity['tagline'] ?? '',
                    'description'     => $f_identity['description'] ?? '',
                    'favicon'         => tcca_acf_image( $f_identity['favicon'] ?? null ),
                    'default_og_image'=> tcca_acf_image( $f_identity['default_og_image'] ?? null ),
                    'brand_avatar'    => tcca_acf_image( $f_identity['brand_avatar'] ?? null ),
                    'contact_email'   => $f_identity['contact_email'] ?? '',
                    'contact_address' => $f_identity['contact_address'] ?? '',
                    'socials'         => array_map( function ( $r ) {
                        return array(
                            'platform' => $r['platform'] ?? '',
                            'label'    => $r['label'] ?? '',
                            'url'      => $r['url'] ?? '',
                        );
                    }, (array) ( $f_identity['socials'] ?? array() ) ),
                    'brand_assets'    => array_map( function ( $r ) {
                        return array(
                            'label'       => $r['label'] ?? '',
                            'description' => $r['description'] ?? '',
                            'file'        => tcca_acf_file( $r['file'] ?? null ),
                        );
                    }, (array) ( $f_identity['brand_assets'] ?? array() ) ),
                ),
                'navigation' => array(
                    'primary_menu' => array_map( function ( $r ) {
                        return array( 'label' => $r['label'] ?? '', 'href' => $r['href'] ?? '' );
                    }, (array) ( $f_identity['primary_menu'] ?? array() ) ),
                    'cta_label' => $f_identity['cta_label'] ?? '',
                    'cta_href'  => $f_identity['cta_href'] ?? '',
                ),
                'footer' => array(
                    'description' => $f_identity['description'] ?? '',
                    'columns'     => array_map( function ( $col ) {
                        return array(
                            'title' => $col['title'] ?? '',
                            'items' => array_map( function ( $i ) {
                                return array( 'label' => $i['label'] ?? '', 'href' => $i['href'] ?? '' );
                            }, (array) ( $col['items'] ?? array() ) ),
                        );
                    }, (array) ( $f_identity['columns'] ?? array() ) ),
                    'copyright' => $f_identity['copyright'] ?? '',
                    'tagline'   => $f_identity['tagline'] ?? '',
                ),
            );
        },
    ) );

    // --- HOME page ----------------------------------------
    register_rest_route( $ns, '/home', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $f = tcca_page_fields( 'home' );

            $map_post = function ( $p ) {
                if ( ! $p instanceof WP_Post ) return null;
                return tcca_article_payload( $p );
            };
            $map_event = function ( $p ) {
                if ( ! $p instanceof WP_Post ) return null;
                return tcca_event_payload( $p );
            };

            return array(
                'hero' => array(
                    'line1'              => $f['hero_line1'] ?? '',
                    'highlight'          => $f['hero_highlight'] ?? '',
                    'line2'              => $f['hero_line2'] ?? '',
                    'description'        => $f['hero_description'] ?? '',
                    'primary_cta_label'  => $f['primary_cta_label'] ?? '',
                    'primary_cta_href'   => $f['primary_cta_href'] ?? '',
                    'secondary_cta_label'=> $f['secondary_cta_label'] ?? '',
                    'secondary_cta_href' => $f['secondary_cta_href'] ?? '',
                    'visual'             => tcca_acf_image( $f['hero_visual'] ?? null ),
                    'og_image'           => tcca_acf_image( $f['og_image'] ?? null ),
                    'marquee'            => array_map( fn( $r ) => $r['word'] ?? '', (array) ( $f['marquee_words'] ?? array() ) ),
                ),
                'about' => array(
                    'eyebrow'       => $f['about_eyebrow'] ?? '',
                    'title'         => $f['about_title'] ?? '',
                    'description'   => $f['about_description'] ?? '',
                    'quote'         => $f['about_quote'] ?? '',
                    'quote_caption' => $f['about_quote_caption'] ?? '',
                    'cards'         => array_map( function ( $c ) {
                        return array(
                            'tone'    => $c['tone'] ?? 'navy',
                            'kicker'  => $c['kicker'] ?? '',
                            'title'   => $c['title'] ?? '',
                            'body'    => $c['body'] ?? '',
                            'icon'    => $c['icon'] ?? 'eye',
                            'span_two'=> (bool) ( $c['span_two'] ?? false ),
                        );
                    }, (array) ( $f['about_cards'] ?? array() ) ),
                ),
                'pillars_section' => array(
                    'eyebrow'  => $f['pillars_eyebrow'] ?? '',
                    'title'    => $f['pillars_title'] ?? '',
                    'subtitle' => $f['pillars_subtitle'] ?? '',
                ),
                'events_section' => array(
                    'eyebrow'         => $f['events_eyebrow'] ?? '',
                    'title'           => $f['events_title'] ?? '',
                    'featured_event'  => $map_event( $f['featured_event'] ?? null ),
                    'upcoming_events' => array_values( array_filter( array_map( $map_event, (array) ( $f['upcoming_events'] ?? array() ) ) ) ),
                ),
                'news_section' => array(
                    'eyebrow'            => $f['news_eyebrow'] ?? '',
                    'title'              => $f['news_title'] ?? '',
                    'featured_article'   => $map_post( $f['featured_article'] ?? null ),
                    'insight_article'    => $map_post( $f['insight_article'] ?? null ),
                    'community_article'  => $map_post( $f['community_article'] ?? null ),
                    'insight_big_number' => $f['insight_big_number'] ?? '',
                    'insight_subtitle'   => $f['insight_subtitle'] ?? '',
                    'community_highlight'=> $f['community_highlight'] ?? '',
                ),
                'partners_section' => array(
                    'eyebrow' => get_field( 'eyebrow', 'option' ) ?: '',
                    'title'   => get_field( 'title',   'option' ) ?: '',
                ),
                'join' => array(
                    'eyebrow'             => $f['join_eyebrow'] ?? '',
                    'title'               => $f['join_title'] ?? '',
                    'description'         => $f['join_description'] ?? '',
                    'primary_cta_label'   => $f['primary_cta_label'] ?? '',
                    'primary_cta_href'    => $f['primary_cta_href'] ?? '',
                    'secondary_cta_label' => $f['secondary_cta_label'] ?? '',
                    'secondary_cta_href'  => $f['secondary_cta_href'] ?? '',
                    'benefits'            => array_map( fn( $r ) => $r['text'] ?? '', (array) ( $f['benefits'] ?? array() ) ),
                    'note_title'          => $f['note_title'] ?? '',
                    'note_body'           => $f['note_body'] ?? '',
                    'benefits_avatar'     => tcca_acf_image( $f['benefits_avatar'] ?? null ),
                ),
            );
        },
    ) );

    // --- ABOUT page ---------------------------------------
    register_rest_route( $ns, '/about', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $f = tcca_page_fields( 'about' );
            $timeline_posts = get_posts( array( 'post_type' => 'tcca_timeline', 'numberposts' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
            $committee_posts = get_posts( array( 'post_type' => 'tcca_committee', 'numberposts' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
            return array(
                'hero' => array(
                    'eyebrow'     => $f['hero_eyebrow'] ?? '',
                    'title'       => $f['hero_title'] ?? '',
                    'description' => $f['hero_description'] ?? '',
                    'accent_image'=> tcca_acf_image( $f['hero_accent_image'] ?? null ),
                    'og_image'    => tcca_acf_image( $f['og_image'] ?? null ),
                ),
                'north_star' => array(
                    'eyebrow' => $f['north_star_eyebrow'] ?? '',
                    'title'   => $f['north_star_title'] ?? '',
                    'caption' => $f['north_star_caption'] ?? '',
                ),
                'story' => array(
                    'eyebrow' => $f['story_eyebrow'] ?? '',
                    'title'   => $f['story_title'] ?? '',
                    'body'    => $f['story_body'] ?? '',
                    'image'   => tcca_acf_image( $f['story_image'] ?? null ),
                ),
                'values_section' => array(
                    'eyebrow' => $f['values_eyebrow'] ?? '',
                    'title'   => $f['values_title'] ?? '',
                    'values'  => array_map( function ( $v ) {
                        return array(
                            'number' => $v['number'] ?? '',
                            'title'  => $v['title'] ?? '',
                            'body'   => $v['body'] ?? '',
                            'tone'   => $v['tone'] ?? 'navy',
                        );
                    }, (array) ( $f['values'] ?? array() ) ),
                ),
                'timeline' => array(
                    'eyebrow' => $f['timeline_eyebrow'] ?? '',
                    'title'   => $f['timeline_title'] ?? '',
                    'items'   => array_map( function ( $p ) {
                        $tf = get_fields( $p->ID ) ?: array();
                        return array(
                            'year'  => $tf['year'] ?? '',
                            'title' => $p->post_title,
                            'body'  => $tf['body'] ?? '',
                            'image' => tcca_acf_image( $tf['image'] ?? null ),
                        );
                    }, $timeline_posts ),
                ),
                'committee' => array(
                    'eyebrow'     => $f['committee_eyebrow'] ?? '',
                    'title'       => $f['committee_title'] ?? '',
                    'description' => $f['committee_description'] ?? '',
                    'groups'      => array_map( function ( $p ) {
                        $cf = get_fields( $p->ID ) ?: array();
                        return array(
                            'name'        => $p->post_title,
                            'role_en'     => $cf['role_en'] ?? '',
                            'count_label' => $cf['count_label'] ?? '',
                            'members'     => array_map( function ( $m ) {
                                return array(
                                    'name'     => $m['name'] ?? '',
                                    'position' => $m['position'] ?? '',
                                    'bio'      => $m['bio'] ?? '',
                                    'photo'    => tcca_acf_image( $m['photo'] ?? null ),
                                );
                            }, (array) ( $cf['members'] ?? array() ) ),
                        );
                    }, $committee_posts ),
                ),
                'final_cta' => array(
                    'eyebrow'     => $f['final_cta_eyebrow'] ?? '',
                    'title'       => $f['final_cta_title'] ?? '',
                    'description' => $f['final_cta_description'] ?? '',
                    'label'       => $f['final_cta_label'] ?? '',
                    'href'        => $f['final_cta_href'] ?? '',
                ),
            );
        },
    ) );

    // --- REGISTER page ------------------------------------
    register_rest_route( $ns, '/register', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $f = tcca_page_fields( 'register' );
            $benefits_from_rel = array();
            if ( ! empty( $f['benefits_list'] ) && is_array( $f['benefits_list'] ) ) {
                foreach ( $f['benefits_list'] as $p ) {
                    if ( ! $p instanceof WP_Post ) continue;
                    $bf = get_fields( $p->ID ) ?: array();
                    $benefits_from_rel[] = array(
                        'number' => $bf['number'] ?? '',
                        'title'  => $p->post_title,
                        'body'   => $bf['body'] ?? '',
                        'icon'   => tcca_acf_image( $bf['icon'] ?? null ),
                    );
                }
            }
            return array(
                'hero' => array(
                    'eyebrow'     => $f['hero_eyebrow'] ?? '',
                    'title'       => $f['hero_title'] ?? '',
                    'description' => $f['hero_description'] ?? '',
                    'og_image'    => tcca_acf_image( $f['og_image'] ?? null ),
                    'accent_image'=> tcca_acf_image( $f['hero_accent_image'] ?? null ),
                    'price_badge' => $f['price_badge'] ?? '',
                    'price_note'  => $f['price_note'] ?? '',
                ),
                'benefits' => array(
                    'eyebrow'  => $f['benefits_eyebrow'] ?? '',
                    'title'    => $f['benefits_title'] ?? '',
                    'subtitle' => $f['benefits_subtitle'] ?? '',
                    'list'     => $benefits_from_rel,
                ),
                'form' => array(
                    'eyebrow'          => $f['form_eyebrow'] ?? '',
                    'title'            => $f['form_title'] ?? '',
                    'channel_options'  => array_map( fn( $r ) => $r['label'] ?? '', (array) ( $f['channel_options'] ?? array() ) ),
                    'submit_label'     => $f['submit_label'] ?? '',
                    'terms_html'       => $f['terms_html'] ?? '',
                ),
                'steps' => array_map( function ( $s ) {
                    return array(
                        'number' => $s['number'] ?? '',
                        'title'  => $s['title'] ?? '',
                        'body'   => $s['body'] ?? '',
                    );
                }, (array) ( $f['steps'] ?? array() ) ),
                'fee_note' => array(
                    'title' => $f['fee_note_title'] ?? '',
                    'body'  => $f['fee_note_body'] ?? '',
                ),
            );
        },
    ) );

    // --- PARTNERS (section + list) ------------------------
    register_rest_route( $ns, '/partners', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $f = get_fields( 'option' ) ?: array();
            $partners = get_posts( array( 'post_type' => 'tcca_partner', 'numberposts' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
            return array(
                'section' => array(
                    'eyebrow' => $f['eyebrow'] ?? '',
                    'title'   => $f['title'] ?? '',
                ),
                'items'  => array_map( function ( $p ) {
                    $pf = get_fields( $p->ID ) ?: array();
                    return array(
                        'slug'    => $pf['slug'] ?? $p->post_name,
                        'name'    => $p->post_title,
                        'accent'  => $pf['accent'] ?? 'navy',
                        'website' => $pf['website'] ?? '',
                        'logo'    => tcca_acf_image( $pf['logo'] ?? null ),
                    );
                }, $partners ),
            );
        },
    ) );

    // --- PILLARS list -------------------------------------
    register_rest_route( $ns, '/pillars', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $posts = get_posts( array( 'post_type' => 'tcca_pillar', 'numberposts' => -1, 'orderby' => 'menu_order', 'order' => 'ASC' ) );
            return array_map( function ( $p ) {
                $pf = get_fields( $p->ID ) ?: array();
                return array(
                    'n'           => $pf['number'] ?? '',
                    'title'       => $p->post_title,
                    'description' => $pf['description'] ?? '',
                    'color_from'  => $pf['color_from'] ?? '',
                    'color_to'    => $pf['color_to'] ?? '',
                );
            }, $posts );
        },
    ) );

    // --- ARTICLES list + single ---------------------------
    register_rest_route( $ns, '/articles', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function ( WP_REST_Request $req ) {
            $limit    = (int) ( $req->get_param( 'limit' ) ?: 20 );
            $tag_slug = $req->get_param( 'tag' );
            $cat_slug = $req->get_param( 'category' );

            $args = array(
                'post_type'   => 'post',
                'numberposts' => $limit,
                'orderby'     => 'date',
                'order'       => 'DESC',
            );
            if ( $tag_slug ) $args['tag'] = $tag_slug;
            if ( $cat_slug ) $args['category_name'] = $cat_slug;

            $posts = get_posts( $args );
            return array_map( 'tcca_article_payload', $posts );
        },
    ) );

    register_rest_route( $ns, '/articles/(?P<slug>[a-zA-Z0-9-_]+)', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function ( WP_REST_Request $req ) {
            $slug = $req->get_param( 'slug' );
            $posts = get_posts( array( 'post_type' => 'post', 'name' => $slug, 'numberposts' => 1 ) );
            if ( empty( $posts ) ) {
                return new WP_Error( 'tcca_not_found', 'Article not found', array( 'status' => 404 ) );
            }
            return tcca_article_payload( $posts[0] );
        },
    ) );

    // --- TAGS list + single -------------------------------
    register_rest_route( $ns, '/tags', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $terms = get_terms( array(
                'taxonomy'   => 'post_tag',
                'hide_empty' => false,
            ) );
            if ( is_wp_error( $terms ) ) return array();
            return array_map( function ( $t ) {
                return array(
                    'slug'        => $t->slug,
                    'name'        => $t->name,
                    'description' => $t->description,
                    'count'       => (int) $t->count,
                );
            }, $terms );
        },
    ) );

    register_rest_route( $ns, '/tags/(?P<slug>[a-zA-Z0-9-_]+)', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function ( WP_REST_Request $req ) {
            $slug = $req->get_param( 'slug' );
            $term = get_term_by( 'slug', $slug, 'post_tag' );
            if ( ! $term ) {
                return new WP_Error( 'tcca_not_found', 'Tag not found', array( 'status' => 404 ) );
            }
            $posts = get_posts( array(
                'post_type'   => 'post',
                'numberposts' => 50,
                'tag'         => $slug,
                'orderby'     => 'date',
                'order'       => 'DESC',
            ) );
            return array(
                'tag' => array(
                    'slug'        => $term->slug,
                    'name'        => $term->name,
                    'description' => $term->description,
                    'count'       => (int) $term->count,
                ),
                'articles' => array_map( 'tcca_article_payload', $posts ),
            );
        },
    ) );

    // --- CATEGORIES list ----------------------------------
    register_rest_route( $ns, '/categories', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function () {
            $terms = get_terms( array(
                'taxonomy'   => 'category',
                'hide_empty' => false,
            ) );
            if ( is_wp_error( $terms ) ) return array();
            $default_id = (int) get_option( 'default_category' );
            $out = array();
            foreach ( $terms as $t ) {
                if ( (int) $t->term_id === $default_id && strtolower( $t->slug ) === 'uncategorized' ) continue;
                $out[] = array(
                    'slug'  => $t->slug,
                    'name'  => $t->name,
                    'count' => (int) $t->count,
                );
            }
            return $out;
        },
    ) );

    // --- EVENTS list --------------------------------------
    register_rest_route( $ns, '/events', array(
        'methods' => 'GET', 'permission_callback' => '__return_true',
        'callback' => function ( WP_REST_Request $req ) {
            $limit = (int) ( $req->get_param( 'limit' ) ?: 20 );
            $posts = get_posts( array( 'post_type' => 'tcca_event', 'numberposts' => $limit, 'orderby' => 'meta_value', 'meta_key' => 'event_date', 'order' => 'ASC' ) );
            return array_map( 'tcca_event_payload', $posts );
        },
    ) );

} );

/* ============================================================
 * 6) Post-import helper — set Featured Image from attachments
 *    whose `post_parent` points at the post.
 *
 *    The WP WXR importer assigns new IDs on the fly so a seed file
 *    can't hard-code `_thumbnail_id`. This hook runs once the import
 *    completes: for every post that has no thumbnail yet, we pick the
 *    first attachment that was imported as its child and mark it as
 *    the featured image.
 * ========================================================== */
add_action( 'import_end', 'tcca_assign_thumbnails_from_parent' );

function tcca_assign_thumbnails_from_parent() {
    global $wpdb;
    $rows = $wpdb->get_results(
        "SELECT att.ID AS att_id, att.post_parent AS post_id
           FROM {$wpdb->posts} att
          WHERE att.post_type = 'attachment'
            AND att.post_parent > 0
          ORDER BY att.ID ASC"
    );
    $seen = array();
    foreach ( $rows as $r ) {
        if ( isset( $seen[ $r->post_id ] ) ) continue;
        $seen[ $r->post_id ] = true;
        if ( ! get_post_thumbnail_id( $r->post_id ) ) {
            set_post_thumbnail( $r->post_id, $r->att_id );
        }
    }
}

/* ============================================================
 * 7) CORS — allow the Next.js frontend to call the REST API
 * ========================================================== */
add_action( 'rest_api_init', function () {
    remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
    add_filter( 'rest_pre_serve_request', function ( $value ) {
        $origin = get_http_origin();
        $allowed = array(
            'http://localhost:3000',
            'http://localhost:3001',
            'https://tcca.or.th',
            'https://www.tcca.or.th',
        );
        if ( $origin && in_array( $origin, $allowed, true ) ) {
            header( 'Access-Control-Allow-Origin: ' . esc_url_raw( $origin ) );
        } else {
            header( 'Access-Control-Allow-Origin: *' );
        }
        header( 'Access-Control-Allow-Methods: GET, OPTIONS' );
        header( 'Access-Control-Allow-Credentials: false' );
        header( 'Access-Control-Allow-Headers: Content-Type, Authorization' );
        return $value;
    } );
}, 15 );

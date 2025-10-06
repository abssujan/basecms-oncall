import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'nl', 'bn');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_content_columns_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum_pages_blocks_code_language" AS ENUM('typescript', 'javascript', 'python', 'java', 'cpp');
  CREATE TYPE "public"."enum_pages_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum_pages_blocks_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_nav_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_footer_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_footer_block_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_pages_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_plans_mode" AS ENUM('payment', 'setup', 'subscription');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_plans_type" AS ENUM('ad_hoc', 'fixed');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_plans_currency" AS ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XCG', 'XDR', 'XOF', 'XPF', 'XSU', 'YER', 'ZAR', 'ZMW', 'ZWG', 'ZWL');
  CREATE TYPE "public"."enum_pages_blocks_pricing_table_plans_interval" AS ENUM('day', 'week', 'month', 'year');
  CREATE TYPE "public"."enum_pages_blocks_login_block_register_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_login_block_forgot_password_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_login_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_logout_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_logout_block_redirect_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_pages_blocks_register_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_forgot_password_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_reset_password_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_accordion_spacing_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_accordion_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_accordion_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_carousel_slides_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_carousel_type" AS ENUM('default', 'logo');
  CREATE TYPE "public"."enum_pages_blocks_carousel_spacing_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_carousel_spacing_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_carousel_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_blocks_carousel_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__links_v_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__links_v_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum__pages_v_blocks_code_language" AS ENUM('typescript', 'javascript', 'python', 'java', 'cpp');
  CREATE TYPE "public"."enum__pages_v_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum__pages_v_blocks_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_nav_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_footer_block_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__pages_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_plans_mode" AS ENUM('payment', 'setup', 'subscription');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_plans_type" AS ENUM('ad_hoc', 'fixed');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_plans_currency" AS ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XCG', 'XDR', 'XOF', 'XPF', 'XSU', 'YER', 'ZAR', 'ZMW', 'ZWG', 'ZWL');
  CREATE TYPE "public"."enum__pages_v_blocks_pricing_table_plans_interval" AS ENUM('day', 'week', 'month', 'year');
  CREATE TYPE "public"."enum__pages_v_blocks_login_block_register_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_login_block_forgot_password_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_login_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_logout_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_logout_block_redirect_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__pages_v_blocks_register_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_forgot_password_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_reset_password_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_spacing_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_spacing_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_accordion_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_slides_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_type" AS ENUM('default', 'logo');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_spacing_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_spacing_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_padding_bottom" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_blocks_carousel_padding_top" AS ENUM('none', 'small', 'medium', 'large');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'nl', 'bn');
  CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'user');
  CREATE TYPE "public"."enum_media_transformation_preset" AS ENUM('thumbnail', 'card', 'banner', 'hero', 'feature', 'avatar', 'profile-header', 'og-image', 'twitter-card', 'instagram-square', 'instagram-story', 'square', 'landscape-16-9', 'landscape-4-3', 'portrait-9-16', 'blur', 'grayscale', 'sepia', 'pixelate', 'sharpen', 'vignette', 'auto-optimize', 'high-quality', 'balanced', 'eco-mode', 'progressive');
  CREATE TYPE "public"."enum_media_transformation_type" AS ENUM('watermark', 'blur');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('en', 'nl', 'bn');
  CREATE TYPE "public"."enum_dashboard_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_cta_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_high_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_low_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum_dashboard_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_content_columns_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum_dashboard_blocks_code_language" AS ENUM('typescript', 'javascript', 'python', 'java', 'cpp');
  CREATE TYPE "public"."enum_dashboard_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum_dashboard_blocks_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_nav_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_footer_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_footer_block_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum_dashboard_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum_dashboard_blocks_pricing_table_plans_mode" AS ENUM('payment', 'setup', 'subscription');
  CREATE TYPE "public"."enum_dashboard_blocks_pricing_table_plans_type" AS ENUM('ad_hoc', 'fixed');
  CREATE TYPE "public"."enum_dashboard_blocks_pricing_table_plans_currency" AS ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XCG', 'XDR', 'XOF', 'XPF', 'XSU', 'YER', 'ZAR', 'ZMW', 'ZWG', 'ZWL');
  CREATE TYPE "public"."enum_dashboard_blocks_pricing_table_plans_interval" AS ENUM('day', 'week', 'month', 'year');
  CREATE TYPE "public"."enum_dashboard_blocks_login_block_register_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_login_block_forgot_password_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_login_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_logout_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_logout_block_redirect_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_dashboard_blocks_register_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_forgot_password_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_blocks_reset_password_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_dashboard_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__dashboard_v_blocks_cta_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_cta_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_high_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_high_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_low_impact_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_low_impact_hero_links_link_appearance" AS ENUM('inline', 'default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_content_columns_size" AS ENUM('oneThird', 'half', 'twoThirds', 'full');
  CREATE TYPE "public"."enum__dashboard_v_blocks_content_columns_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_content_columns_link_appearance" AS ENUM('default');
  CREATE TYPE "public"."enum__dashboard_v_blocks_code_language" AS ENUM('typescript', 'javascript', 'python', 'java', 'cpp');
  CREATE TYPE "public"."enum__dashboard_v_blocks_banner_style" AS ENUM('info', 'warning', 'error', 'success');
  CREATE TYPE "public"."enum__dashboard_v_blocks_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_nav_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_footer_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_footer_block_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_archive_populate_by" AS ENUM('collection', 'selection');
  CREATE TYPE "public"."enum__dashboard_v_blocks_archive_relation_to" AS ENUM('posts');
  CREATE TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_mode" AS ENUM('payment', 'setup', 'subscription');
  CREATE TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_type" AS ENUM('ad_hoc', 'fixed');
  CREATE TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_currency" AS ENUM('AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD', 'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CUC', 'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KPW', 'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR', 'SDG', 'SEK', 'SGD', 'SHP', 'SLE', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SVC', 'SYP', 'SZL', 'THB', 'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XCG', 'XDR', 'XOF', 'XPF', 'XSU', 'YER', 'ZAR', 'ZMW', 'ZWG', 'ZWL');
  CREATE TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_interval" AS ENUM('day', 'week', 'month', 'year');
  CREATE TYPE "public"."enum__dashboard_v_blocks_login_block_register_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_login_block_forgot_password_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_login_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_logout_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_logout_block_redirect_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum__dashboard_v_blocks_register_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_forgot_password_block_login_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_blocks_reset_password_block_redirect_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__dashboard_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__dashboard_v_published_locale" AS ENUM('en', 'nl', 'bn');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_redirects_type" AS ENUM('301', '302', '303', '307', '308');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_exports_format" AS ENUM('csv', 'json');
  CREATE TYPE "public"."enum_exports_sort_order" AS ENUM('asc', 'desc');
  CREATE TYPE "public"."enum_exports_locale" AS ENUM('all', 'en', 'nl', 'bn');
  CREATE TYPE "public"."enum_exports_drafts" AS ENUM('yes', 'no');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'createCollectionExport', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'createCollectionExport', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_query_presets_access_read_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_update_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_access_delete_constraint" AS ENUM('everyone', 'onlyMe', 'specificUsers');
  CREATE TYPE "public"."enum_payload_query_presets_related_collection" AS ENUM('pages', 'users', 'posts', 'dashboard');
  CREATE TYPE "public"."enum_general_social_media_links_platform" AS ENUM('Facebook', 'Twitter', 'Instagram', 'LinkedIn');
  CREATE TYPE "public"."enum_header_blocks_nav_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_blocks_nav_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TYPE "public"."enum_footer_blocks_footer_block_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_blocks_footer_block_links_link_appearance" AS ENUM('default', 'destructive', 'ghost', 'link', 'outline', 'secondary');
  CREATE TABLE "pages_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_cta_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_high_impact_hero_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_low_impact_hero_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "pages_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_pages_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_content_columns_link_appearance"
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" "enum_pages_blocks_code_language" DEFAULT 'typescript',
  	"code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_pages_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_nav_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "pages_blocks_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_footer_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_pages_blocks_footer_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_blocks_footer_block_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "pages_blocks_footer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_pages_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_pages_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" numeric,
  	"description" jsonb,
  	"mode" "enum_pages_blocks_pricing_table_plans_mode",
  	"type" "enum_pages_blocks_pricing_table_plans_type",
  	"price_id" varchar,
  	"currency" "enum_pages_blocks_pricing_table_plans_currency",
  	"interval" "enum_pages_blocks_pricing_table_plans_interval"
  );
  
  CREATE TABLE "pages_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_billing_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Manage Billing Portal',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_login_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"register_type" "enum_pages_blocks_login_block_register_type" DEFAULT 'reference',
  	"register_new_tab" boolean,
  	"register_url" varchar,
  	"register_label" varchar,
  	"forgot_password_type" "enum_pages_blocks_login_block_forgot_password_type" DEFAULT 'reference',
  	"forgot_password_new_tab" boolean,
  	"forgot_password_url" varchar,
  	"forgot_password_label" varchar,
  	"redirect_type" "enum_pages_blocks_login_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_logout_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"redirect_type" "enum_pages_blocks_logout_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"redirect_appearance" "enum_pages_blocks_logout_block_redirect_appearance" DEFAULT 'outline',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_register_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"login_type" "enum_pages_blocks_register_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_forgot_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"login_type" "enum_pages_blocks_forgot_password_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_reset_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"redirect_type" "enum_pages_blocks_reset_password_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb
  );
  
  CREATE TABLE "pages_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"spacing_bottom" "enum_pages_blocks_accordion_spacing_bottom" DEFAULT 'none',
  	"spacing_top" "enum_pages_blocks_accordion_spacing_top" DEFAULT 'none',
  	"padding_bottom" "enum_pages_blocks_accordion_padding_bottom" DEFAULT 'medium',
  	"padding_top" "enum_pages_blocks_accordion_padding_top" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"enable_link" boolean,
  	"link_type" "enum_pages_blocks_carousel_slides_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_pages_blocks_carousel_type" DEFAULT 'default',
  	"title" jsonb,
  	"autoplay" numeric,
  	"spacing_bottom" "enum_pages_blocks_carousel_spacing_bottom" DEFAULT 'none',
  	"spacing_top" "enum_pages_blocks_carousel_spacing_top" DEFAULT 'none',
  	"padding_bottom" "enum_pages_blocks_carousel_padding_bottom" DEFAULT 'medium',
  	"padding_top" "enum_pages_blocks_carousel_padding_top" DEFAULT 'medium',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_hero_geometric_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"title1" varchar,
  	"title2" varchar,
  	"paragraph" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_pages_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_cta_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_high_impact_hero_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_links_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__links_v_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__links_v_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_low_impact_hero_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__pages_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_content_columns_link_appearance",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"language" "enum__pages_v_blocks_code_language" DEFAULT 'typescript',
  	"code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__pages_v_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_nav_links_link_appearance" DEFAULT 'outline',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__pages_v_blocks_footer_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_blocks_footer_block_links_link_appearance" DEFAULT 'outline',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_footer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__pages_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__pages_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" numeric,
  	"description" jsonb,
  	"mode" "enum__pages_v_blocks_pricing_table_plans_mode",
  	"type" "enum__pages_v_blocks_pricing_table_plans_type",
  	"price_id" varchar,
  	"currency" "enum__pages_v_blocks_pricing_table_plans_currency",
  	"interval" "enum__pages_v_blocks_pricing_table_plans_interval",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_billing_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Manage Billing Portal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_login_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"register_type" "enum__pages_v_blocks_login_block_register_type" DEFAULT 'reference',
  	"register_new_tab" boolean,
  	"register_url" varchar,
  	"register_label" varchar,
  	"forgot_password_type" "enum__pages_v_blocks_login_block_forgot_password_type" DEFAULT 'reference',
  	"forgot_password_new_tab" boolean,
  	"forgot_password_url" varchar,
  	"forgot_password_label" varchar,
  	"redirect_type" "enum__pages_v_blocks_login_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_logout_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"redirect_type" "enum__pages_v_blocks_logout_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"redirect_appearance" "enum__pages_v_blocks_logout_block_redirect_appearance" DEFAULT 'outline',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_register_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"login_type" "enum__pages_v_blocks_register_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_forgot_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"login_type" "enum__pages_v_blocks_forgot_password_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_reset_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"redirect_type" "enum__pages_v_blocks_reset_password_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" jsonb,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_accordion" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" jsonb,
  	"spacing_bottom" "enum__pages_v_blocks_accordion_spacing_bottom" DEFAULT 'none',
  	"spacing_top" "enum__pages_v_blocks_accordion_spacing_top" DEFAULT 'none',
  	"padding_bottom" "enum__pages_v_blocks_accordion_padding_bottom" DEFAULT 'medium',
  	"padding_top" "enum__pages_v_blocks_accordion_padding_top" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"enable_link" boolean,
  	"link_type" "enum__pages_v_blocks_carousel_slides_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__pages_v_blocks_carousel_type" DEFAULT 'default',
  	"title" jsonb,
  	"autoplay" numeric,
  	"spacing_bottom" "enum__pages_v_blocks_carousel_spacing_bottom" DEFAULT 'none',
  	"spacing_top" "enum__pages_v_blocks_carousel_spacing_top" DEFAULT 'none',
  	"padding_bottom" "enum__pages_v_blocks_carousel_padding_bottom" DEFAULT 'medium',
  	"padding_top" "enum__pages_v_blocks_carousel_padding_top" DEFAULT 'medium',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_hero_geometric_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar,
  	"title1" varchar,
  	"title2" varchar,
  	"paragraph" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"roles" "enum_users_roles" DEFAULT 'user',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media_transformation_preset" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_media_transformation_preset",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cloudinary_folder" varchar,
  	"cloudinary_public_id" varchar,
  	"cloudinary_url" varchar,
  	"cloudinary_resource_type" varchar,
  	"cloudinary_format" varchar,
  	"cloudinary_version" numeric,
  	"original_url" varchar,
  	"transformed_url" varchar,
  	"is_private" boolean DEFAULT true,
  	"requires_signed_u_r_l" boolean,
  	"enable_public_preview" boolean DEFAULT false,
  	"transformation_type" "enum_media_transformation_type" DEFAULT 'watermark',
  	"watermark_text" varchar DEFAULT 'PREVIEW',
  	"public_transformation_url" varchar,
  	"public_transformation_public_id" varchar,
  	"preview_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar,
  	"caption" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "categories_locales" (
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"published_at" timestamp(3) with time zone,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "posts_locales" (
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_posts_v_locales" (
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "orders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"product" varchar NOT NULL,
  	"plan" varchar NOT NULL,
  	"price" numeric NOT NULL,
  	"quantity" numeric NOT NULL,
  	"total" numeric NOT NULL,
  	"status" varchar NOT NULL,
  	"mode" varchar NOT NULL,
  	"customer_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "customers_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "customers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"stripe_i_d" varchar,
  	"skip_sync" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"_verified" boolean,
  	"_verificationtoken" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "dashboard_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_dashboard_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_cta_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "dashboard_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_dashboard_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_high_impact_hero_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "dashboard_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_dashboard_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_low_impact_hero_links_link_appearance" DEFAULT 'link'
  );
  
  CREATE TABLE "dashboard_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" "enum_dashboard_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum_dashboard_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_content_columns_link_appearance"
  );
  
  CREATE TABLE "dashboard_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"language" "enum_dashboard_blocks_code_language" DEFAULT 'typescript',
  	"code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"style" "enum_dashboard_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_dashboard_blocks_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_nav_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "dashboard_blocks_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_footer_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_dashboard_blocks_footer_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_dashboard_blocks_footer_block_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "dashboard_blocks_footer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum_dashboard_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum_dashboard_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" numeric,
  	"description" jsonb,
  	"mode" "enum_dashboard_blocks_pricing_table_plans_mode",
  	"type" "enum_dashboard_blocks_pricing_table_plans_type",
  	"price_id" varchar,
  	"currency" "enum_dashboard_blocks_pricing_table_plans_currency",
  	"interval" "enum_dashboard_blocks_pricing_table_plans_interval"
  );
  
  CREATE TABLE "dashboard_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_billing_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Manage Billing Portal',
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_login_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"register_type" "enum_dashboard_blocks_login_block_register_type" DEFAULT 'reference',
  	"register_new_tab" boolean,
  	"register_url" varchar,
  	"register_label" varchar,
  	"forgot_password_type" "enum_dashboard_blocks_login_block_forgot_password_type" DEFAULT 'reference',
  	"forgot_password_new_tab" boolean,
  	"forgot_password_url" varchar,
  	"forgot_password_label" varchar,
  	"redirect_type" "enum_dashboard_blocks_login_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_logout_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"redirect_type" "enum_dashboard_blocks_logout_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"redirect_appearance" "enum_dashboard_blocks_logout_block_redirect_appearance" DEFAULT 'outline',
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_register_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"login_type" "enum_dashboard_blocks_register_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_forgot_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"login_type" "enum_dashboard_blocks_forgot_password_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_reset_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"redirect_type" "enum_dashboard_blocks_reset_password_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_account_name" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard_blocks_account_password" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "dashboard" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_dashboard_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "dashboard_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "dashboard_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "_dashboard_v_blocks_cta_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__dashboard_v_blocks_cta_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_cta_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_high_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__dashboard_v_blocks_high_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_high_impact_hero_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_high_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_medium_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_low_impact_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__dashboard_v_blocks_low_impact_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_low_impact_hero_links_link_appearance" DEFAULT 'link',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_low_impact_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"rich_text" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_content_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" "enum__dashboard_v_blocks_content_columns_size" DEFAULT 'oneThird',
  	"rich_text" jsonb,
  	"enable_link" boolean,
  	"link_type" "enum__dashboard_v_blocks_content_columns_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_content_columns_link_appearance",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_media_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_code" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"language" "enum__dashboard_v_blocks_code_language" DEFAULT 'typescript',
  	"code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"style" "enum__dashboard_v_blocks_banner_style" DEFAULT 'info',
  	"content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__dashboard_v_blocks_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_nav_links_link_appearance" DEFAULT 'outline',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_footer_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_type" "enum__dashboard_v_blocks_footer_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__dashboard_v_blocks_footer_block_links_link_appearance" DEFAULT 'outline',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_footer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_archive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"intro_content" jsonb,
  	"populate_by" "enum__dashboard_v_blocks_archive_populate_by" DEFAULT 'collection',
  	"relation_to" "enum__dashboard_v_blocks_archive_relation_to" DEFAULT 'posts',
  	"limit" numeric DEFAULT 10,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_form_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer,
  	"enable_intro" boolean,
  	"intro_content" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_pricing_table_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"price" numeric,
  	"description" jsonb,
  	"mode" "enum__dashboard_v_blocks_pricing_table_plans_mode",
  	"type" "enum__dashboard_v_blocks_pricing_table_plans_type",
  	"price_id" varchar,
  	"currency" "enum__dashboard_v_blocks_pricing_table_plans_currency",
  	"interval" "enum__dashboard_v_blocks_pricing_table_plans_interval",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_pricing_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_billing_portal" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar DEFAULT 'Manage Billing Portal',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_login_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"register_type" "enum__dashboard_v_blocks_login_block_register_type" DEFAULT 'reference',
  	"register_new_tab" boolean,
  	"register_url" varchar,
  	"register_label" varchar,
  	"forgot_password_type" "enum__dashboard_v_blocks_login_block_forgot_password_type" DEFAULT 'reference',
  	"forgot_password_new_tab" boolean,
  	"forgot_password_url" varchar,
  	"forgot_password_label" varchar,
  	"redirect_type" "enum__dashboard_v_blocks_login_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_logout_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"redirect_type" "enum__dashboard_v_blocks_logout_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"redirect_appearance" "enum__dashboard_v_blocks_logout_block_redirect_appearance" DEFAULT 'outline',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_register_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"login_type" "enum__dashboard_v_blocks_register_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_forgot_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"login_type" "enum__dashboard_v_blocks_forgot_password_block_login_type" DEFAULT 'reference',
  	"login_new_tab" boolean,
  	"login_url" varchar,
  	"login_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_reset_password_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"redirect_type" "enum__dashboard_v_blocks_reset_password_block_redirect_type" DEFAULT 'reference',
  	"redirect_new_tab" boolean,
  	"redirect_url" varchar,
  	"redirect_label" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_account_name" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v_blocks_account_password" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_dashboard_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version__order" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__dashboard_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__dashboard_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_dashboard_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_dashboard_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer,
  	"categories_id" integer
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"type" "enum_redirects_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"relation" varchar
  );
  
  CREATE TABLE "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"priority" numeric,
  	"hero_image_id" integer,
  	"type" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "search_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"content" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer
  );
  
  CREATE TABLE "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_checkbox_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_country_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_email_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_message_locales" (
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_number_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select_options_locales" (
  	"label" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_select_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_state_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_text_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE "forms_blocks_textarea_locales" (
  	"label" varchar,
  	"default_value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar
  );
  
  CREATE TABLE "forms_emails_locales" (
  	"subject" varchar DEFAULT 'You''ve received a new message.' NOT NULL,
  	"message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "forms_locales" (
  	"submit_button_label" varchar,
  	"confirmation_message" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "exports" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"format" "enum_exports_format" DEFAULT 'csv',
  	"limit" numeric,
  	"page" numeric DEFAULT 1,
  	"sort" varchar,
  	"sort_order" "enum_exports_sort_order",
  	"locale" "enum_exports_locale" DEFAULT 'all',
  	"drafts" "enum_exports_drafts" DEFAULT 'yes',
  	"collection_slug" varchar NOT NULL,
  	"where" jsonb DEFAULT '{}'::jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "exports_texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"users_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"posts_id" integer,
  	"orders_id" integer,
  	"customers_id" integer,
  	"dashboard_id" integer,
  	"redirects_id" integer,
  	"search_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"exports_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"customers_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"is_shared" boolean DEFAULT false,
  	"access_read_constraint" "enum_payload_query_presets_access_read_constraint" DEFAULT 'onlyMe',
  	"access_update_constraint" "enum_payload_query_presets_access_update_constraint" DEFAULT 'onlyMe',
  	"access_delete_constraint" "enum_payload_query_presets_access_delete_constraint" DEFAULT 'onlyMe',
  	"where" jsonb,
  	"columns" jsonb,
  	"related_collection" "enum_payload_query_presets_related_collection" NOT NULL,
  	"is_temp" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_query_presets_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "general_social_media_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_general_social_media_links_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "general" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar,
  	"site_logo_id" integer,
  	"site_description" varchar,
  	"contact_email" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_blocks_nav_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_header_blocks_nav_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"link_appearance" "enum_header_blocks_nav_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "header_blocks_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer
  );
  
  CREATE TABLE "footer_blocks_footer_block_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "enum_footer_blocks_footer_block_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"link_appearance" "enum_footer_blocks_footer_block_links_link_appearance" DEFAULT 'outline'
  );
  
  CREATE TABLE "footer_blocks_footer_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"media_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"locale" "_locales",
  	"pages_id" integer,
  	"posts_id" integer,
  	"dashboard_id" integer
  );
  
  ALTER TABLE "pages_blocks_cta_links" ADD CONSTRAINT "pages_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero_links" ADD CONSTRAINT "pages_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_high_impact_hero" ADD CONSTRAINT "pages_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "links" ADD CONSTRAINT "links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_medium_impact_hero" ADD CONSTRAINT "pages_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_medium_impact_hero" ADD CONSTRAINT "pages_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_low_impact_hero_links" ADD CONSTRAINT "pages_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_low_impact_hero" ADD CONSTRAINT "pages_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content_columns" ADD CONSTRAINT "pages_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_block" ADD CONSTRAINT "pages_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_code" ADD CONSTRAINT "pages_blocks_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_banner" ADD CONSTRAINT "pages_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nav_links" ADD CONSTRAINT "pages_blocks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_nav" ADD CONSTRAINT "pages_blocks_nav_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_nav" ADD CONSTRAINT "pages_blocks_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_block_links" ADD CONSTRAINT "pages_blocks_footer_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_footer_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_block" ADD CONSTRAINT "pages_blocks_footer_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_footer_block" ADD CONSTRAINT "pages_blocks_footer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_archive" ADD CONSTRAINT "pages_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_form_block" ADD CONSTRAINT "pages_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_table_plans" ADD CONSTRAINT "pages_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_pricing_table" ADD CONSTRAINT "pages_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_billing_portal" ADD CONSTRAINT "pages_blocks_billing_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_login_block" ADD CONSTRAINT "pages_blocks_login_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_logout_block" ADD CONSTRAINT "pages_blocks_logout_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_register_block" ADD CONSTRAINT "pages_blocks_register_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_forgot_password_block" ADD CONSTRAINT "pages_blocks_forgot_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_reset_password_block" ADD CONSTRAINT "pages_blocks_reset_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion_items" ADD CONSTRAINT "pages_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_accordion" ADD CONSTRAINT "pages_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_slides" ADD CONSTRAINT "pages_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel_slides" ADD CONSTRAINT "pages_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_carousel" ADD CONSTRAINT "pages_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero_geometric_block" ADD CONSTRAINT "pages_blocks_hero_geometric_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta_links" ADD CONSTRAINT "_pages_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_high_impact_hero" ADD CONSTRAINT "_pages_v_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_links_v" ADD CONSTRAINT "_links_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_medium_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_medium_impact_hero" ADD CONSTRAINT "_pages_v_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_medium_impact_hero" ADD CONSTRAINT "_pages_v_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_low_impact_hero_links" ADD CONSTRAINT "_pages_v_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_low_impact_hero" ADD CONSTRAINT "_pages_v_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content_columns" ADD CONSTRAINT "_pages_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_block" ADD CONSTRAINT "_pages_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_code" ADD CONSTRAINT "_pages_v_blocks_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_banner" ADD CONSTRAINT "_pages_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_nav_links" ADD CONSTRAINT "_pages_v_blocks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_nav" ADD CONSTRAINT "_pages_v_blocks_nav_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_nav" ADD CONSTRAINT "_pages_v_blocks_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer_block_links" ADD CONSTRAINT "_pages_v_blocks_footer_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_footer_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer_block" ADD CONSTRAINT "_pages_v_blocks_footer_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_footer_block" ADD CONSTRAINT "_pages_v_blocks_footer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_archive" ADD CONSTRAINT "_pages_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_form_block" ADD CONSTRAINT "_pages_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_table_plans" ADD CONSTRAINT "_pages_v_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_pricing_table" ADD CONSTRAINT "_pages_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_billing_portal" ADD CONSTRAINT "_pages_v_blocks_billing_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_login_block" ADD CONSTRAINT "_pages_v_blocks_login_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_logout_block" ADD CONSTRAINT "_pages_v_blocks_logout_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_register_block" ADD CONSTRAINT "_pages_v_blocks_register_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_forgot_password_block" ADD CONSTRAINT "_pages_v_blocks_forgot_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_reset_password_block" ADD CONSTRAINT "_pages_v_blocks_reset_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion_items" ADD CONSTRAINT "_pages_v_blocks_accordion_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_accordion"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_accordion" ADD CONSTRAINT "_pages_v_blocks_accordion_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_carousel_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel_slides" ADD CONSTRAINT "_pages_v_blocks_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_carousel"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_carousel" ADD CONSTRAINT "_pages_v_blocks_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_hero_geometric_block" ADD CONSTRAINT "_pages_v_blocks_hero_geometric_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_transformation_preset" ADD CONSTRAINT "media_transformation_preset_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "categories_locales" ADD CONSTRAINT "categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_customers_id_fk" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "customers_sessions" ADD CONSTRAINT "customers_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_cta_links" ADD CONSTRAINT "dashboard_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_cta" ADD CONSTRAINT "dashboard_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_high_impact_hero_links" ADD CONSTRAINT "dashboard_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_high_impact_hero" ADD CONSTRAINT "dashboard_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_high_impact_hero" ADD CONSTRAINT "dashboard_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_medium_impact_hero" ADD CONSTRAINT "dashboard_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_medium_impact_hero" ADD CONSTRAINT "dashboard_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_low_impact_hero_links" ADD CONSTRAINT "dashboard_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_low_impact_hero" ADD CONSTRAINT "dashboard_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_content_columns" ADD CONSTRAINT "dashboard_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_content" ADD CONSTRAINT "dashboard_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_media_block" ADD CONSTRAINT "dashboard_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_media_block" ADD CONSTRAINT "dashboard_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_code" ADD CONSTRAINT "dashboard_blocks_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_banner" ADD CONSTRAINT "dashboard_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_nav_links" ADD CONSTRAINT "dashboard_blocks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_nav" ADD CONSTRAINT "dashboard_blocks_nav_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_nav" ADD CONSTRAINT "dashboard_blocks_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_footer_block_links" ADD CONSTRAINT "dashboard_blocks_footer_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_footer_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_footer_block" ADD CONSTRAINT "dashboard_blocks_footer_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_footer_block" ADD CONSTRAINT "dashboard_blocks_footer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_archive" ADD CONSTRAINT "dashboard_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_form_block" ADD CONSTRAINT "dashboard_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_form_block" ADD CONSTRAINT "dashboard_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_pricing_table_plans" ADD CONSTRAINT "dashboard_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_pricing_table" ADD CONSTRAINT "dashboard_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_billing_portal" ADD CONSTRAINT "dashboard_blocks_billing_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_login_block" ADD CONSTRAINT "dashboard_blocks_login_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_logout_block" ADD CONSTRAINT "dashboard_blocks_logout_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_register_block" ADD CONSTRAINT "dashboard_blocks_register_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_forgot_password_block" ADD CONSTRAINT "dashboard_blocks_forgot_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_reset_password_block" ADD CONSTRAINT "dashboard_blocks_reset_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_account_name" ADD CONSTRAINT "dashboard_blocks_account_name_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_blocks_account_password" ADD CONSTRAINT "dashboard_blocks_account_password_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_locales" ADD CONSTRAINT "dashboard_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_rels" ADD CONSTRAINT "dashboard_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_rels" ADD CONSTRAINT "dashboard_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_rels" ADD CONSTRAINT "dashboard_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_rels" ADD CONSTRAINT "dashboard_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "dashboard_rels" ADD CONSTRAINT "dashboard_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_cta_links" ADD CONSTRAINT "_dashboard_v_blocks_cta_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_cta" ADD CONSTRAINT "_dashboard_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_high_impact_hero_links" ADD CONSTRAINT "_dashboard_v_blocks_high_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_high_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_high_impact_hero" ADD CONSTRAINT "_dashboard_v_blocks_high_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_high_impact_hero" ADD CONSTRAINT "_dashboard_v_blocks_high_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_medium_impact_hero" ADD CONSTRAINT "_dashboard_v_blocks_medium_impact_hero_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_medium_impact_hero" ADD CONSTRAINT "_dashboard_v_blocks_medium_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_low_impact_hero_links" ADD CONSTRAINT "_dashboard_v_blocks_low_impact_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_low_impact_hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_low_impact_hero" ADD CONSTRAINT "_dashboard_v_blocks_low_impact_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_content_columns" ADD CONSTRAINT "_dashboard_v_blocks_content_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_content"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_content" ADD CONSTRAINT "_dashboard_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_media_block" ADD CONSTRAINT "_dashboard_v_blocks_media_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_media_block" ADD CONSTRAINT "_dashboard_v_blocks_media_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_code" ADD CONSTRAINT "_dashboard_v_blocks_code_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_banner" ADD CONSTRAINT "_dashboard_v_blocks_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_nav_links" ADD CONSTRAINT "_dashboard_v_blocks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_nav" ADD CONSTRAINT "_dashboard_v_blocks_nav_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_nav" ADD CONSTRAINT "_dashboard_v_blocks_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_footer_block_links" ADD CONSTRAINT "_dashboard_v_blocks_footer_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_footer_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_footer_block" ADD CONSTRAINT "_dashboard_v_blocks_footer_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_footer_block" ADD CONSTRAINT "_dashboard_v_blocks_footer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_archive" ADD CONSTRAINT "_dashboard_v_blocks_archive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_form_block" ADD CONSTRAINT "_dashboard_v_blocks_form_block_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_form_block" ADD CONSTRAINT "_dashboard_v_blocks_form_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_pricing_table_plans" ADD CONSTRAINT "_dashboard_v_blocks_pricing_table_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v_blocks_pricing_table"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_pricing_table" ADD CONSTRAINT "_dashboard_v_blocks_pricing_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_billing_portal" ADD CONSTRAINT "_dashboard_v_blocks_billing_portal_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_login_block" ADD CONSTRAINT "_dashboard_v_blocks_login_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_logout_block" ADD CONSTRAINT "_dashboard_v_blocks_logout_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_register_block" ADD CONSTRAINT "_dashboard_v_blocks_register_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_forgot_password_block" ADD CONSTRAINT "_dashboard_v_blocks_forgot_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_reset_password_block" ADD CONSTRAINT "_dashboard_v_blocks_reset_password_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_account_name" ADD CONSTRAINT "_dashboard_v_blocks_account_name_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_blocks_account_password" ADD CONSTRAINT "_dashboard_v_blocks_account_password_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v" ADD CONSTRAINT "_dashboard_v_parent_id_dashboard_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."dashboard"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_dashboard_v_locales" ADD CONSTRAINT "_dashboard_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_rels" ADD CONSTRAINT "_dashboard_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_dashboard_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_rels" ADD CONSTRAINT "_dashboard_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_rels" ADD CONSTRAINT "_dashboard_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_rels" ADD CONSTRAINT "_dashboard_v_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_dashboard_v_rels" ADD CONSTRAINT "_dashboard_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search" ADD CONSTRAINT "search_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "search_locales" ADD CONSTRAINT "search_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_checkbox_locales" ADD CONSTRAINT "forms_blocks_checkbox_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_checkbox"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_country_locales" ADD CONSTRAINT "forms_blocks_country_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_country"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_email_locales" ADD CONSTRAINT "forms_blocks_email_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_email"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_message_locales" ADD CONSTRAINT "forms_blocks_message_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_message"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_number_locales" ADD CONSTRAINT "forms_blocks_number_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_number"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_options_locales" ADD CONSTRAINT "forms_blocks_select_options_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select_options"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_select_locales" ADD CONSTRAINT "forms_blocks_select_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_state_locales" ADD CONSTRAINT "forms_blocks_state_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_state"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_text_locales" ADD CONSTRAINT "forms_blocks_text_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_text"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_blocks_textarea_locales" ADD CONSTRAINT "forms_blocks_textarea_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_textarea"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_emails_locales" ADD CONSTRAINT "forms_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_emails"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "forms_locales" ADD CONSTRAINT "forms_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "exports_texts" ADD CONSTRAINT "exports_texts_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_orders_fk" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_exports_fk" FOREIGN KEY ("exports_id") REFERENCES "public"."exports"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_customers_fk" FOREIGN KEY ("customers_id") REFERENCES "public"."customers"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_query_presets"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_query_presets_rels" ADD CONSTRAINT "payload_query_presets_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "general_social_media_links" ADD CONSTRAINT "general_social_media_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."general"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "general" ADD CONSTRAINT "general_site_logo_id_media_id_fk" FOREIGN KEY ("site_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_nav_links" ADD CONSTRAINT "header_blocks_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_blocks_nav"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_blocks_nav" ADD CONSTRAINT "header_blocks_nav_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_blocks_nav" ADD CONSTRAINT "header_blocks_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_block_links" ADD CONSTRAINT "footer_blocks_footer_block_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_blocks_footer_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_block" ADD CONSTRAINT "footer_blocks_footer_block_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "footer_blocks_footer_block" ADD CONSTRAINT "footer_blocks_footer_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_dashboard_fk" FOREIGN KEY ("dashboard_id") REFERENCES "public"."dashboard"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_cta_links_order_idx" ON "pages_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_links_parent_id_idx" ON "pages_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_links_locale_idx" ON "pages_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_locale_idx" ON "pages_blocks_cta" USING btree ("_locale");
  CREATE INDEX "pages_blocks_high_impact_hero_links_order_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_high_impact_hero_links_parent_id_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_high_impact_hero_links_locale_idx" ON "pages_blocks_high_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_high_impact_hero_order_idx" ON "pages_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_high_impact_hero_parent_id_idx" ON "pages_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_high_impact_hero_path_idx" ON "pages_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_high_impact_hero_locale_idx" ON "pages_blocks_high_impact_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_high_impact_hero_media_idx" ON "pages_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "links_order_idx" ON "links" USING btree ("_order");
  CREATE INDEX "links_parent_id_idx" ON "links" USING btree ("_parent_id");
  CREATE INDEX "links_locale_idx" ON "links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_medium_impact_hero_order_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_medium_impact_hero_parent_id_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_medium_impact_hero_path_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_medium_impact_hero_locale_idx" ON "pages_blocks_medium_impact_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_medium_impact_hero_media_idx" ON "pages_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX "pages_blocks_low_impact_hero_links_order_idx" ON "pages_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_low_impact_hero_links_parent_id_idx" ON "pages_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_low_impact_hero_links_locale_idx" ON "pages_blocks_low_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_low_impact_hero_order_idx" ON "pages_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_low_impact_hero_parent_id_idx" ON "pages_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_low_impact_hero_path_idx" ON "pages_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_low_impact_hero_locale_idx" ON "pages_blocks_low_impact_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_content_columns_order_idx" ON "pages_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_columns_parent_id_idx" ON "pages_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_columns_locale_idx" ON "pages_blocks_content_columns" USING btree ("_locale");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_content_locale_idx" ON "pages_blocks_content" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_block_order_idx" ON "pages_blocks_media_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_block_parent_id_idx" ON "pages_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_block_path_idx" ON "pages_blocks_media_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_block_locale_idx" ON "pages_blocks_media_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_media_block_media_idx" ON "pages_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_code_order_idx" ON "pages_blocks_code" USING btree ("_order");
  CREATE INDEX "pages_blocks_code_parent_id_idx" ON "pages_blocks_code" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_code_path_idx" ON "pages_blocks_code" USING btree ("_path");
  CREATE INDEX "pages_blocks_code_locale_idx" ON "pages_blocks_code" USING btree ("_locale");
  CREATE INDEX "pages_blocks_banner_order_idx" ON "pages_blocks_banner" USING btree ("_order");
  CREATE INDEX "pages_blocks_banner_parent_id_idx" ON "pages_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_banner_path_idx" ON "pages_blocks_banner" USING btree ("_path");
  CREATE INDEX "pages_blocks_banner_locale_idx" ON "pages_blocks_banner" USING btree ("_locale");
  CREATE INDEX "pages_blocks_nav_links_order_idx" ON "pages_blocks_nav_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_nav_links_parent_id_idx" ON "pages_blocks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nav_links_locale_idx" ON "pages_blocks_nav_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_nav_order_idx" ON "pages_blocks_nav" USING btree ("_order");
  CREATE INDEX "pages_blocks_nav_parent_id_idx" ON "pages_blocks_nav" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_nav_path_idx" ON "pages_blocks_nav" USING btree ("_path");
  CREATE INDEX "pages_blocks_nav_locale_idx" ON "pages_blocks_nav" USING btree ("_locale");
  CREATE INDEX "pages_blocks_nav_media_idx" ON "pages_blocks_nav" USING btree ("media_id");
  CREATE INDEX "pages_blocks_footer_block_links_order_idx" ON "pages_blocks_footer_block_links" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_block_links_parent_id_idx" ON "pages_blocks_footer_block_links" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_block_links_locale_idx" ON "pages_blocks_footer_block_links" USING btree ("_locale");
  CREATE INDEX "pages_blocks_footer_block_order_idx" ON "pages_blocks_footer_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_footer_block_parent_id_idx" ON "pages_blocks_footer_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_footer_block_path_idx" ON "pages_blocks_footer_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_footer_block_locale_idx" ON "pages_blocks_footer_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_footer_block_media_idx" ON "pages_blocks_footer_block" USING btree ("media_id");
  CREATE INDEX "pages_blocks_archive_order_idx" ON "pages_blocks_archive" USING btree ("_order");
  CREATE INDEX "pages_blocks_archive_parent_id_idx" ON "pages_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_archive_path_idx" ON "pages_blocks_archive" USING btree ("_path");
  CREATE INDEX "pages_blocks_archive_locale_idx" ON "pages_blocks_archive" USING btree ("_locale");
  CREATE INDEX "pages_blocks_form_block_order_idx" ON "pages_blocks_form_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_form_block_parent_id_idx" ON "pages_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_form_block_path_idx" ON "pages_blocks_form_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_form_block_locale_idx" ON "pages_blocks_form_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_form_block_form_idx" ON "pages_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "pages_blocks_pricing_table_plans_order_idx" ON "pages_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_table_plans_parent_id_idx" ON "pages_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_table_plans_locale_idx" ON "pages_blocks_pricing_table_plans" USING btree ("_locale");
  CREATE INDEX "pages_blocks_pricing_table_order_idx" ON "pages_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "pages_blocks_pricing_table_parent_id_idx" ON "pages_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_pricing_table_path_idx" ON "pages_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "pages_blocks_pricing_table_locale_idx" ON "pages_blocks_pricing_table" USING btree ("_locale");
  CREATE INDEX "pages_blocks_billing_portal_order_idx" ON "pages_blocks_billing_portal" USING btree ("_order");
  CREATE INDEX "pages_blocks_billing_portal_parent_id_idx" ON "pages_blocks_billing_portal" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_billing_portal_path_idx" ON "pages_blocks_billing_portal" USING btree ("_path");
  CREATE INDEX "pages_blocks_billing_portal_locale_idx" ON "pages_blocks_billing_portal" USING btree ("_locale");
  CREATE INDEX "pages_blocks_login_block_order_idx" ON "pages_blocks_login_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_login_block_parent_id_idx" ON "pages_blocks_login_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_login_block_path_idx" ON "pages_blocks_login_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_login_block_locale_idx" ON "pages_blocks_login_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_logout_block_order_idx" ON "pages_blocks_logout_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_logout_block_parent_id_idx" ON "pages_blocks_logout_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_logout_block_path_idx" ON "pages_blocks_logout_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_logout_block_locale_idx" ON "pages_blocks_logout_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_register_block_order_idx" ON "pages_blocks_register_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_register_block_parent_id_idx" ON "pages_blocks_register_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_register_block_path_idx" ON "pages_blocks_register_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_register_block_locale_idx" ON "pages_blocks_register_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_forgot_password_block_order_idx" ON "pages_blocks_forgot_password_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_forgot_password_block_parent_id_idx" ON "pages_blocks_forgot_password_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_forgot_password_block_path_idx" ON "pages_blocks_forgot_password_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_forgot_password_block_locale_idx" ON "pages_blocks_forgot_password_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_reset_password_block_order_idx" ON "pages_blocks_reset_password_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_reset_password_block_parent_id_idx" ON "pages_blocks_reset_password_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_reset_password_block_path_idx" ON "pages_blocks_reset_password_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_reset_password_block_locale_idx" ON "pages_blocks_reset_password_block" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_items_order_idx" ON "pages_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_items_parent_id_idx" ON "pages_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_items_locale_idx" ON "pages_blocks_accordion_items" USING btree ("_locale");
  CREATE INDEX "pages_blocks_accordion_order_idx" ON "pages_blocks_accordion" USING btree ("_order");
  CREATE INDEX "pages_blocks_accordion_parent_id_idx" ON "pages_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_accordion_path_idx" ON "pages_blocks_accordion" USING btree ("_path");
  CREATE INDEX "pages_blocks_accordion_locale_idx" ON "pages_blocks_accordion" USING btree ("_locale");
  CREATE INDEX "pages_blocks_carousel_slides_order_idx" ON "pages_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_slides_parent_id_idx" ON "pages_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_slides_locale_idx" ON "pages_blocks_carousel_slides" USING btree ("_locale");
  CREATE INDEX "pages_blocks_carousel_slides_image_idx" ON "pages_blocks_carousel_slides" USING btree ("image_id");
  CREATE INDEX "pages_blocks_carousel_order_idx" ON "pages_blocks_carousel" USING btree ("_order");
  CREATE INDEX "pages_blocks_carousel_parent_id_idx" ON "pages_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_carousel_path_idx" ON "pages_blocks_carousel" USING btree ("_path");
  CREATE INDEX "pages_blocks_carousel_locale_idx" ON "pages_blocks_carousel" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_geometric_block_order_idx" ON "pages_blocks_hero_geometric_block" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_geometric_block_parent_id_idx" ON "pages_blocks_hero_geometric_block" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_geometric_block_path_idx" ON "pages_blocks_hero_geometric_block" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_geometric_block_locale_idx" ON "pages_blocks_hero_geometric_block" USING btree ("_locale");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages_locales" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_locale_idx" ON "pages_rels" USING btree ("locale");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id","locale");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id","locale");
  CREATE INDEX "pages_rels_dashboard_id_idx" ON "pages_rels" USING btree ("dashboard_id","locale");
  CREATE INDEX "pages_rels_categories_id_idx" ON "pages_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_pages_v_blocks_cta_links_order_idx" ON "_pages_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_links_parent_id_idx" ON "_pages_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_links_locale_idx" ON "_pages_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_locale_idx" ON "_pages_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_links_order_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_links_locale_idx" ON "_pages_v_blocks_high_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_order_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_parent_id_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_path_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_locale_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_high_impact_hero_media_idx" ON "_pages_v_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "_links_v_order_idx" ON "_links_v" USING btree ("_order");
  CREATE INDEX "_links_v_parent_id_idx" ON "_links_v" USING btree ("_parent_id");
  CREATE INDEX "_links_v_locale_idx" ON "_links_v" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_medium_impact_hero_order_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_medium_impact_hero_parent_id_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_medium_impact_hero_path_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_medium_impact_hero_locale_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_medium_impact_hero_media_idx" ON "_pages_v_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_links_order_idx" ON "_pages_v_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_links_parent_id_idx" ON "_pages_v_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_links_locale_idx" ON "_pages_v_blocks_low_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_order_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_parent_id_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_path_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_low_impact_hero_locale_idx" ON "_pages_v_blocks_low_impact_hero" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_content_columns_order_idx" ON "_pages_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_columns_parent_id_idx" ON "_pages_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_columns_locale_idx" ON "_pages_v_blocks_content_columns" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_content_locale_idx" ON "_pages_v_blocks_content" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_block_order_idx" ON "_pages_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_block_parent_id_idx" ON "_pages_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_block_path_idx" ON "_pages_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_block_locale_idx" ON "_pages_v_blocks_media_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_media_block_media_idx" ON "_pages_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_code_order_idx" ON "_pages_v_blocks_code" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_code_parent_id_idx" ON "_pages_v_blocks_code" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_code_path_idx" ON "_pages_v_blocks_code" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_code_locale_idx" ON "_pages_v_blocks_code" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_banner_order_idx" ON "_pages_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_banner_parent_id_idx" ON "_pages_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_banner_path_idx" ON "_pages_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_banner_locale_idx" ON "_pages_v_blocks_banner" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_nav_links_order_idx" ON "_pages_v_blocks_nav_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_nav_links_parent_id_idx" ON "_pages_v_blocks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_nav_links_locale_idx" ON "_pages_v_blocks_nav_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_nav_order_idx" ON "_pages_v_blocks_nav" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_nav_parent_id_idx" ON "_pages_v_blocks_nav" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_nav_path_idx" ON "_pages_v_blocks_nav" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_nav_locale_idx" ON "_pages_v_blocks_nav" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_nav_media_idx" ON "_pages_v_blocks_nav" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_footer_block_links_order_idx" ON "_pages_v_blocks_footer_block_links" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer_block_links_parent_id_idx" ON "_pages_v_blocks_footer_block_links" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer_block_links_locale_idx" ON "_pages_v_blocks_footer_block_links" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_footer_block_order_idx" ON "_pages_v_blocks_footer_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_footer_block_parent_id_idx" ON "_pages_v_blocks_footer_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_footer_block_path_idx" ON "_pages_v_blocks_footer_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_footer_block_locale_idx" ON "_pages_v_blocks_footer_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_footer_block_media_idx" ON "_pages_v_blocks_footer_block" USING btree ("media_id");
  CREATE INDEX "_pages_v_blocks_archive_order_idx" ON "_pages_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_archive_parent_id_idx" ON "_pages_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_archive_path_idx" ON "_pages_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_archive_locale_idx" ON "_pages_v_blocks_archive" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_form_block_order_idx" ON "_pages_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_form_block_parent_id_idx" ON "_pages_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_form_block_path_idx" ON "_pages_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_form_block_locale_idx" ON "_pages_v_blocks_form_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_form_block_form_idx" ON "_pages_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_order_idx" ON "_pages_v_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_parent_id_idx" ON "_pages_v_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_plans_locale_idx" ON "_pages_v_blocks_pricing_table_plans" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_pricing_table_order_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_pricing_table_parent_id_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_pricing_table_path_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_pricing_table_locale_idx" ON "_pages_v_blocks_pricing_table" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_billing_portal_order_idx" ON "_pages_v_blocks_billing_portal" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_billing_portal_parent_id_idx" ON "_pages_v_blocks_billing_portal" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_billing_portal_path_idx" ON "_pages_v_blocks_billing_portal" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_billing_portal_locale_idx" ON "_pages_v_blocks_billing_portal" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_login_block_order_idx" ON "_pages_v_blocks_login_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_login_block_parent_id_idx" ON "_pages_v_blocks_login_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_login_block_path_idx" ON "_pages_v_blocks_login_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_login_block_locale_idx" ON "_pages_v_blocks_login_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_logout_block_order_idx" ON "_pages_v_blocks_logout_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_logout_block_parent_id_idx" ON "_pages_v_blocks_logout_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_logout_block_path_idx" ON "_pages_v_blocks_logout_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_logout_block_locale_idx" ON "_pages_v_blocks_logout_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_register_block_order_idx" ON "_pages_v_blocks_register_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_register_block_parent_id_idx" ON "_pages_v_blocks_register_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_register_block_path_idx" ON "_pages_v_blocks_register_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_register_block_locale_idx" ON "_pages_v_blocks_register_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_forgot_password_block_order_idx" ON "_pages_v_blocks_forgot_password_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_forgot_password_block_parent_id_idx" ON "_pages_v_blocks_forgot_password_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_forgot_password_block_path_idx" ON "_pages_v_blocks_forgot_password_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_forgot_password_block_locale_idx" ON "_pages_v_blocks_forgot_password_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_reset_password_block_order_idx" ON "_pages_v_blocks_reset_password_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_reset_password_block_parent_id_idx" ON "_pages_v_blocks_reset_password_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_reset_password_block_path_idx" ON "_pages_v_blocks_reset_password_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_reset_password_block_locale_idx" ON "_pages_v_blocks_reset_password_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_accordion_items_order_idx" ON "_pages_v_blocks_accordion_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_items_parent_id_idx" ON "_pages_v_blocks_accordion_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_items_locale_idx" ON "_pages_v_blocks_accordion_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_accordion_order_idx" ON "_pages_v_blocks_accordion" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_accordion_parent_id_idx" ON "_pages_v_blocks_accordion" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_accordion_path_idx" ON "_pages_v_blocks_accordion" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_accordion_locale_idx" ON "_pages_v_blocks_accordion" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_carousel_slides_order_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_slides_parent_id_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_slides_locale_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_carousel_slides_image_idx" ON "_pages_v_blocks_carousel_slides" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_carousel_order_idx" ON "_pages_v_blocks_carousel" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_carousel_parent_id_idx" ON "_pages_v_blocks_carousel" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_carousel_path_idx" ON "_pages_v_blocks_carousel" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_carousel_locale_idx" ON "_pages_v_blocks_carousel" USING btree ("_locale");
  CREATE INDEX "_pages_v_blocks_hero_geometric_block_order_idx" ON "_pages_v_blocks_hero_geometric_block" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_hero_geometric_block_parent_id_idx" ON "_pages_v_blocks_hero_geometric_block" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_hero_geometric_block_path_idx" ON "_pages_v_blocks_hero_geometric_block" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_hero_geometric_block_locale_idx" ON "_pages_v_blocks_hero_geometric_block" USING btree ("_locale");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v_locales" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_locale_idx" ON "_pages_v_rels" USING btree ("locale");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_pages_v_rels_dashboard_id_idx" ON "_pages_v_rels" USING btree ("dashboard_id","locale");
  CREATE INDEX "_pages_v_rels_categories_id_idx" ON "_pages_v_rels" USING btree ("categories_id","locale");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_transformation_preset_order_idx" ON "media_transformation_preset" USING btree ("order");
  CREATE INDEX "media_transformation_preset_parent_idx" ON "media_transformation_preset" USING btree ("parent_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "categories_breadcrumbs_locale_idx" ON "categories_breadcrumbs" USING btree ("_locale");
  CREATE INDEX "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX "categories_slug_idx" ON "categories_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "categories_locales_locale_parent_id_unique" ON "categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "posts_hero_image_idx" ON "posts_locales" USING btree ("hero_image_id","_locale");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts_locales" USING btree ("meta_image_id");
  CREATE INDEX "posts_slug_idx" ON "posts_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v_locales" USING btree ("version_hero_image_id","_locale");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v_locales" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX "orders_customer_idx" ON "orders" USING btree ("customer_id");
  CREATE INDEX "orders_updated_at_idx" ON "orders" USING btree ("updated_at");
  CREATE INDEX "orders_created_at_idx" ON "orders" USING btree ("created_at");
  CREATE INDEX "customers_sessions_order_idx" ON "customers_sessions" USING btree ("_order");
  CREATE INDEX "customers_sessions_parent_id_idx" ON "customers_sessions" USING btree ("_parent_id");
  CREATE INDEX "customers_updated_at_idx" ON "customers" USING btree ("updated_at");
  CREATE INDEX "customers_created_at_idx" ON "customers" USING btree ("created_at");
  CREATE UNIQUE INDEX "customers_email_idx" ON "customers" USING btree ("email");
  CREATE INDEX "dashboard_blocks_cta_links_order_idx" ON "dashboard_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_cta_links_parent_id_idx" ON "dashboard_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_cta_links_locale_idx" ON "dashboard_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_cta_order_idx" ON "dashboard_blocks_cta" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_cta_parent_id_idx" ON "dashboard_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_cta_path_idx" ON "dashboard_blocks_cta" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_cta_locale_idx" ON "dashboard_blocks_cta" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_high_impact_hero_links_order_idx" ON "dashboard_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_high_impact_hero_links_parent_id_idx" ON "dashboard_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_high_impact_hero_links_locale_idx" ON "dashboard_blocks_high_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_high_impact_hero_order_idx" ON "dashboard_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_high_impact_hero_parent_id_idx" ON "dashboard_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_high_impact_hero_path_idx" ON "dashboard_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_high_impact_hero_locale_idx" ON "dashboard_blocks_high_impact_hero" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_high_impact_hero_media_idx" ON "dashboard_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "dashboard_blocks_medium_impact_hero_order_idx" ON "dashboard_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_medium_impact_hero_parent_id_idx" ON "dashboard_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_medium_impact_hero_path_idx" ON "dashboard_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_medium_impact_hero_locale_idx" ON "dashboard_blocks_medium_impact_hero" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_medium_impact_hero_media_idx" ON "dashboard_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX "dashboard_blocks_low_impact_hero_links_order_idx" ON "dashboard_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_low_impact_hero_links_parent_id_idx" ON "dashboard_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_low_impact_hero_links_locale_idx" ON "dashboard_blocks_low_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_low_impact_hero_order_idx" ON "dashboard_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_low_impact_hero_parent_id_idx" ON "dashboard_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_low_impact_hero_path_idx" ON "dashboard_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_low_impact_hero_locale_idx" ON "dashboard_blocks_low_impact_hero" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_content_columns_order_idx" ON "dashboard_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_content_columns_parent_id_idx" ON "dashboard_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_content_columns_locale_idx" ON "dashboard_blocks_content_columns" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_content_order_idx" ON "dashboard_blocks_content" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_content_parent_id_idx" ON "dashboard_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_content_path_idx" ON "dashboard_blocks_content" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_content_locale_idx" ON "dashboard_blocks_content" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_media_block_order_idx" ON "dashboard_blocks_media_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_media_block_parent_id_idx" ON "dashboard_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_media_block_path_idx" ON "dashboard_blocks_media_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_media_block_locale_idx" ON "dashboard_blocks_media_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_media_block_media_idx" ON "dashboard_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "dashboard_blocks_code_order_idx" ON "dashboard_blocks_code" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_code_parent_id_idx" ON "dashboard_blocks_code" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_code_path_idx" ON "dashboard_blocks_code" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_code_locale_idx" ON "dashboard_blocks_code" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_banner_order_idx" ON "dashboard_blocks_banner" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_banner_parent_id_idx" ON "dashboard_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_banner_path_idx" ON "dashboard_blocks_banner" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_banner_locale_idx" ON "dashboard_blocks_banner" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_nav_links_order_idx" ON "dashboard_blocks_nav_links" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_nav_links_parent_id_idx" ON "dashboard_blocks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_nav_links_locale_idx" ON "dashboard_blocks_nav_links" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_nav_order_idx" ON "dashboard_blocks_nav" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_nav_parent_id_idx" ON "dashboard_blocks_nav" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_nav_path_idx" ON "dashboard_blocks_nav" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_nav_locale_idx" ON "dashboard_blocks_nav" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_nav_media_idx" ON "dashboard_blocks_nav" USING btree ("media_id");
  CREATE INDEX "dashboard_blocks_footer_block_links_order_idx" ON "dashboard_blocks_footer_block_links" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_footer_block_links_parent_id_idx" ON "dashboard_blocks_footer_block_links" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_footer_block_links_locale_idx" ON "dashboard_blocks_footer_block_links" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_footer_block_order_idx" ON "dashboard_blocks_footer_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_footer_block_parent_id_idx" ON "dashboard_blocks_footer_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_footer_block_path_idx" ON "dashboard_blocks_footer_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_footer_block_locale_idx" ON "dashboard_blocks_footer_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_footer_block_media_idx" ON "dashboard_blocks_footer_block" USING btree ("media_id");
  CREATE INDEX "dashboard_blocks_archive_order_idx" ON "dashboard_blocks_archive" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_archive_parent_id_idx" ON "dashboard_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_archive_path_idx" ON "dashboard_blocks_archive" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_archive_locale_idx" ON "dashboard_blocks_archive" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_form_block_order_idx" ON "dashboard_blocks_form_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_form_block_parent_id_idx" ON "dashboard_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_form_block_path_idx" ON "dashboard_blocks_form_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_form_block_locale_idx" ON "dashboard_blocks_form_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_form_block_form_idx" ON "dashboard_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "dashboard_blocks_pricing_table_plans_order_idx" ON "dashboard_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_pricing_table_plans_parent_id_idx" ON "dashboard_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_pricing_table_plans_locale_idx" ON "dashboard_blocks_pricing_table_plans" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_pricing_table_order_idx" ON "dashboard_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_pricing_table_parent_id_idx" ON "dashboard_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_pricing_table_path_idx" ON "dashboard_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_pricing_table_locale_idx" ON "dashboard_blocks_pricing_table" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_billing_portal_order_idx" ON "dashboard_blocks_billing_portal" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_billing_portal_parent_id_idx" ON "dashboard_blocks_billing_portal" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_billing_portal_path_idx" ON "dashboard_blocks_billing_portal" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_billing_portal_locale_idx" ON "dashboard_blocks_billing_portal" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_login_block_order_idx" ON "dashboard_blocks_login_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_login_block_parent_id_idx" ON "dashboard_blocks_login_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_login_block_path_idx" ON "dashboard_blocks_login_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_login_block_locale_idx" ON "dashboard_blocks_login_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_logout_block_order_idx" ON "dashboard_blocks_logout_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_logout_block_parent_id_idx" ON "dashboard_blocks_logout_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_logout_block_path_idx" ON "dashboard_blocks_logout_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_logout_block_locale_idx" ON "dashboard_blocks_logout_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_register_block_order_idx" ON "dashboard_blocks_register_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_register_block_parent_id_idx" ON "dashboard_blocks_register_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_register_block_path_idx" ON "dashboard_blocks_register_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_register_block_locale_idx" ON "dashboard_blocks_register_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_forgot_password_block_order_idx" ON "dashboard_blocks_forgot_password_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_forgot_password_block_parent_id_idx" ON "dashboard_blocks_forgot_password_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_forgot_password_block_path_idx" ON "dashboard_blocks_forgot_password_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_forgot_password_block_locale_idx" ON "dashboard_blocks_forgot_password_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_reset_password_block_order_idx" ON "dashboard_blocks_reset_password_block" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_reset_password_block_parent_id_idx" ON "dashboard_blocks_reset_password_block" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_reset_password_block_path_idx" ON "dashboard_blocks_reset_password_block" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_reset_password_block_locale_idx" ON "dashboard_blocks_reset_password_block" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_account_name_order_idx" ON "dashboard_blocks_account_name" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_account_name_parent_id_idx" ON "dashboard_blocks_account_name" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_account_name_path_idx" ON "dashboard_blocks_account_name" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_account_name_locale_idx" ON "dashboard_blocks_account_name" USING btree ("_locale");
  CREATE INDEX "dashboard_blocks_account_password_order_idx" ON "dashboard_blocks_account_password" USING btree ("_order");
  CREATE INDEX "dashboard_blocks_account_password_parent_id_idx" ON "dashboard_blocks_account_password" USING btree ("_parent_id");
  CREATE INDEX "dashboard_blocks_account_password_path_idx" ON "dashboard_blocks_account_password" USING btree ("_path");
  CREATE INDEX "dashboard_blocks_account_password_locale_idx" ON "dashboard_blocks_account_password" USING btree ("_locale");
  CREATE INDEX "dashboard__order_idx" ON "dashboard" USING btree ("_order");
  CREATE INDEX "dashboard_updated_at_idx" ON "dashboard" USING btree ("updated_at");
  CREATE INDEX "dashboard_created_at_idx" ON "dashboard" USING btree ("created_at");
  CREATE INDEX "dashboard__status_idx" ON "dashboard" USING btree ("_status");
  CREATE INDEX "dashboard_slug_idx" ON "dashboard_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "dashboard_locales_locale_parent_id_unique" ON "dashboard_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "dashboard_rels_order_idx" ON "dashboard_rels" USING btree ("order");
  CREATE INDEX "dashboard_rels_parent_idx" ON "dashboard_rels" USING btree ("parent_id");
  CREATE INDEX "dashboard_rels_path_idx" ON "dashboard_rels" USING btree ("path");
  CREATE INDEX "dashboard_rels_locale_idx" ON "dashboard_rels" USING btree ("locale");
  CREATE INDEX "dashboard_rels_pages_id_idx" ON "dashboard_rels" USING btree ("pages_id","locale");
  CREATE INDEX "dashboard_rels_posts_id_idx" ON "dashboard_rels" USING btree ("posts_id","locale");
  CREATE INDEX "dashboard_rels_dashboard_id_idx" ON "dashboard_rels" USING btree ("dashboard_id","locale");
  CREATE INDEX "dashboard_rels_categories_id_idx" ON "dashboard_rels" USING btree ("categories_id","locale");
  CREATE INDEX "_dashboard_v_blocks_cta_links_order_idx" ON "_dashboard_v_blocks_cta_links" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_cta_links_parent_id_idx" ON "_dashboard_v_blocks_cta_links" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_cta_links_locale_idx" ON "_dashboard_v_blocks_cta_links" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_cta_order_idx" ON "_dashboard_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_cta_parent_id_idx" ON "_dashboard_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_cta_path_idx" ON "_dashboard_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_cta_locale_idx" ON "_dashboard_v_blocks_cta" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_links_order_idx" ON "_dashboard_v_blocks_high_impact_hero_links" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_links_parent_id_idx" ON "_dashboard_v_blocks_high_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_links_locale_idx" ON "_dashboard_v_blocks_high_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_order_idx" ON "_dashboard_v_blocks_high_impact_hero" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_parent_id_idx" ON "_dashboard_v_blocks_high_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_path_idx" ON "_dashboard_v_blocks_high_impact_hero" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_locale_idx" ON "_dashboard_v_blocks_high_impact_hero" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_high_impact_hero_media_idx" ON "_dashboard_v_blocks_high_impact_hero" USING btree ("media_id");
  CREATE INDEX "_dashboard_v_blocks_medium_impact_hero_order_idx" ON "_dashboard_v_blocks_medium_impact_hero" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_medium_impact_hero_parent_id_idx" ON "_dashboard_v_blocks_medium_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_medium_impact_hero_path_idx" ON "_dashboard_v_blocks_medium_impact_hero" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_medium_impact_hero_locale_idx" ON "_dashboard_v_blocks_medium_impact_hero" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_medium_impact_hero_media_idx" ON "_dashboard_v_blocks_medium_impact_hero" USING btree ("media_id");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_links_order_idx" ON "_dashboard_v_blocks_low_impact_hero_links" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_links_parent_id_idx" ON "_dashboard_v_blocks_low_impact_hero_links" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_links_locale_idx" ON "_dashboard_v_blocks_low_impact_hero_links" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_order_idx" ON "_dashboard_v_blocks_low_impact_hero" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_parent_id_idx" ON "_dashboard_v_blocks_low_impact_hero" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_path_idx" ON "_dashboard_v_blocks_low_impact_hero" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_low_impact_hero_locale_idx" ON "_dashboard_v_blocks_low_impact_hero" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_content_columns_order_idx" ON "_dashboard_v_blocks_content_columns" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_content_columns_parent_id_idx" ON "_dashboard_v_blocks_content_columns" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_content_columns_locale_idx" ON "_dashboard_v_blocks_content_columns" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_content_order_idx" ON "_dashboard_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_content_parent_id_idx" ON "_dashboard_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_content_path_idx" ON "_dashboard_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_content_locale_idx" ON "_dashboard_v_blocks_content" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_media_block_order_idx" ON "_dashboard_v_blocks_media_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_media_block_parent_id_idx" ON "_dashboard_v_blocks_media_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_media_block_path_idx" ON "_dashboard_v_blocks_media_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_media_block_locale_idx" ON "_dashboard_v_blocks_media_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_media_block_media_idx" ON "_dashboard_v_blocks_media_block" USING btree ("media_id");
  CREATE INDEX "_dashboard_v_blocks_code_order_idx" ON "_dashboard_v_blocks_code" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_code_parent_id_idx" ON "_dashboard_v_blocks_code" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_code_path_idx" ON "_dashboard_v_blocks_code" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_code_locale_idx" ON "_dashboard_v_blocks_code" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_banner_order_idx" ON "_dashboard_v_blocks_banner" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_banner_parent_id_idx" ON "_dashboard_v_blocks_banner" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_banner_path_idx" ON "_dashboard_v_blocks_banner" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_banner_locale_idx" ON "_dashboard_v_blocks_banner" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_nav_links_order_idx" ON "_dashboard_v_blocks_nav_links" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_nav_links_parent_id_idx" ON "_dashboard_v_blocks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_nav_links_locale_idx" ON "_dashboard_v_blocks_nav_links" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_nav_order_idx" ON "_dashboard_v_blocks_nav" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_nav_parent_id_idx" ON "_dashboard_v_blocks_nav" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_nav_path_idx" ON "_dashboard_v_blocks_nav" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_nav_locale_idx" ON "_dashboard_v_blocks_nav" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_nav_media_idx" ON "_dashboard_v_blocks_nav" USING btree ("media_id");
  CREATE INDEX "_dashboard_v_blocks_footer_block_links_order_idx" ON "_dashboard_v_blocks_footer_block_links" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_footer_block_links_parent_id_idx" ON "_dashboard_v_blocks_footer_block_links" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_footer_block_links_locale_idx" ON "_dashboard_v_blocks_footer_block_links" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_footer_block_order_idx" ON "_dashboard_v_blocks_footer_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_footer_block_parent_id_idx" ON "_dashboard_v_blocks_footer_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_footer_block_path_idx" ON "_dashboard_v_blocks_footer_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_footer_block_locale_idx" ON "_dashboard_v_blocks_footer_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_footer_block_media_idx" ON "_dashboard_v_blocks_footer_block" USING btree ("media_id");
  CREATE INDEX "_dashboard_v_blocks_archive_order_idx" ON "_dashboard_v_blocks_archive" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_archive_parent_id_idx" ON "_dashboard_v_blocks_archive" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_archive_path_idx" ON "_dashboard_v_blocks_archive" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_archive_locale_idx" ON "_dashboard_v_blocks_archive" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_form_block_order_idx" ON "_dashboard_v_blocks_form_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_form_block_parent_id_idx" ON "_dashboard_v_blocks_form_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_form_block_path_idx" ON "_dashboard_v_blocks_form_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_form_block_locale_idx" ON "_dashboard_v_blocks_form_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_form_block_form_idx" ON "_dashboard_v_blocks_form_block" USING btree ("form_id");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_plans_order_idx" ON "_dashboard_v_blocks_pricing_table_plans" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_plans_parent_id_idx" ON "_dashboard_v_blocks_pricing_table_plans" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_plans_locale_idx" ON "_dashboard_v_blocks_pricing_table_plans" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_order_idx" ON "_dashboard_v_blocks_pricing_table" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_parent_id_idx" ON "_dashboard_v_blocks_pricing_table" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_path_idx" ON "_dashboard_v_blocks_pricing_table" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_pricing_table_locale_idx" ON "_dashboard_v_blocks_pricing_table" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_billing_portal_order_idx" ON "_dashboard_v_blocks_billing_portal" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_billing_portal_parent_id_idx" ON "_dashboard_v_blocks_billing_portal" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_billing_portal_path_idx" ON "_dashboard_v_blocks_billing_portal" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_billing_portal_locale_idx" ON "_dashboard_v_blocks_billing_portal" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_login_block_order_idx" ON "_dashboard_v_blocks_login_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_login_block_parent_id_idx" ON "_dashboard_v_blocks_login_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_login_block_path_idx" ON "_dashboard_v_blocks_login_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_login_block_locale_idx" ON "_dashboard_v_blocks_login_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_logout_block_order_idx" ON "_dashboard_v_blocks_logout_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_logout_block_parent_id_idx" ON "_dashboard_v_blocks_logout_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_logout_block_path_idx" ON "_dashboard_v_blocks_logout_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_logout_block_locale_idx" ON "_dashboard_v_blocks_logout_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_register_block_order_idx" ON "_dashboard_v_blocks_register_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_register_block_parent_id_idx" ON "_dashboard_v_blocks_register_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_register_block_path_idx" ON "_dashboard_v_blocks_register_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_register_block_locale_idx" ON "_dashboard_v_blocks_register_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_forgot_password_block_order_idx" ON "_dashboard_v_blocks_forgot_password_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_forgot_password_block_parent_id_idx" ON "_dashboard_v_blocks_forgot_password_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_forgot_password_block_path_idx" ON "_dashboard_v_blocks_forgot_password_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_forgot_password_block_locale_idx" ON "_dashboard_v_blocks_forgot_password_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_reset_password_block_order_idx" ON "_dashboard_v_blocks_reset_password_block" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_reset_password_block_parent_id_idx" ON "_dashboard_v_blocks_reset_password_block" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_reset_password_block_path_idx" ON "_dashboard_v_blocks_reset_password_block" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_reset_password_block_locale_idx" ON "_dashboard_v_blocks_reset_password_block" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_account_name_order_idx" ON "_dashboard_v_blocks_account_name" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_account_name_parent_id_idx" ON "_dashboard_v_blocks_account_name" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_account_name_path_idx" ON "_dashboard_v_blocks_account_name" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_account_name_locale_idx" ON "_dashboard_v_blocks_account_name" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_blocks_account_password_order_idx" ON "_dashboard_v_blocks_account_password" USING btree ("_order");
  CREATE INDEX "_dashboard_v_blocks_account_password_parent_id_idx" ON "_dashboard_v_blocks_account_password" USING btree ("_parent_id");
  CREATE INDEX "_dashboard_v_blocks_account_password_path_idx" ON "_dashboard_v_blocks_account_password" USING btree ("_path");
  CREATE INDEX "_dashboard_v_blocks_account_password_locale_idx" ON "_dashboard_v_blocks_account_password" USING btree ("_locale");
  CREATE INDEX "_dashboard_v_parent_idx" ON "_dashboard_v" USING btree ("parent_id");
  CREATE INDEX "_dashboard_v_version_version__order_idx" ON "_dashboard_v" USING btree ("version__order");
  CREATE INDEX "_dashboard_v_version_version_updated_at_idx" ON "_dashboard_v" USING btree ("version_updated_at");
  CREATE INDEX "_dashboard_v_version_version_created_at_idx" ON "_dashboard_v" USING btree ("version_created_at");
  CREATE INDEX "_dashboard_v_version_version__status_idx" ON "_dashboard_v" USING btree ("version__status");
  CREATE INDEX "_dashboard_v_created_at_idx" ON "_dashboard_v" USING btree ("created_at");
  CREATE INDEX "_dashboard_v_updated_at_idx" ON "_dashboard_v" USING btree ("updated_at");
  CREATE INDEX "_dashboard_v_snapshot_idx" ON "_dashboard_v" USING btree ("snapshot");
  CREATE INDEX "_dashboard_v_published_locale_idx" ON "_dashboard_v" USING btree ("published_locale");
  CREATE INDEX "_dashboard_v_latest_idx" ON "_dashboard_v" USING btree ("latest");
  CREATE INDEX "_dashboard_v_autosave_idx" ON "_dashboard_v" USING btree ("autosave");
  CREATE INDEX "_dashboard_v_version_version_slug_idx" ON "_dashboard_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_dashboard_v_locales_locale_parent_id_unique" ON "_dashboard_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_dashboard_v_rels_order_idx" ON "_dashboard_v_rels" USING btree ("order");
  CREATE INDEX "_dashboard_v_rels_parent_idx" ON "_dashboard_v_rels" USING btree ("parent_id");
  CREATE INDEX "_dashboard_v_rels_path_idx" ON "_dashboard_v_rels" USING btree ("path");
  CREATE INDEX "_dashboard_v_rels_locale_idx" ON "_dashboard_v_rels" USING btree ("locale");
  CREATE INDEX "_dashboard_v_rels_pages_id_idx" ON "_dashboard_v_rels" USING btree ("pages_id","locale");
  CREATE INDEX "_dashboard_v_rels_posts_id_idx" ON "_dashboard_v_rels" USING btree ("posts_id","locale");
  CREATE INDEX "_dashboard_v_rels_dashboard_id_idx" ON "_dashboard_v_rels" USING btree ("dashboard_id","locale");
  CREATE INDEX "_dashboard_v_rels_categories_id_idx" ON "_dashboard_v_rels" USING btree ("categories_id","locale");
  CREATE UNIQUE INDEX "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX "search_hero_image_idx" ON "search" USING btree ("hero_image_id");
  CREATE INDEX "search_type_idx" ON "search" USING btree ("type");
  CREATE INDEX "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX "search_slug_idx" ON "search_locales" USING btree ("slug","_locale");
  CREATE INDEX "search_content_idx" ON "search_locales" USING btree ("content","_locale");
  CREATE UNIQUE INDEX "search_locales_locale_parent_id_unique" ON "search_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX "search_rels_posts_id_idx" ON "search_rels" USING btree ("posts_id");
  CREATE INDEX "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_checkbox_locales_locale_parent_id_unique" ON "forms_blocks_checkbox_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_country_locales_locale_parent_id_unique" ON "forms_blocks_country_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_email_locales_locale_parent_id_unique" ON "forms_blocks_email_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_message_locales_locale_parent_id_unique" ON "forms_blocks_message_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_number_locales_locale_parent_id_unique" ON "forms_blocks_number_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "forms_blocks_select_options_locales_locale_parent_id_unique" ON "forms_blocks_select_options_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_select_locales_locale_parent_id_unique" ON "forms_blocks_select_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_state_locales_locale_parent_id_unique" ON "forms_blocks_state_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_text_locales_locale_parent_id_unique" ON "forms_blocks_text_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE UNIQUE INDEX "forms_blocks_textarea_locales_locale_parent_id_unique" ON "forms_blocks_textarea_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "forms_emails_locales_locale_parent_id_unique" ON "forms_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE UNIQUE INDEX "forms_locales_locale_parent_id_unique" ON "forms_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX "exports_updated_at_idx" ON "exports" USING btree ("updated_at");
  CREATE INDEX "exports_created_at_idx" ON "exports" USING btree ("created_at");
  CREATE UNIQUE INDEX "exports_filename_idx" ON "exports" USING btree ("filename");
  CREATE INDEX "exports_texts_order_parent_idx" ON "exports_texts" USING btree ("order","parent_id");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_orders_id_idx" ON "payload_locked_documents_rels" USING btree ("orders_id");
  CREATE INDEX "payload_locked_documents_rels_customers_id_idx" ON "payload_locked_documents_rels" USING btree ("customers_id");
  CREATE INDEX "payload_locked_documents_rels_dashboard_id_idx" ON "payload_locked_documents_rels" USING btree ("dashboard_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX "payload_locked_documents_rels_exports_id_idx" ON "payload_locked_documents_rels" USING btree ("exports_id");
  CREATE INDEX "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_rels_customers_id_idx" ON "payload_preferences_rels" USING btree ("customers_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_updated_at_idx" ON "payload_query_presets" USING btree ("updated_at");
  CREATE INDEX "payload_query_presets_created_at_idx" ON "payload_query_presets" USING btree ("created_at");
  CREATE INDEX "payload_query_presets_rels_order_idx" ON "payload_query_presets_rels" USING btree ("order");
  CREATE INDEX "payload_query_presets_rels_parent_idx" ON "payload_query_presets_rels" USING btree ("parent_id");
  CREATE INDEX "payload_query_presets_rels_path_idx" ON "payload_query_presets_rels" USING btree ("path");
  CREATE INDEX "payload_query_presets_rels_users_id_idx" ON "payload_query_presets_rels" USING btree ("users_id");
  CREATE INDEX "general_social_media_links_order_idx" ON "general_social_media_links" USING btree ("_order");
  CREATE INDEX "general_social_media_links_parent_id_idx" ON "general_social_media_links" USING btree ("_parent_id");
  CREATE INDEX "general_site_logo_idx" ON "general" USING btree ("site_logo_id");
  CREATE INDEX "header_blocks_nav_links_order_idx" ON "header_blocks_nav_links" USING btree ("_order");
  CREATE INDEX "header_blocks_nav_links_parent_id_idx" ON "header_blocks_nav_links" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_nav_links_locale_idx" ON "header_blocks_nav_links" USING btree ("_locale");
  CREATE INDEX "header_blocks_nav_order_idx" ON "header_blocks_nav" USING btree ("_order");
  CREATE INDEX "header_blocks_nav_parent_id_idx" ON "header_blocks_nav" USING btree ("_parent_id");
  CREATE INDEX "header_blocks_nav_path_idx" ON "header_blocks_nav" USING btree ("_path");
  CREATE INDEX "header_blocks_nav_locale_idx" ON "header_blocks_nav" USING btree ("_locale");
  CREATE INDEX "header_blocks_nav_media_idx" ON "header_blocks_nav" USING btree ("media_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_locale_idx" ON "header_rels" USING btree ("locale");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id","locale");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id","locale");
  CREATE INDEX "header_rels_dashboard_id_idx" ON "header_rels" USING btree ("dashboard_id","locale");
  CREATE INDEX "footer_blocks_footer_block_links_order_idx" ON "footer_blocks_footer_block_links" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_block_links_parent_id_idx" ON "footer_blocks_footer_block_links" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_block_links_locale_idx" ON "footer_blocks_footer_block_links" USING btree ("_locale");
  CREATE INDEX "footer_blocks_footer_block_order_idx" ON "footer_blocks_footer_block" USING btree ("_order");
  CREATE INDEX "footer_blocks_footer_block_parent_id_idx" ON "footer_blocks_footer_block" USING btree ("_parent_id");
  CREATE INDEX "footer_blocks_footer_block_path_idx" ON "footer_blocks_footer_block" USING btree ("_path");
  CREATE INDEX "footer_blocks_footer_block_locale_idx" ON "footer_blocks_footer_block" USING btree ("_locale");
  CREATE INDEX "footer_blocks_footer_block_media_idx" ON "footer_blocks_footer_block" USING btree ("media_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_locale_idx" ON "footer_rels" USING btree ("locale");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id","locale");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id","locale");
  CREATE INDEX "footer_rels_dashboard_id_idx" ON "footer_rels" USING btree ("dashboard_id","locale");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_cta_links" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_high_impact_hero" CASCADE;
  DROP TABLE "links" CASCADE;
  DROP TABLE "pages_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "pages_blocks_low_impact_hero" CASCADE;
  DROP TABLE "pages_blocks_content_columns" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_block" CASCADE;
  DROP TABLE "pages_blocks_code" CASCADE;
  DROP TABLE "pages_blocks_banner" CASCADE;
  DROP TABLE "pages_blocks_nav_links" CASCADE;
  DROP TABLE "pages_blocks_nav" CASCADE;
  DROP TABLE "pages_blocks_footer_block_links" CASCADE;
  DROP TABLE "pages_blocks_footer_block" CASCADE;
  DROP TABLE "pages_blocks_archive" CASCADE;
  DROP TABLE "pages_blocks_form_block" CASCADE;
  DROP TABLE "pages_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "pages_blocks_pricing_table" CASCADE;
  DROP TABLE "pages_blocks_billing_portal" CASCADE;
  DROP TABLE "pages_blocks_login_block" CASCADE;
  DROP TABLE "pages_blocks_logout_block" CASCADE;
  DROP TABLE "pages_blocks_register_block" CASCADE;
  DROP TABLE "pages_blocks_forgot_password_block" CASCADE;
  DROP TABLE "pages_blocks_reset_password_block" CASCADE;
  DROP TABLE "pages_blocks_accordion_items" CASCADE;
  DROP TABLE "pages_blocks_accordion" CASCADE;
  DROP TABLE "pages_blocks_carousel_slides" CASCADE;
  DROP TABLE "pages_blocks_carousel" CASCADE;
  DROP TABLE "pages_blocks_hero_geometric_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_cta_links" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_high_impact_hero" CASCADE;
  DROP TABLE "_links_v" CASCADE;
  DROP TABLE "_pages_v_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_low_impact_hero" CASCADE;
  DROP TABLE "_pages_v_blocks_content_columns" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_block" CASCADE;
  DROP TABLE "_pages_v_blocks_code" CASCADE;
  DROP TABLE "_pages_v_blocks_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_nav_links" CASCADE;
  DROP TABLE "_pages_v_blocks_nav" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_block_links" CASCADE;
  DROP TABLE "_pages_v_blocks_footer_block" CASCADE;
  DROP TABLE "_pages_v_blocks_archive" CASCADE;
  DROP TABLE "_pages_v_blocks_form_block" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "_pages_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_pages_v_blocks_billing_portal" CASCADE;
  DROP TABLE "_pages_v_blocks_login_block" CASCADE;
  DROP TABLE "_pages_v_blocks_logout_block" CASCADE;
  DROP TABLE "_pages_v_blocks_register_block" CASCADE;
  DROP TABLE "_pages_v_blocks_forgot_password_block" CASCADE;
  DROP TABLE "_pages_v_blocks_reset_password_block" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion_items" CASCADE;
  DROP TABLE "_pages_v_blocks_accordion" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_geometric_block" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media_transformation_preset" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "categories_locales" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_locales" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_locales" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "orders" CASCADE;
  DROP TABLE "customers_sessions" CASCADE;
  DROP TABLE "customers" CASCADE;
  DROP TABLE "dashboard_blocks_cta_links" CASCADE;
  DROP TABLE "dashboard_blocks_cta" CASCADE;
  DROP TABLE "dashboard_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "dashboard_blocks_high_impact_hero" CASCADE;
  DROP TABLE "dashboard_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "dashboard_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "dashboard_blocks_low_impact_hero" CASCADE;
  DROP TABLE "dashboard_blocks_content_columns" CASCADE;
  DROP TABLE "dashboard_blocks_content" CASCADE;
  DROP TABLE "dashboard_blocks_media_block" CASCADE;
  DROP TABLE "dashboard_blocks_code" CASCADE;
  DROP TABLE "dashboard_blocks_banner" CASCADE;
  DROP TABLE "dashboard_blocks_nav_links" CASCADE;
  DROP TABLE "dashboard_blocks_nav" CASCADE;
  DROP TABLE "dashboard_blocks_footer_block_links" CASCADE;
  DROP TABLE "dashboard_blocks_footer_block" CASCADE;
  DROP TABLE "dashboard_blocks_archive" CASCADE;
  DROP TABLE "dashboard_blocks_form_block" CASCADE;
  DROP TABLE "dashboard_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "dashboard_blocks_pricing_table" CASCADE;
  DROP TABLE "dashboard_blocks_billing_portal" CASCADE;
  DROP TABLE "dashboard_blocks_login_block" CASCADE;
  DROP TABLE "dashboard_blocks_logout_block" CASCADE;
  DROP TABLE "dashboard_blocks_register_block" CASCADE;
  DROP TABLE "dashboard_blocks_forgot_password_block" CASCADE;
  DROP TABLE "dashboard_blocks_reset_password_block" CASCADE;
  DROP TABLE "dashboard_blocks_account_name" CASCADE;
  DROP TABLE "dashboard_blocks_account_password" CASCADE;
  DROP TABLE "dashboard" CASCADE;
  DROP TABLE "dashboard_locales" CASCADE;
  DROP TABLE "dashboard_rels" CASCADE;
  DROP TABLE "_dashboard_v_blocks_cta_links" CASCADE;
  DROP TABLE "_dashboard_v_blocks_cta" CASCADE;
  DROP TABLE "_dashboard_v_blocks_high_impact_hero_links" CASCADE;
  DROP TABLE "_dashboard_v_blocks_high_impact_hero" CASCADE;
  DROP TABLE "_dashboard_v_blocks_medium_impact_hero" CASCADE;
  DROP TABLE "_dashboard_v_blocks_low_impact_hero_links" CASCADE;
  DROP TABLE "_dashboard_v_blocks_low_impact_hero" CASCADE;
  DROP TABLE "_dashboard_v_blocks_content_columns" CASCADE;
  DROP TABLE "_dashboard_v_blocks_content" CASCADE;
  DROP TABLE "_dashboard_v_blocks_media_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_code" CASCADE;
  DROP TABLE "_dashboard_v_blocks_banner" CASCADE;
  DROP TABLE "_dashboard_v_blocks_nav_links" CASCADE;
  DROP TABLE "_dashboard_v_blocks_nav" CASCADE;
  DROP TABLE "_dashboard_v_blocks_footer_block_links" CASCADE;
  DROP TABLE "_dashboard_v_blocks_footer_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_archive" CASCADE;
  DROP TABLE "_dashboard_v_blocks_form_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_pricing_table_plans" CASCADE;
  DROP TABLE "_dashboard_v_blocks_pricing_table" CASCADE;
  DROP TABLE "_dashboard_v_blocks_billing_portal" CASCADE;
  DROP TABLE "_dashboard_v_blocks_login_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_logout_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_register_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_forgot_password_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_reset_password_block" CASCADE;
  DROP TABLE "_dashboard_v_blocks_account_name" CASCADE;
  DROP TABLE "_dashboard_v_blocks_account_password" CASCADE;
  DROP TABLE "_dashboard_v" CASCADE;
  DROP TABLE "_dashboard_v_locales" CASCADE;
  DROP TABLE "_dashboard_v_rels" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_locales" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_checkbox_locales" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_country_locales" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_email_locales" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_message_locales" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_number_locales" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select_options_locales" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_select_locales" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_state_locales" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_text_locales" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_blocks_textarea_locales" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms_emails_locales" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "forms_locales" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "exports" CASCADE;
  DROP TABLE "exports_texts" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "payload_query_presets" CASCADE;
  DROP TABLE "payload_query_presets_rels" CASCADE;
  DROP TABLE "general_social_media_links" CASCADE;
  DROP TABLE "general" CASCADE;
  DROP TABLE "header_blocks_nav_links" CASCADE;
  DROP TABLE "header_blocks_nav" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_blocks_footer_block_links" CASCADE;
  DROP TABLE "footer_blocks_footer_block" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_links_link_type";
  DROP TYPE "public"."enum_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_content_columns_size";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_pages_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_code_language";
  DROP TYPE "public"."enum_pages_blocks_banner_style";
  DROP TYPE "public"."enum_pages_blocks_nav_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_nav_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_footer_block_links_link_type";
  DROP TYPE "public"."enum_pages_blocks_footer_block_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_archive_populate_by";
  DROP TYPE "public"."enum_pages_blocks_archive_relation_to";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_plans_mode";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_plans_type";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_plans_currency";
  DROP TYPE "public"."enum_pages_blocks_pricing_table_plans_interval";
  DROP TYPE "public"."enum_pages_blocks_login_block_register_type";
  DROP TYPE "public"."enum_pages_blocks_login_block_forgot_password_type";
  DROP TYPE "public"."enum_pages_blocks_login_block_redirect_type";
  DROP TYPE "public"."enum_pages_blocks_logout_block_redirect_type";
  DROP TYPE "public"."enum_pages_blocks_logout_block_redirect_appearance";
  DROP TYPE "public"."enum_pages_blocks_register_block_login_type";
  DROP TYPE "public"."enum_pages_blocks_forgot_password_block_login_type";
  DROP TYPE "public"."enum_pages_blocks_reset_password_block_redirect_type";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_bottom";
  DROP TYPE "public"."enum_pages_blocks_accordion_spacing_top";
  DROP TYPE "public"."enum_pages_blocks_accordion_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_accordion_padding_top";
  DROP TYPE "public"."enum_pages_blocks_carousel_slides_link_type";
  DROP TYPE "public"."enum_pages_blocks_carousel_type";
  DROP TYPE "public"."enum_pages_blocks_carousel_spacing_bottom";
  DROP TYPE "public"."enum_pages_blocks_carousel_spacing_top";
  DROP TYPE "public"."enum_pages_blocks_carousel_padding_bottom";
  DROP TYPE "public"."enum_pages_blocks_carousel_padding_top";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__links_v_link_type";
  DROP TYPE "public"."enum__links_v_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_code_language";
  DROP TYPE "public"."enum__pages_v_blocks_banner_style";
  DROP TYPE "public"."enum__pages_v_blocks_nav_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_nav_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_footer_block_links_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_footer_block_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__pages_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_plans_mode";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_plans_type";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_plans_currency";
  DROP TYPE "public"."enum__pages_v_blocks_pricing_table_plans_interval";
  DROP TYPE "public"."enum__pages_v_blocks_login_block_register_type";
  DROP TYPE "public"."enum__pages_v_blocks_login_block_forgot_password_type";
  DROP TYPE "public"."enum__pages_v_blocks_login_block_redirect_type";
  DROP TYPE "public"."enum__pages_v_blocks_logout_block_redirect_type";
  DROP TYPE "public"."enum__pages_v_blocks_logout_block_redirect_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_register_block_login_type";
  DROP TYPE "public"."enum__pages_v_blocks_forgot_password_block_login_type";
  DROP TYPE "public"."enum__pages_v_blocks_reset_password_block_redirect_type";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_spacing_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_spacing_top";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_accordion_padding_top";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_slides_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_type";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_spacing_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_spacing_top";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_padding_bottom";
  DROP TYPE "public"."enum__pages_v_blocks_carousel_padding_top";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_media_transformation_preset";
  DROP TYPE "public"."enum_media_transformation_type";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum__posts_v_published_locale";
  DROP TYPE "public"."enum_dashboard_blocks_cta_links_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_content_columns_size";
  DROP TYPE "public"."enum_dashboard_blocks_content_columns_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_code_language";
  DROP TYPE "public"."enum_dashboard_blocks_banner_style";
  DROP TYPE "public"."enum_dashboard_blocks_nav_links_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_nav_links_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_footer_block_links_link_type";
  DROP TYPE "public"."enum_dashboard_blocks_footer_block_links_link_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_archive_populate_by";
  DROP TYPE "public"."enum_dashboard_blocks_archive_relation_to";
  DROP TYPE "public"."enum_dashboard_blocks_pricing_table_plans_mode";
  DROP TYPE "public"."enum_dashboard_blocks_pricing_table_plans_type";
  DROP TYPE "public"."enum_dashboard_blocks_pricing_table_plans_currency";
  DROP TYPE "public"."enum_dashboard_blocks_pricing_table_plans_interval";
  DROP TYPE "public"."enum_dashboard_blocks_login_block_register_type";
  DROP TYPE "public"."enum_dashboard_blocks_login_block_forgot_password_type";
  DROP TYPE "public"."enum_dashboard_blocks_login_block_redirect_type";
  DROP TYPE "public"."enum_dashboard_blocks_logout_block_redirect_type";
  DROP TYPE "public"."enum_dashboard_blocks_logout_block_redirect_appearance";
  DROP TYPE "public"."enum_dashboard_blocks_register_block_login_type";
  DROP TYPE "public"."enum_dashboard_blocks_forgot_password_block_login_type";
  DROP TYPE "public"."enum_dashboard_blocks_reset_password_block_redirect_type";
  DROP TYPE "public"."enum_dashboard_status";
  DROP TYPE "public"."enum__dashboard_v_blocks_cta_links_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_cta_links_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_high_impact_hero_links_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_high_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_low_impact_hero_links_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_low_impact_hero_links_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_content_columns_size";
  DROP TYPE "public"."enum__dashboard_v_blocks_content_columns_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_content_columns_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_code_language";
  DROP TYPE "public"."enum__dashboard_v_blocks_banner_style";
  DROP TYPE "public"."enum__dashboard_v_blocks_nav_links_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_nav_links_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_footer_block_links_link_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_footer_block_links_link_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_archive_populate_by";
  DROP TYPE "public"."enum__dashboard_v_blocks_archive_relation_to";
  DROP TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_mode";
  DROP TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_currency";
  DROP TYPE "public"."enum__dashboard_v_blocks_pricing_table_plans_interval";
  DROP TYPE "public"."enum__dashboard_v_blocks_login_block_register_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_login_block_forgot_password_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_login_block_redirect_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_logout_block_redirect_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_logout_block_redirect_appearance";
  DROP TYPE "public"."enum__dashboard_v_blocks_register_block_login_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_forgot_password_block_login_type";
  DROP TYPE "public"."enum__dashboard_v_blocks_reset_password_block_redirect_type";
  DROP TYPE "public"."enum__dashboard_v_version_status";
  DROP TYPE "public"."enum__dashboard_v_published_locale";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_redirects_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_exports_format";
  DROP TYPE "public"."enum_exports_sort_order";
  DROP TYPE "public"."enum_exports_locale";
  DROP TYPE "public"."enum_exports_drafts";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_payload_query_presets_access_read_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_update_constraint";
  DROP TYPE "public"."enum_payload_query_presets_access_delete_constraint";
  DROP TYPE "public"."enum_payload_query_presets_related_collection";
  DROP TYPE "public"."enum_general_social_media_links_platform";
  DROP TYPE "public"."enum_header_blocks_nav_links_link_type";
  DROP TYPE "public"."enum_header_blocks_nav_links_link_appearance";
  DROP TYPE "public"."enum_footer_blocks_footer_block_links_link_type";
  DROP TYPE "public"."enum_footer_blocks_footer_block_links_link_appearance";`)
}

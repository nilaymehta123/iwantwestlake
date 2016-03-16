<?php
/**
 * The Header template for our theme
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage iwantwestlake
 * @since iwantwestlake 1.0
 */
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<?php
    $page_template_slug = is_front_page() ? 'front-page.php' : get_page_template_slug();
    $ie9 = false;
    preg_match('/MSIE (.*?);/', $_SERVER['HTTP_USER_AGENT'], $matches);
    if(count($matches)<2){
        preg_match('/Trident\/\d{1,2}.\d{1,2}; rv:([0-9]*)/', $_SERVER['HTTP_USER_AGENT'], $matches);
    }
    if (count($matches)>1){
        $ieversion = $matches[1];
        if ($ieversion <= 9) {
            $ie9=true;
        }
    }
?>
<head>
  <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css">
  <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
  
  <!-- <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'> -->

  <title><?php wp_title( '|', true, 'right' ); ?></title>
  <?php 

  echo "<style>";readfile(get_template_directory()."/css/developer.css");
  readfile(get_template_directory()."/css/custom.css");
  readfile(get_template_directory()."/css/bootstrap.min.css");
  readfile(get_template_directory()."/css/bootstrap-custom.css");
  readfile(get_template_directory()."/stortcode.css");
  readfile(get_template_directory()."/style.css");
  echo "</style>"; ?>


<?php wp_head(); ?>
</head>
  <body>
    <div class="loading"></div>

    <div class="navbar-wrapper">
      <div class="vc_container">
        <div class="custom-row">
          <nav class="navbar navbar-default navbar-fixed-top hidden-md hidden-sm hidden-xs">
            <div class="vc_container">
              <div class="navbar-header">
              <div class="logo">
                <a href="<?php echo get_site_url();?>">
                  <img src="https://iwantwestlake.blob.core.windows.net/media/2014/12/westlakfelogo.png">
                </a>
              </div>
            </div>
            <div class="right-column">
             <div class="right-column-rig">
              <div class="right-column-left-bottom">
                <p>Question? Call <span>1-866-863-4466</span></p>     
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>


    <!-- tab-menu -->
    <nav class="navbar navbar-default navbar-fixed-top visible-md visible-sm visible-xs">
      <div class="vc_container">
        <div class="navbar-header">
          <a class="navbar-brand" href="<?php echo get_site_url();?>" >
            <img src="https://iwantwestlake.blob.core.windows.net/media/2014/12/westlakfelogo.png">
          </a>
        </div>

        <div class="right-column">
          <div class="right-column-rig">
            <div class="right-column-left-bottom">                  
              <p>Question? Call <span>1-866-863-4466</span></p>     
            </div>
          </div>
        </div> 

      </div>
      </nav>      
    </div>
  </div>

</div>
</nav>

        <!-- tab-menu end-->

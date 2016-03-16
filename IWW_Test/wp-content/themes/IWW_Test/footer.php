<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage midwayfleet
 * @since midwayfleet 1.0
 */
?>
<div class="form-notify error-wrap" style="display: none;"></div>
<footer>
 <div class="footer-bottom">
  <!-- <span class="pull-right"><a href="#">Back to top</a></span> -->
  <a href="/privacy-policy">Privacy Policy</a> | Copyright © 2015 Westlake Financial Services All Rights Reserved. ®
</div>
</footer>

</div>

<script src="<?php bloginfo('template_directory'); ?>/js/jquery-1.11.2.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/jquery.datetimepicker.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/js/bootstrap.min.js"></script>
<script src="<?php bloginfo('template_directory'); ?>/newjs/all.js"></script>

<!--   <script src="<?php bloginfo('template_directory'); ?>/js/custom.min.js"></script>  
  <script src="<?php bloginfo('template_directory'); ?>/js/slick.min.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/js/lightslider.js"></script>
  <script src="<?php bloginfo('template_directory'); ?>/customjs/dist/toTop.js"></script> 
  <script src="<?php bloginfo('template_directory'); ?>/plugins/api-handler/js/api-js.min.js"></script> -->
  <?php wp_footer(); ?>
  
  <!--ScrollToTop -->
  <a href="#" class="scrollup">^</a>

</body>
</html> 
<script>
  $('#embedmaindiv').addClass('hide');
</script>

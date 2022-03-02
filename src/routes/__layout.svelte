<script>
  import '../app.css'
  import Footer from '../components/Footer.svelte'
  const { VITE_PLAUSBILE_DOMAIN } = import.meta.env
</script>

<svelte:head>
  <!-- Matomo -->
  <script>
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    _paq.push(['requireCookieConsent']);
    (function() {
      var u="//www.codebits.it/_trk_/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', VITE_MATOMO_SITE_ID]);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  </script>
  <!-- End Matomo Code -->
</svelte:head>

<div class="container mx-auto mt-2">
  <slot />
  <Footer />
</div>
<script>
  import '../app.css'
  import Footer from '../components/Footer.svelte'
  const { VITE_UMAMI_SITE_ID } = import.meta.env
</script>

<svelte:head>
  <script async defer data-website-id="{VITE_UMAMI_SITE_ID}" src="https://trk.codebits.it/umami.js"></script>
</svelte:head>

<div class="container mx-auto mt-2">
  <slot />
  <Footer />
</div>
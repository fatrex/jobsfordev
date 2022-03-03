<script>
  import { dev } from '$app/env';
  import { onMount } from 'svelte'
  import '../app.css'
  import Footer from '../components/Footer.svelte'

  onMount(() => {
    if (dev === false) {
      window._paq.push(['trackPageView']);
    }
  })
</script>

<div class="container mx-auto mt-2">
  <slot />
  <Footer />
</div>
<script>
  import '../app.css'

  const { VITE_PLAUSBILE_DOMAIN } = import.meta.env
</script>

<svelte:head>
  <script async defer data-domain={VITE_PLAUSBILE_DOMAIN} src="https://trk.codebits.it/js/plausible.js"></script>
</svelte:head>

<div class="container mx-auto mt-2">
  <slot />
</div>
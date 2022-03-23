<script>
  import '../app.css'
  import Footer from '../components/Footer.svelte'
  const { VITE_ACKEE_SERVER, VITE_ACKEE_ID } = import.meta.env
  
  import { onMount } from 'svelte'

  onMount(async () => {
    const ackeeTracker = await import('ackee-tracker')
    const trackerInstance = ackeeTracker.create(VITE_ACKEE_SERVER, {
      detailed: false,
      ignoreLocalhost: true,
      ignoreOwnVisits: false,
    })

    trackerInstance.record(VITE_ACKEE_ID, {
      siteLocation: window.location.href,
      siteReferrer: document.referrer
    })
  })
</script>


<div class="container mx-auto mt-2">
  <slot />
  <Footer />
</div>
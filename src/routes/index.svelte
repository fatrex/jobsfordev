<script context="module">
  /** @type { import('@sveltejs/kit').Load } */
  export async function load({ fetch }) {
    const res = await fetch('/api/jobs.json', {
      method: 'POST'
    })

    const { results } = await res.json()
    const data = results.map(item => item.properties)

    return {
      props: {
        jobs: data
      }
    }
  }
</script>

<script>
  import DeveloperImage from '../assets/images/developer.svg'
  import SingleJob from '../components/SingleJob.svelte'

  const { VITE_SUBMISSION_FORM_URL, VITE_FEEDBACK_FORM_URL } = import.meta.env;

  export let jobs;
</script>

<div class="flex flex-col lg:flex-row items-center">
  <div class="flex w-1/2 justify-center">
    <img class="h-64" src={DeveloperImage} alt="Developer">
  </div>
  <div class="flex flex-col lg:w-1/2 px-4 lg:p-0">
    <h1 class="text-3xl font-bold text-center lg:text-left">Jobs For Dev</h1>
    <p class="text-md font-semibold text-center lg:text-left">Offerte di lavoro per developer curate da developer</p>
    <p class="pt-3">Puoi inserire la tua offerta utilizzando <a class="underline" href="{VITE_SUBMISSION_FORM_URL}" target="_blank">questo form</a></p>
    <p class="">Per qualsiasi feedback puoi contattarci <a class="underline" href="{VITE_FEEDBACK_FORM_URL}" target="_blank">qui</a></p>
  </div>
</div>

<div class="flex flex-col mt-10">
  {#each jobs as job}
  <SingleJob job={job} />
  {/each}
</div>
<script context="module">
  import { originalJobs, technologies } from '@/stores/job'
  /** @type { import('@sveltejs/kit').Load } */
  export async function load({ fetch }) {
    const res = await fetch('/api/jobs.json', {
      method: 'POST'
    })

    const results = await res.json()

    const retrievedTechs = results.reduce((techsArray, item) => {
      const techs = item.mainSkills.map(skill => skill.name)
      return [...techsArray, ...techs]
    }, [])

    originalJobs.set(results)
    filteredJobs.set(results)
    technologies.set([...new Set(retrievedTechs)])

    return {
      props: {
        jobs: results
      }
    }
  }
</script>

<script>
  import TextLogoImage from '@/assets/images/text_logo.svg'
  import ImageLogo from '@/assets/images/img_logo.svg'
  // import DeveloperImage from '../assets/images/developer.svg'
  import SingleJob from '../components/SingleJob.svelte'
  import Filters from '../components/Filters.svelte'

  const { VITE_SUBMISSION_FORM_URL, VITE_FEEDBACK_FORM_URL } = import.meta.env;

  import { filteredJobs } from '@/stores/job'
</script>

<div class="flex flex-col lg:flex-row items-center">
  <div class="lg:flex w-1/3 justify-center hidden">
    <img class="h-64" src={ImageLogo} alt="Developer">
  </div>
  <div class="flex flex-col lg:w-1/3 px-4 lg:p-0">
    <div class="py-7 lg:pb-7 items-center m-auto lg:m-0">
      <img src={TextLogoImage} alt="jobs for dev" />
    </div>
    <p class="text-md font-semibold text-center lg:text-left">Offerte di lavoro per developer curate da developer</p>
    <p class="pt-3">Puoi segnalare un'offerta utilizzando <a class="underline" href="{VITE_SUBMISSION_FORM_URL}" target="_blank">questo form</a></p>
    <p class="">Per qualsiasi feedback puoi contattarci <a class="underline" href="{VITE_FEEDBACK_FORM_URL}" target="_blank">qui</a></p>
  </div>
</div>

<Filters />
<div class="flex flex-col mt-10">
  {#key $filteredJobs}
  {#each $filteredJobs as job}
  <SingleJob job={job} />
  {/each}
  {/key}
</div>
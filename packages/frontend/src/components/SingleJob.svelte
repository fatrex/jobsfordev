<script>
  import Link from './elements/Link.svelte'
  const { VITE_PANEL_URL } = import.meta.env
  export let job

  const companyLogo = job.company.logo?.url
  const companyName = job.company.name
  const role = job.role
  const seniority = job.seniority

  const officePresence = ''
  const salary = Math.round(job.salary)

  const mainSkills = job.mainSkills.map(item => item.name)
  const additionalSkills = job.secondarySkills.map(item => item.name)
  const link = job.originalUrl

  const createdAt = new Date(job.createdAt)
  const createdAtHuman = `${createdAt.getDate()}/${(createdAt.getMonth() + 1).toString().padStart(2, '0')}`
</script>

<div class="relative grid grid-flow-row lg:grid-flow-col lg:grid-cols-12 m-2 mb-5 p-2 rounded-md border-2 border-gray-300 shadow-sm hover:shadow-md hover:bg-gray-50">
  <div class="h-6 -top-6 left-0 rounded-t-lg absolute bg-indigo-500 text-white whitespace-no-wrap px-2">{createdAtHuman}</div>
  <div class="image col-span-1 items-center pb-2 lg:pb-0 lg:justify-center flex">
    <div class="h-14 w-14 rounded-full bg-center bg-cover flex" style="background-image:url({`${VITE_PANEL_URL + companyLogo}`})"></div>
    <em class="block lg:hidden pl-2">{companyName}</em>
  </div>
  <div class="content col-span-5">
    <em class="hidden lg:block">{companyName}</em>
    <h3 class="text-xl text-gray-900 font-semibold">
      {role} 
      {#if seniority}
      <span class="text-gray-400">|</span> 
      <span class="seniority">{seniority}</span>
      {/if}
    </h3>
    <div class="divide-x divide-double flex flex-row">
      <p class="text-base text-gray-700 font-light pr-2">
        RAL ~{salary}k €
      </p>
      <p class="text-base text-gray-700 font-light pl-2">
        {officePresence}
      </p>
    </div>
  </div>

  <div class="grid grid-flow-row gap-2 col-span-5 pt-3 lg:pt-0">
    <!-- Main Skills -->
    <div class="skills flex flex-row place-items-center">
      <i class='bx bx-check-double'></i>
      <div class="overflow-x-auto">
        {#each mainSkills as skill, i}
        <span class="px-2 ml-2 text-base rounded-full text-white  bg-indigo-500 border-transparent border-2 ">
          {skill}
        </span>
        {/each}
      </div>
    </div>
    <!-- Additional Skills -->
    <div class="skills flex flex-row items-center">
      {#if additionalSkills.length > 0}
      <i class='bx bx-check'></i>
      <div class="overflow-x-auto">
        {#each additionalSkills as skill, i}
        <span class="px-2 ml-2 text-xs rounded-full text-black  bg-indigo-200 border-indigo-300 border-2 ">
          {skill}
        </span>
        {/each}
      </div>
      {/if}
    </div>
  </div>

  <div class="actions col-span-5 lg:px-2 lg:col-span-2 items-center lg:flex pt-3 lg:pt-0">
    <Link href={link}>
      <p>Vedi</p>
      <i class='ml-2 bx bx-link-external'></i>
    </Link>
  </div>
</div>

<style>
  .seniority {
    text-transform: capitalize;
  }
</style>
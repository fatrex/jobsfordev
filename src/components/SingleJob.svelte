<script>
  export let job

  const companyLogo = job.company_logo.files[0].file.url
  const companyName = job.company_name.title[0].plain_text
  const role = job.role.rich_text[0].plain_text
  const seniority = job.seniority.select.name

  const officePresence = job.office_presence.select.name
  // const salaryMin = job.salary_min.number
  // const salaryMax = job.salary_max.number
  const salary = (job.salary.formula.number / 1000).toFixed(0)

  const mainSkills = job.main_skills.multi_select.map(item => item.name)
  const additionalSkills = job.additional_skills.multi_select.map(item => item.name)
  const link = job.link.url
</script>

<div class="grid grid-flow-row lg:grid-flow-col lg:grid-cols-12 m-2 p-2 rounded-md border-2">
  <div class="image col-span-1 items-center pb-2 lg:pb-0 lg:justify-center flex">
    <div class="h-14 w-14 rounded-full bg-center bg-cover flex" style="background-image:url({companyLogo})"></div>
    <em class="block lg:hidden pl-2">{companyName}</em>
  </div>
  <div class="content col-span-5">
    <em class="hidden lg:block">{companyName}</em>
    <h3 class="text-xl text-gray-900 font-semibold">
      {role} | {seniority}
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
      <i class="las la-check-double text-xl"></i>
      {#each mainSkills as skill, i}
      <div class="rounded-full text-sm bg-teal-300 text-black p-1 px-2 border-2 border-teal-400 font-light ml-2">{skill}</div>
      {/each}
    </div>
    <!-- Additional Skills -->
    <div class="skills flex flex-row items-center">
      <i class="las la-check text-xl"></i>
      {#each additionalSkills as skill, i}
      <div class="rounded-full text-xs bg-blue-200 text-black px-2 border-2 border-blue-400 font-light ml-2">{skill}</div>
      {/each}
    </div>
  </div>

  <div class="actions col-span-5 lg:px-2 lg:col-span-2 items-center lg:flex pt-3 lg:pt-0">
    <a href="{link}" target="_blank" class="flex rounded text-white bg-blue-600 p-3 justify-center">
      Candidati
      <svg xmlns="http://www.w3.org/2000/svg" class="pl-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  </div>
</div>
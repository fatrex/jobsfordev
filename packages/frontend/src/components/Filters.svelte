<script>
  import RangeSlider from "svelte-range-slider-pips"
  import Select from 'svelte-select'

  import { filteredJobs, originalJobs, technologies } from '@/stores/job'

  let filteredSalary = $originalJobs
  let filteredTech = $originalJobs
  let showFilters = false

  function handleSalaryChange (e) {
    const { values } = e.detail
    const minSalary = values[0]
    const maxSalary = values[1]

    if (minSalary === 20 && maxSalary === 100) {
      filteredSalary = $originalJobs
    } else {
      const items = $originalJobs.filter(item =>
        minSalary <= item.salary && item.salary <= maxSalary
      )
      filteredSalary = items
    }
    setItems()
  }

  function handleTechSelect (e) {
    if (!e.detail) {
      filteredTech = $originalJobs
    } else {
      const values = e.detail.map(val => val.value)
      const items = $originalJobs.filter(item =>
        item.mainSkills.filter(skill => {
          return values.includes(skill.name)
        }).length > 0
      )
      filteredTech = items
    }
    setItems()
  }

  function setItems () {
    const items = filteredSalary.filter(item => 
      filteredTech.filter(job => job.id === item.id).length > 0 
    )
    filteredJobs.set(items)
  }
</script>

<div class="flex flex-col rounded-lg mt-10">
  <div class="flex flex-col w-full lg:w-40 px-2">
    <button 
      class="flex flex-row w-full items-center justify-center bg-white border-indigo-500 border-2 p-2 rounded cursor-pointer" 
      class:bg-indigo-500={showFilters}
      class:text-indigo-500={!showFilters}
      class:text-white={showFilters}
      on:click={() => showFilters = !showFilters}>
      
      {#if showFilters === true}
        Nascondi filtri
      {:else}
        <i class='bx bx-filter'></i>
        Mostra filtri
      {/if}
    </button>
  </div>
  <div class="flex flex-col lg:flex-row items-center justify-between w-full p-8 bg-gray-100 mt-4 rounded m-2" class:hidden={showFilters === false}>
    <div class="w-full lg:w-1/3">
      <small>RAL desiderata</small>
      <RangeSlider
        float
        range
        pips
        pipstep
        step={10}
        min={20}
        max={100}
        values={[0, 100]}
        prefix="€"
        suffix="k"
        first='label' last='label' on:change={handleSalaryChange} />
    </div>
    <div class="w-full pt-10 lg:p-0 lg:w-1/3">
      <small>Tecnologie preferite</small>
      <Select items={$technologies} isMulti placeholder="Seleziona..." on:select={handleTechSelect} />
    </div>
  </div>
</div>
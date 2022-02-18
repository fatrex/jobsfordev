<script>
  import RangeSlider from "svelte-range-slider-pips"
  import Select from 'svelte-select'

  import { filteredJobs, originalJobs, technologies } from '@/stores/job'

  let filteredSalary = $originalJobs
  let filteredTech = $originalJobs

  function handleSalaryChange (e) {
    const { values } = e.detail
    const minSalary = values[0]
    const maxSalary = values[1]

    if (minSalary === 20 && maxSalary === 100) {
      filteredSalary = $originalJobs
    } else {
      const items = $originalJobs.filter(item =>
        minSalary <= (item.salary.formula.number / 1000) && (item.salary.formula.number / 1000) <= maxSalary
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
        item.main_skills.multi_select.filter(skill => {
          return values.includes(skill.name)
        }).length > 0
      )
      filteredTech = items
    }
    setItems()
  }

  function setItems () {
    console.log(filteredSalary, filteredTech)
    const items = filteredSalary.filter(item => 
      filteredTech.filter(job => job.id === item.id).length > 0 
    )
    filteredJobs.set(items)
  }
</script>

<div class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8 mt-10">
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
    <small>Tecnologie preferite (max. 4)</small>
    <Select items={$technologies} isMulti placeholder="Seleziona..." on:select={handleTechSelect} />
  </div>
</div>
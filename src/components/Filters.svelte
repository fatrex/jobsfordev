<script>
  import RangeSlider from "svelte-range-slider-pips";

  import { filteredJobs, originalJobs } from '@/stores/job'

  function handleSalaryChange (e) {
    const { values } = e.detail
    const minSalary = values[0]
    const maxSalary = values[1]

    const items = $originalJobs.filter(item =>
      minSalary <= (item.salary.formula.number / 1000) && (item.salary.formula.number / 1000) <= maxSalary
    )
    filteredJobs.set(items)
  }
</script>

<div class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8 mt-10">
  <div class="w-96">
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
</div>
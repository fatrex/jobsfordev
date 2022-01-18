<script>
  export let href

  function externalUrl () {
    const url = new URL(href)
    url.searchParams.append('ref', 'jobsfor.dev')
    return url.href
  }
</script>

<a href={externalUrl()} target="_blank" class="flex items-center justify-around py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
  <slot />
</a>
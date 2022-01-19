<div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div
          class="flex flex-col lg:flex-row lg:justify-between items-center bg-gray-100 rounded-lg p-4 sm:p-8"
        >
          <div class="mb-4 sm:mb-8 lg:mb-0">
            <h2
              class="text-indigo-500 text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left"
            >
              Ricevi un digest con le ultime inserizioni.
            </h2>
            <p class="text-gray-500 text-center lg:text-left">
              Una volta a settimana, il martedì.
            </p>
          </div>

          <div class="flex flex-col items-center lg:items-end">
            <form
              class="w-full max-w-md flex gap-2 mb-3"
              action="https://tinyletter.com/jobsfordev"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://tinyletter.com/jobsfordev', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
              <input
                placeholder="Email"
                name="email"
                id="tlemail"
                class="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />
              <input type="hidden" value="1" name="embed" />

              <button
                class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2"
                >Iscriviti</button
              >
            </form>

            <p class="text-gray-400 text-xs text-center lg:text-right">
              <a href="https://tinyletter.com?ref=jobfordev" target="_blank">powered by TinyLetter</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="text-gray-400 text-sm text-center py-8">
      © {new Date().getFullYear()} - {"{coded by Daniele Lenares}"}
    </div>
  </footer>
</div>

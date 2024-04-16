<template>


<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-xl">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vocabify</span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" @submit.prevent="toggleDropdown" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>







<div class="flex justify-center">
  <header class="py-4 md:py-6">
    <div class="flex items-center gap-4 md:px-6">
      <a class="flex items-center space-x-2 text-2xl font-semibold" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span>Search A Word</span>
      </a>
      <form class="flex flex-1 items-center gap-2" @submit.prevent="searchWord">
        <input
          class="flex h-10 w-96 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-md flex-1"
          type="search"
          placeholder="Search for a word"
          id="search"
          v-model="searchTerm"
        />
        <button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-primary/90 h-10 px-4 py-2 shrink-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  </header>
</div>
<hr>


<section>
<div>
<h1 class="text-3xl font-bold mx-16 mt-4">Word Of the Day</h1>
</div>
<div class="flex flex-col min-h-screen">
  <main class="flex-1 mx-16">
    <div class="container px-4 md:px-6 py-6">
      <div class="grid gap-4 md:gap-8">
        <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div class="grid gap-1">
            <h1  class="text-3xl font-bold tracking-tight">{{ word }}</h1>

            <h1 v-if="word==null" class="text-3xl font-bold tracking-tight">Serendipity</h1>

            <p class="text-gray-500 dark:text-gray-400">/ˌserənˈdipədē/</p>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto shrink-0">
            Add to Favorites
          </button>
        </div>
        <div class="grid gap-4">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
    <h3 class="font-semibold">Pronunciation <audio controls :src="audioSource"></audio></h3>
  </div>
            <div class="flex flex-col gap-2">
              <h3 class="font-semibold">Source</h3>
              <ul class="grid gap-2">
                <li>
                  <a class="underline" href="#" rel="ugc">
                    oxfordlanguages.com
                  </a>
                </li>
                <li>
                  <a class="underline" href="#" rel="ugc">
                    dictionary.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid gap-2">
            <h3 class="font-semibold">Meanings</h3>
            <div class="grid gap-4 md:gap-8">
              <div class="grid gap-2">
                <h4 class="font-semibold">Noun</h4>
                <ul class="pl-4 list-disc gap-2">
                  <li>The occurrence and development of events by chance in a happy or beneficial way.</li>
                </ul>
              </div>
              <div class="grid gap-2">
                <h4 class="font-semibold">Synonyms</h4>
                <p class="text-sm leading-none text-gray-500 dark:text-gray-400">
                  chance, happy accident, luck, fortune, fate, destiny, fortuity, providence, accident
                </p>
              </div>
              <div class="grid gap-2">
                <h4 class="font-semibold">Antonyms</h4>
                <p class="text-sm leading-none text-gray-500 dark:text-gray-400">
                  design, intention, calculation, plan, purpose
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
</section>

  


</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,      
      searchTerm: '',
      wordData: null,
      apiUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
      word:"",
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    async searchWord() {
  try {
    // Make the API request with the user's input term
    const response = await fetch(`${this.apiUrl}${this.searchTerm}`);
    const data = await response.json();
    // Update the wordData property with the fetched data
    this.wordData = data[0];
    this.word = this.wordData.word; // Corrected assignment
    console.log(this.word); // Use this.word instead of word
  } catch (error) {
    console.error('Error fetching word data:', error);
  }
}


  }
};
</script>
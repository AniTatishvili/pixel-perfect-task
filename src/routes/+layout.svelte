<script>
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<div class="max-w-[400px] w-full xl:max-h-[704px] max-h-[calc(100vh-32px)] h-full mx-auto xl:overflow-hidden overflow-y-scroll">
  <Header />

  <main class="overflow-y-auto pb-20">
    {@render children()}
  </main>

  <Footer />
</div>

<script>
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<Header />

<main class="overflow-y-auto pb-20">
  {@render children()}
</main>

<Footer />

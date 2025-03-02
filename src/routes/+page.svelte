<script>
  import Filter from "$lib/components/filter/filter.svelte";
  import SendMessage from "$lib/components/send-message/SendMessage.svelte";
</script>

<div class="p-5">
  <h2 class="text-[#fff] text-[2rem] font-sf-pro font-bold line-height-[38px] opacity-[.7]">Hello there</h2>
  <h2 class="text-[#fff] text-[2rem] font-sf-pro font-bold line-height-[38px]">How can we help?</h2>
</div>

<SendMessage />

<Filter />

<style lang="postcss">
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>

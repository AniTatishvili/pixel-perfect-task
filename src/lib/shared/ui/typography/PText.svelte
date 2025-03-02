<script lang="ts">
  interface PTextProps {
    className?: string;
  }

  let { className = "" } = $props() as PTextProps;
</script>

<!-- svelte-ignore slot_element_deprecated -->
<p class="text-sm line-height-[21px] {className}">
  <slot />
</p>

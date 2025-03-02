<script lang="ts">
  export let placeholder: string = "Search...";
  export let value: string = "";
  export let className: string = "";
</script>

<input
  type="text"
  {placeholder}
  bind:value
  class="w-full bg-(--color-gray) text-(--color-white) text-sm font-[600] placeholder:text-(--color-white) laceholder:font-[600] rounded-lg focus:outline-none px-[12px] py-[10px] {className}" />

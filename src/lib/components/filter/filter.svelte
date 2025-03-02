<script lang="ts">
  import CustomInput from "$lib/shared/ui/inputs/CustomInput.svelte";
  import PText from "$lib/shared/ui/typography/PText.svelte";
  import Icon from "$lib/shared/ui/icons/Icon.svelte";
  import search from "$lib/assets/images/icons/search.svg";
  import arrow from "$lib/assets/images/icons/arrow.svg";

  interface HelpItem {
    id: number;
    content: string;
  }

  const helpItems: HelpItem[] = [
    { id: 1, content: "In-game bonuses and free spins" },
    { id: 2, content: "Crypto deposit still not credited?" },
    { id: 3, content: "EigerX VIP program overview" },
    { id: 4, content: "Achievements and awards" },
  ];

  let searchTerm: string = "";

  $: filteredItems = helpItems.filter((item) => item.content.toLowerCase().includes(searchTerm.toLowerCase()));
</script>

<div class="w-full bg-(--color-black) flex flex-col gap-4 rounded-[10px] p-2">
  <div class="relative">
    <CustomInput placeholder="Search for help" bind:value={searchTerm} />
    <Icon src={search} alt="search" className="w-[16px] h-[16px] absolute top-[12px] right-[12px]" />
  </div>

  <ul class="space-y-2">
    {#if filteredItems.length === 0}
      <PText className="text-(--color-white) text-gray-500">No matching results found</PText>
    {:else}
      {#each filteredItems as item (item.id)}
        <li class="flex justify-between items-center px-[12px] py-[10px] cursor-pointer">
          <PText className="text-(--color-white) text-gray-600">{item.content}</PText>
          <Icon src={arrow} alt="arrow" className="w-[5.2px] h-[8.7px]" />
        </li>
      {/each}
    {/if}
  </ul>
</div>

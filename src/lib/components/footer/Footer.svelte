<script lang="ts">
  import { page } from "$app/stores";
  import HomeIcon from "$lib/assets/images/menu-icons/HomeIcon.svelte";
  import MessagesIcon from "$lib/assets/images/menu-icons/MessageIcon.svelte";
  import HelpIcon from "$lib/assets/images/menu-icons/HelpIcon.svelte";

  interface Link {
    name: string;
    href: string;
    icon: typeof HomeIcon | typeof MessagesIcon | typeof HelpIcon;
  }

  const links: Link[] = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Messages", href: "/messages", icon: MessagesIcon },
    { name: "Help", href: "/Help", icon: HelpIcon },
  ];
</script>

<nav class="w-full bg-[#0B0B0F] rounded-[8px] sticky bottom-4 mt-4">
  <ul class="flex justify-between align-center">
    {#each links as link}
      <li class="w-[calc(100%/3)] flex justify-center py-4">
        <a
          href={link.href}
          class="flex flex-col items-center gap-2 text-sm hover:text-(--color-green) transition-colors duration-200 {$page.url.pathname === link.href
            ? 'text-(--color-green)'
            : 'text-(--color-white)'}">
          <svelte:component this={link.icon} color={$page.url.pathname === link.href ? "var(--color-green)" : "var(--color-white)"} />
          {link.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

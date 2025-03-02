<script>
  import User1 from "$lib/assets/images/header-users/user1.png";
  import User2 from "$lib/assets/images/header-users/user2.png";
  import User3 from "$lib/assets/images/header-users/user3.png";
</script>

<ul class="flex justify-between align-center">
  <li class="w-[40px] h-[40px] rounded-full outline-2 border-[#0B0B0F] overflow-hidden relative z-3 -mr-[2px]">
    <a href="/">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={User1} class="w-full h-full object-cover" alt={User1} />
    </a>
  </li>
  <li class="w-[40px] h-[40px] rounded-full outline-2 border-[#0B0B0F] overflow-hidden relative z-2 -mr-[2px]">
    <a href="/">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={User2} class="w-full h-full object-cover" alt={User2} />
    </a>
  </li>
  <li class="w-[40px] h-[40px] rounded-full overflow-hidden relative z-1 -mr-[2px]">
    <a href="/">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={User3} class="w-full h-full object-cover" alt={User3} />
    </a>
  </li>
</ul>

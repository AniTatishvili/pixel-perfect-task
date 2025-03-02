<script>
  import PText from "$lib/shared/ui/typography/PText.svelte";
  import Icon from "$lib/shared/ui/icons/Icon.svelte";
  import send from "$lib/assets/images/icons/send.svg";
</script>

<div class="flex justify-between items-center bg-(--color-gray) rounded-[10px] border-[1px] border-(--color-green) px-4 py-5 mt-4 mb-3">
  <div>
    <PText className="text-(--color-white) font-semibold line-height-[21px]">Send us a message</PText>
    <PText className="text-[#83838D] line-height-[21px]">We typically reply within a day</PText>
  </div>
  <Icon src={send} alt="send" className="w-[17px] h-[16px]" />
</div>

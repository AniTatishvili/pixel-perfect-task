<script lang="ts">
  export let src: string;
  export let alt: string = "icon";
  export let className: string = "";
</script>

<img {src} {alt} class={className} />

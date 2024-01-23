<script lang="ts" setup>

</script>

<template>
  <div>
  <PartialsNavbarStackedLayout />
  <div class="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
    
    <div id="main-content" class="relative w-full max-w-screen-2xl mx-auto h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <main>
        <slot />
      </main>
      <PartialsFooterStackedLayout />
    </div>

  </div>
  </div>
</template>


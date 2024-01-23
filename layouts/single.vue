<script lang="ts" setup>

</script>

<template>
  <div>
    <header class="py-5 border-bottom">
    <div class="container pt-md-1 pb-md-4">
      <h1 class="mt-0 bd-title">Title</h1>
      <p class="bd-lead">Description</p>
      <div class="d-flex flex-column flex-sm-row">
        <a href="/" class="btn btn-lg btn-bd-primary">Download examples</a>
      </div>
    </div>
  </header>

  <main class="order-1 py-5 bd-content" id="content">
    <div class="container">
      <slot />
    </div>
  </main>
  </div>
</template>


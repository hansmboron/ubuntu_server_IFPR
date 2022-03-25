<template>
  <div>
    <NuxtChild />
    <div class="bg-gray-100 rounded-lg p-4">
      <section class="mb-4">
        <h1 class="text-3xl">
          Instalar Maquina Virtual
        </h1>
        <p>baixe pelo link: </p>
      </section>

      <section class="mb-4">
        <h1 class="text-3xl">
          Como Configurar Samba?
        </h1>
        <h2 class="text-2xl">
          Instalar Samba
        </h2>
        <pre>
          <code v-highlight class="rounded-md">sudo apt install samba</code>
        </pre>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'DefaultLayout'
}
</script>

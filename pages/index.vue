<template>
  <div>
    <NuxtChild />
    <div class="bg-gray-100 rounded-lg p-4">
      <section class="mb-4">
        <h1 class="text-3xl text-yellow-700 mb-4">
          Como configurar Servidor Ubuntu com Samba
        </h1>
        <div class="mb-4">
          <h2 class="text-2xl">
            1. Instalar Servidor Ubuntu
          </h2>
          <p class="text-gray-800">
            Clique aqui para baixar o servidor Ubuntu 20.04: link
          </p>
        </div>

        <h2 class="text-2xl">
          2. Configurar Samba no Ubuntu
        </h2>
        <p class="text-gray-800">
          É possível conectar no servidor Ubuntu utilizando SSH, caso esteja usando Windows pode usar algum programa como o Putty
        </p>
        <pre>
          <code v-highlight class="rounded-md"># subistitua o IP do comando pelo seu IP
# que você pode consultar usando o comando ifconfig
$ ssh ubuntu@10.33.0.241</code>
        </pre>

        <h2 class="text-2xl">
          3. Instalar Samba
        </h2>
        <pre>
          <code v-highlight class="rounded-md">$ sudo apt install samba</code>
        </pre>

        <h2 class="text-2xl">
          4. Criar Pastas
        </h2>
        <pre>
          <code v-highlight class="rounded-md"># criar pasta samba na home
$ mkdir samba

# entrar na pasta samba
$ cd samba/

# criar pastas
$ mkdir expedicao fabrica financeiro geral rh</code>
        </pre>

        <h2 class="text-2xl">
          5. Adicionar Usuários
        </h2>
        <pre>
          <code v-highlight class="rounded-md">$ sudo adduser expedicao</code>
          <code v-highlight class="rounded-md">$ sudo adduser fabrica</code>
          <code v-highlight class="rounded-md">$ sudo adduser financeiro</code>
          <code v-highlight class="rounded-md">$ sudo adduser geral</code>
          <code v-highlight class="rounded-md">$ sudo adduser rh</code>
        </pre>

        <h2 class="text-2xl">
          6. Criar backup do arquivo de configuração do Samba
        </h2>
        <pre>
          <code v-highlight class="rounded-md">$ sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bkp</code>
        </pre>

        <h2 class="text-2xl">
          7. Criar Usuários do Samba
        </h2>
        <pre>
          <code v-highlight class="rounded-md">$ sudo smbpasswd -a expedicao
...
$ sudo smbpasswd -a rh</code>
        </pre>

        <h2 class="text-2xl">
          8. Configurar o arquivo smb.conf
        </h2>
        <pre>
          <code v-highlight class="rounded-md"># vamos utilizar o editor nano
$ sudo nano /etc/samba/smb.conf</code>
          <code v-highlight class="rounded-md">[rh]
  comment = Arquivos do RH
  path = /home/ubuntu/samba/rh
  public = no
  browseable = yes
  writable = yes
  guest ok = no
  read only = no
  read list = rh
  create mask = 0775
  directory = 0775

[financeiro]
  path = /home/ubuntu/samba/financeiro
  public = no
  browseable = yes
  writable = yes
  guest ok = no
  read only = no
  read list = financeiro
  create mask = 0775
  directory = 0775

[expedicao]
  path = /home/ubuntu/samba/expedicao
  public = no
  browseable = yes
  writable = yes
  guest ok = no
  read only = no
  read list = expedicao
  create mask = 0775
  directory = 0775

[fabrica]
  path = /home/ubuntu/samba/fabrica
  public = no
  browseable = yes
  writable = yes
  guest ok = no
  read only = no
  read list = fabrica
  create mask = 0775
  directory = 0775

[geral]
  path = /home/ubuntu/samba/geral
  public = yes
  browseable = yes
  writable = yes
  guest ok = yes
  read only = no
  create mask = 0775
  directory = 0775</code>
        </pre>

        <h2 class="text-2xl">
          9. Reniciar o servidor
        </h2>
        <pre>
          <code v-highlight class="rounded-md">$ sudo systemctl restart smbd.service nmbd.service</code>
        </pre>
        <p class="mb-5">
          <code>Ctrl + O</code> depois <code>Enter</code> para gravar e <code>Ctrl + X</code> para sair!
        </p>

        <h2 class="text-2xl">
          10. Mapear arquivos pelo gerenciador de arquivos
        </h2>
        <img src="../static/server_files.png" class="img-fluid rounded" alt="...">
        <img src="../static/server_files2.png" class="img-fluid rounded" alt="...">
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

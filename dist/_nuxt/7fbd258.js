(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{426:function(e,n,t){e.exports=t.p+"img/server_files.d0099ad.png"},427:function(e,n,t){e.exports=t.p+"img/server_files2.b783c2c.png"},430:function(e,n,t){"use strict";t.r(n);var r={name:"IndexPage",layout:"DefaultLayout"},o=t(17),component=Object(o.a)(r,(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("NuxtChild"),e._v(" "),r("div",{staticClass:"bg-gray-100 rounded-lg p-4"},[r("section",{staticClass:"mb-4"},[r("h1",{staticClass:"text-3xl text-yellow-700 mb-4"},[e._v("\n          Como configurar Servidor Ubuntu com Samba\n        ")]),e._v(" "),e._m(0),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          2. Configurar Samba no Ubuntu\n        ")]),e._v(" "),r("p",{staticClass:"text-gray-800"},[e._v("\n          É possível conectar no servidor Ubuntu utilizando SSH, caso esteja usando Windows pode usar algum programa como o Putty\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("# subistitua o IP do comando pelo seu IP\n# que você pode consultar usando o comando ifconfig\n$ ssh ubuntu@10.33.0.241")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          3. Instalar Samba\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo apt install samba")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          4. Criar Pastas\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("# criar pasta samba na home\n$ mkdir samba\n\n# entrar na pasta samba\n$ cd samba/\n\n# criar pastas\n$ mkdir expedicao fabrica financeiro geral rh")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          5. Adicionar Usuários\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo adduser expedicao")]),e._v("\n          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo adduser fabrica")]),e._v("\n          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo adduser financeiro")]),e._v("\n          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo adduser geral")]),e._v("\n          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo adduser rh")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          6. Criar backup do arquivo de configuração do Samba\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bkp")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          7. Criar Usuários do Samba\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo smbpasswd -a expedicao\n...\n$ sudo smbpasswd -a rh")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          8. Configurar o arquivo smb.conf\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("# vamos utilizar o editor nano\n$ sudo nano /etc/samba/smb.conf")]),e._v("\n          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("[rh]\n  comment = Arquivos do RH\n  path = /home/ubuntu/samba/rh\n  public = no\n  browseable = yes\n  writable = yes\n  guest ok = no\n  read only = no\n  read list = rh\n  create mask = 0775\n  directory = 0775\n\n[financeiro]\n  path = /home/ubuntu/samba/financeiro\n  public = no\n  browseable = yes\n  writable = yes\n  guest ok = no\n  read only = no\n  read list = financeiro\n  create mask = 0775\n  directory = 0775\n\n[expedicao]\n  path = /home/ubuntu/samba/expedicao\n  public = no\n  browseable = yes\n  writable = yes\n  guest ok = no\n  read only = no\n  read list = expedicao\n  create mask = 0775\n  directory = 0775\n\n[fabrica]\n  path = /home/ubuntu/samba/fabrica\n  public = no\n  browseable = yes\n  writable = yes\n  guest ok = no\n  read only = no\n  read list = fabrica\n  create mask = 0775\n  directory = 0775\n\n[geral]\n  path = /home/ubuntu/samba/geral\n  public = yes\n  browseable = yes\n  writable = yes\n  guest ok = yes\n  read only = no\n  create mask = 0775\n  directory = 0775")]),e._v("\n        ")]),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          9. Reniciar o servidor\n        ")]),e._v(" "),r("pre",[e._v("          "),r("code",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"rounded-md"},[e._v("$ sudo systemctl restart smbd.service nmbd.service")]),e._v("\n        ")]),e._v(" "),e._m(1),e._v(" "),r("h2",{staticClass:"text-2xl"},[e._v("\n          10. Mapear arquivos pelo gerenciador de arquivos\n        ")]),e._v(" "),r("img",{staticClass:"img-fluid rounded",attrs:{src:t(426),alt:"..."}}),e._v(" "),r("img",{staticClass:"img-fluid rounded",attrs:{src:t(427),alt:"..."}})])])],1)}),[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"mb-4"},[t("h2",{staticClass:"text-2xl"},[e._v("\n            1. Instalar Servidor Ubuntu\n          ")]),e._v(" "),t("p",{staticClass:"text-gray-800"},[e._v("\n            Clique aqui para baixar o servidor Ubuntu 20.04: link\n          ")])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"mb-5"},[t("code",[e._v("Ctrl + O")]),e._v(" depois "),t("code",[e._v("Enter")]),e._v(" para gravar e "),t("code",[e._v("Ctrl + X")]),e._v(" para sair!\n        ")])}],!1,null,null,null);n.default=component.exports}}]);
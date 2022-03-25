# Configurar Servidor Ubuntu com Samba

## 1. Instalar Servidor Ubuntu
 Clique aqui para baixar o servidor Ubuntu 20.04: [link](https://ubuntu.com/download/server)

## 2. Configurar Samba no Ubuntu
É possível conectar no servidor Ubuntu utilizando SSH, caso esteja usando Windows pode usar algum programa como o Putty

```bash
# subistitua o IP do comando pelo seu IP
# que você pode consultar usando o comando ifconfig
$ ssh ubuntu@10.33.0.241
```

## 3. Instalar Samba
```bash
$ sudo apt install samba
```

## 4. Criar Pastas 
```bash
# criar pasta samba na home
$ mkdir samba

# entrar na pasta samba
$ cd samba/

# criar pastas
$ mkdir expedicao fabrica financeiro geral rh
```

## 5. Adicionar Usuários

```bash
$ sudo adduser expedicao
```
```bash
$ sudo adduser fabrica
```
```bash
$ sudo adduser financeiro
```
```bash
$ sudo adduser geral
```
```bash
$ sudo adduser rh
```

## 6. Criar backup do arquivo de configuração do Samba
```bash
$ sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bkp
```

## 7. Criar Usuários do Samba
```bash
$ sudo smbpasswd -a expedicao
...
$ sudo smbpasswd -a rh
```

## 8. Configurar o arquivo smb.conf
```bash
# vamos utilizar o editor nano
$ sudo nano /etc/samba/smb.conf
```

```
[rh]
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
  directory = 0775
```
`Ctrl + O ` depois ` Enter ` para gravar e ` Ctrl + X ` para sair!

## 9. Reniciar o servidor
```bash
$ sudo systemctl restart smbd.service nmbd.service
```

## 10. Mapear Arquivos pelo gerenciador de arquivos
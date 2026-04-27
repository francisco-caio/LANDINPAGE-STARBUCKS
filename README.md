# ☕ Starbucks Clone

Clone responsivo da landing page do Starbucks com consumo de API REST local, desenvolvido 100% no mobile (tablet + teclado físico) como projeto de estudo.

Clique aqui para ver o site funcionando https://francisco-caio.github.io/LANDINPAGE-STARBUCKS/



## 🚀 Tecnologias

- **HTML5** semântico e acessível
- **CSS3** com Flexbox, variáveis CSS e animações
- **JavaScript ES6+** (async/await, fetch API, DOM manipulation)
- **JSON Server** para simulação de API REST local
- **Mobile First** — desenvolvido e testado em dispositivos móveis

## ✨ Funcionalidades

- ✅ Menu mobile hamburguer com animação
- ✅ Cards dinâmicos consumindo API REST local (`fetch`)
- ✅ Skeleton loading enquanto carrega os dados
- ✅ Fallback offline — funciona mesmo sem a API rodando
- ✅ Design responsivo (mobile → tablet → desktop)
- ✅ Animações CSS suaves (fadeIn, hover effects)
- ✅ Header com sombra ao scroll

## 📱 Preview Mobile

Desenvolvido e testado em:
- Tablet Android + teclado físico
- Chrome Mobile
- Resoluções: 320px até 1920px

## 🛠️ Como rodar localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- JSON Server instalado globalmente

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/francisco-caio/LANDINPAGE-STARBUCKS.git

# 2. Entre na pasta
cd  LANDINPAGE-STARBUCKS

# 3. Instale o JSON Server (se não tiver)
npm install -g json-server

# 4. Inicie a API local
json-server --watch products.json --port 3000

# 5. Abra o index.html no navegador ou live server

# 🎬 ClipStream — Plataforma de Vídeos e Artigos (React + TypeScript + Redux)

Uma plataforma moderna e responsiva para **exibição, busca e interação com vídeos e artigos**, construída com foco em **performance, escalabilidade e experiência do usuário**.  
O projeto traz técnicas avançadas de React, arquitetura organizada, hooks customizados, dark mode, animações e integração completa com API própria.

🔗 **Demo Online:** https://frontend-clipstream.vercel.app/  
🔗 **Backend:** https://github.com/joaovitorsamora/backend-clipStream  
🔗 **Frontend:** https://github.com/joaovitorsamora/frontend-clipstream

---

![Demo do ClipStream](./public/ClipstreamGIF.gif)

## 🌟 Resumo do Projeto

O ClipStream simula uma plataforma real de streaming, com:

- Busca dinâmica com *debounce*  
- Sistema de comentários  
- Likes/Dislikes reativos  
- Carrossel de artigos com contagem de visualizações  
- Página de detalhes do vídeo  
- Skeletons, dark mode e animações  
- Performance otimizada com hooks customizados  
- Integração real com backend em Node + PostgreSQL  

O resultado é uma aplicação com cara de **produto profissional**, ideal para demonstrar domínio de front-end moderno.

---

## ⚙️ Tecnologias Utilizadas

| Categoria | Tecnologias |
|----------|-------------|
| Frontend | **React 18**, **TypeScript**, **React Router DOM**, **Redux + Thunk** |
| UI/UX | **TailwindCSS**, **OKLCH tokens**, Skeleton loaders, Swiper, Material UI Icons |
| API | Axios com interceptadores |
| Testes | **Jest**, **React Testing Library** |
| Deploy | **Vercel** |
| Outros | ESLint, Prettier, New Relic |

---

## 🚀 Funcionalidades Principais

### 🔍 Busca em Tempo Real  
Busca de vídeos com **debounce**, evitando requisições excessivas e mantendo a performance.

### 🎬 Exibição de Vídeos  
- Cards com thumbnails  
- Botão de play  
- Página de detalhes com player  
- Descrição com *ver mais/ver menos*  

### 👍👎 Interações  
Sistema de **likes/dislikes** reativo com persistência na API.

### 💬 Comentários em Vídeos  
- Envio assíncrono  
- Usernames gerados automaticamente  
- Renderização instantânea  

### 📰 Artigos Destacados  
Carrossel estilizado com contagem automática de visualizações.

### 🌘 Dark Mode Profissional  
Implementado com **tokens OKLCH** + Tailwind → transições suaves e acessíveis.

### 📱 Totalmente Responsivo  
Layout otimizado desde **320px até 4K**, com breakpoints detectados por hook customizado.

---

## 🧠 Destaques Técnicos (o que esse projeto prova)

✔ Arquitetura modular por domínio  
✔ Redux avançado com Thunks assíncronos  
✔ Hooks customizados (useFilteredVideos, useFetchData, useCheckScreen)  
✔ Consumo de API com variáveis de ambiente  
✔ Padrões profissionais de componentização  
✔ Testes reais com Jest e Testing Library  
✔ Dark mode com tokens OKLCH  
✔ UX otimizada (Skeletons, debounce, lazy loading)  
✔ Deploy contínuo e estável no Vercel  

---

## 🧩 Arquitetura da Aplicação

```

frontend-clipstream/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx
│   ├── index.tsx
│   ├── types.ts
│   ├── components/
│   │   ├── Header/
│   │   ├── Card/
│   │   ├── Carousel/
│   │   ├── Articles/
│   │   ├── Input/
│   │   ├── Skeleton/
│   │   ├── Typography/
│   │   └── ExpandableText/
│   ├── hooks/
│   │   ├── useFilteredVideos.ts
│   │   ├── useFetchData.ts
│   │   └── useCheckScreen.ts
│   ├── pages/
│   │   └── VideoDetail/
│   └── redux/
│       ├── video/
│       ├── video-detail/
│       └── root-reducer.ts
├── .env
├── package.json
└── README.md

````

---

## 📈 Melhorias Implementadas

| Área | Antes | Depois |
|------|--------|-----------|
| Estilização | CSS Modules | Tailwind + tokens OKLCH |
| Player | iframe direto | Thumbnail + Play button |
| UX | Descrição fixa | Texto expandível |
| Carregamento | Sem feedback | Skeleton loaders |
| API | URLs fixas | `.env` + useFetchData |
| Redux | Estrutura acoplada | Separação por domínio + testes |
| Comentários | Inline | Componente isolado |
| Performance | Sem otimização | Debounce + lazy loading |

---

## 🧪 Testes

O projeto possui testes cobrindo:

- Actions  
- Reducers  
- Lógica de estado  
- Componentes essenciais  

🧪 Ferramentas: **Jest** + **React Testing Library**

---

## 🔌 Backend

O ClipStream utiliza um backend próprio, com:

- Node.js  
- Express  
- Sequelize  
- PostgreSQL (Neon)  
- Deploy serverless na Vercel  

📌 **Repositório do Backend:**  
https://github.com/joaovitorsamora/backend-clipStream

---

## 🛠 Como Rodar Localmente

### 1. Clone o repositório
```bash
git clone https://github.com/joaovitorsamora/frontend-clipstream.git
cd frontend-clipstream
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

```
VITE_API_URL=https://backend-clipstream.vercel.app
```

### 4. Inicie o servidor

```bash
npm start
```

---

## 🤝 Contribuições

Sinta-se livre para abrir **issues**, **discussões** ou enviar **pull requests**.
Feedback de UI, performance e arquitetura são sempre bem-vindos!

---

## ⭐ Ajude o Projeto

Se este projeto te ajudou ou te inspirou, considere deixar uma ⭐ no repositório!
Isso ajuda muito o projeto a ganhar visibilidade.

---

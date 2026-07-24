# 🎬 ClipStream — Plataforma de Vídeos e Artigos

Plataforma full-stack de streaming de vídeos e artigos, com busca em tempo real, sistema de curtidas/comentários e feed de artigos com contagem de visualizações. Frontend em React + TypeScript, consumindo uma API própria em Node.js.

🔗 **Demo:** https://frontend-clipstream.vercel.app/
🔗 **Backend:** https://github.com/joaovitorsamora/backend-clipStream
🔗 **Frontend:** https://github.com/joaovitorsamora/frontend-clipstream

![ClipStream Demo](./public/ClipstreamGIF.gif)

---

## 🧱 Stack

| Camada | Tecnologias |
|---|---|
| **Frontend** | React 18, TypeScript, React Router DOM v6, Redux + Redux Thunk |
| **Build** | Vite 6 |
| **UI/UX** | Tailwind CSS, shadcn/ui (estilo *new-york*, tokens OKLCH), Swiper, lucide-react, Framer Motion |
| **API** | Axios, camada de serviço isolada (`services/`), configuração via variáveis de ambiente |
| **Testes** | Vitest, React Testing Library |
| **Observabilidade** | New Relic Browser Agent |
| **Deploy** | Vercel |
| **CI/CD** | GitHub Actions (install → build → test em todo push/PR) |

---

## ✨ Funcionalidades

- **Busca em tempo real** dos vídeos, com filtragem memoizada via `useMemo` (evita recomputação desnecessária a cada render)
- **Extração automática de thumbnails do YouTube** a partir da URL do vídeo — sem upload manual de imagem por item
- **Página de detalhe do vídeo** com player embutido, descrição expansível, curtidas/descurtidas e comentários assíncronos
- **Proteção de rota**: a página de detalhe de vídeo só é acessível navegando por um card na home; acesso direto via URL é bloqueado e redireciona para a home
- **Code-splitting por rota** com `React.lazy` + `Suspense`
- **Carrossel de artigos** com contagem de visualizações que reflete corretamente o valor retornado pela API a cada incremento
- **Skeletons de carregamento** dedicados para vídeos e artigos, responsivos por breakpoint
- **Design system próprio** com tokens de cor em OKLCH e componentes shadcn/ui

---

## 🔧 Destaques técnicos

- Camada de serviço (`services/api.ts`, `videoServices.ts`, `articleServices.ts`) isolando todas as chamadas HTTP — nenhum componente faz `axios` direto
- Hooks especializados por domínio (`useVideos`, `useArticles`, `useFilteredVideos`, `useCheckScreen`) no lugar de um hook genérico acoplando dados diferentes
- Redux com actions/reducers separados por domínio (`video`, `videoDetail`, `article`), com testes de unidade cobrindo actions e reducers
- Teste de componente (React Testing Library) cobrindo render e interação do componente `Articles`
- Pipeline de CI rodando `install`, `build` e `test` automaticamente em push/PR

---

## 📊 Evolução do projeto

Comparado à primeira versão funcional do ClipStream:

| Área | Antes | Depois |
|---|---|---|
| Build tool | CRA (`react-scripts`) | Vite 6 |
| Test runner | Jest | Vitest + React Testing Library |
| Ícones/UI | MUI Icons + animação em canvas (p5.js, WEBGL) no header | lucide-react + Tailwind, sem dependência de renderização 3D |
| Chamadas de API | `axios` direto em componentes, URLs de backend hardcoded no código | Camada de serviço dedicada + configuração via `.env` |
| Busca | Filtro recalculado a cada render | Filtragem memoizada com `useMemo` |
| Thumbnails | Arquivo estático (`/thumbnails/{id}.jpeg`), exigia upload manual por vídeo | Extração automática a partir da URL do YouTube |
| Roteamento | Rota de detalhe acessível diretamente por URL, sem code-splitting | Lazy loading por rota + guard bloqueando acesso direto |
| Contagem de views | Bug de tipagem no estado — contador não refletia o valor real vindo da API | Corrigido: estado tipado corretamente, reflete o valor da API |
| CI/CD | Inexistente | GitHub Actions (install/build/test automatizados) |
| Código morto | Componente duplicado comentado no código-fonte | Removido |

---

## 🚀 Rodando localmente

### 1. Clone o repositório
```bash
git clone https://github.com/joaovitorsamora/frontend-clipstream.git
cd frontend-clipstream
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo `.env`
```
VITE_APP_BASE_URL=https://backend-clipstream.vercel.app
```
> ⚠️ A variável usada pelo código (`services/api.ts`) é `VITE_APP_BASE_URL`. Usar `VITE_API_URL` (nome antigo, incorreto) deixa a `baseURL` do Axios como `undefined` e quebra todas as chamadas de API.

### 4. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

### 5. Rode os testes
```bash
npm run test
```

---

## 🧪 Testes e CI

O projeto conta com testes de:
- **Redux**: actions e reducers de vídeo
- **Componentes**: render e interação do componente de Artigos

A cada `push` ou `pull request`, o workflow do GitHub Actions instala as dependências, builda o projeto e roda a suíte de testes automaticamente.

---

## 📌 Próximos passos

- [ ] Adicionar debounce real na busca (hoje é apenas filtragem memoizada, sem delay de digitação)
- [ ] Ampliar cobertura de testes para os demais componentes (VideoDetail, Carousel)
- [ ] Persistir estado de curtida/comentário entre sessões

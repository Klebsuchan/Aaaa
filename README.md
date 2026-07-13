# 🏦 Landing Page - Agência de Crédito

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

Uma landing page moderna, responsiva e de alta conversão desenvolvida para agências de crédito. O projeto foca em atrair clientes para serviços de crédito pessoal, consignado e financiamento, direcionando o atendimento diretamente para o WhatsApp de forma ágil e segura.

---

## ✨ Funcionalidades em Destaque

- 🌓 **Dark/Light Mode:** Suporte completo e nativo a temas claro e escuro, adaptando-se automaticamente à preferência do sistema do usuário e garantindo acessibilidade e conforto visual.
- 🎥 **Hero Section Dinâmica:** Fundo em vídeo integrado perfeitamente atrás do conteúdo principal (com overlays de gradiente legíveis), desenhado para reter a atenção do cliente logo nos primeiros segundos.
- 📱 **Integração Otimizada com WhatsApp:** Botões de *Call to Action* (CTA) projetados com gatilhos mentais e flutuantes, que enviam mensagens pré-formatadas para iniciar a simulação instantaneamente.
- 🤝 **Vitrine de Bancos Parceiros:** Componente de carrossel/grid elegante exibindo mais de 30 logomarcas dos maiores bancos do Brasil (Itaú, Bradesco, Banco do Brasil, C6 Bank, Nubank, etc.), aumentando a autoridade e confiança da página.
- ⚡ **Alta Performance:** SPA (Single Page Application) super leve, com recarregamento instantâneo via Vite e otimização de imagens, melhorando a pontuação de SEO e Core Web Vitals.
- 🎨 **Design Responsivo Premium:** Layout desenvolvido utilizando *Mobile-First*, com foco em usabilidade por toque no celular e tipografia legível (efeitos de contorno/sombra para leitura sob o vídeo de fundo).

---

## 🛠️ Tecnologias Utilizadas

- **[React 18](https://react.dev/)** - Biblioteca base para a construção das interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem forte para garantir segurança do código.
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Framework de estilos baseados em utilitários (*utility-first*).
- **[Vite](https://vitejs.dev/)** - Servidor de desenvolvimento ultrarrápido e empacotador de produção.
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca robusta de animações e micro-interações.
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones moderna e leve.

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/en) (versão 18 ou superior)
- `npm`, `yarn`, `pnpm` ou `bun` instalados no seu ambiente.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd seu-repositorio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   # ou yarn install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou yarn dev
   ```

5. Acesse `http://localhost:3000` (ou a porta gerada no terminal) no seu navegador. O servidor de desenvolvimento irá atualizar automaticamente a página quando você salvar os arquivos.

---

## 📂 Estrutura de Diretórios Principal

```text
├── public/                # Assets estáticos (vídeo de background e logos dos bancos)
├── src/
│   ├── components/        # Componentes isolados
│   │   ├── Hero.tsx       # Seção principal de captura c/ vídeo
│   │   ├── Partners.tsx   # Vitrine de bancos integrados
│   │   ├── Navbar.tsx     # Menu de navegação
│   │   └── CTA.tsx        # Chamadas para o WhatsApp
│   ├── index.css          # Estilos globais e diretivas do Tailwind
│   ├── main.tsx           # Entry point do React
│   └── App.tsx            # Árvore de renderização principal
├── package.json           # Definição de dependências
├── tailwind.config.js     # Configurações de cores e plugins do Tailwind
└── vite.config.ts         # Configuração de build e plugins Vite
```

---

## 🤝 Como Contribuir

Fique à vontade para contribuir com a melhoria deste código! 
1. Faça um **Fork** do projeto
2. Crie uma **Branch** para sua funcionalidade (`git checkout -b feature/NovaFeature`)
3. Faça o **Commit** de suas alterações (`git commit -m 'feat: Adicionando NovaFeature'`)
4. Faça o **Push** para a branch (`git push origin feature/NovaFeature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

<br>
<p align="center">
  Desenvolvido com 💻 e ☕
</p>

CoreZite
CoreZite é uma plataforma educacional desenvolvida como Trabalho de Conclusão de Curso (TCC) de uma pós-graduação em Desenvolvimento Full Stack. O sistema tem como objetivo ensinar programação básica para iniciantes, utilizando uma abordagem gamificada e visualmente envolvente, com temática inspirada no espaço sideral.

Objetivo
Oferecer um ambiente interativo e motivador para iniciantes aprenderem lógica de programação e conceitos básicos de C#. O projeto busca simplificar o aprendizado, tornando-o acessível, lúdico e eficiente por meio de recursos visuais, quizzes, exercícios práticos e um sistema de níveis.

Funcionalidades
Cadastro e login de usuários
Módulos organizados por planetas temáticos
Aulas teóricas com linguagem simples e acessível
Questionários de múltipla escolha
Interface gamificada com visual espacial
Tecnologias Utilizadas
Frontend
React.js
PrimeReact
Axios
Vercel (deploy)
Backend
ASP.NET Core Web API (C#)
Entity Framework Core
SQL Server
Railway ou Azure (deploy gratuito para testes)
Estrutura do Projeto
/corezite-frontend
  ├── public/
  ├── src/
  │   ├── components/
  │   ├── pages/
  │   ├── services/
  │   └── styles/

/corezite-backend
  ├── Controllers/
  ├── Models/
  ├── Data/
  ├── Services/
  └── Program.cs
Como Executar Localmente
Pré-requisitos
Node.js e npm
.NET 6 SDK
SQL Server (local ou em nuvem)
Passos
Clone o repositório:
git clone https://github.com/seu-usuario/corezite.git
Instale as dependências do frontend:
cd corezite-frontend
npm install
Rode o frontend:
npm run dev
No backend:
cd ../corezite-backend
dotnet restore
dotnet ef database update
dotnet run
Acesse a aplicação em: http://localhost:3000
Documentação Técnica
A documentação completa do projeto pode ser encontrada no próprio repositório e no TCC que acompanha esta aplicação. Ela inclui:

Justificativa da proposta
Arquitetura de software
Diagrama de banco de dados
Estratégias de testes e validação
Considerações finais
Autor
Lucas Brendow
Desenvolvedor Full Stack • Apaixonado por ensino e tecnologia
l.brendow@outlook.com

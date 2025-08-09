# 🩺 Formulário de Saúde com IMC - Projeto Full Stack

Este é um projeto de formulário de saúde que coleta informações básicas do usuário, calcula o IMC (Índice de Massa Corporal) e salva os dados em um banco de dados MongoDB usando Node.js e Express no back-end.

## ✅ Funcionalidades já implementadas

### 🎨 Front-End (HTML, CSS, JavaScript)
- Formulário com campos:
  - Nome
  - E-mail
  - Data de nascimento
  - Telefone
  - Peso
  - Altura
  - Observações
- Cálculo automático de IMC com base no peso e altura inseridos
- Estilo responsivo
- Cores harmônicas (#d192ca, #dee884) com fontes caligráficas (Google Fonts)
- Feedback visual com emojis e interações

### 🛠️ Back-End (Node.js, Express, MongoDB)
- Estrutura separada por pastas (`models`, `controllers`, `routes`)
- API REST configurada
- Mongoose conectado ao MongoDB Atlas
- Dados do formulário sendo salvos no banco
- Variáveis de ambiente com `.env`
- Middleware CORS e express.json() configurados

---

## 🚧 Funcionalidades a implementar

- [ ] Criar rotas POST para salvar os dados
- [ ] Controller para processar e salvar as informações
- [ ] Mensagem de sucesso personalizada no front após envio
- [ ] Página de agradecimento ou modal
- [ ] Exportação de dados

---

## 🧠 Tecnologias utilizadas

| Camada       | Tecnologia            |
|--------------|------------------------|
| Front-End    | HTML5, CSS3, JavaScript Vanilla |
| Back-End     | Node.js, Express, Mongoose |
| Banco de Dados | MongoDB Atlas         |
| Outros       | .env, CORS, Git         |

---
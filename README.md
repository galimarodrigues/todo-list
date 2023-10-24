# Aplicativo TODO List em Angular

Este é um aplicativo de lista de tarefas (TODO) desenvolvido em Angular 8 que se integra a um backend Django com Django Rest Framework. O aplicativo oferece uma interface amigável e intuitiva para realizar a gestão de tarefas. O backend usa um banco de dados SQLite para armazenar todas as entradas do aplicativo.

## Requerimentos

-   **Frontend**: O frontend do aplicativo TODO list foi desenvolvido em Angular 8, seguindo o conceito de Single Page Application (SPA).
-   **Backend**: O backend  foi desenvolvido em Python, Django, e utiliza o Django Rest Framework para criar uma API RESTful.
-   **Banco de Dados**: O aplicativo utiliza o SQLite, que é o banco de dados padrão no Django.

## Funcionalidades

O aplicativo TODO List oferece as seguintes funcionalidades:

### 1. Exibir a lista de TODOs

-   Quando você pressiona o botão exibir TODO list, todas as tarefas existentes no banco de dados são exibidas na lista de tarefas. Isso garante que você sempre tenha uma visão clara das suas tarefas pendentes.

### 2. Adicionar novos TODOs

-   Você pode adicionar novas tarefas usando a interface de adição. Insira o título da tarefa e depois, clique em "Adicionar" para criar uma nova tarefa.

### 3. Remover TODOs

-   Para excluir uma tarefa, basta clicar no ícone de lixeira ao lado dela. Isso removerá a tarefa da lista de TODOs e a excluirá permanentemente do banco de dados.

### 4. Editar TODOs

-   Se você precisar fazer alterações em uma tarefa existente, clique no ícone de edição. Isso permite que você atualize uma tarefa gerada anteriormente.

### 5. Marcar TODO como completo

-   Quando uma tarefa for concluída, você pode marcá-la como completa, destacando essas tarefas das demais que ainda estão pendentes.

### 6. Comunicação via JSON

-   O aplicativo se comunica com o backend por meio de trocas de dados no formato JSON.
# Página de Perfil — Estilo Privacy

Site estático em **HTML + CSS + JS puro**. Sem build, sem dependências.

## 📁 Estrutura

```
public/privacy/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Estilos (cores, layout, responsivo)
├── js/
│   └── script.js       ← Tabs, modal, geração do grid
├── images/             ← Suas fotos vão aqui
│   ├── cover.jpg       ← Imagem de capa (1500x500 recomendado)
│   ├── avatar.jpg      ← Foto de perfil (quadrada, 400x400)
│   ├── foto1.jpg ... foto9.jpg
│   └── video1.jpg ... video4.jpg  (thumbnails dos vídeos)
└── README.md
```

## ✏️ Como personalizar

### 1. Trocar suas fotos
Substitua os arquivos dentro de `images/` mantendo os mesmos nomes.

### 2. Mudar nome, bio, preços
Edite `index.html` — procure por:
- `Seu Nome` / `@seuusuario` / texto da bio
- Bloco `<section class="plans">` para preços

### 3. Adicionar/remover posts
Edite o array `POSTS` (ou `VIDEOS`) no topo de `js/script.js`:
```js
{ img: 'images/foto10.jpg', locked: true }  // locked=true → borrado
```

### 4. Trocar a cor principal
Em `css/style.css`, altere `--primary` (cor rosa atual: `#ff2d6f`).

## 🚀 Como abrir

Abra `index.html` direto no navegador, ou pelo preview:
`/privacy/index.html`

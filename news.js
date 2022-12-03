const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consequuntur doloremque totam labore architecto. Corporis adipisci optio placeat quibusdam totam iure veritatis quam, ullam tenetur error? Laborum, modi itaque. Sunt.";
const responseFromBackend = [
  {
    type: "sports",
    picture: {
      src: "./imagens/futebol.jpg",
      alt: "Bola de futebol no gramado",
    },
    time: "13/07/2022 às 12:35",
    headline: "Grande clássico na noite de hoje",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "sports",
    picture: {
      src: "./imagens/futebol-americano.jpg",
      alt: "Jogador de futebol americano correndo com a bola na mão",
    },
    time: "13/07/2022 às 12:35",
    headline: "Noite do Superbowl",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "sports",
    picture: {
      src: "./imagens/basquete.jpg",
      alt: "Vista aérea de uma quadra de basquete",
    },
    time: "13/07/2022 às 12:35",
    headline: "Notícia sobre a NBA",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "economy",
    picture: { src: "./imagens/dolares.jpg", alt: "Muitos dólares" },
    time: "13/07/2022 às 12:35",
    headline: "Dólar em alta de 0.50%",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "economy",
    picture: { src: "./imagens/euro.jpg", alt: "Várias notas de euro" },
    time: "13/07/2022 às 12:35",
    headline: "Euro em queda de 0.40%",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "economy",
    picture: {
      src: "./imagens/petroleo.jpg",
      alt: "Extração de petróleo",
    },
    time: "13/07/2022 às 12:35",
    headline: "Alta no preço do barril do petróleo",
    text,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "entertainment",
    picture: { src: "./imagens/Harry.jpg", alt: "Poster Harry Potter" },
    time: "15/11/2022 às 11:43",
    headline: "Harry Potter de volta aos cinemas",
    text: "Em comemoração dos 20 anos de lançamento, os filmes serão reexibidos nos cinemas.",
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "entertainment",
    picture: { src: "./imagens/Matrix.jpg", alt: "Poster Matrix" },
    time: "02/12/2022 às 13:22",
    headline: "Filme de Matrix de 1999 é melhor?",
    text: "Usuarios da internet apontam que filme de 1999 é melhor que o recem lançado Matrix Resurrections.",
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "entertainment",
    picture: {
      src: "./imagens/Senhor.jpg.jpeg",
      alt: "Poster Senhor dos Aneis",
    },
    time: "17/08/2022 às 02:06",
    headline: "Nova serie sobre Senhor dos Aneis é lançada",
    text: "Nova serie baseada em livros e filmes de senhor dos aneis é lançada pela HBO.",
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "technology",
    time: "10/11/2022 às 19:15",
    picture: {
      src: "./imagens/Xiaomi.jfif",
      alt: "Xiaomi Mi 11 ultra e Mi 12 ultra",
    },
    headline: "Qual celular da Xiaomi é melhor? Mi 11 Ultra VS Mi 12 Ultra",
    text: `Xiaomi recentemente lança novo flagship. Mas sera que ele é melhor que o seu antecessor?`,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "technology",
    time: "16/10/2022 às 16:25",
    picture: {
      src: "./imagens/AMD.jpg",
      alt: "Anuncio AMD",
    },
    headline: "AMD anuncia nova GPU RX 7900XT",
    text: `Neste més a AMD anunciou a chegada das novas placas de video da
              serie 7000, com tecnologia RDNA3. Em coletiva foi demonstrado
              modelo de referencia e finalmente divulgado dados a respeito de
              perfomance.`,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
  {
    type: "technology",
    time: "13/09/2022 às 16:45",
    picture: {
      src: "./imagens/nvidia.jpg",
      alt: "Plug de alimentação Nvidia",
    },
    headline: "Plugs de alimentação da Nvidia causam problemas a usuarios",
    text: `Recentemente varios usuarios de placas de video da Nvidia da nova
              geração estão alegando problemas com pino de alimentação. Problema
              causa pinos a aquecerem e pegarem fogo e é mais recorrente em RTX
              4090.`,
    cta: { title: "Leia a notícia completa", href: "#" },
  },
];

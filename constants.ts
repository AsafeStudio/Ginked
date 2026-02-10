
import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'NEON GHOST PROTOCOL',
    price: 189.90,
    category: Category.Cyberpunk,
    description: 'Um tributo às metrópoles espalhadas do futuro. Algodão de alta gramatura com caimento oversized.',
    image: 'https://picsum.photos/seed/ginked1/800/1000',
    details: ['100% Algodão Heavyweight', 'Estampas que brilham no escuro', 'Gráficos inspirados em Cyber', 'Bainha finalizada à mão']
  },
  {
    id: '2',
    name: 'SIGNAL REBEL V2',
    price: 159.90,
    category: Category.Essential,
    description: 'O sinal é a lei. Quebre as barreiras. Apresenta texturas gráficas inspiradas em frequências urbanas.',
    image: 'https://picsum.photos/seed/ginked2/800/1000',
    details: ['Mistura de Algodão Orgânico', 'Textura de grade tática', 'Costura reforçada', 'Número de série de edição limitada']
  },
  {
    id: '3',
    name: 'VOID WALKER ANIME',
    price: 179.90,
    category: Category.Anime,
    description: 'Vibe dark shonen para o ronin moderno. Estética desenhada à mão encontra o streetwear técnico.',
    image: 'https://picsum.photos/seed/ginked3/800/1000',
    details: ['Tecido premium soft-touch', 'Estampa full back em silk', 'Etiquetas personalizadas GINKED', 'Modelagem Boxy']
  },
  {
    id: '4',
    name: 'NIGHTMARE SECTOR',
    price: 149.90,
    category: Category.Essential,
    description: 'Quando as luzes apagam, o underground se levanta. Execução em estilo distorcido de alta fidelidade.',
    image: 'https://picsum.photos/seed/ginked4/800/1000',
    details: ['Acabamento estonado', 'Estampa reativa ao calor', 'Ombros caídos', 'Estética cyber-grunge']
  },
  {
    id: '5',
    name: 'CYBERPUNK NOMAD',
    price: 199.90,
    category: Category.Cyberpunk,
    description: 'Para aqueles que vagam pelo deserto de concreto. Design focado em utilidade com visuais de alto impacto.',
    image: 'https://picsum.photos/seed/ginked5/800/1000',
    details: ['Detalhes em estampa Puff 3D', 'Malha respirável', 'Comprimento estendido', 'Painéis refletivos']
  },
  {
    id: '6',
    name: 'UNDERGROUND ECHO',
    price: 129.90,
    category: Category.Underground,
    description: 'Energia pura das ruas. Crua, sem remorso e barulhenta. A identidade central da GINKED.',
    image: 'https://picsum.photos/seed/ginked6/800/1000',
    details: ['Acabamento acid wash', 'Frente minimalista, costas pesadas', 'Trama durável', 'Design com fenda lateral']
  }
];

export const CATEGORIES = Object.values(Category);
export const SIZES = ['P', 'M', 'G', 'GG', 'XG'];

import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from '@ngrx/signals';
import {addEntity, removeEntity, setEntity, withEntities} from '@ngrx/signals/entities';
import {computed} from '@angular/core';
import {Book} from '../features/book/entities/book';

const books: Book[] = [
  new Book(1, 'Unleashed: \'THE POLITICAL MEMOIR OF THE CENTURY\' DAILY MAIL', 'Boris Johnson', '2024', 'Boris Johnson has always been larger than life. Controversial, untrammelled by the normal rules of politics, his route to becoming Britain’s prime minister included a landmark career as a journalist, two terms as London’s mayor, leading the Vote Leave Brexit campaign and acting as foreign secretary. He won the largest Tory majority since 1987 when he went to the polls in December 2019 for a mandate to ‘Get Brexit Done’ – only to have his administration hit by the global Covid pandemic and toppled in a Tory putsch.\n' +
    '\n' +
    'Unleashed is his account of his time in politics, and a book that shatters the mould of the modern prime ministerial memoir. Written in his inimitable style, it is honest, unrestrained and deeply revealing about the politician who has dominated our times.', 'https://m.media-amazon.com/images/I/81suTb0slVL._SL1500_.jpg'),
  new Book(2, 'Intermezzo: The new novel from the multimillion-copy bestselling author of Normal People', 'Sally Rooney', '2024', 'Aside from the fact that they are brothers, Peter and Ivan Koubek seem to have little in common.\n' +
    '\n' +
    'Peter is a Dublin lawyer in his thirties - successful, competent and apparently unassailable. But in the wake of their father\'s death, he\'s medicating himself to sleep and struggling to manage his relationships with two very different women - his enduring first love Sylvia, and Naomi, a college student for whom life is one long joke.\n' +
    '\n' +
    'Ivan is a twenty-two-year-old competitive chess player. He has always seen himself as socially awkward, a loner, the antithesis of his glib elder brother. Now, in the early weeks of his bereavement, Ivan meets Margaret, an older woman emerging from her own turbulent past, and their lives become rapidly and intensely intertwined.', 'https://m.media-amazon.com/images/I/71HMRBlIEDL._SL1500_.jpg'),
  new Book(3, 'We Solve Murders: The Sunday Times #1 bestselling murder mystery from the author of The Thursday Murder Club', 'Richard Osman', '2024', 'Steve Wheeler is enjoying retired life. He does the odd bit of investigation work, but he prefers his familiar habits and routines: the pub quiz, his favourite bench, his cat waiting for him when he comes home. His days of adventure are over: adrenaline is daughter-in-law Amy’s business now.\n' +
    '\n' +
    'Amy Wheeler thinks adrenaline is good for the soul. As a private security officer, she doesn’t stay still long enough for habits or routines. She’s currently on a remote island keeping world-famous author Rosie D’Antonio alive. Which was meant to be an easy job . . .\n' +
    '\n' +
    'Then a dead body, a bag of money and a killer with their sights on Amy have her sending an SOS to the only person she trusts. A breakneck race around the world begins, but can Amy and Steve stay one step ahead of a deadly enemy?', 'https://m.media-amazon.com/images/I/71GSNEGSHJL._SL1500_.jpg'),
  new Book(4, 'The Food For Life Cookbook: 100+ recipes created with ZOE from the #1 Sunday Times bestselling author and ITV Lorraine gut-health expert', 'Tim Spector', '2024', '\'A book full of fantastic recipes and ideas.\' Yotam Ottolenghi\n' +
    '‘Packed with food you will love – and that your microbes will, too’ Dr Clare Bailey Mosley\n' +
    '\'Flavours and recipes you’ll want to eat every day\' Melissa Hemsley\n' +
    '‘Delicious and astonishingly, life-changingly, simple’ Davina McCall\n' +
    '\'Tim’s principles for eating well are totally transformative\' Hugh Fearnley-Whittingstall\n' +
    '\n' +
    'In: 30 plants a week. Out: Calorie counting.\n' +
    'In: Fermenting. Out: Ultra-processed foods.\n' +
    'But, how?\n', 'https://m.media-amazon.com/images/I/71y71Q+YuQL._SL1500_.jpg'),
  new Book(5, 'Simply Jamie: Fast & Simple Food', 'Jamie Oliver', '2024', 'MAKE YOUR LIFE SIMPLER AND MORE DELICIOUS\n' +
    '\n' +
    '\n' +
    'SIMPLY JAMIE IS THE NEW MUST-HAVE COOKBOOK THAT MAKES IT EASY TO FIT GOOD FOOD INTO BUSY LIVES\n' +
    '\n' +
    '----\n' +
    '\n' +
    'In five knockout chapters, covering Midweek Meals, Weekend Wins, Trusty Traybakes, Cupboard Love and Perfect Puds, Simply Jamie exists to inspire you to get cooking.\n' +
    '\n' +
    'Whatever your needs, you can trust that these recipes will slot right into your busy life, with total ease – from 15-minute-to-table dishes and no-time-to-shop cupboard rescues to weekend wins that create smart leftover ideas, making mealtimes a doddle in the days that follow.', 'https://m.media-amazon.com/images/I/61Jn975IYqL._SL1500_.jpg'),
  new Book(6, 'It Starts with Us: the highly anticipated sequel to IT ENDS WITH US (Lily & Atlas, 2)', 'Colleen Hoover', '2023', 'Before It Ends with Us, it started with Atlas.\n' +
    '\n' +
    'Multi-million copy bestselling author Colleen Hoover tells fan favourite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the #1 Sunday Times bestseller It Ends with Us\n' +
    '\n' +
    'Lily and her ex-husband, Ryle, have just settled into a civil co-parenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.\n' +
    '\n' +
    'But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life.\n' +
    '\n' +
    'Switching between the perspectives of Lily and Atlas, It Starts with Us picks up right where the epilogue for the bestselling phenomenon It Ends with Us left off. ', 'https://m.media-amazon.com/images/I/71kWqVqPqlL._SL1500_.jpg'),
  new Book(7, 'It Ends With Us: The emotional #1 Sunday Times bestseller. Now a major film starring Blake Lively and Justin Baldoni (Lily & Atlas, 1)', 'Colleen Hoover', '2016', 'THE RUNAWAY GLOBAL MULTI-MILLION COPY BESTSELLING NOVEL BY COLLEEN HOOVER. \n' +
    '\n' +
    '‘The reigning queen of BookTok’ GUARDIAN\n' +
    '‘One of the most influential voices of the last decade’ ELLE\n' +
    '‘One of the world\'s most successful writers’ DAILY MAIL\n' +
    ' \n' +
    '‘In the future . . . if by some miracle you ever find yourself in the position to fall in love again . . . fall in love with me.’\n' +
    '\n' +
    'Lily hasn’t always had it easy, but that’s never stopped her from working hard for the life she wants. She’s come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily’s life seems too good to be true.', 'https://m.media-amazon.com/images/I/817vqET828L._SL1500_.jpg'),
  new Book(8, 'The Pumpkin Spice Café: TikTok Made Me Buy It: Book 1 (Dream Harbor)', 'Laurie Gilmore', '2023', 'The Sunday Times bestseller\n' +
    '\n' +
    'When Jeanie’s aunt gifts her the beloved Pumpkin Spice Café in the small town of Dream Harbor, Jeanie jumps at the chance for a fresh start away from her very dull desk job.\n' +
    '\n' +
    'Logan is a local farmer who avoids Dream Harbor’s gossip at all costs. But Jeanie’s arrival disrupts Logan’s routine and he wants nothing to do with the irritatingly upbeat new girl, except that he finds himself inexplicably drawn to her.\n' +
    '\n' +
    'Will Jeanie’s happy-go-lucky attitude win over the grumpy-but-gorgeous Logan, or has this city girl found the one person in town who won’t fall for her charm, or her pumpkin spice lattes…', 'https://m.media-amazon.com/images/I/81SY28F1TzL._SL1500_.jpg'),
];

interface BooksState {
  filters: {
    title: string;
  }
}

const initialState: BooksState = {
  filters: {
    title: ''
  }
};

export const BookStore = signalStore(
  {providedIn: 'root'},
  withEntities<Book>(),
  withState(initialState),
  withComputed(({entities, filters}) => ({
    books: computed(() => {
      const searchFilter = filters.title().toLowerCase();
      return searchFilter.length < 3
        ? entities()
        : entities().filter(book => book.title.toLowerCase().includes(searchFilter));
    })
  })),
  withMethods((store) => ({
    updateFiltersTitle(value: string): void {
      patchState(store, state => ({ filters: { ...state.filters, title: value } }));
    }
  })),
  withMethods((store) => ({
    create(book: Book): void {
      patchState(store, addEntity(book));
    },
    update(book: Book): void {
      patchState(store, setEntity(book));
    },
    remove(bookId: Book['id']): void {
      patchState(store, removeEntity(bookId));
    }
  })),
  withHooks({
    onInit(store) {
      books.forEach(book => store.create(book));
    }
  }),
);

export type BookStore = InstanceType<typeof BookStore>;

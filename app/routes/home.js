import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return "data"
    return [
      {
        id: 'item1',
        name: 'Dosa',
        img: 'dosa.png',
        catergory: '1',
      },
      {
        id: 'item2',
        name: 'Idly',
        img: 'dosa.png',
        catergory: '2',
      },
      {
        id: 'item3',
        name: 'poori',
        img: 'dosa.png',
        catergory: '2',
      },
      {
        id: 'item4',
        name: 'vadai',
        img: 'dosa.png',
        catergory: '3',
      },
    ];
  },
});

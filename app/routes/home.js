import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return "data"
    return [
      {
        id: 'item1',
        name: 'Dosa',
        img: 'c1.png',
        price: "30",
        catergory: '1',
      },
      {
        id: 'item2',
        name: 'Idly',
        img: 'c2.png',
        price: "130",
        catergory: '2',
      },
      {
        id: 'item2',
        name: 'Idly',
        img: 'c2.png',
        price: "130",
        catergory: '2',
      },
      {
        id: 'item3',
        name: 'poori',
        img: 'c3.png',
        price: "230",
        catergory: '2',
      },
      {
        id: 'item3',
        name: 'poori',
        img: 'c3.png',
        price: "230",
        catergory: '2',
      },
      {
        id: 'item4',
        name: 'vadai',
        img: 'c4.png',
        price: "100",
        catergory: '3',
      },
      {
        id: 'item4',
        name: 'vadai',
        img: 'c6.png',
        price: "80",
        catergory: '3',
      },
      {
        id: 'item4',
        name: 'vadai',
        img: 'c7.png',
        price: "90",
        catergory: '3',
      },
    ];
  },
});

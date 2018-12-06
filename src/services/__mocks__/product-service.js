import { Observable } from 'rxjs';

const mockProducts = [
  {
    id: 1,
    name: 'Product I',
    imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
    desc: 'Description',
    price: 20.00,
  },
];

const mockProduct = {
  id: 1,
  name: 'Product I',
  imgUrl: 'https://images.pexels.com/photos/1200458/pexels-photo-1200458.jpeg?auto=compress&cs=tinysrgb&h=350',
  desc: 'Description',
  price: 20.00,
};

export default {
  get(id) {
    return Observable.create((observer) => {
      if (id) {
        observer.next({ response: mockProduct });
      } else {
        observer.next({ response: mockProducts });
      }

      observer.complete();
    });
  },
};

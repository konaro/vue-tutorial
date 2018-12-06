import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const sourceUrl = 'http://localhost:3000/products';
const headers = {
  'Access-Control-Allow-Origin': 'http://localhost:3000',
};

export default {
  get(id) {
    const url = id ? `${sourceUrl}/${id}` : sourceUrl;
    return ajax.get(url, headers).pipe(
      catchError((err) => {
        throw err;
      }),
    );
  },
};

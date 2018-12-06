import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const sourceUrl = `${process.env.VUE_APP_API_BASE_URL}/products`;
const headers = {
  'Access-Control-Allow-Origin': `${process.env.VUE_APP_API_BASE_URL}`,
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

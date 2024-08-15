import { ListQueryHistory } from '~/modules/searches/use-cases/list-query-history';
import { Search } from '~/modules/searches/use-cases/search';

const searchesUseCaseProviders = [Search, ListQueryHistory];

export default searchesUseCaseProviders;

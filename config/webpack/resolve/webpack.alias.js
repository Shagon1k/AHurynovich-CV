import path from 'path';
import {
  SRC_DIR,
  SRC_CLIENT_DIR,
  SRC_SERVER_DIR,
  CONFIG_DIR,
} from '../../environment';

const getAlias = () => ({
  src: path.resolve(SRC_DIR),
  '@client': path.resolve(SRC_CLIENT_DIR),
  '@server': path.resolve(SRC_SERVER_DIR),
  '@pages': path.resolve(SRC_CLIENT_DIR, 'components/pages'),
  '@base': path.resolve(SRC_CLIENT_DIR, 'components/base'),
  '@reducers': path.resolve(SRC_CLIENT_DIR, 'store/reducers'),
  '@selectors': path.resolve(SRC_CLIENT_DIR, 'store/selectors'),
  '@config': path.resolve(CONFIG_DIR),
});

export default getAlias;

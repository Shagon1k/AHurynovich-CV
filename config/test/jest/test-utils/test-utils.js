/** NOTE: This file is used for RTL customization and new custom utils enhancement
 * https://testing-library.com/docs/react-testing-library/setup/#custom-render
 */

import { getRenderWithProviders } from './custom-utils';

// re-export RTL utils
export * from '@testing-library/react';

// additional utils
export { getRenderWithProviders };

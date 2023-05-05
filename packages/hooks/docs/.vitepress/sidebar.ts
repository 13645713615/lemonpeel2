/*
 * @Descripttion: 
 * @version: 
 * @Author: Carroll
 * @Date: 2023-01-04 17:38:24
 * @LastEditTime: 2023-03-03 16:01:11
 */

import type { DefaultTheme } from "vitepress"
import _ from "lodash"

const Router: Record<string, string[] | string> = {
  介绍: 'guide',
  Service: ['useService'],
  Dom: [
    'useEventListener',
    'useFullscreen',
    'useScroll',
    'useBreakpoints'
  ],
  Data: [
    'useSelections',
    'usePagination',
    'useTable',
    'useValidation'
  ],
  State: [
    'useState',
    'useModel',
    'useDebounce',
    'useThrottle',
    'useStorageState',
    'useAsyncState',
    'createGlobalState'
  ],
  Effect: [
    'useScreenFocus',
    'useTimer',
    'useFilter',
    'useSorter',
    'useRecast'
  ]
};

export function getRouterConfig(langPrefix: string = '/'): DefaultTheme.SidebarItem[] {
  return [
    ...Object.entries(Router).map(([text, children]) => {
      return Array.isArray(children) ?
        {
          text, items: children.map(name => ({ text: name, link: `${langPrefix}${_.kebabCase(name)}/` }))
        } :
        {
          text, link: `${langPrefix}${_.kebabCase(children)}/`
        }
    })
  ]
}

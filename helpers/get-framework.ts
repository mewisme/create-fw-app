import { Framework } from "../types";

export const getFramework = (framework: Framework): string => {
  switch (framework) {
    case 'next':
      return 'Next.js'
    case 'react':
      return 'React.js'
    case 'vue':
      return 'Vue.js'
  }
}

import { list } from '@keystone-6/core';
import {
  password, text
} from '@keystone-6/core/fields';

const isAuth = ({ session }) => !!session

export default list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
    access: {
      operation: {
        create: isAuth,
        update: isAuth,
        delete: isAuth
      }
    },
    ui: {
      listView: {
        initialColumns: ['name'],
      },
    },
})
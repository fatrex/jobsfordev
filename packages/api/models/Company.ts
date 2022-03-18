import { list } from '@keystone-6/core'
import {
  text, image
} from '@keystone-6/core/fields';

const isAuth = ({ session }) => !!session

export default list({
  access: {
    operation: {
      create: isAuth,
      update: isAuth,
      delete: isAuth
    }
  },
  fields: {
    name: text({ validation: { isRequired: true } }),
    logo: image()
  }
})
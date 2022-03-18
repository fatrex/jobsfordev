import { list, graphql } from '@keystone-6/core'
import {
  text, select, relationship, virtual, integer, timestamp
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
    status: select({
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published'},
        { label: 'Expired', value: 'expired' }
      ]
    }),
    company: relationship({ ref: 'Company' }),
    role: text({ validation: { isRequired: true } }),
    seniority: select({
      validation: { isRequired: true },
      options: [
        { label: 'Senior', value: 'senior' },
        { label: 'Middle', value: 'middle' },
        { label: 'Junior', value: 'junior' },
      ]
    }),
    mainSkills: relationship({ 
      ref: 'Skill',
      many: true
    }),
    secondarySkills: relationship({ 
      ref: 'Skill',
      many: true
    }),
    salaryMin: integer({ validation: { isRequired: true, min: 20 } }),
    salaryMax: integer({ validation: { isRequired: true, max: 150 } }),
    salary: virtual({
      field: graphql.field({
        type: graphql.Float,
        args: { value: graphql.arg({ type: graphql.Float })},
        resolve(item, args, context, info) {
          return (item.salaryMax + item.salaryMin) / 2
        }
      })
    }),
    originalUrl: text({ validation: { isRequired: true } }),
    createdAt: timestamp({
      defaultValue: {
        kind: 'now'
      }
    }),
  }
})
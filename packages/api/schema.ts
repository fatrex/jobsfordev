import { Lists } from '.keystone/types';

import User from './models/User'
import Company from './models/Company'
import JobOffer from './models/JobOffer'
import Skill from './models/Skill'

export const lists: Lists = {
  User,
  Company,
  JobOffer,
  Skill
};

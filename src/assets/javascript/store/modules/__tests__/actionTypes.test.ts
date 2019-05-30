import { expect } from 'chai'
import _ from 'lodash'

import * as counter from '../counter/constants'
// =============================================
// Actions

test('ActionTypes are not duplicates', () => {
  const arr = [..._.values(counter)]
  console.log(arr)
  expect(arr).to.be.eql(_.uniq(arr))
})

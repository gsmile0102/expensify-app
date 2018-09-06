import moment from 'moment';

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 196,
  createdAt: 0
}, {
  id: '2',
  description: 'Water',
  note: '',
  amount: 8000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Electric',
  note: '',
  amount: 30000,
  createdAt: moment(0).add(4, 'days').valueOf()
}];
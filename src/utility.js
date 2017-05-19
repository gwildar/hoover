import R from 'ramda';



const boundary = 10;
const resetMove = x => x = 10;

const moveHoover = R.ifElse(
  R.lt(R.__, boundary),
  R.add(R.__, 1),
  resetMove,
)

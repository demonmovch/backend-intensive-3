// Instruments
import { getPassword } from './env';

const password = getPassword();

export const authenticate = (req, res, next) => {
  const auth = req.header('authorization');

  if (!req.session.user) {
    return res.status(401).json({ message: 'could not find cookie user' });
  }

  if (auth && auth === password) {
    next();
  } else {
    res.status(401).json({ message: 'authentication credentials are not valid' });
  }
};

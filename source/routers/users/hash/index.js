import dg from "debug";

import { users } from "../../../odm";

const debug = dg("router:users:hash");

export const getByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const data = req.params.userHash;

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { userHash } = req.params;

    const data = await users.findOneAndUpdate({ hash: userHash }, req.body, {
      new: true
    });

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { userHash } = req.params;

    await users.findOneAndDelete({ hash: userHash });

    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

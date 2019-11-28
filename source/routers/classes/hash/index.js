import dg from "debug";

const debug = dg("router:classes:hash");

import { classes } from "../../../odm";

export const getByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const data = req.params.classHash;

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { classHash } = req.params;

    const data = await classes.findOneAndUpdate({ hash: classHash }, req.body, {
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
    const { classHash } = req.params;

    await classes.findOneAndDelete({ hash: classHash });

    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

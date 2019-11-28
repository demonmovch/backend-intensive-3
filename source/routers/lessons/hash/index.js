import dg from "debug";

const debug = dg("router:lessons:hash");

import { lessons } from "../../../odm";

export const getByHash = (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const data = req.params.lessonHash;

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { lessonHash } = req.params;

    const data = await lessons.findOneAndUpdate(
      { hash: lessonHash },
      req.body,
      {
        new: true
      }
    );

    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const removeByHash = async (req, res) => {
  debug(`${req.method} - ${req.originalUrl}`);

  try {
    const { lessonHash } = req.params;

    await lessons.findOneAndDelete({ hash: lessonHash });

    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

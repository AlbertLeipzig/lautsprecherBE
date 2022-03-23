import read from "body-parser/lib/read";

export const message = (req, res) => {
  try {
    const message = {
      author: req.body.author,
      date: Date.now(),
      messageBody: req.body.messageBody,
      messageTitle: req.body.messageTitle
    };
    res.json({
      data: band,
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

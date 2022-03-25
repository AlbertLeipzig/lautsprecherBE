export const postMessage = (req, res) => {
  try {
    const message = {
      fName: req.body.fName,
      lName: req.body.lName,
      mail: req.body.mail,
      messageTitle: req.body.messageTitle,
      messageBody: req.body.messageBody
    };
    res.json({
      data: message,
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.json({
      message: err,
    });
  }
};

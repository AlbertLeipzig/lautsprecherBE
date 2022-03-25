/* import read from "body-parser/lib/read"; */

export const postBand = (req, res) => {
  try {
    const band = {
      approved: false,
      bandName: req.body.bandName,
      image: req.body.image,
      mail: req.body.mail,
      musicians: req.body.musicians,
      password: req.body.password,
      socialMedia: {
        fb: req.body.fb,
        ig: req.body.ig,
        tw: req.body.tw,
        sc: req.body.sc,
        yt: req.body.yt,
        in: req.body.in,
        twitch: req.body.twitch
      },
      style: req.body.style,
      vorsitzender: req.body.vorsitzender,
      website: req.body.website
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

export const postVeranstaltungsort = (req, res) => {
    try {
        const veranstaltungsort = {
          address: {
            number: req.body.number,
            PLZ: req.body.PLZ,
            street: req.body.street
          },
          approved: false,
          concerts: req.body.concerts,
          image: req.body.image,
          inhaber: req.body.inhaber,
          mail: req.body.mail,
          phone: req.body.phone,
          placeName: req.body.placeName,
          socialMedia: {
            fb: req.body.fb,
            ig: req.body.ig,
            tw: req.body.tw,
            sc: req.body.sc,
            yt: req.body.yt,
            in: req.body.in,
            twitch: req.body.twitch
          },
          website: req.body.website
        };
        res.json({
            data : veranstaltungsort,
            message : "success"
        })
      } catch (err) {
        console.log(err);
        res.json({
          message: err,
        });
      }
}
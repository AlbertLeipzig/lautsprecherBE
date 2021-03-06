export const postConcert = (req, res) => {

  try {
      const concert = {
        approved: false,
        address: {
          number: req.body.number,
          PLZ: req.body.PLZ,
          street: req.body.street
        },
        bands: req.body.band,
        concertTitle: req.body.concertTitle,
        cost: req.body.cost,
        date: req.body.date,
        duration: req.body.duration,
        image: req.body.image,
        musicians: req.body.musicians,
        style: req.body.style,
        tickets: req.body.tickets,
        veranstaltungsort: req.body.veranstaltungsort
      };

      /* ist musicians || bands deffiniert */
      if (musicians.length + bands.length > 0)(
        res.json({
          data : concert,
          message : "success"
        }))
    } catch (err) {
      console.log(err);
      res.json({
        message: err,
      });
    }
}
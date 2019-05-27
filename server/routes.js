import * as Utils from './utils';

const homecardsController = (req, res) => {
  Utils.getData('https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid')
  .then(response => response.json())
  .then(({ data }) => {
    const markers = Utils.transformMarkersByRange(data);
    const ids = Utils.processIds(markers);

    Utils.getData('https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids', { query: ids })
    .then(response => response.json())
    .then(({ data }) => {
      const { homecards } = Utils.transformHomecards(data);

      return res.json({ homecards });
    })
    .catch(err => res.status(400).json({ message: 'An error occured fetching homecards', error: err }))
  })
  .catch(err => res.status(400).json({ message: 'An error occured fetching markers', error: err }));
};

export default router => {
  router.get('/homecards', homecardsController);

  return router;
};

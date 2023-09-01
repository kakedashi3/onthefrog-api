import data from './data/data.json';

export default (req, res) => {
    const {
      query: { id },
    } = req;
  
    const nftData = data[id];
  
    if (nftData) {
      res.status(200).json(nftData);
    } else {
      res.status(404).json({ error: "NFT not found" });
    }
};

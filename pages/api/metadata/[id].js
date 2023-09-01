// pages/api/metadata/[id].js

export default (req, res) => {
    const {
      query: { id },
    } = req;
  
    // 仮のデータベース（実際のアプリケーションではデータベースからデータを取得します）
    const data = {
      1: { 
            tokenId: 1,
            name: "kakedashi", 
            description: "This is NFT 1" ,
            image:"",
            external_url:"",
            attributes: [
                {
                trait_type: "",
                value:""
                },
            ]

        },


      2: { 
            name: "NFT 2", 
            description: "This is NFT 2" 
        },
      // ... 他のデータも追加可能
    };
  
    const nftData = data[id];
  
    if (nftData) {
      res.status(200).json(nftData);
    } else {
      res.status(404).json({ error: "NFT not found" });
    }
  };
  
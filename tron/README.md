
Sample Smart Contract for the TRON Blockchain

npm install -g tronbox

# Fullnode private network
docker pull trontools/quickstart

docker run -it \
  -p 9090:9090 \
  -e "accounts=3" \
  --name maktron \
  trontools/quickstart

# Build your smart contract
tronbox compile

export privateKey="25bed7ad-3925-40c7-bb9b-bb8ef00f3afa"

# Deploy to testnet
PK="25bed7ad-3925-40c7-bb9b-bb8ef00f3afa" source .env && tronbox migrate --reset --network shasta

# Deploy to local Docker fullnode
tronbox migrate --network development

   (base58) TGf4RpSJG2aAin8XjizvHcYYeUcJRtSB8s
    (hex) 41495a3c9896678049289e6ef6db26ba353a95ec30


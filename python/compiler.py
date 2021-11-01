
import solcx

file = "TokenElh.sol"
source = f"contracts/{file}"
spec = {
        "language": "Solidity",
        "sources": {
            file: {
                "urls": [
                    source
                ]
            }
        },
        "settings": {
            "optimizer": {
               "enabled": True
            },
            "outputSelection": {
                "*": {
                    "*": [
                        "metadata", "evm.bytecode", "abi"
                    ]
                }
            }
        }
    };
solout = solcx.compile_standard(spec, allow_paths=".");
print(solout)
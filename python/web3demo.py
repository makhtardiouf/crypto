''' Ethereum dApps
    Web3 framework demo with Python and Geth 1.10
    Run local test network with: geth --http --dev
'''
import random
from web3.auto.gethdev import w3  # Autoconfiguration for local dev env

""" from web3 import Web3  # This is for mainnet
from web3.providers.ipc import IPCProvider
from web3.providers.rpc import HTTPProvider
from web3.providers.eth_tester.main import EthereumTesterProvider """


def runTokenElh():
    '''Compile and test TokenElh Smart Contract'''
    from compiler import solout, file

    abi = solout['contracts'][file]['TokenElh']['abi']
    bytecode = solout['contracts'][file]['TokenElh']['evm']['bytecode']['object']

    temp = w3.eth.contract(bytecode=bytecode, abi=abi)
    tx2 = temp.constructor().buildTransaction({"from": acc2}); 

    tx2hash = w3.eth.send_transaction(tx2)
    tx2receipt = w3.eth.waitForTransactionReceipt(tx2hash)
    tx2_addr = tx2receipt['contractAddress']
    print(f"TokenElh contract deployed at {tx2_addr}")


try:
    #w3 = Web3(Web3.IPCProvider("/tmp/geth.ipc"))
    #w3 = Web3(Web3.EthereumTesterProvider())
    #w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

    print(f"Web3 connected state: {w3.isConnected()} on {w3.clientVersion}\n")

    acc2 = ""
    accs = w3.eth.accounts
    if len(accs) < 2:
        acc2 = w3.geth.personal.new_account("Anwaare")
        print(f"Created new account {acc2}")
    else:
        acc2 = accs[1]

    print("Latest block before TX")
    print("{!r}".format(w3.eth.getBlock("latest").hash))

    thash = w3.eth.send_transaction({
        'from': w3.eth.accounts[0], 
        'to': acc2, 
        'value': w3.toWei(random.randint(2, 5), 'ether')
    })

    w3.eth.waitForTransactionReceipt(thash)

    print("Listing account balances:")
    for acc in accs:
        bal = w3.eth.getBalance(acc)
        print("Account {!r}: {:.4e} Ether".format(acc, w3.fromWei(bal, 'ether')))

    print("Latest block after TX")
    print("{!r}".format(w3.eth.getBlock("latest").hash))

    # runTokenElh()

except Exception as e:
    print(f"Execution error:\n\t {e}")
    
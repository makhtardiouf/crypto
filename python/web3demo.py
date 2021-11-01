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

try:
    #w3 = Web3(Web3.IPCProvider("/tmp/geth.ipc"))
    #w3 = Web3(Web3.EthereumTesterProvider())
    #w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))

    print(f"Web3 connected state: {w3.isConnected()} on {w3.clientVersion}")

    acc2 = w3.geth.personal.new_account("Anwaare")
    print(f"Created new account {acc2}")

    thash = w3.eth.send_transaction({
        'from': w3.eth.accounts[0], 
        'to': acc2, 
        'value': w3.toWei(random.randint(2, 5), 'ether')
    })

    w3.eth.waitForTransactionReceipt(thash)

    #print("Latest block")
    #print(w3.eth.getBlock("latest"))

    print("Listing account balances:")
    accs = w3.eth.accounts

    for acc in accs:
        bal = w3.eth.getBalance(acc)
        print("Account {!r}: {:.4e} Ether".format(acc, w3.fromWei(bal, 'ether')))

except Exception as e:
    print(f"Execution error:\n\t {e}")
    
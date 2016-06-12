// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"members","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"spend","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_nominee","type":"address"},{"name":"_isSpecial","type":"bool"}],"name":"addMember","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"member","outputs":[{"name":"joinDate","type":"uint256"},{"name":"exists","type":"bool"},{"name":"isSpecial","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newMember","type":"address"},{"indexed":false,"name":"joinDate","type":"uint256"},{"indexed":false,"name":"exists","type":"bool"},{"indexed":false,"name":"isSpecial","type":"bool"}],"name":"NewMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"recipient","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Spend","type":"event"}],
    binary: "60c060409081524260608190526001608081905260a081905233600160a060020a031660009081526020829052928320918255908101805461010060ff19909116831761ff001916179055815490810180835582818380158290116100865781836000526020600020918201910161008691905b808211156101a957848155600101610073565b50505091909060005260206000209001600033909190916101000a815481600160a060020a0302191690830217905550507f27fb8a45a1ec49546d887d6ce0060180187388da89138112b9e0895dfcdd367a336001600050600033600160a060020a03168152602001908152602001600020600050600001600050546001600050600033600160a060020a0316815260200190815260200160002060005060010160009054906101000a900460ff166001600050600033600160a060020a0316815260200190815260200160002060005060010160019054906101000a900460ff166040518085600160a060020a0316815260200184815260200183815260200182815260200194505050505060405180910390a161036f806101ad6000396000f35b509056606060405260e060020a60003504635daf08ca811461003c578063af7d6ca314610081578063c9030ea0146100b9578063e7d4539e146100f1575b005b61011c600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031681565b610126600435602435600160a060020a033316600090815260016020819052604082200154610100900460ff16151561030157610002565b610126600435602435600160a060020a033316600090815260016020819052604082200154610100900460ff16151561026857610002565b6101386004356001602081905260009182526040909120805491015460ff8082169161010090041683565b6060908152602090f35b60408051918252519081900360200190f35b606092835260809190915260a05280f35b50505091909060005260206000209001600085909190916101000a815481600160a060020a0302191690830217905550507f27fb8a45a1ec49546d887d6ce0060180187388da89138112b9e0895dfcdd367a836001600050600086600160a060020a03168152602001908152602001600020600050600001600050546001600050600087600160a060020a0316815260200190815260200160002060005060010160009054906101000a900460ff166001600050600088600160a060020a0316815260200190815260200160002060005060010160019054906101000a900460ff166040518085600160a060020a0316815260200184815260200183815260200182815260200194505050505060405180910390a15060015b92915050565b600160a060020a0383168152604081206001015460ff1615156102625760408082206001818101805460c0909452426060819052608083905260a087905290925560ff19909216821761ff0019166101008502179055815490810180835582919082818380158290116101495781836000526020600020918201910161014991905b808211156102fd578481556001016102ea565b5090565b30600160a060020a03163182901061026257600160a060020a0383168183606082818181858883f1505060408051938452602084019190915280517faeba90871f7da8a443096c396877004da901c92fcab3ec900a99cecddb19ec4d938190039091019150a150600161026256",
    unlinked_binary: "60c060409081524260608190526001608081905260a081905233600160a060020a031660009081526020829052928320918255908101805461010060ff19909116831761ff001916179055815490810180835582818380158290116100865781836000526020600020918201910161008691905b808211156101a957848155600101610073565b50505091909060005260206000209001600033909190916101000a815481600160a060020a0302191690830217905550507f27fb8a45a1ec49546d887d6ce0060180187388da89138112b9e0895dfcdd367a336001600050600033600160a060020a03168152602001908152602001600020600050600001600050546001600050600033600160a060020a0316815260200190815260200160002060005060010160009054906101000a900460ff166001600050600033600160a060020a0316815260200190815260200160002060005060010160019054906101000a900460ff166040518085600160a060020a0316815260200184815260200183815260200182815260200194505050505060405180910390a161036f806101ad6000396000f35b509056606060405260e060020a60003504635daf08ca811461003c578063af7d6ca314610081578063c9030ea0146100b9578063e7d4539e146100f1575b005b61011c600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630154600160a060020a031681565b610126600435602435600160a060020a033316600090815260016020819052604082200154610100900460ff16151561030157610002565b610126600435602435600160a060020a033316600090815260016020819052604082200154610100900460ff16151561026857610002565b6101386004356001602081905260009182526040909120805491015460ff8082169161010090041683565b6060908152602090f35b60408051918252519081900360200190f35b606092835260809190915260a05280f35b50505091909060005260206000209001600085909190916101000a815481600160a060020a0302191690830217905550507f27fb8a45a1ec49546d887d6ce0060180187388da89138112b9e0895dfcdd367a836001600050600086600160a060020a03168152602001908152602001600020600050600001600050546001600050600087600160a060020a0316815260200190815260200160002060005060010160009054906101000a900460ff166001600050600088600160a060020a0316815260200190815260200160002060005060010160019054906101000a900460ff166040518085600160a060020a0316815260200184815260200183815260200182815260200194505050505060405180910390a15060015b92915050565b600160a060020a0383168152604081206001015460ff1615156102625760408082206001818101805460c0909452426060819052608083905260a087905290925560ff19909216821761ff0019166101008502179055815490810180835582919082818380158290116101495781836000526020600020918201910161014991905b808211156102fd578481556001016102ea565b5090565b30600160a060020a03163182901061026257600160a060020a0383168183606082818181858883f1505060408051938452602084019190915280517faeba90871f7da8a443096c396877004da901c92fcab3ec900a99cecddb19ec4d938190039091019150a150600161026256",
    address: "0x58b9c54169b47859463a0a109db8ac186b2a805d",
    generated_with: "2.0.9",
    contract_name: "Access"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Access = Contract;
  }

})();

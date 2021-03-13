require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food chat dash remain common install civil army gasp'; 
let testAccounts = [
"0xb65654b84c524e99a9919e0e9837c7ff118948b236b8be8f4b841797f9d43042",
"0x3f41d2689b04618cda3cb6fdff3df0b38533c52006cd6e90b64d8852f873d6fa",
"0xe27068af28003c5caab557f884f9ab9829f799055caf8bdf376633a9205eb775",
"0x3a9bccc2b9f392020b654ebabd2bc99594d879dad2375646acec6a3ae0ccdbd9",
"0xf3f063fdfdaa6c7e954aa8c8011862f2d6c10c2b8a89c3ba1b76c75376b070d0",
"0x26c4f6fd12412bee153a6e3f3c879ff90e70cfd6197305e0926ebc194744a64d",
"0x1da7d2902a099fb18ea90a22b7730e42e4fbd3a09b5ec6c1787b4c85c495fc92",
"0xa1efb860d38b85797f3e2552c44e5f1f2ccb03704cb436782efd128a19fe7caf",
"0x03ef701a440ee3ad600dbf0407d58f40d68b9ea2bd74c8d288f9c37304902495",
"0x88b46b3ebea90319ef3257de6e074b7e0e5108f210182269ea840c083331a2aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

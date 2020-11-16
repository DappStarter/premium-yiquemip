require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note toss comfort install clock fog thought'; 
let testAccounts = [
"0xd01e828b4243d016f5b341cf74998ff623d42989715a5b745e42520a28453de5",
"0x6b47022806671e4357ae23cd8ffc7d8f19cdd53d899387a733c975931dc55e3b",
"0xd54618921583c73ef46be3d765df0d6b669339317c242c16ab333822c671c897",
"0xf2eac6fb76af4e1cc3216733f6ad9eae93baa6a4e4cbeeb88ba7c6dae7bd7f05",
"0x0a72445cf078deda8270acf33358af61b620e710e81fbe0da4750ec48f98bd94",
"0xf8853522bdc7df0414f10900a06d50ef6ab7a9d8c00ad25e1c65bab1817c23ff",
"0xb7c8ff99246c16fa12497d749105146736d193da447452b3988c49894022298c",
"0x4b6f8fa1652139a034f447ed39fdab04951d53af5068496f064702f5cfcdb1ec",
"0xa82815cff948bef437493ba732330891c8534ce738586d31dae060b5420a02cb",
"0x35371c86452716154d400fd378d0de2177e46d57d5b3ca78d95fb2d30f835ea3"
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

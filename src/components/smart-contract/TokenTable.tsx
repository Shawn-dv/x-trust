import React from 'react';

interface Token {
  name: string;
  description: string;
  contractAddress: string;
}

const tokens: Token[] = [
  { name: 'BTCB', description: 'Bitcoin-pegged token on BNB Smart Chain', contractAddress: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c' },
  { name: 'ETH', description: 'Ether-pegged token on BNB Smart Chain', contractAddress: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8' },
  { name: 'TRX', description: 'Tron-pegged token on BNB Smart Chain', contractAddress: '0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3' },
  { name: 'WMATIC', description: 'Polygon-pegged token on BNB Smart Chain', contractAddress: '0xc836d8dC361E44DbE64c4862D55BA041F88Ddd39' },
  { name: 'YFI', description: 'Yearn.finance-pegged token on BNB Smart Chain', contractAddress: '0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e' },
  { name: 'COMP', description: 'Compound Coin-pegged token on BNB Smart Chain', contractAddress: '0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8' },
  { name: 'DOGE', description: 'Dogecoin-pegged token on BNB Smart Chain', contractAddress: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43' },
  { name: 'ETC', description: 'Ethereum Classic-pegged token on BNB Smart Chain', contractAddress: '0x3d6545b08693daE087E957cb1180ee38B9e3c25E' },
  { name: 'STG', description: 'Stargate Finance-pegged token on BNB Smart Chain', contractAddress: '0xB0D502E938ed5f4df2E681fE6E419ff29631d62b' },
  { name: 'TOKEN', description: 'TokenFi-pegged token on BNB Smart Chain', contractAddress: '0x4507cEf57C46789eF8d1a19EA45f4216bae2B528' },
  { name: 'WOO', description: 'WOO-pegged token on BNB Smart Chain', contractAddress: '0x4691937a7508860F876c9c0a2a617E7d9E945D4B' },
  { name: 'TON', description: 'TON Coin-pegged token on BNB Smart Chain', contractAddress: '0x76a797a59ba2c17726896976b7b3747bfd1d220f' },
  { name: 'FTM', description: 'Fantom-pegged token on BNB Smart Chain', contractAddress: '0xAD29AbB318791D579433D831ed122aFeAf29dcfe' },
];

const TokenTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Token</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Contract Address</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{token.name}</td>
              <td className="py-2 px-4 border-b">{token.description}</td>
              <td className="py-2 px-4 border-b font-mono text-sm">{token.contractAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
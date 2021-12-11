export const getTokenLogoURL = (address: string) =>
  address ? `https://raw.githubusercontent.com/pollum-io/pegasys-tokens/master/tokens/${address}/logo.png` : '';
// TODO: Testnet compatibility

import { ChainId, Token } from '@pollum-io/pegasys-sdk';
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { DoubleCurrencyLogo } from '.';

export default {
  component: DoubleCurrencyLogo,
  title: 'Pegasys/DoubleCurrencyLogo',
};

const currency0 = new Token(ChainId.NEVM, '0x', 18, 'ETH', 'Ether'); //TOOD: add ETH address
const currency1 = new Token(ChainId.NEVM, '0x', 18, 'PSYS', 'Pegasys'); //TOOD: add PSys address

const TemplateBox: ComponentStory<typeof DoubleCurrencyLogo> = (args: any) => <DoubleCurrencyLogo {...args} />;

export const DoubleLogo = TemplateBox.bind({});
DoubleLogo.args = {
  size: 24,
  currency0: currency0,
  currency1: currency1,
  margin: false,
};

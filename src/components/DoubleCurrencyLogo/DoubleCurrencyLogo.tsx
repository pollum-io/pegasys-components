import { Currency } from '@pollum-io/pegasys-sdk';
import React from 'react';
import { Box } from '../Box';
import { CoveredLogo, HigherLogo, Wrapper } from './styles';

export interface DoubleCurrencyLogoProps {
  margin?: boolean;
  size?: number;
  currency0?: Currency;
  currency1?: Currency;
}

const DoubleCurrencyLogo = ({ currency0, currency1, size = 16, margin = false }: DoubleCurrencyLogoProps) => {
  return (
    <Wrapper sizeraw={size} margin={margin}>
      {currency0 && <HigherLogo currency={currency0} size={size.toString() + 'px'} />}
      {currency1 && (
        <Box ml={'-5px'} display={'flex'}>
          <CoveredLogo currency={currency1} size={size.toString() + 'px'} sizeraw={size} />
        </Box>
      )}
    </Wrapper>
  );
};

export default DoubleCurrencyLogo;

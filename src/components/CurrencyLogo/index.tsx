import { Currency, NSYS, Token } from '@pollum-io/pegasys-sdk';
import deepEqual from 'deep-equal';
import React, { useMemo } from 'react';
import { getTokenLogoURL } from 'src/utils/getTokenLogoURL';
import { SysLogo } from '../SysLogo';
import { StyledLogo } from './styles';

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency;
  size?: string;
  style?: React.CSSProperties;
}) {
  const srcs: string[] = useMemo(() => {
    if (currency === NSYS) return [];
    if (currency instanceof Token || !!(currency as Token).address) {
      return [getTokenLogoURL((currency as Token)?.address)];
    }

    return [];
  }, [currency]);

  if (deepEqual(currency, NSYS)) {
    return <SysLogo size={size} />;
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />;
}

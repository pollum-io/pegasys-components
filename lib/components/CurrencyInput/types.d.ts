import { Currency, Pair } from '@pollum-io/pegasys-sdk';
import { TextInputProps } from '../TextInput/types';
export declare type CurrencyInputProps = TextInputProps & {
    currency?: Currency | null;
    pair?: Pair | null;
    onTokenClick?: () => void;
};

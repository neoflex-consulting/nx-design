import './MixCard.css';
declare type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
declare const formMap: readonly ["round", "square"];
declare type FormMap = typeof formMap[number];
declare const cardStatus: readonly ["alert", "success", "warning"];
declare type CardStatus = typeof cardStatus[number] | string;
declare type Props = {
    shadow?: boolean;
    verticalSpace?: Size;
    horizontalSpace?: Size;
    form?: FormMap;
    status?: CardStatus;
};
declare type CnCard = (elemNameOrBlockMods?: Props | string | null, elemModsOrBlockMix?: Props | Array<string | undefined> | null, elemMix?: Array<string | undefined>) => string;
export declare const cnMixCard: CnCard;
export {};

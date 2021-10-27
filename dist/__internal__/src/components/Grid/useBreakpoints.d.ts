import { ClassNameFormatter } from '@bem-react/classname';
declare type Breakpoint = Record<string, string | number | undefined>;
export declare type Breakpoints = Record<string, Breakpoint | undefined>;
export declare const generateBreakpointsCn: (cn: ClassNameFormatter, breakpoints?: Record<string, Record<string, string | number | undefined> | undefined> | undefined) => string;
/**
 *
 * @param cn ClassNameFormatter
 * @param breakpoints Breakpoints
 *
 * хук вернет сгенерированный класс на основе `breakpoints`
 *
 * Пример:
 *
 * cn = cn('Grid')
 *
 * breakpoints = {
 * xs: {
 *   gap: 0,
 *   cols: 12,
 *   xAlign: 'center',
 *   yAlign: 'center',
 * },
 * s: {
 *   gap: 33,
 *   cols: 12,
 *   xAlign: 'center',
 *   yAlign: 'center',
 * }
 * }
 *
 * =>
 *
 * Grid Grid_xs:gap_0 Grid_xs:cols_12 Grid_xs:xAlign_center Grid_xs:yAlign_center Grid_s:gap_33 Grid_s:cols_12 Grid_s:xAlign_center Grid_s:yAlign_center
 *
 */
export declare const useBreakpoints: (cn: ClassNameFormatter, breakpoints?: Record<string, Record<string, string | number | undefined> | undefined> | undefined) => string;
export {};

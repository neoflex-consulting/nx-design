/// <reference types="react" />
export { Attachment, cnAttachment } from '../Attachment/Attachment';
/**
 * @deprecated since version 3.2.0 use Attachment
 */
declare const Attach: import("../../utils/types/PropsWithAsAttributes").ComponentWithAs<{
    fileExtension?: string | undefined;
    loading?: boolean | undefined;
    fileName?: string | undefined;
    fileDescription?: string | undefined;
    loadingProgress?: number | undefined;
    errorText?: string | undefined;
    loadingText?: string | undefined;
    onButtonClick?: ((event: import("react").MouseEvent<Element, MouseEvent>) => void) | undefined;
    buttonIcon?: import("react").FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<import("../../icons/Icon/Icon").Props, HTMLSpanElement>> | undefined;
    buttonTitle?: string | undefined;
    withAction?: boolean | undefined;
    className?: string | undefined;
    children?: undefined;
}, "div">;
/**
 * @deprecated since version 3.2.0 cnAttachment
 */
declare const cnAttach: import("@bem-react/classname").ClassNameFormatter;
export { Attach, cnAttach };

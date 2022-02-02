import './Attachment.css';

import React from 'react';

import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { Button } from '../Button/Button';
import { File } from '../File/File';
import { Typography } from '../Typography/Typography';

type Props = {
  fileExtension?: string;
  loading?: boolean;
  fileName?: string;
  fileDescription?: string;
  loadingProgress?: number;
  errorText?: string;
  loadingText?: string;
  onButtonClick?: React.EventHandler<React.MouseEvent>;
  buttonIcon?: React.ReactNode;
  buttonTitle?: string;
  withAction?: boolean;
  className?: string;
  children?: never;
};

const cnAttachment = cn('Attachment');

const Attachment = forwardRefWithAs<Props>((props, ref) => {
  const {
    className,
    as = 'div',
    fileExtension,
    loading,
    fileName,
    buttonIcon,
    onButtonClick,
    errorText,
    loadingText = 'Loading',
    loadingProgress,
    fileDescription,
    onClick,
    withAction: withActionProp,
    buttonTitle,
    ...otherProps
  } = props;
  const Tag = as as string;
  const withAction = withActionProp || Boolean(onClick);
  const withOnButtonAction = Boolean(onButtonClick);

  return (
    <Tag
      {...otherProps}
      onClick={onClick}
      className={cnAttachment({ withAction, withOnButtonAction }, [className])}
      ref={ref}
    >
      <File
        className={cnAttachment('File', { error: Boolean(errorText) })}
        extension={fileExtension}
        loading={loading}
        loadingWithProgressSpin
        loadingProgress={loadingProgress}
        size="s"
      />
      <div className={cnAttachment('Content')}>
        {fileName && (
          <Typography className={cnAttachment('FileName')} size="body" view="primary">
            {fileName}
          </Typography>
        )}
        {fileDescription && !loading && (
          <Typography className={cnAttachment('FileDescription')} size="caption" view="ghost">
            {fileDescription}
          </Typography>
        )}
        {loadingText && loading && (
          <Typography className={cnAttachment('LoadingText')} size="caption" view="ghost">
            {loadingProgress ? `${loadingText} ${loadingProgress}%` : `${loadingText}...`}
          </Typography>
        )}
        {errorText && (
          <Typography className={cnAttachment('ErrorText')} size="caption" view="error">
            {errorText}
          </Typography>
        )}
      </div>
      {withOnButtonAction && (
        <Button
          className={cnAttachment('Button')}
          as="span"
          onlyIcon
          iconLeft={buttonIcon}
          onClick={onButtonClick}
          title={buttonTitle}
          size="xs"
          view="clear"
        />
      )}
    </Tag>
  );
});

export { Attachment, cnAttachment };

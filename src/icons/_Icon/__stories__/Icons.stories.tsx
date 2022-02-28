import React from 'react';
import {select} from '@storybook/addon-knobs';

import {createMetadata} from '../../../utils/storybook';

import {IconsItem} from './Item/Icons-Item';
import mdx from './Icon.docs.mdx';

import {IconActionMenu} from "../../IconActionMenu/IconActionMenu";
import {IconAggregate} from '../../IconAggregate/IconAggregate';
import {IconAlert} from '../../IconAlert/IconAlert';
import {IconAncore} from '../../IconAncore/IconAncore';
import {IconApps} from '../../IconApps/IconApps';
import {IconArchive} from '../../IconArchive/IconArchive';
import {IconArrowBackward} from '../../IconArrowBackward/IconArrowBackward';
import {IconArrowDown} from '../../IconArrowDown/IconArrowDown';
import {IconArrowDownC} from '../../IconArrowDownC/IconArrowDownC';
import {IconArrowForward} from '../../IconArrowForward/IconArrowForward';
import {IconArrowLeft} from '../../IconArrowLeft/IconArrowLeft';
import {IconArrowLeftC} from '../../IconArrowLeftC/IconArrowLeftC'
import {IconArrowMove} from '../../IconArrowMove/IconArrowMove';
import {IconArrowRight} from '../../IconArrowRight/IconArrowRight';
import {IconArrowRightC} from '../../IconArrowRightC/IconArrowRightC';
import {IconArrowsH} from '../../IconArrowsH/IconArrowsH';
import {IconArrowsV} from '../../IconArrowsV/IconArrowsV';
import {IconArrowSwap} from '../../IconArrowSwap/IconArrowSwap';
import {IconArrowUp} from '../../IconArrowUp/IconArrowUp';
import {IconArrowUpC} from '../../IconArrowUpC/IconArrowUpC';
import {IconArrowVLeft} from '../../IconArrowVLeft/IconArrowVLeft';
import {IconArrowVRight} from '../../IconArrowVRight/IconArrowVRight';
import {IconAsteriks} from '../../IconAsteriks/IconAsteriks';
import {IconBackward} from '../../IconBackward/IconBackward';
import {IconBank} from '../../IconBank/IconBank';
import {IconBarChartH} from '../../IconBarChartH/IconBarChartH';
import {IconBarChartV} from '../../IconBarChartV/IconBarChartV';
import {IconBarChartVCheck} from '../../IconBarChartVCheck/IconBarChartVCheck';
import {IconBase} from '../../IconBase/IconBase';
import {IconBaseServer} from '../../IconBaseServer/IconBaseServer';
import {IconBell} from '../../IconBell/IconBell';
import {IconBellOff} from '../../IconBellOff/IconBellOff';
import {IconBigGrid} from '../../IconBigGrid/IconBigGrid';
import {IconBinokulars} from '../../IconBinokulars/IconBinokulars';
import {IconBlock} from '../../IconBlock/IconBlock';
import {IconBook} from '../../IconBook/IconBook';
import {IconBookDownload} from '../../IconBookDownload/IconBookDownload';
import {IconBookFinance} from '../../IconBookFinance/IconBookFinance';
import {IconBookFormula} from '../../IconBookFormula/IconBookFormula';
import {IconBookUpload} from '../../IconBookUpload/IconBookUpload';
import {IconBookWarning} from '../../IconBookWarning/IconBookWarning';
import {IconBranch} from '../../IconBranch/IconBranch';
import {IconBreifcase} from '../../IconBreifcase/IconBreifcase';
import {IconBringToFront} from '../../IconBringToFront/IconBringToFront';
import {IconBug} from '../../IconBug/IconBug';
import {IconBuilding} from '../../IconBuilding/IconBuilding';
import {IconBulletList} from '../../IconBulletList/IconBulletList';
import {IconBulletListSearch} from '../../IconBulletListSearch/IconBulletListSearch';
import {IconCalculator} from '../../IconCalculator/IconCalculator';
import {IconCalculatorCheck} from '../../IconCalculatorCheck/IconCalculatorCheck';
import {IconCalendar} from '../../IconCalendar/IconCalendar';
import {IconCalendarCheck} from '../../IconCalendarCheck/IconCalendarCheck';
import {IconCalendarDate} from '../../IconCalendarDate/IconCalendarDate'
import {IconCalendarDelete} from '../../IconCalendarDelete/IconCalendarDelete';
import {IconCalendarMinus} from '../../IconCalendarMinus/IconCalendarMinus';
import {IconCalendarNule} from '../../IconCalendarNule/IconCalendarNule';
import {IconCalendarPlus} from '../../IconCalendarPlus/IconCalendarPlus';
import {IconCalendarRecur} from '../../IconCalendarRecur/IconCalendarRecur';
import {IconCamera} from '../../IconCamera/IconCamera';
import {IconCaretDown} from '../../IconCaretDown/IconCaretDown';
import {IconCaretDownS} from '../../IconCaretDownS/IconCaretDownS';
import {IconCaretLeft} from '../../IconCaretLeft/IconCaretLeft';
import {IconCaretLeftS} from '../../IconCaretLeftS/IconCaretLeftS';
import {IconCaretRight} from '../../IconCaretRight/IconCaretRight';
import {IconCaretRightS} from '../../IconCaretRightS/IconCaretRightS';
import {IconCaretUp} from '../../IconCaretUp/IconCaretUp';
import {IconCaretUpS} from '../../IconCaretUpS/IconCaretUpS';
import {IconChat} from '../../IconChat/IconChat';
import {IconChatDialog} from '../../IconChatDialog/IconChatDialog';
import {IconChatHelp} from '../../IconChatHelp/IconChatHelp';
import {IconChatOff} from '../../IconChatOff/IconChatOff';
import {IconChatQuestion} from '../../IconChatQuestion/IconChatQuestion';
import {IconChatWarning} from '../../IconChatWarning/IconChatWarning';
import {IconCheck} from '../../IconCheck/IconCheck';
import {IconCheckC} from '../../IconCheckC/IconCheckC';
import {IconCheckCFilled} from '../../IconCheckCFilled/IconCheckCFilled';
import {IconCheckDouble} from '../../IconCheckDouble/IconCheckDouble';
import {IconCheckFull} from '../../IconCheckFull/IconCheckFull';
import {IconCheckOn} from '../../IconCheckOn/IconCheckOn';
import {IconCheckStatus} from '../../IconCheckStatus/IconCheckStatus';
import {IconChevronDown} from '../../IconChevronDown/IconChevronDown';
import {IconChevronDownC} from '../../IconChevronDownC/IconChevronDownC';
import {IconChevronLeft} from '../../IconChevronLeft/IconChevronLeft';
import {IconChevronLeftC} from '../../IconChevronLeftC/IconChevronLeftC';
import {IconChevronRight} from '../../IconChevronRight/IconChevronRight';
import {IconChevronRightC} from '../../IconChevronRightC/IconChevronRightC';
import {IconChevronUp} from '../../IconChevronUp/IconChevronUp';
import {IconChevronUpC} from '../../IconChevronUpC/IconChevronUpC';
import {IconCircle} from '../../IconCircle/IconCircle';
import {IconCircleF} from '../../IconCircleF/IconCircleF';
import {IconCircleO} from '../../IconCircleO/IconCircleO';
import {IconClip} from '../../IconClip/IconClip';
import {IconClipboard} from '../../IconClipboard/IconClipboard';
import {IconClock} from '../../IconClock/IconClock';
import {IconClose} from '../../IconClose/IconClose';
import {IconCloseC} from '../../IconCloseC/IconCloseC';
import {IconCloseMenu} from '../../IconCloseMenu/IconCloseMenu';
import {IconCloud} from '../../IconCloud/IconCloud';
import {IconCloudDownload} from '../../IconCloudDownload/IconCloudDownload';
import {IconCloudServer} from '../../IconCloudServer/IconCloudServer';
import {IconCloudUpload} from '../../IconCloudUpload/IconCloudUpload';
import {IconCode} from '../../IconCode/IconCode';
import {IconCodeHtml} from '../../IconCodeHtml/IconCodeHtml';
import {IconCollapse} from '../../IconCollapse/IconCollapse';
import {IconColor} from '../../IconColor/IconColor';
import {IconColorpicker} from '../../IconColorpicker/IconColorpicker';
import {IconComment} from '../../IconComment/IconComment';
import {IconCommentChat} from '../../IconCommentChat/IconCommentChat';
import {IconCompose} from '../../IconCompose/IconCompose';
import {IconConnect} from '../../IconConnect/IconConnect';
import {IconContact} from '../../IconContact/IconContact';
import {IconControl} from '../../IconControl/IconControl';
import {IconCookies} from '../../IconCookies/IconCookies';
import {IconCopy} from '../../IconCopy/IconCopy';
import {IconCub} from '../../IconCub/IconCub';
import {IconCut} from '../../IconCut/IconCut';
import {IconDarkTheme} from '../../IconDarkTheme/IconDarkTheme';
import {IconDataHistogram} from '../../IconDataHistogram/IconDataHistogram';
import {IconDataLine} from '../../IconDataLine/IconDataLine';
import {IconDateScatter} from '../../IconDateScatter/IconDateScatter';
import {IconDelete} from '../../IconDelete/IconDelete';
import {IconDesign} from '../../IconDesign/IconDesign';
import {IconDesktop} from '../../IconDesktop/IconDesktop';
import {IconDeveloperBoard} from '../../IconDeveloperBoard/IconDeveloperBoard';
import {IconDictionary} from '../../IconDictionary/IconDictionary';
import {IconDirectory} from '../../IconDirectory/IconDirectory';
import {IconDisconnect} from '../../IconDisconnect/IconDisconnect';
import {IconDisplayOnly} from '../../IconDisplayOnly/IconDisplayOnly';
import {IconDivider} from '../../IconDivider/IconDivider';
import {IconDocBottom} from '../../IconDocBottom/IconDocBottom';
import {IconDocLeft} from '../../IconDocLeft/IconDocLeft';
import {IconDocLeftClose} from '../../IconDocLeftClose/IconDocLeftClose';
import {IconDocRight} from '../../IconDocRight/IconDocRight';
import {IconDocRightClose} from '../../IconDocRightClose/IconDocRightClose';
import {IconDocTop} from '../../IconDocTop/IconDocTop';
import {IconDocument} from '../../IconDocument/IconDocument';
import {IconDocuments} from '../../IconDocuments/IconDocuments';
import {IconDotted} from '../../IconDotted/IconDotted';
import {IconDoubleDown} from '../../IconDoubleDown/IconDoubleDown';
import {IconDoubleLeft} from '../../IconDoubleLeft/IconDoubleLeft';
import {IconDoubleReply} from '../../IconDoubleReply/IconDoubleReply';
import {IconDoubleRight} from '../../IconDoubleRight/IconDoubleRight';
import {IconDoubleUp} from '../../IconDoubleUp/IconDoubleUp';
import {IconDown} from '../../IconDown/IconDown';
import {IconDownload} from '../../IconDownload/IconDownload';
import {IconDrag} from '../../IconDrag/IconDrag';
import {IconDragAndDrop} from '../../IconDragAndDrop/IconDragAndDrop'
import {IconDublicate} from '../../IconDublicate/IconDublicate';
import {IconEdit} from '../../IconEdit/IconEdit';
import {IconEditorDrawer} from '../../IconEditorDrawer/IconEditorDrawer';
import {IconEditorRegion} from '../../IconEditorRegion/IconEditorRegion';
import {IconEditorValueHolder} from '../../IconEditorValueHolder/IconEditorValueHolder';
import {IconEject} from '../../IconEject/IconEject';
import {IconEllipsisH} from '../../IconEllipsisH/IconEllipsisH';
import {IconEllipsisV} from '../../IconEllipsisV/IconEllipsisV';
import {IconEmail} from '../../IconEmail/IconEmail';
import {IconEnvelopeEmailS} from '../../IconEnvelopeEmailS/IconEnvelopeEmailS';
import {IconErase} from '../../IconErase/IconErase';
import {IconEur} from '../../IconEur/IconEur';
import {IconExport} from '../../IconExport/IconExport';
import {IconExternalLink} from '../../IconExternalLink/IconExternalLink';
import {IconExternalLinkS} from '../../IconExternalLinkS/IconExternalLinkS';
import {IconEye} from '../../IconEye/IconEye';
import {IconEyeInvCheck} from '../../IconEyeInvCheck/IconEyeInvCheck';
import {IconEyeInvisible} from '../../IconEyeInvisible/IconEyeInvisible';
import {IconFastBackward} from '../../IconFastBackward/IconFastBackward';
import {IconFastForward} from '../../IconFastForward/IconFastForward';
import {IconFax} from '../../IconFax/IconFax';
import {IconFile} from '../../IconFile/IconFile';
import {IconFileAi} from '../../IconFileAi/IconFileAi';
import {IconFileCsv} from '../../IconFileCsv/IconFileCsv';
import {IconFileDelete} from '../../IconFileDelete/IconFileDelete';
import {IconFileDoc} from '../../IconFileDoc/IconFileDoc';
import {IconFileDownload} from '../../IconFileDownload/IconFileDownload';
import {IconFileEps} from '../../IconFileEps/IconFileEps';
import {IconFileMinus} from '../../IconFileMinus/IconFileMinus';
import {IconFilePdf} from '../../IconFilePdf/IconFilePdf';
import {IconFilePlus} from '../../IconFilePlus/IconFilePlus';
import {IconFilePng} from '../../IconFilePng/IconFilePng';
import {IconFilePpt} from '../../IconFilePpt/IconFilePpt';
import {IconFiles} from '../../IconFiles/IconFiles';
import {IconFileSearch} from '../../IconFileSearch/IconFileSearch';
import {IconFileSvg} from '../../IconFileSvg/IconFileSvg';
import {IconFileText} from '../../IconFileText/IconFileText';
import {IconFileUpload} from '../../IconFileUpload/IconFileUpload';
import {IconFileXlsx} from '../../IconFileXlsx/IconFileXlsx';
import {IconFileXml} from '../../IconFileXml/IconFileXml';
import {IconFileZip} from '../../IconFileZip/IconFileZip';
import {IconFill} from '../../IconFill/IconFill';
import {IconFilter} from '../../IconFilter/IconFilter';
import {IconFilterCheck} from '../../IconFilterCheck/IconFilterCheck';
import {IconFlag} from '../../IconFlag/IconFlag';
import {IconFlash} from '../../IconFlash/IconFlash';
import {IconFolder} from '../../IconFolder/IconFolder';
import {IconFolderDelete} from '../../IconFolderDelete/IconFolderDelete';
import {IconFolderDownload} from '../../IconFolderDownload/IconFolderDownload';
import {IconFolderMinus} from '../../IconFolderMinus/IconFolderMinus';
import {IconFolderOpen} from '../../IconFolderOpen/IconFolderOpen';
import {IconFolderPlus} from '../../IconFolderPlus/IconFolderPlus';
import {IconFolderPublic} from '../../IconFolderPublic/IconFolderPublic';
import {IconFolderSearch} from '../../IconFolderSearch/IconFolderSearch';
import {IconFolderUpload} from '../../IconFolderUpload/IconFolderUpload';
import {IconFolderZip} from '../../IconFolderZip/IconFolderZip';
import {IconForm} from '../../IconForm/IconForm';
import {IconFort} from '../../IconFort/IconFort';
import {IconForward} from '../../IconForward/IconForward';
import {IconFullScreen} from '../../IconFullScreen/IconFullScreen';
import {IconFullScreenExit} from '../../IconFullScreenExit/IconFullScreenExit';
import {IconFunctionField} from '../../IconFunctionField/IconFunctionField';
import {IconGbp} from '../../IconGbp/IconGbp';
import {IconGift} from '../../IconGift/IconGift';
import {IconGlobe} from '../../IconGlobe/IconGlobe';
import {IconGraduationCap} from '../../IconGraduationCap/IconGraduationCap';
import {IconGrid} from '../../IconGrid/IconGrid';
import {IconGroup} from '../../IconGroup/IconGroup';
import {IconGroupCheck} from '../../IconGroupCheck/IconGroupCheck';
import {IconHdd} from '../../IconHdd/IconHdd';
import {IconHeart} from '../../IconHeart/IconHeart';
import {IconHelpCircle} from '../../IconHelpCircle/IconHelpCircle';
import {IconHistory} from '../../IconHistory/IconHistory';
import {IconHome} from '../../IconHome/IconHome';
import {IconHourglass} from '../../IconHourglass/IconHourglass';
import {IconImage} from '../../IconImage/IconImage';
import {IconImport} from '../../IconImport/IconImport';
import {IconImportant} from '../../IconImportant/IconImportant';
import {IconInbox} from '../../IconInbox/IconInbox';
import {IconInfo} from '../../IconInfo/IconInfo';
import {IconKey} from '../../IconKey/IconKey';
import {IconKeyboard} from '../../IconKeyboard/IconKeyboard';
import {IconLaptop} from '../../IconLaptop/IconLaptop';
import {IconLayers} from '../../IconLayers/IconLayers';
import {IconLightbulbt} from '../../IconLightbulbt/IconLightbulbt';
import {IconLightTheme} from '../../IconLightTheme/IconLightTheme';
import {IconLineChart} from '../../IconLineChart/IconLineChart';
import {IconLink} from '../../IconLink/IconLink';
import {IconLinkRemove} from '../../IconLinkRemove/IconLinkRemove';
import {IconListCheck} from '../../IconListCheck/IconListCheck';
import {IconLocation} from '../../IconLocation/IconLocation';
import {IconLocationMap} from '../../IconLocationMap/IconLocationMap';
import {IconLockOff} from '../../IconLockOff/IconLockOff';
import {IconLockOn} from '../../IconLockOn/IconLockOn';
import {IconMap} from '../../IconMap/IconMap';
import {IconMapSigns} from '../../IconMapSigns/IconMapSigns';
import {IconMark} from '../../IconMark/IconMark';
import {IconMenu} from '../../IconMenu/IconMenu';
import {IconMenuOpen} from '../../IconMenuOpen/IconMenuOpen';
import {IconMinus} from '../../IconMinus/IconMinus';
import {IconMinusC} from '../../IconMinusC/IconMinusC';
import {IconMinusCheck} from '../../IconMinusCheck/IconMinusCheck';
import {IconMinusSCheck} from '../../IconMinusSCheck/IconMinusSCheck';
import {IconMinusSquare} from '../../IconMinusSquare/IconMinusSquare';
import {IconMoney} from '../../IconMoney/IconMoney';
import {IconMoveDown} from '../../IconMoveDown/IconMoveDown';
import {IconMoveUp} from '../../IconMoveUp/IconMoveUp';
import {IconNews} from '../../IconNews/IconNews';
import {IconNote} from '../../IconNote/IconNote';
import {IconNotebook} from '../../IconNotebook/IconNotebook';
import {IconNotEdit} from '../../IconNotEdit/IconNotEdit';
import {IconNotepad} from '../../IconNotepad/IconNotepad';
import {IconNumberField} from '../../IconNumberField/IconNumberField';
import {IconNumberList} from '../../IconNumberList/IconNumberList';
import {IconOpenFolder} from '../../IconOpenFolder/IconOpenFolder';
import {IconPaste} from '../../IconPaste/IconPaste';
import {IconPause} from '../../IconPause/IconPause';
import {IconPauseC} from '../../IconPauseC/IconPauseC';
import {IconPauseFilled} from '../../IconPauseFilled/IconPauseFilled';
import {IconPercent} from '../../IconPercent/IconPercent';
import {IconPhone} from '../../IconPhone/IconPhone';
import {IconPhoneDesktop} from '../../IconPhoneDesktop/IconPhoneDesktop';
import {IconPhoneDev} from '../../IconPhoneDev/IconPhoneDev';
import {IconPieChart} from '../../IconPieChart/IconPieChart';
import {IconPin} from '../../IconPin/IconPin';
import {IconPlay} from '../../IconPlay/IconPlay';
import {IconPlayC} from '../../IconPlayC/IconPlayC';
import {IconPlayFilled} from '../../IconPlayFilled/IconPlayFilled';
import {IconPlus} from '../../IconPlus/IconPlus';
import {IconPlusC} from '../../IconPlusC/IconPlusC';
import {IconPlusSCheck} from '../../IconPlusSCheck/IconPlusSCheck';
import {IconPlusSDouble} from '../../IconPlusSDouble/IconPlusSDouble';
import {IconPlusSDoubleCheck} from '../../IconPlusSDoubleCheck/IconPlusSDoubleCheck';
import {IconPlusSquare} from '../../IconPlusSquare/IconPlusSquare';
import {IconPointer} from '../../IconPointer/IconPointer';
import {IconPower} from '../../IconPower/IconPower';
import {IconPrint} from '../../IconPrint/IconPrint';
import {IconQcode} from '../../IconQcode/IconQcode';
import {IconQuestion} from '../../IconQuestion/IconQuestion';
import {IconRadioOn} from '../../IconRadioOn/IconRadioOn';
import {IconRefresh} from '../../IconRefresh/IconRefresh';
import {IconRepeat} from '../../IconRepeat/IconRepeat';
import {IconReply} from '../../IconReply/IconReply';
import {IconRub} from '../../IconRub/IconRub';
import {IconSave} from '../../IconSave/IconSave';
import {IconScalefit} from '../../IconScalefit/IconScalefit';
import {IconSearch} from '../../IconSearch/IconSearch';
import {IconSearchCheck} from '../../IconSearchCheck/IconSearchCheck';
import {IconSearchIn} from '../../IconSearchIn/IconSearchIn';
import {IconSearchOut} from '../../IconSearchOut/IconSearchOut';
import {IconSelect} from '../../IconSelect/IconSelect';
import {IconSend} from '../../IconSend/IconSend';
import {IconSeparator} from '../../IconSeparator/IconSeparator';
import {IconSertificat} from '../../IconSertificat/IconSertificat';
import {IconServer} from '../../IconServer/IconServer';
import {IconSettings} from '../../IconSettings/IconSettings';
import {IconSettingsDev} from '../../IconSettingsDev/IconSettingsDev';
import {IconShare} from '../../IconShare/IconShare';
import {IconSignOut} from '../../IconSignOut/IconSignOut';
import {IconSignUp} from '../../IconSignUp/IconSignUp';
import {IconSlider} from '../../IconSlider/IconSlider';
import {IconSortCheck} from '../../IconSortCheck/IconSortCheck';
import {IconSortDown} from '../../IconSortDown/IconSortDown';
import {IconSortUp} from '../../IconSortUp/IconSortUp';
import {IconSpeed} from '../../IconSpeed/IconSpeed';
import {IconSpinner} from '../../IconSpinner/IconSpinner';
import {IconStar} from '../../IconStar/IconStar';
import {IconStarFill} from '../../IconStarFill/IconStarFill';
import {IconStatus} from '../../IconStatus/IconStatus';
import {IconStep} from '../../IconStep/IconStep';
import {IconStepsC} from '../../IconStepsC/IconStepsC';
import {IconStopC} from '../../IconStopC/IconStopC';
import {IconStopFilled} from '../../IconStopFilled/IconStopFilled';
import {IconStrokeGrid} from '../../IconStrokeGrid/IconStrokeGrid';
import {IconSwitcher} from '../../IconSwitcher/IconSwitcher';
import {IconSync} from '../../IconSync/IconSync';
import {IconSystemSettings} from '../../IconSystemSettings/IconSystemSettings';
import {IconTab} from '../../IconTab/IconTab';
import {IconTableFull} from '../../IconTableFull/IconTableFull';
import {IconTableColumn} from '../../IconTableColumn/IconTableColumn';
import {IconTablePivot} from '../../IconTablePivot/IconTablePivot';
import {IconTablePivotCheck} from '../../IconTablePivotCheck/IconTablePivotCheck';
import {IconTableRows} from '../../IconTableRows/IconTableRows';
import {IconTableSetV} from '../../IconTableSetV/IconTableSetV';
import {IconTablet} from '../../IconTablet/IconTablet';
import {IconTag} from '../../IconTag/IconTag';
import {IconTags} from '../../IconTags/IconTags';
import {IconTap} from '../../IconTap/IconTap';
import {IconTarget} from '../../IconTarget/IconTarget';
import {IconTasks} from '../../IconTasks/IconTasks';
import {IconText} from '../../IconText/IconText';
import {IconTextArea} from '../../IconTextArea/IconTextArea';
import {IconTextColor} from '../../IconTextColor/IconTextColor';
import {IconTextField} from '../../IconTextField/IconTextField';
import {IconTextFieldMask} from '../../IconTextFieldMask/IconTextFieldMask';
import {IconTimerOn} from '../../IconTimerOn/IconTimerOn'
import {IconToolbox} from '../../IconToolbox/IconToolbox';
import {IconTools} from '../../IconTools/IconTools';
import {IconTry} from '../../IconTry/IconTry';
import {IconUndo} from '../../IconUndo/IconUndo';
import {IconUngroup} from '../../IconUngroup/IconUngroup';
import {IconUp} from '../../IconUp/IconUp';
import {IconUpload} from '../../IconUpload/IconUpload';
import {IconUsd} from '../../IconUsd/IconUsd';
import {IconUser} from '../../IconUser/IconUser';
import {IconUserAdd} from '../../IconUserAdd/IconUserAdd';
import {IconUserDelete} from '../../IconUserDelete/IconUserDelete';
import {IconUsers} from '../../IconUsers/IconUsers';
import {IconVideoCamera} from '../../IconVideoCamera/IconVideoCamera';
import {IconVideoSquare} from '../../IconVideoSquare/IconVideoSquare';
import {IconWarning} from '../../IconWarning/IconWarning';
import {IconWarningC} from '../../IconWarningC/IconWarningC';
import {IconWifi} from '../../IconWifi/IconWifi';

const defaultKnobs = () => ({
  size: select('size', ['xs', 's', 'm', 'l'], 'm'),
  view: select(
    'view',
    ['alert', 'brand', 'ghost', 'link', 'primary', 'secondary', 'success', 'warning'],
    'primary',
  ),
});

const neoicons = {
  IconActionMenu,
  IconAggregate,
  IconAlert,
  IconAncore,
  IconApps,
  IconArchive,
  IconArrowBackward,
  IconArrowDown,
  IconArrowDownC,
  IconArrowForward,
  IconArrowLeft,
  IconArrowLeftC,
  IconArrowMove,
  IconArrowRight,
  IconArrowRightC,
  IconArrowsH,
  IconArrowsV,
  IconArrowSwap,
  IconArrowUp,
  IconArrowUpC,
  IconArrowVLeft,
  IconArrowVRight,
  IconAsteriks,
  IconBackward,
  IconBank,
  IconBarChartH,
  IconBarChartV,
  IconBarChartVCheck,
  IconBase,
  IconBaseServer,
  IconBell,
  IconBellOff,
  IconBigGrid,
  IconBinokulars,
  IconBlock,
  IconBook,
  IconBookDownload,
  IconBookFinance,
  IconBookFormula,
  IconBookUpload,
  IconBookWarning,
  IconBranch,
  IconBreifcase,
  IconBringToFront,
  IconBug,
  IconBuilding,
  IconBulletList,
  IconBulletListSearch,
  IconCalculator,
  IconCalculatorCheck,
  IconCalendar,
  IconCalendarCheck,
  IconCalendarDate,
  IconCalendarDelete,
  IconCalendarMinus,
  IconCalendarNule,
  IconCalendarPlus,
  IconCalendarRecur,
  IconCamera,
  IconCaretDown,
  IconCaretDownS,
  IconCaretLeft,
  IconCaretLeftS,
  IconCaretRight,
  IconCaretRightS,
  IconCaretUp,
  IconCaretUpS,
  IconChat,
  IconChatDialog,
  IconChatHelp,
  IconChatOff,
  IconChatQuestion,
  IconChatWarning,
  IconCheck,
  IconCheckC,
  IconCheckCFilled,
  IconCheckDouble,
  IconCheckFull,
  IconCheckOn,
  IconCheckStatus,
  IconChevronDown,
  IconChevronDownC,
  IconChevronLeft,
  IconChevronLeftC,
  IconChevronRight,
  IconChevronRightC,
  IconChevronUp,
  IconChevronUpC,
  IconCircle,
  IconCircleF,
  IconCircleO,
  IconClip,
  IconClipboard,
  IconClock,
  IconClose,
  IconCloseC,
  IconCloseMenu,
  IconCloud,
  IconCloudDownload,
  IconCloudServer,
  IconCloudUpload,
  IconCode,
  IconCodeHtml,
  IconCollapse,
  IconColor,
  IconColorpicker,
  IconComment,
  IconCommentChat,
  IconCompose,
  IconConnect,
  IconContact,
  IconControl,
  IconCookies,
  IconCopy,
  IconCub,
  IconCut,
  IconDarkTheme,
  IconDataHistogram,
  IconDataLine,
  IconDateScatter,
  IconDelete,
  IconDesign,
  IconDesktop,
  IconDeveloperBoard,
  IconDictionary,
  IconDirectory,
  IconDisconnect,
  IconDisplayOnly,
  IconDivider,
  IconDocBottom,
  IconDocLeft,
  IconDocLeftClose,
  IconDocRight,
  IconDocRightClose,
  IconDocTop,
  IconDocument,
  IconDocuments,
  IconDotted,
  IconDoubleDown,
  IconDoubleLeft,
  IconDoubleReply,
  IconDoubleRight,
  IconDoubleUp,
  IconDown,
  IconDownload,
  IconDrag,
  IconDragAndDrop,
  IconDublicate,
  IconEdit,
  IconEditorDrawer,
  IconEditorRegion,
  IconEditorValueHolder,
  IconEject,
  IconEllipsisH,
  IconEllipsisV,
  IconEmail,
  IconEnvelopeEmailS,
  IconErase,
  IconEur,
  IconExport,
  IconExternalLink,
  IconExternalLinkS,
  IconEye,
  IconEyeInvCheck,
  IconEyeInvisible,
  IconFastBackward,
  IconFastForward,
  IconFax,
  IconFile,
  IconFileAi,
  IconFileCsv,
  IconFileDelete,
  IconFileDoc,
  IconFileDownload,
  IconFileEps,
  IconFileMinus,
  IconFilePdf,
  IconFilePlus,
  IconFilePng,
  IconFilePpt,
  IconFiles,
  IconFileSearch,
  IconFileSvg,
  IconFileText,
  IconFileUpload,
  IconFileXlsx,
  IconFileXml,
  IconFileZip,
  IconFill,
  IconFilter,
  IconFilterCheck,
  IconFlag,
  IconFlash,
  IconFolder,
  IconFolderDelete,
  IconFolderDownload,
  IconFolderMinus,
  IconFolderOpen,
  IconFolderPlus,
  IconFolderPublic,
  IconFolderSearch,
  IconFolderUpload,
  IconFolderZip,
  IconForm,
  IconFort,
  IconForward,
  IconFullScreen,
  IconFullScreenExit,
  IconFunctionField,
  IconGbp,
  IconGift,
  IconGlobe,
  IconGraduationCap,
  IconGrid,
  IconGroup,
  IconGroupCheck,
  IconHdd,
  IconHeart,
  IconHelpCircle,
  IconHistory,
  IconHome,
  IconHourglass,
  IconImage,
  IconImport,
  IconImportant,
  IconInbox,
  IconInfo,
  IconKey,
  IconKeyboard,
  IconLaptop,
  IconLayers,
  IconLightbulbt,
  IconLightTheme,
  IconLineChart,
  IconLink,
  IconLinkRemove,
  IconListCheck,
  IconLocation,
  IconLocationMap,
  IconLockOff,
  IconLockOn,
  IconMap,
  IconMapSigns,
  IconMark,
  IconMenu,
  IconMenuOpen,
  IconMinus,
  IconMinusC,
  IconMinusCheck,
  IconMinusSCheck,
  IconMinusSquare,
  IconMoney,
  IconMoveDown,
  IconMoveUp,
  IconNews,
  IconNote,
  IconNotebook,
  IconNotEdit,
  IconNotepad,
  IconNumberField,
  IconNumberList,
  IconOpenFolder,
  IconPaste,
  IconPause,
  IconPauseC,
  IconPauseFilled,
  IconPercent,
  IconPhone,
  IconPhoneDesktop,
  IconPhoneDev,
  IconPieChart,
  IconPin,
  IconPlay,
  IconPlayC,
  IconPlayFilled,
  IconPlus,
  IconPlusC,
  IconPlusSCheck,
  IconPlusSDouble,
  IconPlusSDoubleCheck,
  IconPlusSquare,
  IconPointer,
  IconPower,
  IconPrint,
  IconQcode,
  IconQuestion,
  IconRadioOn,
  IconRefresh,
  IconRepeat,
  IconReply,
  IconRub,
  IconSave,
  IconScalefit,
  IconSearch,
  IconSearchCheck,
  IconSearchIn,
  IconSearchOut,
  IconSelect,
  IconSend,
  IconSeparator,
  IconSertificat,
  IconServer,
  IconSettings,
  IconSettingsDev,
  IconShare,
  IconSignOut,
  IconSignUp,
  IconSlider,
  IconSortCheck,
  IconSortDown,
  IconSortUp,
  IconSpeed,
  IconSpinner,
  IconStar,
  IconStarFill,
  IconStatus,
  IconStep,
  IconStepsC,
  IconStopC,
  IconStopFilled,
  IconStrokeGrid,
  IconSwitcher,
  IconSync,
  IconSystemSettings,
  IconTab,
  IconTableFull,
  IconTableColumn,
  IconTablePivot,
  IconTablePivotCheck,
  IconTableRows,
  IconTableSetV,
  IconTablet,
  IconTag,
  IconTags,
  IconTap,
  IconTarget,
  IconTasks,
  IconText,
  IconTextArea,
  IconTextColor,
  IconTextField,
  IconTextFieldMask,
  IconTimerOn,
  IconToolbox,
  IconTools,
  IconTry,
  IconUndo,
  IconUngroup,
  IconUp,
  IconUpload,
  IconUsd,
  IconUser,
  IconUserAdd,
  IconUserDelete,
  IconUsers,
  IconVideoCamera,
  IconVideoSquare,
  IconWarning,
  IconWarningC,
  IconWifi
} as const;

type Name = keyof typeof neoicons;

const names = Object.keys(neoicons) as Name[];

export function Playground() {
  return (
    <div>
      <div className="tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full">
        {names.map((name) => (
          <IconsItem key={name} name={name} icon={neoicons[name]} {...defaultKnobs()} />
        ))}
      </div>

    </div>

  );
}

export default createMetadata({
  title: 'Компоненты|/Графика/Icons',
  id: 'components/Icons',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/SLc0YGhuDotve6MTCBHlGxDU/Consta-Graphics?node-id=0%3A1',
    },
  },
});

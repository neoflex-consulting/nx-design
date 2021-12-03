import React from 'react';
import { select } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import { IconAdd } from '../../IconAdd/IconAdd';
import { IconAddToComparison } from '../../IconAddToComparison/IconAddToComparison';
import { IconAlert } from '../../IconAlert/IconAlert';
import { IconAlignBlocksLeft } from '../../IconAlignBlocksLeft/IconAlignBlocksLeft';
import { IconAlignBlocksRight } from '../../IconAlignBlocksRight/IconAlignBlocksRight';
import { IconAlignCenter } from '../../IconAlignCenter/IconAlignCenter';
import { IconAlignJustify } from '../../IconAlignJustify/IconAlignJustify';
import { IconAlignLeft } from '../../IconAlignLeft/IconAlignLeft';
import { IconAlignRight } from '../../IconAlignRight/IconAlignRight';
import { IconAllDone } from '../../IconAllDone/IconAllDone';
import { IconArrowDown } from '../../IconArrowDown/IconArrowDown';
import { IconArrowLeft } from '../../IconArrowLeft/IconArrowLeft';
import { IconArrowRight } from '../../IconArrowRight/IconArrowRight';
import { IconArrowUp } from '../../IconArrowUp/IconArrowUp';
import { IconArtBrush } from '../../IconArtBrush/IconArtBrush';
import { IconAttach } from '../../IconAttach/IconAttach';
import { IconBackward } from '../../IconBackward/IconBackward';
import { IconBag } from '../../IconBag/IconBag';
import { IconBarrier } from '../../IconBarrier/IconBarrier';
import { IconBento } from '../../IconBento/IconBento';
import { IconBold } from '../../IconBold/IconBold';
import { IconBook } from '../../IconBook/IconBook';
import { IconBookmarkFilled } from '../../IconBookmarkFilled/IconBookmarkFilled';
import { IconBookmarkStroked } from '../../IconBookmarkStroked/IconBookmarkStroked';
import { IconCalculator } from '../../IconCalculator/IconCalculator';
import { IconCalendar } from '../../IconCalendar/IconCalendar';
import { IconCamera } from '../../IconCamera/IconCamera';
import { IconCancel } from '../../IconCancel/IconCancel';
import { IconCards } from '../../IconCards/IconCards';
import { IconChat } from '../../IconChat/IconChat';
import { IconCheck } from '../../IconCheck/IconCheck';
import { IconClose } from '../../IconClose/IconClose';
import { IconCollapse } from '../../IconCollapse/IconCollapse';
import { IconColorFill } from '../../IconColorFill/IconColorFill';
import { IconColorText } from '../../IconColorText/IconColorText';
import { IconColumns } from '../../IconColumns/IconColumns';
import { IconComment } from '../../IconComment/IconComment';
import { IconConnection } from '../../IconConnection/IconConnection';
import { IconCopy } from '../../IconCopy/IconCopy';
import { IconCrown } from '../../IconCrown/IconCrown';
import { IconCursorMouse } from '../../IconCursorMouse/IconCursorMouse';
import { IconDataNull } from '../../IconDataNull/IconDataNull';
import { IconDiamond } from '../../IconDiamond/IconDiamond';
import { IconDinosaur } from '../../IconDinosaur/IconDinosaur';
import { IconDisconnection } from '../../IconDisconnection/IconDisconnection';
import { IconDocAdd } from '../../IconDocAdd/IconDocAdd';
import { IconDocBlank } from '../../IconDocBlank/IconDocBlank';
import { IconDocDelete } from '../../IconDocDelete/IconDocDelete';
import { IconDocExport } from '../../IconDocExport/IconDocExport';
import { IconDocFilled } from '../../IconDocFilled/IconDocFilled';
import { IconDown } from '../../IconDown/IconDown';
import { IconDownload } from '../../IconDownload/IconDownload';
import { IconDrag } from '../../IconDrag/IconDrag';
import { IconDraggable } from '../../IconDraggable/IconDraggable';
import { IconDrillingRig } from '../../IconDrillingRig/IconDrillingRig';
import { IconDrop } from '../../IconDrop/IconDrop';
import { IconEdit } from '../../IconEdit/IconEdit';
import { IconExit } from '../../IconExit/IconExit';
import { IconExpand } from '../../IconExpand/IconExpand';
import { IconEye } from '../../IconEye/IconEye';
import { IconEyeClose } from '../../IconEyeClose/IconEyeClose';
import { IconFavorite } from '../../IconFavorite/IconFavorite';
import { IconFilter } from '../../IconFilter/IconFilter';
import { IconFitToDefault } from '../../IconFitToDefault/IconFitToDefault';
import { IconFlagFilled } from '../../IconFlagFilled/IconFlagFilled';
import { IconFlagStroked } from '../../IconFlagStroked/IconFlagStroked';
import { IconFolders } from '../../IconFolders/IconFolders';
import { IconForward } from '../../IconForward/IconForward';
import { IconFunnel } from '../../IconFunnel/IconFunnel';
import { IconGas } from '../../IconGas/IconGas';
import { IconGeo } from '../../IconGeo/IconGeo';
import { IconGrouping } from '../../IconGrouping/IconGrouping';
import { IconHamburger } from '../../IconHamburger/IconHamburger';
import { IconHand } from '../../IconHand/IconHand';
import { IconHealth } from '../../IconHealth/IconHealth';
import { IconInComparison } from '../../IconInComparison/IconInComparison';
import { IconInfo } from '../../IconInfo/IconInfo';
import { IconIntroduction } from '../../IconIntroduction/IconIntroduction';
import { IconIpad } from '../../IconIpad/IconIpad';
import { IconItalic } from '../../IconItalic/IconItalic';
import { IconKebab } from '../../IconKebab/IconKebab';
import { IconLaptop } from '../../IconLaptop/IconLaptop';
import { IconLayers } from '../../IconLayers/IconLayers';
import { IconLeaf } from '../../IconLeaf/IconLeaf';
import { IconLightningBolt } from '../../IconLightningBolt/IconLightningBolt';
import { IconLineAndBarChart } from '../../IconLineAndBarChart/IconLineAndBarChart';
import { IconLink } from '../../IconLink/IconLink';
import { IconList } from '../../IconList/IconList';
import { IconListNumbered } from '../../IconListNumbered/IconListNumbered';
import { IconLock } from '../../IconLock/IconLock';
import { IconLogicalElement } from '../../IconLogicalElement/IconLogicalElement';
import { IconMail } from '../../IconMail/IconMail';
import { IconMap } from '../../IconMap/IconMap';
import { IconMaxHeight } from '../../IconMaxHeight/IconMaxHeight';
import { IconMaxWidth } from '../../IconMaxWidth/IconMaxWidth';
import { IconMBU } from '../../IconMBU/IconMBU';
import { IconMeatball } from '../../IconMeatball/IconMeatball';
import { IconMGRP } from '../../IconMGRP/IconMGRP';
import { IconMic } from '../../IconMic/IconMic';
import { IconMLSP } from '../../IconMLSP/IconMLSP';
import { IconMMP } from '../../IconMMP/IconMMP';
import { IconMolecules } from '../../IconMolecules/IconMolecules';
import { IconMoon } from '../../IconMoon/IconMoon';
import { IconNodeEnd } from '../../IconNodeEnd/IconNodeEnd';
import { IconNodes } from '../../IconNodes/IconNodes';
import { IconNodeStart } from '../../IconNodeStart/IconNodeStart';
import { IconNodeStep } from '../../IconNodeStep/IconNodeStep';
import { IconOpenInNew } from '../../IconOpenInNew/IconOpenInNew';
import { IconPanelBottom } from '../../IconPanelBottom/IconPanelBottom';
import { IconPanelLeft } from '../../IconPanelLeft/IconPanelLeft';
import { IconPanelRight } from '../../IconPanelRight/IconPanelRight';
import { IconPanelTop } from '../../IconPanelTop/IconPanelTop';
import { IconPaste } from '../../IconPaste/IconPaste';
import { IconPause } from '../../IconPause/IconPause';
import { IconPhone } from '../../IconPhone/IconPhone';
import { IconPhoto } from '../../IconPhoto/IconPhoto';
import { IconPlay } from '../../IconPlay/IconPlay';
import { IconPressure } from '../../IconPressure/IconPressure';
import { IconProcessing } from '../../IconProcessing/IconProcessing';
import { IconQuestion } from '../../IconQuestion/IconQuestion';
import { IconQuote } from '../../IconQuote/IconQuote';
import { IconRecord } from '../../IconRecord/IconRecord';
import { IconRemove } from '../../IconRemove/IconRemove';
import { IconRemoveFromComparison } from '../../IconRemoveFromComparison/IconRemoveFromComparison';
import { IconReply } from '../../IconReply/IconReply';
import { IconResize } from '../../IconResize/IconResize';
import { IconRestart } from '../../IconRestart/IconRestart';
import { IconRevert } from '../../IconRevert/IconRevert';
import { IconRing } from '../../IconRing/IconRing';
import { IconRouble } from '../../IconRouble/IconRouble';
import { IconRuler } from '../../IconRuler/IconRuler';
import { IconRUO } from '../../IconRUO/IconRUO';
import { IconRUS } from '../../IconRUS/IconRUS';
import { IconScreen } from '../../IconScreen/IconScreen';
import { IconSearch } from '../../IconSearch/IconSearch';
import { IconSelect } from '../../IconSelect/IconSelect';
import { IconSelectOpen } from '../../IconSelectOpen/IconSelectOpen';
import { IconSettings } from '../../IconSettings/IconSettings';
import { IconShape } from '../../IconShape/IconShape';
import { IconShuffle } from '../../IconShuffle/IconShuffle';
import { IconSmile } from '../../IconSmile/IconSmile';
import { IconSortDown } from '../../IconSortDown/IconSortDown';
import { IconSortDownCenter } from '../../IconSortDownCenter/IconSortDownCenter';
import { IconSortUp } from '../../IconSortUp/IconSortUp';
import { IconSortUpCenter } from '../../IconSortUpCenter/IconSortUpCenter';
import { IconStop } from '../../IconStop/IconStop';
import { IconStorage } from '../../IconStorage/IconStorage';
import { IconStrikethrough } from '../../IconStrikethrough/IconStrikethrough';
import { IconSun } from '../../IconSun/IconSun';
import { IconTable } from '../../IconTable/IconTable';
import { IconTarget } from '../../IconTarget/IconTarget';
import { IconTeam } from '../../IconTeam/IconTeam';
import { IconTest } from '../../IconTest/IconTest';
import { IconThumbUp } from '../../IconThumbUp/IconThumbUp';
import { IconTie } from '../../IconTie/IconTie';
import { IconTop } from '../../IconTop/IconTop';
import { IconTrash } from '../../IconTrash/IconTrash';
import { IconType } from '../../IconType/IconType';
import { IconUnderline } from '../../IconUnderline/IconUnderline';
import { IconUnlock } from '../../IconUnlock/IconUnlock';
import { IconUnsort } from '../../IconUnsort/IconUnsort';
import { IconUnsortCenter } from '../../IconUnsortCenter/IconUnsortCenter';
import { IconUpload } from '../../IconUpload/IconUpload';
import { IconUser } from '../../IconUser/IconUser';
import { IconVideo } from '../../IconVideo/IconVideo';
import { IconVZD } from '../../IconVZD/IconVZD';
import { IconWarning } from '../../IconWarning/IconWarning';
import { IconWatch } from '../../IconWatch/IconWatch';
import { IconWideScreen } from '../../IconWideScreen/IconWideScreen';
import { IconWorld } from '../../IconWorld/IconWorld';

import { IconsItem } from './Item/Icons-Item';
import mdx from './Icon.docs.mdx';

import {ActionMenu} from "../../ActionMenu/ActionMenu";
import {Aggregate} from '../../Aggregate/Aggregate';
import {Alert} from '../../Alert/Alert';
import {Ancore} from '../../Ancore/Ancore';
import {Apps} from '../../Apps/Apps';
import {Archive} from '../../Archive/Archive';
import {ArrowBackward} from '../../ArrowBackward/ArrowBackward';
import {ArrowDown} from '../../ArrowDown/ArrowDown';
import {ArrowDownC} from '../../ArrowDownC/ArrowDownC';
import {ArrowForward} from '../../ArrowForward/ArrowForward';
import {ArrowLeft} from '../../ArrowLeft/ArrowLeft';
import {ArrowLeftC} from '../../ArrowLeftC/ArrowLeftC'
import {ArrowMove} from '../../ArrowMove/ArrowMove';
import {ArrowRight} from '../../ArrowRight/ArrowRight';
import {ArrowRightC} from '../../ArrowRightC/ArrowRightC';
import {ArrowsH} from '../../ArrowsH/ArrowsH';
import {ArrowsV} from '../../ArrowsV/ArrowsV';
import {ArrowSwap} from '../../ArrowSwap/ArrowSwap';
import {ArrowUp} from '../../ArrowUp/ArrowUp';
import {ArrowUpC} from '../../ArrowUpC/ArrowUpC';
import {ArrowVLeft} from '../../ArrowVLeft/ArrowVLeft';
import {ArrowVRight} from '../../ArrowVRight/ArrowVRight';
import {Asteriks} from '../../Asteriks/Asteriks';
import {Backward} from '../../Backward/Backward';
import {Bank} from '../../Bank/Bank';
import {BarChartH} from '../../BarChartH/BarChartH';
import {BarChartV} from '../../BarChartV/BarChartV';
import {BarChartVCheck} from '../../BarChartVCheck/BarChartVCheck';
import {Base} from '../../Base/Base';
import {BaseServer} from '../../BaseServer/BaseServer';
import {Bell} from '../../Bell/Bell';
import {BellOff} from '../../BellOff/BellOff';
import {BigGrid} from '../../BigGrid/BigGrid';
import {Binokulars} from '../../Binokulars/Binokulars';
import {Block} from '../../Block/Block';
import {Book} from '../../Book/Book';
import {BookDownload} from '../../BookDownload/BookDownload';
import {BookFinance} from '../../BookFinance/BookFinance';
import {BookFormula} from '../../BookFormula/BookFormula';
import {BookUpload} from '../../BookUpload/BookUpload';
import {BookWarning} from '../../BookWarning/BookWarning';
import {Branch} from '../../Branch/Branch';
import {Breifcase} from '../../Breifcase/Breifcase';
import {BringToFront} from '../../BringToFront/BringToFront';
import {Bug} from '../../Bug/Bug';
import {Building} from '../../Building/Building';
import {BulletList} from '../../BulletList/BulletList';
import {BulletListSearch} from '../../BulletListSearch/BulletListSearch';
import {Calculator} from '../../Calculator/Calculator';
import {CalculatorCheck} from '../../CalculatorCheck/CalculatorCheck';
import {Calendar} from '../../Calendar/Calendar';
import {CalendarCheck} from '../../CalendarCheck/CalendarCheck';
import {CalendarDate} from '../../CalendarDate/CalendarDate'
import {CalendarDelete} from '../../CalendarDelete/CalendarDelete';
import {CalendarMinus} from '../../CalendarMinus/CalendarMinus';
import {CalendarNule} from '../../CalendarNule/CalendarNule';
import {CalendarPlus} from '../../CalendarPlus/CalendarPlus';
import {CalendarRecur} from '../../CalendarRecur/CalendarRecur';
import {Camera} from '../../Camera/Camera';
import {CaretDown} from '../../CaretDown/CaretDown';
import {CaretDownS} from '../../CaretDownS/CaretDownS';
import {CaretLeft} from '../../CaretLeft/CaretLeft';
import {CaretLeftS} from '../../CaretLeftS/CaretLeftS';
import {CaretRight} from '../../CaretRight/CaretRight';
import {CaretRightS} from '../../CaretRightS/CaretRightS';
import {CaretUp} from '../../CaretUp/CaretUp';
import {CaretUpS} from '../../CaretUpS/CaretUpS';
import {Chat} from '../../Chat/Chat';
import {ChatDialog} from '../../ChatDialog/ChatDialog';
import {ChatHelp} from '../../ChatHelp/ChatHelp';
import {ChatOff} from '../../ChatOff/ChatOff';
import {ChatQuestion} from '../../ChatQuestion/ChatQuestion';
import {ChatWarning} from '../../ChatWarning/ChatWarning';
import {Check} from '../../Check/Check';
import {CheckC} from '../../CheckC/CheckC';
import {CheckCFilled} from '../../CheckCFilled/CheckCFilled';
import {CheckDouble} from '../../CheckDouble/CheckDouble';
import {CheckFull} from '../../CheckFull/CheckFull';
import {CheckOn} from '../../CheckOn/CheckOn';
import {CheckStatus} from '../../CheckStatus/CheckStatus';
import {ChevronDown} from '../../ChevronDown/ChevronDown';
import {ChevronDownC} from '../../ChevronDownC/ChevronDownC';
import {ChevronLeft} from '../../ChevronLeft/ChevronLeft';
import {ChevronLeftC} from '../../ChevronLeftC/ChevronLeftC';
import {ChevronRight} from '../../ChevronRight/ChevronRight';
import {ChevronRightC} from '../../ChevronRightC/ChevronRightC';
import {ChevronUp} from '../../ChevronUp/ChevronUp';
import {ChevronUpC} from '../../ChevronUpC/ChevronUpC';
import {Circle} from '../../Circle/Circle';
import {CircleF} from '../../CircleF/CircleF';
import {CircleO} from '../../CircleO/CircleO';
import {Clip} from '../../Clip/Clip';
import {Clipboard} from '../../Clipboard/Clipboard';
import {Clock} from '../../Clock/Clock';
import {Close} from '../../Close/Close';
import {CloseC} from '../../CloseC/CloseC';
import {CloseMenu} from '../../CloseMenu/CloseMenu';
import {Cloud} from '../../Cloud/Cloud';
import {CloudDownload} from '../../CloudDownload/CloudDownload';
import {CloudServer} from '../../CloudServer/CloudServer';
import {CloudUpload} from '../../CloudUpload/CloudUpload';
import {Code} from '../../Code/Code';
import {CodeHtml} from '../../CodeHtml/CodeHtml';
import {Collapse} from '../../Collapse/Collapse';
import {Color} from '../../Color/Color';
import {Colorpicker} from '../../Colorpicker/Colorpicker';
import {Comment} from '../../Comment/Comment';
import {CommentChat} from '../../CommentChat/CommentChat';
import {Compose} from '../../Compose/Compose';
import {Connect} from '../../Connect/Connect';
import {Contact} from '../../Contact/Contact';
import {Control} from '../../Control/Control';
import {Cookies} from '../../Cookies/Cookies';
import {Copy} from '../../Copy/Copy';
import {Cub} from '../../Cub/Cub';
import {Cut} from '../../Cut/Cut';
import {DarkTheme} from '../../DarkTheme/DarkTheme';
import {DataHistogram} from '../../DataHistogram/DataHistogram';
import {DataLine} from '../../DataLine/DataLine';
import {DateScatter} from '../../DateScatter/DateScatter';
import {Delete} from '../../Delete/Delete';
import {Design} from '../../Design/Design';
import {Desktop} from '../../Desktop/Desktop';
import {DeveloperBoard} from '../../DeveloperBoard/DeveloperBoard';
import {Dictionary} from '../../Dictionary/Dictionary';
import {Directory} from '../../Directory/Directory';
import {Disconnect} from '../../Disconnect/Disconnect';
import {DisplayOnly} from '../../DisplayOnly/DisplayOnly';
import {Divider} from '../../Divider/Divider';
import {DocBottom} from '../../DocBottom/DocBottom';
import {DocLeft} from '../../DocLeft/DocLeft';
import {DocLeftClose} from '../../DocLeftClose/DocLeftClose';
import {DocRight} from '../../DocRight/DocRight';
import {DocRightClose} from '../../DocRightClose/DocRightClose';
import {DocTop} from '../../DocTop/DocTop';
import {Document} from '../../Document/Document';
import {Documents} from '../../Documents/Documents';
import {Dotted} from '../../Dotted/Dotted';
import {DoubleDown} from '../../DoubleDown/DoubleDown';
import {DoubleLeft} from '../../DoubleLeft/DoubleLeft';
import {DoubleReply} from '../../DoubleReply/DoubleReply';
import {DoubleRight} from '../../DoubleRight/DoubleRight';
import {DoubleUp} from '../../DoubleUp/DoubleUp';
import {Down} from '../../Down/Down';
import {Download} from '../../Download/Download';
import {Drag} from '../../Drag/Drag';
import {DragAndDrop} from '../../DragAndDrop/DragAndDrop'
import {Dublicate} from '../../Dublicate/Dublicate';
import {Edit} from '../../Edit/Edit';
import {EditorDrawer} from '../../EditorDrawer/EditorDrawer';
import {EditorRegion} from '../../EditorRegion/EditorRegion';
import {EditorValueHolder} from '../../EditorValueHolder/EditorValueHolder';
import {Eject} from '../../Eject/Eject';
import {EllipsisH} from '../../EllipsisH/EllipsisH';
import {EllipsisV} from '../../EllipsisV/EllipsisV';
import {Email} from '../../Email/Email';
import {EnvelopeEmailS} from '../../EnvelopeEmailS/EnvelopeEmailS';
import {Erase} from '../../Erase/Erase';
import {Eur} from '../../Eur/Eur';
import {Export} from '../../Export/Export';
import {ExternalLink} from '../../ExternalLink/ExternalLink';
import {ExternalLinkS} from '../../ExternalLinkS/ExternalLinkS';
import {Eye} from '../../Eye/Eye';
import {EyeInvCheck} from '../../EyeInvCheck/EyeInvCheck';
import {EyeInvisible} from '../../EyeInvisible/EyeInvisible';
import {FastBackward} from '../../FastBackward/FastBackward';
import {FastForward} from '../../FastForward/FastForward';
import {Fax} from '../../Fax/Fax';
import {File} from '../../File/File';
import {FileAi} from '../../FileAi/FileAi';
import {FileCsv} from '../../FileCsv/FileCsv';
import {FileDelete} from '../../FileDelete/FileDelete';
import {FileDoc} from '../../FileDoc/FileDoc';
import {FileDownload} from '../../FileDownload/FileDownload';
import {FileEps} from '../../FileEps/FileEps';
import {FileMinus} from '../../FileMinus/FileMinus';
import {FilePdf} from '../../FilePdf/FilePdf';
import {FilePlus} from '../../FilePlus/FilePlus';
import {FilePng} from '../../FilePng/FilePng';
import {FilePpt} from '../../FilePpt/FilePpt';
import {Files} from '../../Files/Files';
import {FileSearch} from '../../FileSearch/FileSearch';
import {FileSvg} from '../../FileSvg/FileSvg';
import {FileText} from '../../FileText/FileText';
import {FileUpload} from '../../FileUpload/FileUpload';
import {FileXlsx} from '../../FileXlsx/FileXlsx';
import {FileXml} from '../../FileXml/FileXml';
import {FileZip} from '../../FileZip/FileZip';
import {Fill} from '../../Fill/Fill';
import {Filter} from '../../Filter/Filter';
import {FilterCheck} from '../../FilterCheck/FilterCheck';
import {Flag} from '../../Flag/Flag';
import {Flash} from '../../Flash/Flash';
import {Folder} from '../../Folder/Folder';
import {FolderDelete} from '../../FolderDelete/FolderDelete';
import {FolderDownload} from '../../FolderDownload/FolderDownload';
import {FolderMinus} from '../../FolderMinus/FolderMinus';
import {FolderOpen} from '../../FolderOpen/FolderOpen';
import {FolderPlus} from '../../FolderPlus/FolderPlus';
import {FolderPublic} from '../../FolderPublic/FolderPublic';
import {FolderSearch} from '../../FolderSearch/FolderSearch';
import {FolderUpload} from '../../FolderUpload/FolderUpload';
import {FolderZip} from '../../FolderZip/FolderZip';
import {Form} from '../../Form/Form';
import {Fort} from '../../Fort/Fort';
import {Forward} from '../../Forward/Forward';
import {FullScreen} from '../../FullScreen/FullScreen';
import {FullScreenExit} from '../../FullScreenExit/FullScreenExit';
import {FunctionField} from '../../FunctionField/FunctionField';
import {Gbp} from '../../Gbp/Gbp';
import {Gift} from '../../Gift/Gift';
import {Globe} from '../../Globe/Globe';
import {GraduationCap} from '../../GraduationCap/GraduationCap';
import {Grid} from '../../Grid/Grid';
import {Group} from '../../Group/Group';
import {GroupCheck} from '../../GroupCheck/GroupCheck';
import {Hdd} from '../../Hdd/Hdd';
import {Heart} from '../../Heart/Heart';
import {HelpCircle} from '../../HelpCircle/HelpCircle';
import {History} from '../../History/History';
import {Home} from '../../Home/Home';
import {Hourglass} from '../../Hourglass/Hourglass';
import {Image} from '../../Image/Image';
import {Import} from '../../Import/Import';
import {Important} from '../../Important/Important';
import {Inbox} from '../../Inbox/Inbox';
import {Info} from '../../Info/Info';
import {Key} from '../../Key/Key';
import {Keyboard} from '../../Keyboard/Keyboard';
import {Laptop} from '../../Laptop/Laptop';
import {Layers} from '../../Layers/Layers';
import {Lightbulbt} from '../../Lightbulbt/Lightbulbt';
import {LightTheme} from '../../LightTheme/LightTheme';
import {LineChart} from '../../LineChart/LineChart';
import {Link} from '../../Link/Link';
import {LinkRemove} from '../../LinkRemove/LinkRemove';
import {ListCheck} from '../../ListCheck/ListCheck';
import {Location} from '../../Location/Location';
import {LocationMap} from '../../LocationMap/LocationMap';
import {LockOff} from '../../LockOff/LockOff';
import {LockOn} from '../../LockOn/LockOn';

import {Map} from '../../Map/Map';
import {MapSigns} from '../../MapSigns/MapSigns';
import {Mark} from '../../Mark/Mark';
import {Menu} from '../../Menu/Menu';
import {MenuOpen} from '../../MenuOpen/MenuOpen';
import {Minus} from '../../Minus/Minus';
import {MinusC} from '../../MinusC/MinusC';
import {MinusCheck} from '../../MinusCheck/MinusCheck';
import {MinusSCheck} from '../../MinusSCheck/MinusSCheck';
import {MinusSquare} from '../../MinusSquare/MinusSquare';
import {Money} from '../../Money/Money';
import {MoveDown} from '../../MoveDown/MoveDown';
import {MoveUp} from '../../MoveUp/MoveUp';
import {News} from '../../News/News';
import {Note} from '../../Note/Note';
import {Notebook} from '../../Notebook/Notebook';
import {NotEdit} from '../../NotEdit/NotEdit';
import {Notepad} from '../../Notepad/Notepad';
import {NumberField} from '../../NumberField/NumberField';
import {NumberList} from '../../NumberList/NumberList';
import {OpenFolder} from '../../OpenFolder/OpenFolder';
import {Paste} from '../../Paste/Paste';
import {Pause} from '../../Pause/Pause';
import {PauseC} from '../../PauseC/PauseC';
import {PauseFilled} from '../../PauseFilled/PauseFilled';
import {Percent} from '../../Percent/Percent';
import {Phone} from '../../Phone/Phone';
import {PhoneDesktop} from '../../PhoneDesktop/PhoneDesktop';
import {PhoneDev} from '../../PhoneDev/PhoneDev';
import {PieChart} from '../../PieChart/PieChart';
import {Pin} from '../../Pin/Pin';
import {Play} from '../../Play/Play';
import {PlayC} from '../../PlayC/PlayC';
import {PlayFilled} from '../../PlayFilled/PlayFilled';
import {Plus} from '../../Plus/Plus';
import {PlusC} from '../../PlusC/PlusC';
import {PlusSCheck} from '../../PlusSCheck/PlusSCheck';
import {PlusSDouble} from '../../PlusSDouble/PlusSDouble';
import {PlusSDoubleCheck} from '../../PlusSDoubleCheck/PlusSDoubleCheck';
import {PlusSquare} from '../../PlusSquare/PlusSquare';
import {Pointer} from '../../Pointer/Pointer';
import {Power} from '../../Power/Power';
import {Print} from '../../Print/Print';
import {Qcode} from '../../Qcode/Qcode';
import {Question} from '../../Question/Question';
import {RadioOn} from '../../RadioOn/RadioOn';
import {Refresh} from '../../Refresh/Refresh';
import {Repeat} from '../../Repeat/Repeat';
import {Reply} from '../../Reply/Reply';
import {Rub} from '../../Rub/Rub';
import {Save} from '../../Save/Save';
import {Scalefit} from '../../Scalefit/Scalefit';
import {Search} from '../../Search/Search';
import {SearchCheck} from '../../SearchCheck/SearchCheck';
import {SearchIn} from '../../SearchIn/SearchIn';
import {SearchOut} from '../../SearchOut/SearchOut';
import {Select} from '../../Select/Select';
import {Send} from '../../Send/Send';
import {Separator} from '../../Separator/Separator';
import {Sertificat} from '../../Sertificat/Sertificat';
import {Server} from '../../Server/Server';
import {Settings} from '../../Settings/Settings';
import {SettingsDev} from '../../SettingsDev/SettingsDev';
import {Share} from '../../Share/Share';
import {SignOut} from '../../SignOut/SignOut';
import {SignUp} from '../../SignUp/SignUp';
import {Slider} from '../../Slider/Slider';
import {SortCheck} from '../../SortCheck/SortCheck';
import {SortDown} from '../../SortDown/SortDown';
import {SortUp} from '../../SortUp/SortUp';
import {Speed} from '../../Speed/Speed';
import {Spinner} from '../../Spinner/Spinner';
import {Star} from '../../Star/Star';
import {StarFill} from '../../StarFill/StarFill';
import {Status} from '../../Status/Status';
import {Step} from '../../Step/Step';
import {StepsC} from '../../StepsC/StepsC';
import {StopC} from '../../StopC/StopC';
import {StopFilled} from '../../StopFilled/StopFilled';
import {StrokeGrid} from '../../StrokeGrid/StrokeGrid';
import {Switcher} from '../../Switcher/Switcher';
import {Sync} from '../../Sync/Sync';
import {SystemSettings} from '../../SystemSettings/SystemSettings';
import {Tab} from '../../Tab/Tab';
import {TableFull} from '../../TableFull/TableFull';
import {TableColumn} from '../../TableColumn/TableColumn';
import {TablePivot} from '../../TablePivot/TablePivot';
import {TablePivotCheck} from '../../TablePivotCheck/TablePivotCheck';
import {TableRows} from '../../TableRows/TableRows';
import {TableSetV} from '../../TableSetV/TableSetV';
import {Tablet} from '../../Tablet/Tablet';
import {Tag} from '../../Tag/Tag';
import {Tags} from '../../Tags/Tags';
import {Tap} from '../../Tap/Tap';
import {Target} from '../../Target/Target';
import {Tasks} from '../../Tasks/Tasks';
import {Text} from '../../Text/Text';
import {TextArea} from '../../TextArea/TextArea';
import {TextColor} from '../../TextColor/TextColor';
import {TextField} from '../../TextField/TextField';
import {TextFieldMask} from '../../TextFieldMask/TextFieldMask';
import {TimerOn} from '../../TimerOn/TimerOn'
import {Toolbox} from '../../Toolbox/Toolbox';
import {Tools} from '../../Tools/Tools';
import {Try} from '../../Try/Try';
import {Undo} from '../../Undo/Undo';
import {Ungroup} from '../../Ungroup/Ungroup';
import {Up} from '../../Up/Up';
import {Upload} from '../../Upload/Upload';
import {Usd} from '../../Usd/Usd';
import {User} from '../../User/User';
import {UserAdd} from '../../UserAdd/UserAdd';
import {UserDelete} from '../../UserDelete/UserDelete';
import {Users} from '../../Users/Users';
import {VideoCamera} from '../../VideoCamera/VideoCamera';
import {VideoSquare} from '../../VideoSquare/VideoSquare';
import {Warning} from '../../Warning/Warning';
import {WarningC} from '../../WarningC/WarningC';
import {Wifi} from '../../Wifi/Wifi';

const defaultKnobs = () => ({
  size: select('size', ['xs', 's', 'm'], 'm'),
  view: select(
    'view',
    ['alert', 'brand', 'ghost', 'link', 'primary', 'secondary', 'success', 'warning'],
    'primary',
  ),
});

const neoicons = {
  ActionMenu,
  Aggregate,
  Alert,
  Ancore,
  Apps,
  Archive,
  ArrowBackward,
  ArrowDown,
  ArrowDownC,
  ArrowForward,
  ArrowLeft,
  ArrowLeftC,
  ArrowMove,
  ArrowRight,
  ArrowRightC,
  ArrowsH,
  ArrowsV,
  ArrowSwap,
  ArrowUp,
  ArrowUpC,
  ArrowVLeft,
  ArrowVRight,
  Asteriks,
  Backward,
  Bank,
  BarChartH,
  BarChartV,
  BarChartVCheck,
  Base,
  BaseServer,
  Bell,
  BellOff,
  BigGrid,
  Binokulars,
  Block,
  Book,
  BookDownload,
  BookFinance,
  BookFormula,
  BookUpload,
  BookWarning,
  Branch,
  Breifcase,
  BringToFront,
  Bug,
  Building,
  BulletList,
  BulletListSearch,
  Calculator,
  CalculatorCheck,
  Calendar,
  CalendarCheck,
  CalendarDate,
  CalendarDelete,
  CalendarMinus,
  CalendarNule,
  CalendarPlus,
  CalendarRecur,
  Camera,
  CaretDown,
  CaretDownS,
  CaretLeft,
  CaretLeftS,
  CaretRight,
  CaretRightS,
  CaretUp,
  CaretUpS,
  Chat,
  ChatDialog,
  ChatHelp,
  ChatOff,
  ChatQuestion,
  ChatWarning,
  Check,
  CheckC,
  CheckCFilled,
  CheckDouble,
  CheckFull,
  CheckOn,
  CheckStatus,
  ChevronDown,
  ChevronDownC,
  ChevronLeft,
  ChevronLeftC,
  ChevronRight,
  ChevronRightC,
  ChevronUp,
  ChevronUpC,
  Circle,
  CircleF,
  CircleO,
  Clip,
  Clipboard,
  Clock,
  Close,
  CloseC,
  CloseMenu,
  Cloud,
  CloudDownload,
  CloudServer,
  CloudUpload,
  Code,
  CodeHtml,
  Collapse,
  Color,
  Colorpicker,
  Comment,
  CommentChat,
  Compose,
  Connect,
  Contact,
  Control,
  Cookies,
  Copy,
  Cub,
  Cut,
  DarkTheme,
  DataHistogram,
  DataLine,
  DateScatter,
  Delete,
  Design,
  Desktop,
  DeveloperBoard,
  Dictionary,
  Directory,
  Disconnect,
  DisplayOnly,
  Divider,
  DocBottom,
  DocLeft,
  DocLeftClose,
  DocRight,
  DocRightClose,
  DocTop,
  Document,
  Documents,
  Dotted,
  DoubleDown,
  DoubleLeft,
  DoubleReply,
  DoubleRight,
  DoubleUp,
  Down,
  Download,
  Drag,
  DragAndDrop,
  Dublicate,
  Edit,
  EditorDrawer,
  EditorRegion,
  EditorValueHolder,
  Eject,
  EllipsisH,
  EllipsisV,
  Email,
  EnvelopeEmailS,
  Erase,
  Eur,
  Export,
  ExternalLink,
  ExternalLinkS,
  Eye,
  EyeInvCheck,
  EyeInvisible,
  FastBackward,
  FastForward,
  Fax,
  File,
  FileAi,
  FileCsv,
  FileDelete,
  FileDoc,
  FileDownload,
  FileEps,
  FileMinus,
  FilePdf,
  FilePlus,
  FilePng,
  FilePpt,
  Files,
  FileSearch,
  FileSvg,
  FileText,
  FileUpload,
  FileXlsx,
  FileXml,
  FileZip,
  Fill,
  Filter,
  FilterCheck,
  Flag,
  Flash,
  Folder,
  FolderDelete,
  FolderDownload,
  FolderMinus,
  FolderOpen,
  FolderPlus,
  FolderPublic,
  FolderSearch,
  FolderUpload,
  FolderZip,
  Form,
  Fort,
  Forward,
  FullScreen,
  FullScreenExit,
  FunctionField,
  Gbp,
  Gift,
  Globe,
  GraduationCap,
  Grid,
  Group,
  GroupCheck,
  Hdd,
  Heart,
  HelpCircle,
  History,
  Home,
  Hourglass,
  Image,
  Import,
  Important,
  Inbox,
  Info,
  Key,
  Keyboard,
  Laptop,
  Layers,
  Lightbulbt,
  LightTheme,
  LineChart,
  Link,
  LinkRemove,
  ListCheck,
  Location,
  LocationMap,
  LockOff,
  LockOn,
  Map,
  MapSigns,
  Mark,
  Menu,
  MenuOpen,
  Minus,
  MinusC,
  MinusCheck,
  MinusSCheck,
  MinusSquare,
  Money,
  MoveDown,
  MoveUp,
  News,
  Note,
  Notebook,
  NotEdit,
  Notepad,
  NumberField,
  NumberList,
  OpenFolder,
  Paste,
  Pause,
  PauseC,
  PauseFilled,
  Percent,
  Phone,
  PhoneDesktop,
  PhoneDev,
  PieChart,
  Pin,
  Play,
  PlayC,
  PlayFilled,
  Plus,
  PlusC,
  PlusSCheck,
  PlusSDouble,
  PlusSDoubleCheck,
  PlusSquare,
  Pointer,
  Power,
  Print,
  Qcode,
  Question,
  RadioOn,
  Refresh,
  Repeat,
  Reply,
  Rub,
  Save,
  Scalefit,
  Search,
  SearchCheck,
  SearchIn,
  SearchOut,
  Select,
  Send,
  Separator,
  Sertificat,
  Server,
  Settings,
  SettingsDev,
  Share,
  SignOut,
  SignUp,
  Slider,
  SortCheck,
  SortDown,
  SortUp,
  Speed,
  Spinner,
  Star,
  StarFill,
  Status,
  Step,
  StepsC,
  StopC,
  StopFilled,
  StrokeGrid,
  Switcher,
  Sync,
  SystemSettings,
  Tab,
  TableFull,
  TableColumn,
  TablePivot,
  TablePivotCheck,
  TableRows,
  TableSetV,
  Tablet,
  Tag,
  Tags,
  Tap,
  Target,
  Tasks,
  Text,
  TextArea,
  TextColor,
  TextField,
  TextFieldMask,
  TimerOn,
  Toolbox,
  Tools,
  Try,
  Undo,
  Ungroup,
  Up,
  Upload,
  Usd,
  User,
  UserAdd,
  UserDelete,
  Users,
  VideoCamera,
  VideoSquare,
  Warning,
  WarningC,
  Wifi
} as const;

const gazpromIcons = {
  IconAdd,
  IconAddToComparison,
  IconAlert,
  IconAlignBlocksLeft,
  IconAlignBlocksRight,
  IconAlignCenter,
  IconAlignJustify,
  IconAlignLeft,
  IconAlignRight,
  IconAllDone,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArtBrush,
  IconAttach,
  IconBackward,
  IconBag,
  IconBarrier,
  IconBento,
  IconBold,
  IconBook,
  IconBookmarkFilled,
  IconBookmarkStroked,
  IconCalculator,
  IconCalendar,
  IconCamera,
  IconCancel,
  IconCards,
  IconChat,
  IconCheck,
  IconClose,
  IconCollapse,
  IconColorFill,
  IconColorText,
  IconColumns,
  IconComment,
  IconConnection,
  IconCopy,
  IconCrown,
  IconCursorMouse,
  IconDataNull,
  IconDiamond,
  IconDinosaur,
  IconDisconnection,
  IconDocAdd,
  IconDocBlank,
  IconDocDelete,
  IconDocExport,
  IconDocFilled,
  IconDown,
  IconDownload,
  IconDrag,
  IconDraggable,
  IconDrillingRig,
  IconDrop,
  IconEdit,
  IconExit,
  IconExpand,
  IconEye,
  IconEyeClose,
  IconFavorite,
  IconFilter,
  IconFitToDefault,
  IconFlagFilled,
  IconFlagStroked,
  IconFolders,
  IconForward,
  IconFunnel,
  IconGas,
  IconGeo,
  IconGrouping,
  IconHamburger,
  IconHand,
  IconHealth,
  IconInComparison,
  IconInfo,
  IconIntroduction,
  IconIpad,
  IconItalic,
  IconKebab,
  IconLaptop,
  IconLayers,
  IconLeaf,
  IconLightningBolt,
  IconLineAndBarChart,
  IconLink,
  IconList,
  IconListNumbered,
  IconLock,
  IconLogicalElement,
  IconMBU,
  IconMGRP,
  IconMLSP,
  IconMMP,
  IconMail,
  IconMap,
  IconMaxHeight,
  IconMaxWidth,
  IconMeatball,
  IconMic,
  IconMolecules,
  IconMoon,
  IconNodeEnd,
  IconNodeStart,
  IconNodeStep,
  IconNodes,
  IconOpenInNew,
  IconPanelBottom,
  IconPanelLeft,
  IconPanelRight,
  IconPanelTop,
  IconPaste,
  IconPause,
  IconPhone,
  IconPhoto,
  IconPlay,
  IconPressure,
  IconProcessing,
  IconQuestion,
  IconQuote,
  IconRUO,
  IconRUS,
  IconRecord,
  IconRemove,
  IconRemoveFromComparison,
  IconReply,
  IconResize,
  IconRestart,
  IconRevert,
  IconRing,
  IconRouble,
  IconRuler,
  IconScreen,
  IconSearch,
  IconSelect,
  IconSelectOpen,
  IconSettings,
  IconShape,
  IconShuffle,
  IconSmile,
  IconSortDown,
  IconSortDownCenter,
  IconSortUp,
  IconSortUpCenter,
  IconStop,
  IconStorage,
  IconStrikethrough,
  IconSun,
  IconTable,
  IconTarget,
  IconTeam,
  IconTest,
  IconThumbUp,
  IconTie,
  IconTop,
  IconTrash,
  IconType,
  IconUnderline,
  IconUnlock,
  IconUnsort,
  IconUnsortCenter,
  IconUpload,
  IconUser,
  IconVZD,
  IconVideo,
  IconWarning,
  IconWatch,
  IconWideScreen,
  IconWorld
} as const;

type Name = keyof typeof gazpromIcons;
type Name_ = keyof typeof neoicons;

const names = Object.keys(gazpromIcons) as Name[];
const names_ = Object.keys(neoicons) as Name_[];

export function Playground() {
  return (
    <div>
      <div>Neoflex Icons</div>
      <div className="tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full">
        {names_.map((name_) => (
          <IconsItem key={name_} name={name_} icon={neoicons[name_]} {...defaultKnobs()} />
        ))}
      </div>

      <span style={{margin: '20px'}}>Gazprom Icons</span>
      <div className="tpl-grid tpl-grid_s-ratio_1-1-1-1-1 tpl-grid_row-gap_full">
        {names.map((name) => (
          <IconsItem key={name} name={name} icon={gazpromIcons[name]} {...defaultKnobs()} />
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

import { useButtonEventHandler } from './propsHandlers/useButtonEventHandler';
import { useCheckboxEventsHandler } from './propsHandlers/useCheckboxEventsHandler';
import { useSelectEventsHandler } from './propsHandlers/useSelectEventsHandler';
import { useSnackBarEventsHandler } from './propsHandlers/useSnackBarEventsHandler';
import { useTextFieldEventsHandler } from './propsHandlers/useTextFieldEventsHandler';
export var eventInterceptorMap = {
    Button: useButtonEventHandler,
    TextField: useTextFieldEventsHandler,
    Checkbox: useCheckboxEventsHandler,
    SnackBar: useSnackBarEventsHandler,
    Select: useSelectEventsHandler
};

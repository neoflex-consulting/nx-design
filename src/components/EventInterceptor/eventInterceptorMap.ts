import { useButtonEventHandler } from './propsHandlers/useButtonEventHandler';
import { useCheckboxEventsHandler } from './propsHandlers/useCheckboxEventsHandler';
import { useSelectEventsHandler } from './propsHandlers/useSelectEventsHandler';
import { useNotificationEventsHandler } from './propsHandlers/useNotificationEventsHandler';
import { useTextFieldEventsHandler } from './propsHandlers/useTextFieldEventsHandler';
import { EventHandler, EventInterceptorPropMap } from './EventInterceptor';

export const eventInterceptorMap: EventInterceptorPropMap = {
  Button: useButtonEventHandler as EventHandler,
  TextField: useTextFieldEventsHandler as EventHandler,
  Checkbox: useCheckboxEventsHandler as EventHandler,
  Notification: useNotificationEventsHandler as EventHandler,
  Select: useSelectEventsHandler as EventHandler,
};

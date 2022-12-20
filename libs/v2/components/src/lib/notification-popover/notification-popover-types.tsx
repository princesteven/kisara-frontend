export interface Notification {
  title: string;
  path?: string;
  action?: string;
}

export interface NotificationPopoverProps {
  notifications: Notification[]
  defaultMessage: string;
}

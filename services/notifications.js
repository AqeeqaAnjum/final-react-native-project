
import * as Notifications from "expo-notifications";

export const sendNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "OSLER AI Alert",
      body: "New update available!",
    },
    trigger: null,
  });
};

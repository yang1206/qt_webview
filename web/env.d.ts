/// <reference types="vite/client" />
interface Window {
  qt: {
    webChannelTransport: {
      send: (data: string) => void
      onmessage: ((message: { data: string }) => void)
    }
  }
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  $dialog?: import('naive-ui').DialogProviderInst
  $message?: import('naive-ui').MessageProviderInst
  $notification?: import('naive-ui').NotificationProviderInst
}

import modal from './modal';

interface ToastOptions {
  duration?: number,
  title?: string,
}

const toast = (message: string, options?: ToastOptions) => {
  const { duration = 2000, title = '' } = options || {};

  const toastDialog = modal({
    title,
    content: message,
  })

  const timer = setTimeout(() => {
    toastDialog.close();
    clearTimeout(timer);
  }, duration)
}

export default toast;

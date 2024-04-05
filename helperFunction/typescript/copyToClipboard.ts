import { toastError, toastSuccess } from "../../components/typescript/toast";

export const copyToClipboard = async (message: string) => {
    try {
      await navigator.clipboard.writeText(message);
      toastSuccess('Copied');
    } catch (error) {
      toastError('Copy failed. Please try again.');
    }
  };
  
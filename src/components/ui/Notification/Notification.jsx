import { Toaster } from 'react-hot-toast';

const Notification = () => {
  return (
    <Toaster
      position="center-right"
      toastOptions={{
        success: {
          style: {
            color: 'var(--primary-color-white)',
            backgroundColor: 'var(--accent-color-green)',
            fontWeight: 'bold',
            padding: '8px 30px',
            borderRadius: '10px',
          },
          iconTheme: {
            primary: 'var(--accent-color-green)',
            secondary: 'var(--primary-color-white)',
          },
          duration: 3000,
        },
        error: {
          style: {
            color: 'var(--primary-color-white)',
            backgroundColor: 'var(--accent-color-red)',
            fontWeight: 'bold',
            padding: '8px 30px',
            borderRadius: '10px',
          },
          iconTheme: {
            primary: 'var(--primary-color-white)',
            secondary: 'var(--accent-color-red)',
          },
          duration: 3000,
        },
      }}
    />
  );
};

export default Notification;

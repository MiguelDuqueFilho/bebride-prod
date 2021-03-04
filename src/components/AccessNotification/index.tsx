import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAlarm from '../../hooks/useAlarm';

const AccessNotification: React.FC = () => {
  const router = useRouter();
  const { saveAlarm } = useAlarm();

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      const err = router.query.error.toString();
      saveAlarm({
        severity: 'error',
        title: 'Erro Interno de Login',
        msg: err,
        open: true
      });

      console.log('router.query.error');
      console.log(router.query.error);
    }
  }, [router]);

  return <div></div>;
};

export default AccessNotification;

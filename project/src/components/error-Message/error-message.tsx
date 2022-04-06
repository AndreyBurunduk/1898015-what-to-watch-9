import { useAppSelector } from '../../hooks';
import cl from './error-message.module.css';

function ErrorMessage(): JSX.Element | null {
  const { error } = useAppSelector((state) => state);

  if(error) {
    return (
      <div className={cl.ErrorMessage}>
        {error}
      </div>
    );
  }
  return null;
}

export default ErrorMessage;

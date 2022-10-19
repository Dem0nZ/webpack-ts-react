import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { t } from 'i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState<boolean>(false);
    const throwError = () => setError(true);
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={throwError}
        >
            {t('throw error')}
        </Button>
    );
};

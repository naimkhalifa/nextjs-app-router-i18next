'use client';

import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  return (
    <>
      <h3>{t('greeting')}</h3>
      <LanguageChanger />
    </>
  );
}
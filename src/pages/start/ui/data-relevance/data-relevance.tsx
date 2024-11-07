import { Space } from '../../../../shared/ui/space';
import styles from './data-relevance.module.scss';

export const DataRelevance = () => {
  return <div  className={styles.wrapper}>
    <Space size={20} className={styles.info}>
      <Space>
        Последняя синхронизация:
        08.02.2024
      </Space>
      <Space>
        Последний расчет прогноза:
        04.02.2024
      </Space>
      <Space>
        Последний расчет заказа:
        04.02.2024
      </Space>
    </Space>
  </div>;
};
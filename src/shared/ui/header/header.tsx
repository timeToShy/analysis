import { DatePicker, Select } from 'antd';

import { Space } from '../space';
import styles from './header.module.scss';

export const Header = () => {
  return <div className={styles.header}>
    <Space size={30} className={styles.filters}>
      <Space size={14} className={styles.filtersItem}>
        Магазин
        <Select defaultValue={'mirage'} className={styles.filtersItemSelect} options={[{ value: 'mirage', label: 'Магазин Мираж' }, { value: 'store', label: 'Магазин Стор' }]} />
      </Space>
      <Space size={14} className={styles.filtersItem}>
        Период фактических данных
        <DatePicker.RangePicker format="DD.MM.YYYY" picker={'date'} />
      </Space>
      <Space size={14} className={styles.filtersItem}>
        Показатели
        <Select defaultValue={'general'} className={styles.filtersItemIndicators} options={[{ value: 'general', label: 'Общие' }, { value: 'average', label: 'Средние' }]} />
      </Space>
    </Space>
  </div>;
};
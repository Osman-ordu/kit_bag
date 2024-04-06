import styles from './styles.module.scss';

interface TableProps {
  data: Array<{
    key: string | number;
    value: string | boolean | number;
  }>;
  title?: string;
}

const Table: React.FC<TableProps> = ({ data, title }) => {
  return (
    <div className={styles['c-table']}>
      {title && (
        <h4 className={styles['c-table__title']}>
          {title}
          <div className={styles['c-table__lengthBox']}>{data?.length}</div>
        </h4>
      )}
      {data?.map((column, index) => (
        <li key={index}>
          <p>{column.key}</p>
          <p>{typeof column.value === 'boolean' ? (column.value ? 'True' : 'False') : column.value}</p>
        </li>
      ))}
    </div>
  );
};

export default Table;

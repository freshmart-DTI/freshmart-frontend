import TableRow from '../product/_components/TableRow';

interface TableProps {
  columns: any[];
  data: any[] | undefined;
}

const Table = ({ columns, data }: TableProps) => {
  return (
    <table className='w-full'>
      <thead>
        <tr className='border-y border-neutral-200 h-16 text-left text-sm text-neutral-500 font-semibold'>
          <th className='px-6 w-16'>
            <input type='checkbox' />
          </th>
          {columns.map((column, i) => (
            <th key={i} className='uppercase'>
              {column}
            </th>
          ))}
          <th className='pr-6'></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((product) => (
          <TableRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

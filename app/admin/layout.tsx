import Header from './_components/Header';
import Sidebar from './_components/Sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-neutral-100'>
      <Sidebar />
      <div className='lg:ml-64'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

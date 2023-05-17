import { Link } from 'react-router-dom';
import usePBFetch from '../../../hooks/usePBFetch';
import { COLLECTIONS, FETCH_METHOD } from '../constants';
import { ExempleTableRecord } from '../typings/fetchingTypes';

export default function ExempleComponent() {

  const { data, loading, error } = usePBFetch<ExempleTableRecord[]>({
    collectionName: COLLECTIONS.TEST,
    method: FETCH_METHOD.GET_FULL_LIST,
    fetchOnLoad: true,
  });
    
   return (
    <div className='flex flex-col justify-center items-center m-5'>
      <span className='text-center text-3xl underline mb-10'>
        {loading ? 'Chargement des messages...' : error ? 'Erreur lors du chargement des messages !' : `Mes messages`}
      </span>
      <table className='w-full h-full text-sm text-left text-gray-400'>
        <thead className='text-md uppercase bg-gray-700 text-gray-300 rounded-lg'>
          <tr>
            <th scope='col' className='w-1/2 px-6 py-3 text-ellipsis'>
              Message
            </th>
            <th scope='col' className='w-1/4 px-6 py-3'>
              Sujet
            </th>
            <th scope='col' className='w-1/4 px-6 py-3'>
              Email
            </th>
            <th scope='col' className='w-3/4 px-6 py-3'>
              Consulter
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index} className='border-b bg-gray-800 border-gray-700'>
                <td className='w-1/2 px-6 py-4 font-medium text-white'>
                  <p className='h-5 w-full text-ellipsis overflow-hidden'>{item.content}</p>
                </td>
                <td className='w-1/4 px-6 py-4'>{item.subject}</td>
                <td className='w-1/4 px-6 py-4'>{item.email}</td>
                <td className='w-3/4 px-6 py-4'>
                  <Link to={'./' + item.id} className='cursor-pointer bg-purple-600 px-3 py-2 rounded-md'>
                    Consulter
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

import { useState } from 'react';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { toast } from 'react-toastify';
import axios from 'axios';

const ListItem = ({ item, index }) => {
  const [deleted, setDeleted] = useState(false);
  const [added, setAdded] =useState('');

  const deleteItem = () => {
    axios
      .delete('http://localhost:8000/menu-positions/' + item.id)
      .then(() => {
        toast.success('Амжилттай устгалаа');
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Алдаа гарлаа');
      });
  };

  const onEdit= (item)=>{
    axios
      .patch('http://localhost:8000/menu-positions/'+item.id)
      .then(() =>{
        toast.success('Change is good');
        setAdded(added);
      })
      .catch((err) =>{
        toast.error('Error');
      });
  };

  if (deleted) return <></>;

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{item.name}</td>
      <td>{item.alias}</td>
      <td style={{ whiteSpace: 'nowrap' }}>
        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onEdit(item)}>
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={deleteItem}>
          <SlTrash />
        </button>
      </td>
    </tr>
  );
};

export default function MenuPositionList({ items, onEdit }) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Alias</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <ListItem item={item} index={index + 1} key={`list-item-${index}`} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

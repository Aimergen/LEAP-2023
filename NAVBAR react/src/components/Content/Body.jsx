import {SlPencil , SlTrash} from "react-icons/sl"; //belen sangaas icon tataj bn

export default function Body(){
    return (
    <div>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th width="1">#</th>
              <th>Name</th>
              <th>Descriptions</th>
              <th width="1">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td score="row">1</td>
              <td>How to become peaceful</td>
              <td>...</td>
              <td style={{whiteSpace: 'nowrap'}}>
                <button className='btn btn-sm btn-outline-primary me-2'>Edit <SlPencil/></button>
                <button className='btn btn-sm btn-outline-danger'>Delete<SlTrash/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
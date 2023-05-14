import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {MdDelete} from 'react-icons/md';
import { useState } from 'react';

import axios from "axios";












const data = [
  {
    select: false,
    id: 1,
    twitter: "@AlexUrsol",
    wallet: "tz12345678",
    status: "no",
  },
  {
    select: false,
    id: 2,
    twitter: "@AlexUrsol",
    wallet: "tz1LZegApqWWvgT1Ffd8G8796PuPu9oNqnVW",
    status: "NFT",
  },
  // more data objects here...
];

function Dashboard() {
  const [tableData, setTableData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState("all");



  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const filteredData = selectedStatus === "all"
    ? tableData
    : tableData.filter(item => item.status === selectedStatus);

  const handleSelectChange = (event, index) => {
    const newData = [...tableData];
    newData[index].select = event.target.checked;
    setTableData(newData);
  };

  return ( 
    <div className="App">
      <h1>Admin Page</h1>
      <div className="admin col-9">
        <div className='line'>
          <span class="left">Page 1 of 1</span> <a href="#"><span class="right">Delete <MdDelete /></span></a>
        </div>
        <table className=''>
          <thead>
            <tr>
              <th>Select</th>
              <th>Id</th>
              <th>Twitter</th>
              <th>Wallet</th>
              <th>
                Status<span>  </span>
                <select value={selectedStatus} onChange={handleStatusChange}>
                  <option value="all">All</option>
                  <option value="nft">NFT</option>
                  <option value="dapp">Dapp</option>
                  <option value="defi">DeFi</option>
                  <option value="tezos">Tezos</option>
                  <option value="giveaway">Giveaway</option>
                  <option value="no">No</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <td><input type="checkbox" checked={item.select} onChange={(event) => handleSelectChange(event, index)} /></td>
                <td>{item.id}</td>
                <td>{item.twitter}</td>
                <td>{item.wallet}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;

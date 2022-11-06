import React, { Fragment, useEffect } from 'react'
import { Table } from 'antd';
import{useDispatch, useSelector} from "react-redux"

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { danhSachPhimAction } from '../../../redux/actions/quanLyPhimAction';
import { quanLyPhimReducer } from '../../../redux/reducer/quanLyPhimReducer';
import { NavLink } from 'react-router-dom';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);




export default function AdminFilms() {
 
  const{phimArray} = useSelector(state => state.quanLyPhimReducer);
  const dispatch = useDispatch();

  useEffect(() => { 
    getAPI()
   },[]);

   let getAPI = () =>{
     let action = danhSachPhimAction;
     dispatch(action)
   }
  
   console.log(phimArray)


  const columns = [
    {
      title: 'Mã Phim',
      dataIndex: 'maPhim',
   
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ['descend'],
      width:'10%',
     
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'hinhAnh',
      render: (text, films) =>{return <Fragment>
        <img src={films.hinhAnh} width={100} height={100} alt={films.tenPhim} />
      </Fragment>},
      sorter: (a, b) => a.age - b.age,
      width: '20%',
      
    },
    {
      title: 'Tên phim',
      dataIndex: 'tenPhim',
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if(tenPhimA > tenPhimB){
          return 1;
        }else{
          return -1;
        }
      },
      sortDirections: ['descend'],
      width:'15%',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'danhGia',
   
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.danhGia - b.danhGia,
      sortDirections: ['descend'],
      width:'10%',
     
    },
    {
      title: 'Mô tả',
      dataIndex: 'moTa',
   
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.moTa - b.moTa,
      sortDirections: ['descend'],
    
     
    },
    {
      title: 'Hành động',
      dataIndex: 'hanhDong',
      width:'10%',
      render:(text, film) =>{
        return <Fragment>
          <NavLink className="btn btn-success" to="/" >Sửa </NavLink>
          <NavLink className="btn btn-danger" to="/" >Xoá</NavLink>
        </Fragment>
      }
     
    },
    
  ];
  const data = phimArray;


  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <div className='container'>
       <Search
      placeholder="Nhập tên phim cần tìm"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
      <h1>Quản lý phim</h1>
      <button className='btn btn-success'>Thêm phim</button>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
}

import React, { useEffect,useState } from 'react'
import AdminNav from '../AdminNav'
import {  OrderT, columns } from "./orders/columns"
import { DataTable } from "./orders/data-table"
import { api } from '../../../server/utils/api'
import { OrderTableDataT } from '../../../types/general'
import DetailsModal from './orders/DetailsModal'

type Props = {}

function Dashboard({}: Props) {

	const [demoData,setDemoData] = useState<OrderTableDataT[]>([]);
	const [selectedOrder, setSelectedOrder] =  useState<OrderTableDataT>();
	const [open,setOpen] = useState(false);

	

	const userData = api.adminHandler.getUsers.useQuery();
	const {data : orderData , status }  = api.adminHandler.getOrders.useQuery();
	


	useEffect(() => {
		if (status === "success"){
			setDemoData(orderData)
		}
		
	},[status])


  const handleModal = (details : OrderTableDataT) => {
	console.log(details)
    setOpen(true);
    setSelectedOrder(details);
  }


  return <>
	<AdminNav />
	<div className="container mx-auto py-10">
      <DataTable columns={columns(handleModal)} data={demoData} />
	  <DetailsModal open={open} closeModal={() => {
      setOpen(false);
      setSelectedOrder(undefined)
    }}
    details={selectedOrder as OrderTableDataT}  />
    </div>
	<>
	
	</>
	</>
}

export default Dashboard
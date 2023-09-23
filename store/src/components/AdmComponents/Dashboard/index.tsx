import React, { useEffect,useState } from 'react'
import AdminNav from '../AdminNav'
import { Payment, columns } from "./orders/columns"
import { DataTable } from "./orders/data-table"
import { api } from '../../../server/utils/api'

type Props = {}

function Dashboard({}: Props) {

	const [demoData,setDemoData] = useState<Payment[] | null>([])

	const getData =  () :Payment[]  => {
		return new Array(100).fill(0).map((e,i) => {
			return {
				id: `m5gr84i9 ${Math.random()}`,
				amount: 1000 * Math.random(),
				status: "success",
				email: "ken99@yahoo.com",
			  }
		} )
	}

	const userData = api.adminHandler.getUsers.useQuery();

	function loadData() {
		const d = getData();
		setDemoData(d);
	}


	useEffect(() => {
		loadData();
	},[])



  return <>
	<AdminNav />
	<div className="container mx-auto py-10">
      <DataTable columns={columns} data={demoData as Payment[]} />
    </div>
	<>
	
	</>
  </>
}

export default Dashboard
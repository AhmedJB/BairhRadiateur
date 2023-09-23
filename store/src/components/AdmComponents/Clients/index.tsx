import React, { useEffect,useState } from 'react'
import AdminNav from '../AdminNav'
import { Payment, columns, userDataT } from "./client/columns"
import { DataTable } from "./client/data-table"
import { api } from '../../../server/utils/api'
import { UserInformation } from '@prisma/client'

type Props = {}

function Clients({}: Props) {

	const [demoData,setDemoData]  = useState<Payment[] | null>([])
    const [tableData,setTableData]  = useState<userDataT[] | null>([]);

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

	const {data : userData} = api.adminHandler.getUsers.useQuery();

	 function loadData() {
		const d =  getData();
		setDemoData(d);
	}

    useEffect(() => {
		console.log(userData)
        const temp : userDataT[] | undefined = userData?.map((e,i) => {
            return {
                id : e.id,
                name : e.name,
                email : e.email,
                cin : e.UserInformation?.cin,
                address : e.UserInformation?.address,
                tel : e.UserInformation?.tel
            }
        })
        setTableData(temp as userDataT[]);
    },[userData])


	useEffect(() => {
		loadData();
	},[])



  return <>
	<AdminNav />
	<div className="container mx-auto py-10">
      <DataTable columns={columns} data={tableData as userDataT[]} />
    </div>
	<>
	
	</>
  </>
}

export default Clients
import React, { useEffect,useState } from 'react'
import AdminNav from '../AdminNav'
import { Payment, columns, userDataT } from "./stock/columns"
import { DataTable } from "./stock/data-table"
import { api } from '../../../server/utils/api'
import { UserInformation } from '@prisma/client'
import { ProductRespT, ProductT } from '../../../types/general'
import { toast } from 'react-toastify';

type Props = {}

function ImportStockPage({}: Props) {
	const [respData,setRespData] : [ProductRespT[] | null, any] = useState(null)
    const [tableData,setTableData] : [ProductT[] | null , any] = useState([]);
	const cols = columns();

	const {data : productData} = api.adminHandler.getAppProducts.useQuery();

    useEffect(() => {
		console.log(productData)
		setRespData(productData);
		if (productData){
			let temp = productData.map((e,i) => {
				return e.product
			}) 
			setTableData(temp);
		}
        /* setTableData(temp); */
    },[productData])



return <>
	<AdminNav />
	<div className="container mx-auto py-10">
      <DataTable columns={cols} data={tableData} />
    </div>
	<>
	</>
  </>
}

export default ImportStockPage
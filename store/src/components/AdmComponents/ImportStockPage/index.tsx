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
	const [respData,setRespData] = useState<ProductRespT[] | null>(null)
    const [tableData,setTableData]  = useState<ProductT[] | null>([]);
	const cols = columns();

	const {data : productData} = api.adminHandler.getAppProducts.useQuery();

    useEffect(() => {
		console.log(productData)
		setRespData(productData as ProductRespT[]);
		if (productData){
			const temp = productData.map((e,i) => {
				return e.product
			}) 
			setTableData(temp);
		}
        /* setTableData(temp); */
    },[productData])



return <>
	<AdminNav />
	<div className="container mx-auto py-10">
      <DataTable columns={cols} data={tableData as ProductT[]} />
    </div>
	<>
	</>
  </>
}

export default ImportStockPage
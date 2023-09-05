import { ImportedProduct } from '@prisma/client';
import React, { useEffect, useState } from 'react'
import { generalProuctInfotT } from '../../../types/general';
import { api } from '../../../server/utils/api';
import AdminNav from '../AdminNav';
import { DataTable } from './localStock/data-table';
import { columns } from './localStock/columns';
import EditModal from './localStock/EditModal';

type Props = {}

function StockComponent({}: Props) {

  const [respData,setRespData] = useState<generalProuctInfotT[] | ImportedProduct[] | undefined>([]);
  const [tableData,setTableData] = useState< (ImportedProduct| undefined)[]>([]); 
  const [selectedProduct , setSelectedProduct] = useState<ImportedProduct | undefined>(undefined);

  const handleSelectProduct = (product : ImportedProduct) => {
    setOpen(true);
    setSelectedProduct(product);
  }

  const cols = columns(handleSelectProduct);
  const [open,setOpen] = useState(false);

  

  const {data : productData} = api.adminHandler.showProductWithInfo.useQuery();

  useEffect(() => {
		console.log(productData)
		setRespData(productData);
		if (productData){
			let temp = productData.map((e,i) => {     
				return (e as generalProuctInfotT).info
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
    <EditModal open={open} closeModal={() => {
      setOpen(false);
      setSelectedProduct(undefined)
    }}
    product={selectedProduct}
    />
    <>
    </>
    </>
  }




export default StockComponent
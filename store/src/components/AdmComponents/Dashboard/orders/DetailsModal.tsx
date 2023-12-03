import React, { useEffect, useState } from 'react'
import styles from "../../../../styles/modular/AuthStyles/Auth.module.css"
import Modal from '../../../General/Modal'
import { api } from '../../../../server/utils/api'
import { OrderDetailsT, OrderTableDataT } from '../../../../types/general'
import { AnimatePresence } from 'framer-motion'
import { DataTable } from '../details/data-table'
import { columns } from '../details/columns'


type Props = {
	open : boolean,
	closeModal : () => any,
	details : OrderTableDataT
}

function DetailsModal({open,closeModal,details}: Props) {
	const modalStyle = `${styles.modalAuth as string} xl:p-5 xl:pb-1 md:p-2 md:pb-1 p-1` 	

	const utils = api.useContext();

  return (
	<AnimatePresence>
		{
			open && (
				<Modal handleClose={closeModal} classes={modalStyle}>
					{
						 true && <>
						<div className="flex flex-col w-full max-w-full overflow-x-auto h-full">
                            <DataTable columns={columns()} data={details.details} />
                       </div>
						</>
					}
					

				</Modal>
			)
		}
	</AnimatePresence>
  )
}

export default DetailsModal
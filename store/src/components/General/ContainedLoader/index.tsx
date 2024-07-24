import React from 'react'
import styles from "../../../styles/modular/LoaderStyles/Loader.module.css"

type Props = {}

function ContainedLoader({}: Props) {
  return (
	<div className='w-full h-full flex items-center justify-center'>
		<div className={styles["lds-ripple"]}><div></div><div></div></div>
		</div>
  )
}

export default ContainedLoader;
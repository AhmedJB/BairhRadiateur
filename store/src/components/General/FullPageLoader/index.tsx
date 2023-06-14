import React from 'react'
import styles from "../../../styles/modular/LoaderStyles/Loader.module.css"

type Props = {}

function FullPageLoader({}: Props) {
  return (
	<div className='w-screen h-screen flex items-center justify-center'>
		<div className={styles["lds-ripple"]}><div></div><div></div></div>
		</div>
  )
}

export default FullPageLoader;
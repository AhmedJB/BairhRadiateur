import React , {useContext} from 'react'
import Link from 'next/link'


type Props = {
    open : boolean,
    setOpen : (v:React.SetStateAction<boolean>) => void,
    children : React.ReactNode
}

function LeftSidebar({open,setOpen,children}: Props) {


    const handleSideBarClose = () => {
        setOpen(false);
    }

    

    return <>
    
        {
            open && <><div className="fixed h-full w-screen top-0 left-0 bg-black opacity-30 z-[9998]" onClick={handleSideBarClose}></div>
                <div className={`fixed w-[300px] max-w-[90%] bg-white  h-full left-0 top-0 z-[9999] md:py-4 py-1 flex flex-col ${open ? "translate-x-0 smooth-shadow-cart" : "-translate-x-full"} transition-transform`}>
            <h1 className='text-2xl font-semibold text-black text-center'>Filtres</h1>
            <div className="flex  flex-col overflow-y-auto flex-1 gap-2 custom-scroll py-4">
                {children}
            </div>
            
        </div>
        </>
        }
        
        
        </>

}

export default LeftSidebar
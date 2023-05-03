import React from 'react'


type pathType = {
    name : string;
    url : string;
}


type Props = {
    path : pathType[]
}

const BreadCrumbs = (props: Props) => {
  return (
    <nav className="flex mt-6 px-6 w-full items-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="/d"
            className=" inline-flex items-center text-sm font-semibold text-mainBlack hover:text-blue "
          >
            <svg
              aria-hidden="true"
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </a>
        </li>
        {
            props.path.map((e,i) => {
                if ( (i+1) == props.path.length ) {
                    return <>
                    <li aria-current="page">
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="text-gray-400 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-500 dark:text-gray-400 ml-1 text-sm font-medium md:ml-2">
              {e.name}
            </span>
          </div>
        </li>

                    </>
                }else {
                    return <> 
                    
                    <li>
          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="text-gray-400 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href={e.url}
              className="inline-flex items-center text-sm font-semibold text-mainBlack hover:text-blue"
            >
             {e.name}
            </a>
          </div>
        </li>

                    </>
                }

            })
        }

        
              </ol>
    </nav>
  );
}

export default BreadCrumbs
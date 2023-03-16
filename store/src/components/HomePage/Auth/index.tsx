import { AnimatePresence , motion } from "framer-motion";
import { Fragment, useState , useContext, useEffect} from "react";
import Modal from "../../General/Modal";

/* import User from "../../../assets/images/registerIcons/user.svg";
import Email from "../../../assets/images/registerIcons/message.svg";
import Pass from "../../../assets/images/registerIcons/pass.svg";
import Phone from "../../../assets/images/registerIcons/phone.svg";
import CIN from "../../../assets/images/registerIcons/CIN.svg";
import Drop from "../../../assets/images/registerIcons/drop.svg";
import Org from "../../../assets/images/registerIcons/org.svg";
import Year from "../../../assets/images/registerIcons/year.svg";
import Location from "../../../assets/images/registerIcons/location.svg"; */


import User from "../../../assets/logIcons/gUser.png";
import Email from "../../../assets/logIcons/Email.png";
import Pass from "../../../assets/logIcons/MDP.png";
import Phone from "../../../assets/logIcons/Tele.png";
import CIN from "../../../assets/logIcons/CIN.png";
import Org from "../../../assets/logIcons/School.png";
import DT from "../../../assets/logIcons/date.png";
import Year from "../../../assets/logIcons/year.png";
import Location from "../../../assets/logIcons/Adresse.png";
import Plus from "../../../assets/collocations/plus.svg"


import styles from "../../../styles/modular/AuthStyles/Auth.module.css";
import InputField from "../../Utils/InputField";

import TextField from "@mui/material/TextField";
import DateFnsUtils from "@date-io/date-fns";
import AdapterDateFns from "@mui/x-date-pickers/AdapterDateFns";
import LocalizationProvider from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

import Link from "next/link"



import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';







import { RegisterVariants , LoginVariants } from "../../../helpers/authStyling";
import Router from "next/router";


const schools : any[] = [];

export default function Auth(props : any) {
  const [open, setOpen] = props.handler;
  const [dateValue, setDateValue] = useState(null);
  const [selectValue, setSelectValue] = useState(null);
  const [AuthPage,setAuthPage] = useState("login");
  



  const closeModal = () => setOpen(false);



  const closeStyle = {
		fontSize:"2rem",
	

	}

  const filterOptions = (options : any, state : any) => {
    let newOptions : any[] = [];
    console.log('filtering now');
    options.forEach((element : any) => {
      if (
        (element.name.split(" ").filter((e : any) => e.toLowerCase().startsWith(state.inputValue.toLowerCase()))).length > 0
      ){    
        newOptions.push(element);
      }
        
    });
    console.log(newOptions);
    return newOptions;
  };



  const defaultProps = {
    options: schools,
    getOptionLabel: (option : any) => option.name,
  };

  
  const loginMethod = async (e : any) => {
    e.preventDefault();
    



  }




  const Register = async () => {
    console.log("here register")
    let name = (document.getElementById("name") as HTMLInputElement ).value;
    let username = (document.getElementById("username") as HTMLInputElement ).value;
    let surname = (document.getElementById("surname") as HTMLInputElement ).value;
    let email = (document.getElementById("email") as HTMLInputElement ).value;
    let password = (document.getElementById("password") as HTMLInputElement ).value;
    let confirm = (document.getElementById("conf") as HTMLInputElement ).value;
    let tel = (document.getElementById("phone") as HTMLInputElement ).value;
    let cin = (document.getElementById("cin") as HTMLInputElement ).value;
    
  }


  const handleReset = async () => {
    
  }

  const html = (
    <Fragment>
      <AnimatePresence>
        {open && (
          <Modal handleClose={closeModal} classes={props.classes}>
            <AnimatePresence>
              { AuthPage == "register" &&  <motion.div className="flex flex-col relative items-center w-full"
			  		/* initial={{opacity:0,x: -2000}}
					animate={{opacity:1 , x : 0}}
					transition={{delay:3}} */
					initial="start"
					animate="enter"
					exit="start"
					variants={ RegisterVariants }
			  >
                <div className="flex items-center justify-around">
                  <h1
                    className={
                      "xl:text-4xl lg:text-2xl md:text-xl sm:text-base text-lg"
                    }
                  >
                    Inscription
                  </h1>

                  <div className="xl:mx-6 lg:mx-4 md:mx-3 mx-0 absolute top-0 right-[13px]" onClick={() => setOpen(false)} >
                  <CloseIcon sx={closeStyle} />
                  </div>
                </div>
                

                <div
                  className={
                    styles.InputFieldsContainer +
                    " lg:w-10/12 md:w-10/12 w-full sm:w-full"
                  }
                >
                  <div className="flex flex-wrap items-center w-full justify-between">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-full w-full">
                      <InputField
                        image={User}
                        id="name"
            
                        placeholder={"Prenom"}
                        type={"text"}
                      />
                    </div>

                    <div className="xl:w-6/12 lg:w-6/12 md:w-full w-full">
                      <InputField
                        image={false}
                        id={"surname"}
                        placeholder={"Nom"}
                        type={"text"}
                      />
                    </div>
                  </div>
                  <InputField
                    image={User}
                    id="username"
                    placeholder={"Nom d'utilisateur"}
                    type={"text"}
                  />
                  <InputField
                    image={Email}
                    id="email"
                    placeholder={"E-mail"}
                    type={"email"}
                  />
                  <InputField
                    image={Pass}
                    id="password"
                    placeholder={"Mot de passe"}
                    type={"password"}
                  />
                  <InputField
                    image={Pass}
                    id="conf"
                    placeholder={"Confirmez le mot de passe"}
                    type={"password"}
                  />
                  <InputField
                    image={Phone}
                    id="phone"
                    placeholder={"Télé Ex: 0654127896"}
                    type={"phone"}
                  />
                  <div className="flex flex-wrap items-center w-full justify-between">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-full w-full">
                      <InputField
                        image={CIN}
                        id="cin"
                        placeholder={"CIN"}
                        type={"text"}
                      />
                    </div>

                    <div className="sm:flex sm:items-center sm:w-full sm:justify-center  md:flex md:items-center md:w-full md:justify-center  flex items-center w-full justify-center  xl:w-auto lg:w-auto">
                      {/* <LocalizationProvider dateAdapter={DateFnsUtils}>
                        <DatePicker
                          label="Date de naissance"
                          value={dateValue}
                          onChange={(newValue : any) => {
                            setDateValue(newValue);
                          }}
                          renderInput={(params : any) => <TextField {...params} />}
                        />
                      </LocalizationProvider> */}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center w-full justify-between">
                    <div className="flex items-center xl:w-6/12 lg:w-6/12 md:w-full w-full">
                      <span className="w-8 h-8 ml-2 mr-4">
                        <Image alt={"alt-quote"} src={Org} layout="responsive"></Image>
                      </span>
                      <Autocomplete
                        {...defaultProps}
                        id="School"
                        className={styles.SelectField}
                        clearOnEscape
                        onChange= {(v,newValue) => setSelectValue(newValue)}
                        filterOptions={filterOptions}
                        renderOption={(props, option) => {
                          return (
                            <li {...props} key={option.id}>
                              {option.name}
                            </li>
                          );
                        }}
                        renderInput={(params : any) => (
                          <TextField
                            {...params}
                            key={params}
                            label="Ecole"
                            variant="standard"
                          />
                        )}
                      />
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 md:w-full w-full">
                      <InputField
                        image={Year}
                        id="year"
                        placeholder={"Année : 1 ou 2 ou 3,etc."}
                        type={"text"}
                      />
                    </div>
                  </div>

                  <InputField
                    image={Location}
                    id="location"
                    placeholder={"Ville de Provenance"}
                    type={"text"}
                  />
                  

                  <button className={styles.Submit + " subBtn"} onClick={Register}>Inscription</button>

                  <p
                    className={
                      styles.reminder +
                      " md:text-base lg:text-xl xl:text-2xl sm:text-sm text-sm "
                    }
                  >
                    Vous avez déjà un compte ? <span onClick={() => setAuthPage("login")}>Connexion</span>
                  </p>

                  <p
                    className={
                      styles.rules +
                      " md:text-base lg:text-xl xl:text-2xl sm:text-sm text-sm "
                    }
                  >
                    En vous inscrivant, vous acceptez nos{" "}
                    <Link href="/info/conditions"><span>{"Conditions d'utilisation"}</span></Link> et{" "}
                    <Link href="/info/conf">
                    <span>Politique de confidentialité</span>
                    </Link>
            
                    
                  </p>
                </div>
              </motion.div>}

		
            </AnimatePresence>

			<AnimatePresence>
			{
			AuthPage == "login" && <motion.div className="flex flex-col items-center w-full"
			initial="start"
		  animate="enter"
		  exit="start"
		variants={ RegisterVariants }
        >

				<h1
                  className={
                    "xl:text-4xl lg:text-2xl md:text-xl sm:text-base text-lg"
                  }
                >
                  Connexion
                </h1>

                <div
                  className={
                    styles.InputFieldsContainer +
                    " lg:w-10/12 md:w-10/12 w-full sm:w-full"
                  }
                >
					<InputField
                    image={User}
                    id="email"
                    placeholder={"Nom d'utilisateur ou E-mail"}
                    type={"text"}
                  />
                  <InputField
                    image={Pass}
                    id="password"
                    placeholder={"Mot de passe"}
                    type={"password"}
                  />

				  <p className={styles.loginForgot + " md:text-base lg:text-xl xl:text-2xl sm:text-sm text-sm" }
				  onClick= { () => setAuthPage("recup")}
				  >
				  Mot de passe oublié ?
				  </p>

				  <button className={styles.Submit + " subBtn"} onClick={loginMethod }>Connexion</button>
				  <p
                    className={
                      styles.reminder +
                      " md:text-base lg:text-xl xl:text-2xl sm:text-sm text-sm "
                    }
                  >
                    Vous débutez ?  <span onClick={() => setAuthPage("register")}>Inscription</span>
                  </p>


					</div>

		
		</motion.div>

		}
				</AnimatePresence>

				<AnimatePresence>
			{
			AuthPage == "recup" && <motion.div className="flex flex-col items-center w-full"
			initial="start"
					animate="enter"
					exit="start"
					variants={ RegisterVariants }
	>

				<h1
                  className={
                    "xl:text-4xl lg:text-2xl md:text-xl sm:text-base text-lg"
                  }
                >
                  Mot de passe oublié ?
                </h1>
				  <p className="text-center text-black font-medium m-4">Saisissez votre adresse e-mail pour réinitialiser votre mot de passe.</p>
                <div
                  className={
                    styles.InputFieldsContainer +
                    " lg:w-10/12 md:w-10/12 w-full sm:w-full"
                  }
                >
					<InputField
                    image={Email}
                    id="email"
                    placeholder={"E-mail"}
                    type={"email"}
                  />

				  <button onClick={handleReset} className={styles.Submit + " subBtn"}>Réinitialiser</button>
				  <p
                    className={
                      styles.reminder +
                      " md:text-base lg:text-xl xl:text-2xl sm:text-sm text-sm "
                    }
                  >
                    <span onClick={() => setAuthPage("login")}>Cancel</span>
                  </p>


					</div>

		
		</motion.div>

		}
				</AnimatePresence>
          </Modal>
        )}
      </AnimatePresence>
      {/* <DropzoneDialog
                    
                    open={openUpload}
                    onSave={handleFiles}
                    dropzoneText={`Drag or drop profile image`}
                    previewText={`Drag or drop images profile image`}
                    acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                    filesLimit={1}
                    showPreviews={true}
                    maxFileSize={5000000}
                    showAlerts={false}
                    onClose={() => setOpenUpload(false)}
                /> */}
    </Fragment>
  );

  return html;
}

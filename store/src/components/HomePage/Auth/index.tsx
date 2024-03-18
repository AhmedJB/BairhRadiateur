import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState, useContext, useEffect, Dispatch, SetStateAction, MouseEventHandler,MouseEvent } from "react";
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

import User from "../../../assets/modalIcons/user.svg";
import Email from "../../../assets/modalIcons/email.svg";
import Pass from "../../../assets/modalIcons/lock.svg";
import CIN from "../../../assets/modalIcons/card.svg";
import Location from "../../../assets/modalIcons/check.svg";
import Tel from "../../../assets/modalIcons/tel.svg"

import styles from "../../../styles/modular/AuthStyles/Auth.module.css";
import InputField from "../../Utils/InputField";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Autocomplete from "@mui/material/Autocomplete";

import Link from "next/link";

import CloseIcon from "@mui/icons-material/Close";

import { RegisterVariants, LoginVariants } from "../../../Helpers/authStyling";
import Router from "next/router";
import { api } from "../../../server/utils/api";

import {toast} from "react-toastify"
import { signIn, signOut } from "next-auth/react";
import {formatErrorMSG} from "../../../Helpers/helperUtils.js"
import { StaticImageData } from "next/image";



type Props = {
  handler : [boolean,Dispatch<SetStateAction<boolean>>],
  classes : string
}

export default function Auth(props: Props) {
  const [open, setOpen] = props.handler;
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [selectValue, setSelectValue] = useState(new Date());
  const [AuthPage, setAuthPage] = useState("login");
  const registerMutation = api.authHandler.register.useMutation({
    onSuccess : (resp) => {
      console.log(resp);
      console.log("success")
      toast.success("Succès")
      setAuthPage("login");
    },
    onError : (data) => {
      console.log("error handling here")
      console.log(data.message)
      try{
        console.log(data.message)
        const dt = JSON.parse(data.message) as unknown[]
        console.log(dt)
        for (const msg of dt){
          console.log(msg)
          const formated = formatErrorMSG(msg)      
          toast.error(formated)
        }
        
      }catch (e){
        toast.error(data.message);
      }  
    }
  });

  const closeModal = () => setOpen(false);

  const closeStyle = {
    fontSize: "2rem",
  };

  



  const loginMethod  = async (e : MouseEvent<HTMLButtonElement>  ) => {
    console.log("here login")
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;
    
    const body = {
      email,
      password,
      redirect : false
    }

    console.log(body)
    const res = await signIn("credentials",body)

    if (res?.ok) {
      toast.success("Succès");
      setOpen(false);
      //Router.reload();
    }else{
      toast.error(res?.error)
    }
    

  };

  const Register =  () => {
    console.log("here register");
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const username = (document.getElementById("username") as HTMLInputElement)?.value;
    const surname = (document.getElementById("surname") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const password = (document.getElementById("password") as HTMLInputElement)?.value;
    const confirm = (document.getElementById("conf") as HTMLInputElement)?.value;
    const tel = (document.getElementById("tel") as HTMLInputElement)?.value;
    //const tel = (document.getElementById("phone") as HTMLInputElement).value;
    const cin = (document.getElementById("cin") as HTMLInputElement)?.value;
    const address = (document.getElementById("address") as HTMLInputElement)?.value;
    if (confirm === password){
      const body = {
        name,
        username,
        surname,
        email,
        password,
        naissance : dateValue ? (new Date(dateValue)) :  new Date(),
        address,
        tel,
        cin
  
      }
      console.log(body)
      console.log(dateValue)
      
      registerMutation.mutate(body);
      
      
      
    }else{
      toast.error("les mots de passe saisis ne sont pas identiques")
    }
    


  };


  const handleReset =  () => {console.log("reset")};

  const registerHtml = (
    <>
      <motion.div
        className="relative flex w-full flex-col items-center"
        initial="start"
        animate="enter"
        exit="start"
        variants={RegisterVariants}
      >
        <div className="flex items-center justify-around">
          <h1
            className={
              "text-lg sm:text-base md:text-xl lg:text-2xl xl:text-4xl font-semibold text-darkGray"
            }
          >
            Inscription à BAIRH RADIATOR ?
          </h1>

          <div
            className="absolute top-0 right-[13px] mx-0 md:mx-3 lg:mx-4 xl:mx-6"
            onClick={() => setOpen(false)}
          >
            <CloseIcon sx={closeStyle} />
          </div>
        </div>

        <div
          className={
            (styles.InputFieldsContainer as string ) +
            " w-full sm:w-full md:w-10/12 lg:w-10/12"
          }
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <div className="w-full md:w-full lg:w-5/12 xl:w-5/12">
              <InputField
                image={User as StaticImageData}
                id="name"
                placeholder={"Prenom"}
                type={"text"}
              />
            </div>

            <div className="w-full md:w-full lg:w-5/12 xl:w-5/12">
              <InputField
                image={false}
                id={"surname"}
                placeholder={"Nom"}
                type={"text"}
              />
            </div>
          </div>
          <InputField
            image={null}
            id="username"
            placeholder={"Nom d'utilisateur"}
            type={"text"}
          />
          <InputField
            image={Email as StaticImageData}
            id="email"
            placeholder={"E-mail"}
            type={"email"}
          />
          <InputField
            image={Pass as StaticImageData}
            hidden={true}
            id="password"
            placeholder={"Mot de passe"}
            type={"password"}
          />
          <InputField
            image={Pass as StaticImageData}
            hidden={true}
            id="conf"
            placeholder={"Confirmez le mot de passe"}
            type={"password"}
          />
          <InputField
            image={Tel as StaticImageData}
            id="tel"
            placeholder={"Numéro de téléphone "}
            type={"text"}
          />
          
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="w-full md:w-full lg:w-6/12 xl:w-6/12">
              <InputField
                image={CIN as StaticImageData}
                id="cin"
                placeholder={"CIN"}
                type={"text"}
              />
            </div>

            <div className="flex w-full items-center justify-center  sm:flex sm:w-full sm:items-center sm:justify-center  md:flex md:w-full md:items-center md:justify-center  lg:w-auto xl:w-auto my-[40px]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date de naissance"
                          value={dateValue}
                          onChange={(newValue : Date | null) => {
                            setDateValue(newValue);
                          }}
                          
                        />
                      </LocalizationProvider>
            </div>
          </div>

          

          <InputField
            image={Location as StaticImageData}
            id="address"
            placeholder={"Adress"}
            type={"text"}
          />

          <button className={`${styles.Submit as string} subBtn`} onClick={Register}>
            Inscription
          </button>

          <p
            className={
               `${styles.reminder as string} text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl`
            }
          >
            Vous avez déjà un compte ?{" "}
            <span onClick={() => setAuthPage("login")}>Connexion</span>
          </p>

          <p
            className={
              ` ${styles.rules as string } text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-darkGray text-center `
            }
          >
            En vous inscrivant, vous acceptez nos{" "}
            <Link href="/info/conditions" legacyBehavior>
              <span>{"Conditions d'utilisation"}</span>
            </Link>{" "}
            et{" "}
            <Link href="/info/conf" legacyBehavior>
              <span className="text-red">Politique de confidentialité</span>
            </Link>
          </p>
        </div>
      </motion.div>
    </>
  );

  const loginHtml = (
    <>
      <motion.div
        className="flex w-full flex-col items-center"
        initial="start"
        animate="enter"
        exit="start"
        variants={RegisterVariants}
      >
        <h1
          className={"text-lg sm:text-base md:text-xl lg:text-2xl xl:text-4xl"}
        >
          Connexion
        </h1>

        <div
          className={
            `${styles.InputFieldsContainer as string} w-full sm:w-full md:w-10/12 lg:w-10/12`
          }
        >
          <InputField
            image={User as StaticImageData}
            id="email"
            placeholder={"E-mail/Nom d'utilisateur"}
            type={"text"}
          />
          <InputField
            image={Pass as StaticImageData}
            id="password"
            hidden={true}
            placeholder={"Mot de passe"}
            type={"password"}
          />

          <p
            className={
              `${styles.loginForgot as string} text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-red`
            }
            onClick={() => setAuthPage("recup")}
          >
            Mot de passe oublié ?
          </p>

          <button type="submit" className={`${styles.Submit as string} subBtn`} onClick={((e) => loginMethod(e)) as MouseEventHandler<HTMLButtonElement>}>
            Connexion
          </button>
          <p
            className={
              `${styles.reminder as string} text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl `
            }
          >
           {"Vous n'avez pas de compte ?"}
            <span onClick={() => setAuthPage("register")}>Inscription</span>
          </p>
        </div>
      </motion.div>
    </>
  );

  const recupHTML = (
    <>
      <motion.div
        className="flex w-full flex-col items-center"
        initial="start"
        animate="enter"
        exit="start"
        variants={RegisterVariants}
      >
        <h1
          className={"text-lg sm:text-base md:text-xl lg:text-2xl xl:text-4xl"}
        >
          Mot de passe oublié ?
        </h1>
        <p className="text-black m-4 text-center font-medium">
          Saisissez votre adresse e-mail pour réinitialiser votre mot de passe.
        </p>
        <div
          className={
            `${styles.InputFieldsContainer as string} w-full sm:w-full md:w-10/12 lg:w-10/12` 
          }
        >
          <InputField
            image={Email as StaticImageData}
            id="email"
            placeholder={"E-mail"}
            type={"email"}
          />

          <button onClick={handleReset} className={`${styles.Submit as string} subBtn`}>
            Réinitialiser
          </button>
          <p
            className={
              `${styles.reminder as string} text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl `
            }
          >
            <span onClick={() => setAuthPage("login")}>Cancel</span>
          </p>
        </div>
      </motion.div>
    </>
  );

  const html = (
    <Fragment>
      <AnimatePresence>
        {open && (
          <Modal handleClose={closeModal} classes={props.classes}>
            <AnimatePresence>
              {AuthPage == "register" && registerHtml}
            </AnimatePresence>

            <AnimatePresence>
              {AuthPage == "login" && loginHtml}
            </AnimatePresence>

            <AnimatePresence>
              {AuthPage == "recup" && recupHTML}
            </AnimatePresence>
          </Modal>
        )}
      </AnimatePresence>
    </Fragment>
  );

  return html;
}

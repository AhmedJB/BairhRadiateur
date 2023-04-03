import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState, useContext, useEffect } from "react";
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

import styles from "../../../styles/modular/AuthStyles/Auth.module.css";
import InputField from "../../Utils/InputField";

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Autocomplete from "@mui/material/Autocomplete";

import Link from "next/link";

import CloseIcon from "@mui/icons-material/Close";

import { RegisterVariants, LoginVariants } from "../../../helpers/authStyling";
import Router from "next/router";
import { api } from "../../../server/utils/api";

import {toast} from "react-toastify"
import { signIn, signOut } from "next-auth/react";


const schools: any[] = [];

export default function Auth(props: any) {
  const [open, setOpen] = props.handler;
  const [dateValue, setDateValue] = useState(null);
  const [selectValue, setSelectValue] = useState(new Date());
  const [AuthPage, setAuthPage] = useState("login");
  const registerMutation = api.authHandler.register.useMutation({
    onSuccess : (resp) => {
      console.log("success")
      toast.success("registered")
    },
    onError : (data) => {
      console.log("error handling here")
      let dt = JSON.parse(data.message)
      toast.error("failed")
    }
  });

  const closeModal = () => setOpen(false);

  const closeStyle = {
    fontSize: "2rem",
  };

  const filterOptions = (options: any, state: any) => {
    let newOptions: any[] = [];
    console.log("filtering now");
    options.forEach((element: any) => {
      if (
        element.name
          .split(" ")
          .filter((e: any) =>
            e.toLowerCase().startsWith(state.inputValue.toLowerCase())
          ).length > 0
      ) {
        newOptions.push(element);
      }
    });
    console.log(newOptions);
    return newOptions;
  };

  const defaultProps = {
    options: schools,
    getOptionLabel: (option: any) => option.name,
  };

  const loginMethod = async (e: any) => {
    e.preventDefault();
    console.log("here login")
    let email = (document.getElementById("email") as HTMLInputElement)?.value;
    let password = (document.getElementById("password") as HTMLInputElement)?.value;
    
    let body = {
      email,
      password,
      redirect : false
    }

    console.log(body)
    let res = await signIn("credentials",body)

    if (res?.ok) {
      toast.success("logged in");
      //Router.reload();
    }else{
      toast.error(res?.error)
    }
    

  };

  const Register = async () => {
    console.log("here register");
    let name = (document.getElementById("name") as HTMLInputElement)?.value;
    let username = (document.getElementById("username") as HTMLInputElement)?.value;
    let surname = (document.getElementById("surname") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement)?.value;
    let password = (document.getElementById("password") as HTMLInputElement)?.value;
    let confirm = (document.getElementById("conf") as HTMLInputElement)?.value;
    //let tel = (document.getElementById("phone") as HTMLInputElement).value;
    let cin = (document.getElementById("cin") as HTMLInputElement)?.value;
    let address = (document.getElementById("address") as HTMLInputElement)?.value;
    if (confirm === password){
      let body = {
        name,
        username,
        email,
        password,
        naissance : dateValue ? (new Date(dateValue)) :  new Date(),
        address,
        cin
  
      }
      console.log(body)
      console.log(dateValue)
      
      registerMutation.mutate(body);
      
      
      
    }else{
      toast.error("Password missmatch")
    }
    


  };


  const handleReset = async () => {};

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
            styles.InputFieldsContainer +
            " w-full sm:w-full md:w-10/12 lg:w-10/12"
          }
        >
          <div className="flex w-full flex-wrap items-center justify-between gap-2">
            <div className="w-full md:w-full lg:w-5/12 xl:w-5/12">
              <InputField
                image={User}
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
          
          <div className="flex w-full flex-wrap items-center justify-between">
            <div className="w-full md:w-full lg:w-6/12 xl:w-6/12">
              <InputField
                image={CIN}
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
                          onChange={(newValue : any) => {
                            setDateValue(newValue);
                          }}
                          
                        />
                      </LocalizationProvider>
            </div>
          </div>

          

          <InputField
            image={Location}
            id="address"
            placeholder={"Adress"}
            type={"text"}
          />

          <button className={styles.Submit + " subBtn"} onClick={Register}>
            Inscription
          </button>

          <p
            className={
              styles.reminder +
              " text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl "
            }
          >
            Vous avez déjà un compte ?{" "}
            <span onClick={() => setAuthPage("login")}>Connexion</span>
          </p>

          <p
            className={
              styles.rules +
              " text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-darkGray text-center"
            }
          >
            En vous inscrivant, vous acceptez nos{" "}
            <Link href="/info/conditions">
              <span>{"Conditions d'utilisation"}</span>
            </Link>{" "}
            et{" "}
            <Link href="/info/conf">
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
            styles.InputFieldsContainer +
            " w-full sm:w-full md:w-10/12 lg:w-10/12"
          }
        >
          <InputField
            image={User}
            id="email"
            placeholder={"E-mail/Nom d'utilisateur"}
            type={"text"}
          />
          <InputField
            image={Pass}
            id="password"
            placeholder={"Mot de passe"}
            type={"password"}
          />

          <p
            className={
              styles.loginForgot +
              " text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-red"
            }
            onClick={() => setAuthPage("recup")}
          >
            Mot de passe oublié ?
          </p>

          <button className={styles.Submit + " subBtn"} onClick={loginMethod}>
            Connexion
          </button>
          <p
            className={
              styles.reminder +
              " text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl "
            }
          >
            Vous n'avez pas de compte ?{" "}
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
            styles.InputFieldsContainer +
            " w-full sm:w-full md:w-10/12 lg:w-10/12"
          }
        >
          <InputField
            image={Email}
            id="email"
            placeholder={"E-mail"}
            type={"email"}
          />

          <button onClick={handleReset} className={styles.Submit + " subBtn"}>
            Réinitialiser
          </button>
          <p
            className={
              styles.reminder +
              " text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl "
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

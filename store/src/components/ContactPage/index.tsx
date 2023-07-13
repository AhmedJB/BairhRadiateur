import { Fragment, useState, useContext } from "react";
import Container from "../General/Container";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import TopHeader from "../General/TopHeader";
import Header from "../General/Header";

type Props = {};

export default function ContactPage({}: Props) {
  const html = (
    <Fragment>
		<TopHeader />
		<Header />
      <Container>
		<ContactHeader />
		<ContactForm />
	  </Container>
    </Fragment>
  );

  return html;
}

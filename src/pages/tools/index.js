import ImportantNotesForm from "../../components/forms/IN-Form";
import Head from 'next/head';
import useApplicationData from "../../hooks/useApplicationData";
import { useEffect } from "react";

export default function ToolsLanding() {

  const {
    state,
    handleImportant,
    handleInformational,
  } = useApplicationData();

  useEffect(() => {
    console.log(state)
  }, [])

  return (
    <main>
      <Head>
        <title>BCF Tools | All Tools</title>
        <meta name="description" content="Home of all tools BCF to make our lives easier." />
      </Head>
      <ImportantNotesForm
        handleImportant={handleImportant}
        handleInformational={handleInformational}
      />
    </main>
  )
}